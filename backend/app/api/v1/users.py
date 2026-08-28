from fastapi import APIRouter, status, HTTPException
from typing import Dict, Any

router = APIRouter()


@router.get("/me")
async def get_current_user() -> Dict[str, Any]:
    return {
        "status": "success",
        "user": {
            "id": "usr_001",
            "email": "jane.student@university.edu",
            "full_name": "Jane Student",
            "role": "student",
            "is_active": True,
            "is_verified": True,
        },
    }


@router.put("/me")
async def update_current_user(data: Dict[str, Any]) -> Dict[str, Any]:
    return {
        "status": "success",
        "message": "User profile updated successfully",
        "updated_fields": list(data.keys()),
    }


@router.post("/forgot-password")
async def forgot_password(email_data: Dict[str, str]) -> Dict[str, Any]:
    return {
        "status": "success",
        "message": "Password reset instructions sent to registered email",
    }


@router.post("/reset-password")
async def reset_password(reset_data: Dict[str, str]) -> Dict[str, Any]:
    return {
        "status": "success",
        "message": "Password updated successfully",
    }
