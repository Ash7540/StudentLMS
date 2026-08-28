from typing import List
from pydantic_settings import BaseSettings
from pydantic import ConfigDict


class Settings(BaseSettings):
    PROJECT_NAME: str = "StudyLMS API"
    DESCRIPTION: str = "AI-Powered Learning Management System API Backend"
    VERSION: str = "0.1.0"
    API_V1_STR: str = "/api/v1"
    
    SECRET_KEY: str = "super-secret-key-change-in-production-1234567890!@#$%"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24  # 24 hours

    # MongoDB Atlas Database Configuration
    MONGODB_URL: str = "mongodb+srv://ashchavan7540_db_user:QdCLAeKUWJEmnDlC@studentlms.pssom1y.mongodb.net/"
    DATABASE_NAME: str = "studylms_db"

    # Cloudinary Asset Storage Configuration
    CLOUDINARY_CLOUD_NAME: str = "fesne5tm"
    CLOUDINARY_API_KEY: str = "387574296742661"
    CLOUDINARY_API_SECRET: str = "McWJQbHptLabQtXRbosc3RgICYo"
    CLOUDINARY_URL: str = "cloudinary://387574296742661:McWJQbHptLabQtXRbosc3RgICYo@fesne5tm"

    CORS_ORIGINS: List[str] = [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://localhost:8000",
    ]

    model_config = ConfigDict(env_file=".env", case_sensitive=True)


settings = Settings()
