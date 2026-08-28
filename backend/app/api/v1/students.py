from fastapi import APIRouter
from typing import Dict, Any

router = APIRouter()


@router.get("/dashboard")
async def get_student_dashboard() -> Dict[str, Any]:
    return {
        "status": "success",
        "dashboard": {
            "stats": {
                "enrolled_courses": 4,
                "study_hours": 18.5,
                "ai_queries_used": 42,
                "avg_quiz_score": 92.0,
            },
            "recent_activities": [
                {
                    "id": "act_1",
                    "title": "Completed Module 4 in Data Structures",
                    "timestamp": "2 hours ago",
                },
                {
                    "id": "act_2",
                    "title": "AI Practice Quiz on BST Trees",
                    "score": "95%",
                    "timestamp": "Yesterday",
                },
            ],
        },
    }


@router.get("/preferences")
async def get_student_preferences() -> Dict[str, Any]:
    return {
        "status": "success",
        "preferences": {
            "theme": "dark",
            "notifications_enabled": True,
            "learning_style": "Visual & Hands-on Code",
            "major": "Computer Science",
            "grade_level": "Undergraduate",
        },
    }


@router.put("/preferences")
async def update_student_preferences(pref_data: Dict[str, Any]) -> Dict[str, Any]:
    return {
        "status": "success",
        "message": "Student preferences updated successfully",
        "preferences": pref_data,
    }
