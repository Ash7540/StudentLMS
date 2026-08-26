from typing import Optional, List
from pydantic import BaseModel


class LMPromptRequest(BaseModel):
    prompt: str
    session_id: Optional[str] = None


class LMPromptResponse(BaseModel):
    response: str
    session_id: str
    token_usage: int = 0
