from datetime import datetime
from typing import Optional, Dict, Any
from pydantic import BaseModel, Field


class StudentProfileModel(BaseModel):
    id: Optional[str] = Field(default=None, alias="_id")
    user_id: str
    grade_level: Optional[str] = None
    major: Optional[str] = None
    learning_style: Optional[str] = "Visual"
    preferences: Dict[str, Any] = Field(default_factory=dict)
    created_at: datetime = Field(default_factory=datetime.utcnow)
