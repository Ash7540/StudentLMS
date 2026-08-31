from fastapi import APIRouter, status, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from typing import Dict, Any
from app.schemas.user import UserCreate, UserResponse
from app.schemas.token import Token, LoginRequest
from app.services.auth_service import auth_service
from app.api.deps import get_current_user

router = APIRouter()


@router.post(
    "/register",
    response_model=UserResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Register a new student, educator, or admin user account",
)
async def register(user_in: UserCreate) -> UserResponse:
    return await auth_service.register_user(user_in)


@router.post(
    "/login",
    response_model=Token,
    summary="Authenticate user credentials and receive JWT access token",
)
async def login(credentials: LoginRequest) -> Token:
    return await auth_service.login_user(credentials)


@router.get(
    "/me",
    response_model=UserResponse,
    summary="Get current authenticated user profile payload",
)
async def get_authenticated_user_profile(
    current_user: Dict[str, Any] = Depends(get_current_user),
) -> UserResponse:
    return UserResponse(
        id=str(current_user["_id"]),
        email=current_user["email"],
        full_name=current_user["full_name"],
        role=current_user["role"],
        is_active=current_user["is_active"],
        is_verified=current_user.get("is_verified", False),
    )


@router.post("/logout", summary="Invalidate current user session")
async def logout(
    current_user: Dict[str, Any] = Depends(get_current_user),
) -> Dict[str, Any]:
    return {
        "status": "success",
        "message": f"User {current_user['email']} logged out successfully",
    }


@router.post("/refresh-token", response_model=Token, summary="Refresh expired access token")
async def refresh_token(
    current_user: Dict[str, Any] = Depends(get_current_user),
) -> Token:
    token_str = await auth_service.login_user(
        LoginRequest(email=current_user["email"], password="")
    )
    return token_str
