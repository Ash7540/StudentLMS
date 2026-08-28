from fastapi import APIRouter, status, Query
from typing import Dict, Any, List

router = APIRouter()


@router.get("/users")
async def list_all_users(
    skip: int = Query(0, ge=0),
    limit: int = Query(20, ge=1, le=100),
) -> Dict[str, Any]:
    return {
        "status": "success",
        "total": 1250,
        "skip": skip,
        "limit": limit,
        "users": [
            {
                "id": "usr_001",
                "email": "jane.student@university.edu",
                "full_name": "Jane Student",
                "role": "student",
                "is_active": True,
            },
            {
                "id": "usr_002",
                "email": "prof.smith@university.edu",
                "full_name": "Prof. Smith",
                "role": "educator",
                "is_active": True,
            },
        ],
    }


@router.get("/metrics")
async def get_system_metrics() -> Dict[str, Any]:
    return {
        "status": "success",
        "metrics": {
            "total_users": 1250,
            "active_students": 980,
            "total_courses": 24,
            "ai_queries_today": 3420,
            "monthly_recurring_revenue": 14750.00,
        },
    }


@router.get("/system-status")
async def get_system_status() -> Dict[str, Any]:
    return {
        "status": "success",
        "services": {
            "api_server": "healthy",
            "database_mongodb": "connected",
            "ai_llm_gateway": "operational",
            "payment_gateway": "operational",
        },
    }
