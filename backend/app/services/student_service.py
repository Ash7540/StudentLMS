class StudentService:
    def __init__(self):
        pass

    async def get_student_dashboard_data(self, user_id: str):
        return {
            "completed_courses": 4,
            "study_hours": 18.5,
            "ai_sessions": 12,
        }
