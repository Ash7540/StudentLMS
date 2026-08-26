from fastapi import APIRouter

router = APIRouter()


@router.post("/process")
async def process_lm_prompt():
    return {
        "response": "Hello! I am your StudyLMS AI assistant. How can I help you today?",
        "session_id": "session_001",
    }


@router.get("/sessions")
async def list_lm_sessions():
    return {"sessions": []}
