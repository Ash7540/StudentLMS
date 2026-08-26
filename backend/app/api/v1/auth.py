from fastapi import APIRouter, status, HTTPException

router = APIRouter()


@router.post("/register", status_code=status.HTTP_201_CREATED)
async def register():
    return {"message": "User registration endpoint stub"}


@router.post("/login")
async def login():
    return {"access_token": "stub_token", "token_type": "bearer"}


@router.post("/logout")
async def logout():
    return {"message": "Logged out successfully"}
