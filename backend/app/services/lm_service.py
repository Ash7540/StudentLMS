class LMService:
    def __init__(self):
        pass

    async def generate_response(self, prompt: str, session_id: str = None):
        return {
            "response": f"AI Response to: '{prompt}'",
            "session_id": session_id or "session_default",
            "token_usage": len(prompt.split()) + 20,
        }
