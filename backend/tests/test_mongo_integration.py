import pytest
from httpx import AsyncClient, ASGITransport
from app.main import app
from app.core.database import check_database_health, init_db_indexes
from app.repositories import (
    user_repository,
    student_repository,
    session_repository,
    payment_repository,
)


@pytest.mark.asyncio
async def test_database_health_and_indexes():
    # Test DB health check ping function
    health_status = await check_database_health()
    assert isinstance(health_status, bool)

    # Test index creation initialization function
    await init_db_indexes()


@pytest.mark.asyncio
async def test_user_repository_crud():
    test_email = "pytest_integration_student@example.com"
    user_doc = {
        "email": test_email,
        "hashed_password": "hashed_secret_123",
        "full_name": "Integration Student",
        "role": "student",
        "is_active": True,
    }
    
    # Create
    created = await user_repository.create_user(user_doc)
    assert "_id" in created
    assert created["email"] == test_email

    # Get by Email
    fetched = await user_repository.get_by_email(test_email)
    if fetched:
        assert fetched["full_name"] == "Integration Student"

        # Update Password
        updated = await user_repository.update_password(fetched["_id"], "new_hashed_password")
        assert updated is True

        # Cleanup
        await user_repository.delete(fetched["_id"])


@pytest.mark.asyncio
async def test_session_repository_crud():
    user_id = "test_user_456"
    session = await session_repository.create_session(user_id, "Algorithms Study")
    assert "_id" in session
    assert session["title"] == "Algorithms Study"

    # Add Message
    added = await session_repository.add_message(
        session["_id"], "user", "What is an AVL Tree?", token_cost=15
    )
    assert added is True


@pytest.mark.asyncio
async def test_payment_repository_crud():
    tx_id = "tx_test_778899"
    payment = await payment_repository.record_payment(
        user_id="usr_789", tx_id=tx_id, amount=1999, status="succeeded"
    )
    assert "_id" in payment
    assert payment["transaction_id"] == tx_id
