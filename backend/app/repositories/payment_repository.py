from typing import Optional, Dict, Any, List
from datetime import datetime, timezone
from app.repositories.base_repository import BaseRepository


class PaymentRepository(BaseRepository):
    def __init__(self):
        super().__init__(collection_name="payments")

    async def get_by_transaction_id(self, tx_id: str) -> Optional[Dict[str, Any]]:
        return await self.find_one({"transaction_id": tx_id})

    async def get_user_payments(
        self, user_id: str, skip: int = 0, limit: int = 20
    ) -> List[Dict[str, Any]]:
        return await self.find_many({"user_id": user_id}, skip=skip, limit=limit)

    async def record_payment(
        self, user_id: str, tx_id: str, amount: int, currency: str = "USD", status: str = "succeeded"
    ) -> Dict[str, Any]:
        doc = {
            "user_id": user_id,
            "transaction_id": tx_id,
            "amount": amount,
            "currency": currency,
            "status": status,
            "created_at": datetime.now(timezone.utc),
        }
        return await self.create(doc)


payment_repository = PaymentRepository()
