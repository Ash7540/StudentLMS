from typing import Optional, Dict, Any
from app.repositories.base_repository import BaseRepository


class StudentRepository(BaseRepository):
    def __init__(self):
        super().__init__(collection_name="student_profiles")

    async def get_profile_by_user_id(self, user_id: str) -> Optional[Dict[str, Any]]:
        return await self.find_one({"user_id": user_id})

    async def upsert_profile(
        self, user_id: str, profile_data: Dict[str, Any]
    ) -> Dict[str, Any]:
        existing = await self.get_profile_by_user_id(user_id)
        if existing:
            await self.update(existing["_id"], profile_data)
            existing.update(profile_data)
            return existing
        profile_data["user_id"] = user_id
        return await self.create(profile_data)


student_repository = StudentRepository()
