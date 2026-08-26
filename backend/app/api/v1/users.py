from fastapi import APIRouter

router = APIRouter()


@router.get("/me")
async def get_current_user():
    return {
        "id": "user_123",
        "email": "student@example.com",
        "full_name": "Demo Student",
        "role": "student",
    }


@router.put("/me")
async def update_current_user():
    return {"message": "User profile updated"}
