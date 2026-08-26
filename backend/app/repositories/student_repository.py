class StudentRepository:
    def __init__(self, db=None):
        self.db = db

    async def get_profile(self, user_id: str):
        if self.db:
            return await self.db.student_profiles.find_one({"user_id": user_id})
        return None
