from typing import Dict, Any


def format_response(data: Any, message: str = "Success") -> Dict[str, Any]:
    return {
        "status": "success",
        "message": message,
        "data": data,
    }
