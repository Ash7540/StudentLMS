from fastapi import APIRouter, status, HTTPException
from typing import Dict, Any
from app.schemas.user import UserCreate
from app.schemas.token import Token

router = APIRouter()


@router.post("/register", status_code=status.HTTP_201_CREATED)
async def register(user_in: UserCreate) -> Dict[str, Any]:
    return {
        "status": "success",
        "message": "User account created successfully",
        "user": {
            "id": "usr_new_123",
            "email": user_in.email,
            "full_name": user_in.full_name,
            "role": "student",
        },
    }


@router.post("/login", response_model=Token)
async def login() -> Token:
    return Token(
        access_token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.stub_token_payload",
        token_type="bearer",
    )


@router.post("/logout")
async def logout() -> Dict[str, Any]:
    return {"status": "success", "message": "Logged out successfully"}


@router.post("/refresh-token", response_model=Token)
async def refresh_token() -> Token:
    return Token(
        access_token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.refreshed_token_payload",
        token_type="bearer",
    )
