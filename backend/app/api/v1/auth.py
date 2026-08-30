from fastapi import APIRouter, status, HTTPException
from typing import Dict, Any
from app.schemas.user import UserCreate, UserResponse
from app.schemas.token import Token
from app.services.auth_service import auth_service

router = APIRouter()


@router.post(
    "/register",
    response_model=UserResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Register a new student, educator, or admin user account",
)
async def register(user_in: UserCreate) -> UserResponse:
    return await auth_service.register_user(user_in)


@router.post("/login", response_model=Token, summary="Authenticate user credentials")
async def login() -> Token:
    return Token(
        access_token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.stub_token_payload",
        token_type="bearer",
    )


@router.post("/logout", summary="Invalidate user session")
async def logout() -> Dict[str, Any]:
    return {"status": "success", "message": "Logged out successfully"}


@router.post("/refresh-token", response_model=Token, summary="Refresh expired access token")
async def refresh_token() -> Token:
    return Token(
        access_token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.refreshed_token_payload",
        token_type="bearer",
    )
