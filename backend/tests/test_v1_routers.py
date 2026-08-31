import pytest
from httpx import AsyncClient, ASGITransport
from app.main import app


@pytest.mark.asyncio
async def test_auth_endpoints():
    async with AsyncClient(
        transport=ASGITransport(app=app), base_url="http://test"
    ) as client:
        # Register
        res = await client.post(
            "/api/v1/auth/register",
            json={"email": "v1_test@example.com", "password": "pass123456", "full_name": "Test User"},
        )
        assert res.status_code == 201
        assert res.json()["email"] == "v1_test@example.com"

        # Login
        res = await client.post(
            "/api/v1/auth/login",
            json={"email": "v1_test@example.com", "password": "pass123456"},
        )
        assert res.status_code == 200
        token_data = res.json()
        assert "access_token" in token_data
        token = token_data["access_token"]

        headers = {"Authorization": f"Bearer {token}"}

        # Protected Me Route
        me_res = await client.get("/api/v1/auth/me", headers=headers)
        assert me_res.status_code == 200
        assert me_res.json()["email"] == "v1_test@example.com"

        # Logout
        res = await client.post("/api/v1/auth/logout", headers=headers)
        assert res.status_code == 200


@pytest.mark.asyncio
async def test_users_endpoints():
    async with AsyncClient(
        transport=ASGITransport(app=app), base_url="http://test"
    ) as client:
        res = await client.get("/api/v1/users/me")
        assert res.status_code == 200
        assert res.json()["user"]["role"] == "student"

        res = await client.put("/api/v1/users/me", json={"full_name": "Jane Doe"})
        assert res.status_code == 200


@pytest.mark.asyncio
async def test_students_endpoints():
    async with AsyncClient(
        transport=ASGITransport(app=app), base_url="http://test"
    ) as client:
        res = await client.get("/api/v1/students/dashboard")
        assert res.status_code == 200
        assert "stats" in res.json()["dashboard"]

        res = await client.get("/api/v1/students/preferences")
        assert res.status_code == 200


@pytest.mark.asyncio
async def test_lm_endpoints():
    async with AsyncClient(
        transport=ASGITransport(app=app), base_url="http://test"
    ) as client:
        res = await client.post(
            "/api/v1/lm/process",
            json={"prompt": "Explain Binary Trees", "session_id": "sess_test"},
        )
        assert res.status_code == 200
        assert "response" in res.json()

        res = await client.get("/api/v1/lm/sessions")
        assert res.status_code == 200


@pytest.mark.asyncio
async def test_payments_endpoints():
    async with AsyncClient(
        transport=ASGITransport(app=app), base_url="http://test"
    ) as client:
        res = await client.post("/api/v1/payments/checkout", json={"plan_id": "pro_annual"})
        assert res.status_code == 200
        assert "checkout_url" in res.json()

        res = await client.get("/api/v1/payments/history")
        assert res.status_code == 200


@pytest.mark.asyncio
async def test_subscriptions_endpoints():
    async with AsyncClient(
        transport=ASGITransport(app=app), base_url="http://test"
    ) as client:
        res = await client.get("/api/v1/subscriptions/plans")
        assert res.status_code == 200
        assert len(res.json()["plans"]) >= 3

        res = await client.get("/api/v1/subscriptions/current")
        assert res.status_code == 200
        assert res.json()["subscription"]["status"] == "active"


@pytest.mark.asyncio
async def test_admin_endpoints():
    async with AsyncClient(
        transport=ASGITransport(app=app), base_url="http://test"
    ) as client:
        res = await client.get("/api/v1/admin/users")
        assert res.status_code == 200

        res = await client.get("/api/v1/admin/metrics")
        assert res.status_code == 200

        res = await client.get("/api/v1/admin/system-status")
        assert res.status_code == 200
        assert res.json()["services"]["api_server"] == "healthy"
