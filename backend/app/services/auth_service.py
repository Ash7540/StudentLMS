from datetime import datetime, timezone
from fastapi import HTTPException, status
from app.schemas.user import UserCreate, UserResponse
from app.schemas.token import Token, LoginRequest
from app.models.user import UserRole
from app.core.security import get_password_hash, verify_password, create_access_token
from app.repositories import user_repository, student_repository
from app.utils.logger import logger


class AuthService:
    async def register_user(self, user_in: UserCreate) -> UserResponse:
        # Check if email is already registered
        existing = await user_repository.get_by_email(user_in.email.lower().strip())
        if existing:
            logger.warning(f"Registration failed: Email '{user_in.email}' is already registered.")
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Email address is already registered",
            )

        # Hash password securely
        hashed_password = get_password_hash(user_in.password)

        # Prepare User Document
        now = datetime.now(timezone.utc)
        user_doc = {
            "email": user_in.email.lower().strip(),
            "hashed_password": hashed_password,
            "full_name": user_in.full_name.strip(),
            "role": user_in.role.value if isinstance(user_in.role, UserRole) else str(user_in.role),
            "is_active": True,
            "is_verified": False,
            "created_at": now,
            "updated_at": now,
        }

        # Save to MongoDB
        created_user = await user_repository.create_user(user_doc)
        user_id = str(created_user["_id"])
        logger.info(f"User created successfully: {user_in.email} (ID: {user_id})")

        # Initialize student profile if role is student
        if user_doc["role"] == UserRole.STUDENT.value:
            try:
                await student_repository.upsert_profile(
                    user_id=user_id,
                    profile_data={
                        "learning_style": "Visual & Hands-on Code",
                        "preferences": {"theme": "dark", "notifications": True},
                    },
                )
            except Exception as e:
                logger.warning(f"Default student profile creation skipped: {e}")

        return UserResponse(
            id=user_id,
            email=created_user["email"],
            full_name=created_user["full_name"],
            role=UserRole(created_user["role"]),
            is_active=created_user["is_active"],
            is_verified=created_user["is_verified"],
        )

    async def login_user(self, credentials: LoginRequest) -> Token:
        email = credentials.email.lower().strip()
        user = await user_repository.get_by_email(email)
        
        if not user:
            logger.warning(f"Login failed: User with email '{email}' not found.")
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Incorrect email address or password",
                headers={"WWW-Authenticate": "Bearer"},
            )

        if not verify_password(credentials.password, user["hashed_password"]):
            logger.warning(f"Login failed: Incorrect password for email '{email}'.")
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Incorrect email address or password",
                headers={"WWW-Authenticate": "Bearer"},
            )

        if not user.get("is_active", True):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="User account is deactivated",
            )

        user_id = str(user["_id"])
        access_token = create_access_token(
            subject=user_id,
            email=user["email"],
            role=user["role"],
        )

        logger.info(f"User authenticated successfully: {email} (ID: {user_id})")

        user_response = UserResponse(
            id=user_id,
            email=user["email"],
            full_name=user["full_name"],
            role=UserRole(user["role"]),
            is_active=user["is_active"],
            is_verified=user.get("is_verified", False),
        )

        return Token(
            access_token=access_token,
            token_type="bearer",
            user=user_response,
        )


auth_service = AuthService()
