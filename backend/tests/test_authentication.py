import pytest
from httpx import AsyncClient, ASGITransport
from app.main import app
from app.repositories import user_repository


@pytest.mark.asyncio
async def test_login_success_and_protected_route():
    email = "day7_auth_student@example.com"
    password = "MySecurePassword123"
    
    reg_payload = {
        "email": email,
        "password": password,
        "full_name": "Auth Student Day 7",
        "role": "student",
    }

    async with AsyncClient(
        transport=ASGITransport(app=app), base_url="http://test"
    ) as client:
        # 1. Register User
        reg_res = await client.post("/api/v1/auth/register", json=reg_payload)
        assert reg_res.status_code == 201

        # 2. Login User
        login_res = await client.post(
            "/api/v1/auth/login",
            json={"email": email, "password": password},
        )
        assert login_res.status_code == 200
        login_data = login_res.json()
        assert "access_token" in login_data
        assert login_data["token_type"] == "bearer"
        assert login_data["user"]["email"] == email
        token = login_data["access_token"]

        # 3. Access Protected Route GET /api/v1/auth/me with Bearer Token
        headers = {"Authorization": f"Bearer {token}"}
        me_res = await client.get("/api/v1/auth/me", headers=headers)
        assert me_res.status_code == 200
        me_data = me_res.json()
        assert me_data["email"] == email
        assert me_data["full_name"] == "Auth Student Day 7"

        # 4. Logout Route with Bearer Token
        logout_res = await client.post("/api/v1/auth/logout", headers=headers)
        assert logout_res.status_code == 200

        # Cleanup
        db_user = await user_repository.get_by_email(email)
        if db_user:
            await user_repository.delete(db_user["_id"])


@pytest.mark.asyncio
async def test_login_invalid_password():
    email = "day7_wrong_pass@example.com"
    reg_payload = {
        "email": email,
        "password": "CorrectPassword123",
        "full_name": "Wrong Pass User",
        "role": "student",
    }

    async with AsyncClient(
        transport=ASGITransport(app=app), base_url="http://test"
    ) as client:
        await client.post("/api/v1/auth/register", json=reg_payload)

        # Try login with WRONG password
        login_res = await client.post(
            "/api/v1/auth/login",
            json={"email": email, "password": "WrongPassword999"},
        )
        assert login_res.status_code == 401
        assert "incorrect" in login_res.json()["message"].lower()

        # Cleanup
        db_user = await user_repository.get_by_email(email)
        if db_user:
            await user_repository.delete(db_user["_id"])


@pytest.mark.asyncio
async def test_login_nonexistent_user():
    async with AsyncClient(
        transport=ASGITransport(app=app), base_url="http://test"
    ) as client:
        login_res = await client.post(
            "/api/v1/auth/login",
            json={"email": "nobody_exists_12345@example.com", "password": "anypassword"},
        )
        assert login_res.status_code == 401


@pytest.mark.asyncio
async def test_protected_route_without_token():
    async with AsyncClient(
        transport=ASGITransport(app=app), base_url="http://test"
    ) as client:
        res = await client.get("/api/v1/auth/me")
        assert res.status_code == 401
