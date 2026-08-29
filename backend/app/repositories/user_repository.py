from typing import Optional, Dict, Any
from app.repositories.base_repository import BaseRepository


class UserRepository(BaseRepository):
    def __init__(self):
        super().__init__(collection_name="users")

    async def get_by_email(self, email: str) -> Optional[Dict[str, Any]]:
        return await self.find_one({"email": email})

    async def create_user(self, user_dict: Dict[str, Any]) -> Dict[str, Any]:
        return await self.create(user_dict)

    async def update_password(self, user_id: str, hashed_password: str) -> bool:
        return await self.update(user_id, {"hashed_password": hashed_password})

    async def set_verified(self, user_id: str) -> bool:
        return await self.update(user_id, {"is_verified": True})


user_repository = UserRepository()
