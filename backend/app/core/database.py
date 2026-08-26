from motor.motor_asyncio import AsyncIOMotorClient
from app.core.config import settings


class DatabaseManager:
    client: AsyncIOMotorClient = None
    db = None

db_manager = DatabaseManager()

async def connect_to_mongo():
    db_manager.client = AsyncIOMotorClient(settings.MONGODB_URL)
    db_manager.db = db_manager.client[settings.DATABASE_NAME]

async def close_mongo_connection():
    if db_manager.client:
        db_manager.client.close()

def get_database():
    return db_manager.db
