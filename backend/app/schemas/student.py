from typing import Optional, Dict, Any
from pydantic import BaseModel


class StudentProfileUpdate(BaseModel):
    grade_level: Optional[str] = None
    major: Optional[str] = None
    learning_style: Optional[str] = None
    preferences: Optional[Dict[str, Any]] = None


class StudentProfileResponse(BaseModel):
    user_id: str
    grade_level: Optional[str] = None
    major: Optional[str] = None
    learning_style: Optional[str] = "Visual"
    preferences: Dict[str, Any] = {}
