from motor.motor_asyncio import AsyncIOMotorClient
from pymongo import IndexModel, ASCENDING, DESCENDING
from app.core.config import settings
from app.utils.logger import logger


class DatabaseManager:
    client: AsyncIOMotorClient = None
    db = None


db_manager = DatabaseManager()


async def connect_to_mongo():
    logger.info(f"Connecting to MongoDB at {settings.MONGODB_URL.split('@')[-1]}...")
    db_manager.client = AsyncIOMotorClient(
        settings.MONGODB_URL,
        serverSelectionTimeoutMS=5000,
    )
    db_manager.db = db_manager.client[settings.DATABASE_NAME]


async def close_mongo_connection():
    if db_manager.client:
        logger.info("Closing MongoDB connection client...")
        db_manager.client.close()


def get_database():
    return db_manager.db


async def check_database_health() -> bool:
    if not db_manager.client:
        return False
    try:
        await db_manager.client.admin.command("ping")
        return True
    except Exception as e:
        logger.warning(f"MongoDB ping health check failed: {e}")
        return False


async def init_db_indexes():
    db = get_database()
    if db is None:
        logger.warning("Database not initialized, skipping index creation.")
        return

    logger.info("Initializing collection indexes in MongoDB...")
    try:
        # Users Collection Indexes
        await db.users.create_index([("email", ASCENDING)], unique=True)

        # Student Profiles Collection Indexes
        await db.student_profiles.create_index([("user_id", ASCENDING)], unique=True)

        # Conversations / Sessions Collection Indexes
        await db.conversations.create_index([("user_id", ASCENDING)])
        await db.conversations.create_index(
            [("user_id", ASCENDING), ("updated_at", DESCENDING)]
        )

        # Payments Collection Indexes
        await db.payments.create_index([("user_id", ASCENDING)])
        await db.payments.create_index([("transaction_id", ASCENDING)], unique=True)

        # Subscriptions Collection Indexes
        await db.subscriptions.create_index([("user_id", ASCENDING)])
        await db.subscriptions.create_index([("status", ASCENDING)])

        logger.info("MongoDB collection indexes initialized successfully.")
    except Exception as e:
        logger.warning(f"Failed to create MongoDB indexes: {e}")
