class UserRepository:
    def __init__(self, db=None):
        self.db = db

    async def get_by_email(self, email: str):
        if self.db:
            return await self.db.users.find_one({"email": email})
        return None
