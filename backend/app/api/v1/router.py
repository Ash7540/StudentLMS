from fastapi import APIRouter
from app.api.v1 import auth, users, students, lm, payments, subscriptions, admin

api_router = APIRouter()

api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(students.router, prefix="/students", tags=["students"])
api_router.include_router(lm.router, prefix="/lm", tags=["lm"])
api_router.include_router(payments.router, prefix="/payments", tags=["payments"])
api_router.include_router(subscriptions.router, prefix="/subscriptions", tags=["subscriptions"])
api_router.include_router(admin.router, prefix="/admin", tags=["admin"])
