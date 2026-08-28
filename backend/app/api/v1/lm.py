from fastapi import APIRouter, status, HTTPException
from typing import Dict, Any
from app.schemas.lm import LMPromptRequest, LMPromptResponse

router = APIRouter()


@router.post("/process", response_model=LMPromptResponse)
async def process_lm_prompt(payload: LMPromptRequest) -> LMPromptResponse:
    session_id = payload.session_id or "sess_default_001"
    response_text = f"StudyLMS AI Tutor explanation for query: '{payload.prompt}'"
    token_count = len(payload.prompt.split()) + 25
    return LMPromptResponse(
        response=response_text,
        session_id=session_id,
        token_usage=token_count,
    )


@router.get("/sessions")
async def list_lm_sessions() -> Dict[str, Any]:
    return {
        "status": "success",
        "sessions": [
            {
                "session_id": "sess_001",
                "title": "Binary Search Trees Discussion",
                "message_count": 8,
                "updated_at": "2026-08-28T10:30:00Z",
            },
            {
                "session_id": "sess_002",
                "title": "MongoDB Aggregations & Indexing",
                "message_count": 5,
                "updated_at": "2026-08-27T16:15:00Z",
            },
        ],
    }


@router.post("/sessions", status_code=status.HTTP_201_CREATED)
async def create_lm_session(title_data: Dict[str, str]) -> Dict[str, Any]:
    return {
        "status": "success",
        "session_id": "sess_new_789",
        "title": title_data.get("title", "New Study Session"),
    }


@router.delete("/sessions/{session_id}")
async def delete_lm_session(session_id: str) -> Dict[str, Any]:
    return {
        "status": "success",
        "message": f"Session '{session_id}' deleted successfully",
    }
