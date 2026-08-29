from typing import Optional, Dict, Any, List
from datetime import datetime, timezone
from app.repositories.base_repository import BaseRepository


class SessionRepository(BaseRepository):
    def __init__(self):
        super().__init__(collection_name="conversations")

    async def get_user_sessions(
        self, user_id: str, skip: int = 0, limit: int = 20
    ) -> List[Dict[str, Any]]:
        return await self.find_many({"user_id": user_id}, skip=skip, limit=limit)

    async def create_session(
        self, user_id: str, title: str = "New Study Session"
    ) -> Dict[str, Any]:
        now = datetime.now(timezone.utc)
        doc = {
            "user_id": user_id,
            "title": title,
            "messages": [],
            "token_usage": 0,
            "created_at": now,
            "updated_at": now,
        }
        return await self.create(doc)

    async def add_message(
        self, session_id: str, sender: str, content: str, token_cost: int = 0
    ) -> bool:
        if self.collection is not None:
            now = datetime.now(timezone.utc)
            msg = {"sender": sender, "content": content, "timestamp": now}
            result = await self.collection.update_one(
                {"_id": session_id},
                {
                    "$push": {"messages": msg},
                    "$inc": {"token_usage": token_cost},
                    "$set": {"updated_at": now},
                },
            )
            return result.modified_count > 0
        return True


session_repository = SessionRepository()
