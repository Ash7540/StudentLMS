from fastapi import APIRouter

router = APIRouter()


@router.get("/dashboard")
async def get_student_dashboard():
    return {
        "stats": {
            "completed_courses": 4,
            "study_hours": 18.5,
            "ai_sessions": 12,
        },
        "recent_activities": [],
    }


@router.get("/preferences")
async def get_student_preferences():
    return {"theme": "dark", "notifications_enabled": True}
