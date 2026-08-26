from datetime import datetime
from typing import Optional
from pydantic import BaseModel, Field


class PaymentModel(BaseModel):
    id: Optional[str] = Field(default=None, alias="_id")
    user_id: str
    transaction_id: str
    amount: int
    currency: str = "USD"
    status: str = "pending"
    created_at: datetime = Field(default_factory=datetime.utcnow)
