import pytest
from httpx import AsyncClient, ASGITransport
from app.main import app
from app.repositories import user_repository


@pytest.mark.asyncio
async def test_successful_user_registration():
    email = "unique_student_day6@example.com"
    payload = {
        "email": email,
        "password": "securepassword123",
        "full_name": "Unique Student",
        "role": "student",
    }

    async with AsyncClient(
        transport=ASGITransport(app=app), base_url="http://test"
    ) as client:
        response = await client.post("/api/v1/auth/register", json=payload)
        assert response.status_code == 201
        data = response.json()
        assert data["email"] == email
        assert data["full_name"] == "Unique Student"
        assert data["role"] == "student"
        assert "id" in data

        # Verify plaintext password is not in database and password is hashed
        db_user = await user_repository.get_by_email(email)
        if db_user:
            assert "password" not in db_user
            assert db_user["hashed_password"] != "securepassword123"
            assert db_user["hashed_password"].startswith("$2b$") or len(db_user["hashed_password"]) > 20

            # Cleanup test user
            await user_repository.delete(db_user["_id"])


@pytest.mark.asyncio
async def test_duplicate_email_registration():
    email = "duplicate_student_day6@example.com"
    payload = {
        "email": email,
        "password": "password12345",
        "full_name": "First Register",
        "role": "student",
    }

    async with AsyncClient(
        transport=ASGITransport(app=app), base_url="http://test"
    ) as client:
        # First registration -> 201
        res1 = await client.post("/api/v1/auth/register", json=payload)
        assert res1.status_code == 201

        # Second registration with same email -> 400 Bad Request
        res2 = await client.post("/api/v1/auth/register", json=payload)
        assert res2.status_code == 400
        assert "already registered" in res2.json()["message"].lower()

        # Cleanup
        db_user = await user_repository.get_by_email(email)
        if db_user:
            await user_repository.delete(db_user["_id"])


@pytest.mark.asyncio
async def test_invalid_short_password():
    payload = {
        "email": "shortpass@example.com",
        "password": "short",  # < 8 characters
        "full_name": "Short Pass User",
        "role": "student",
    }

    async with AsyncClient(
        transport=ASGITransport(app=app), base_url="http://test"
    ) as client:
        response = await client.post("/api/v1/auth/register", json=payload)
        assert response.status_code == 422
        assert response.json()["status"] == "error"
