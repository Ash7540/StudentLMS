from typing import Any, Dict, List, Optional
from bson import ObjectId
from app.core.database import get_database


class BaseRepository:
    def __init__(self, collection_name: str):
        self.collection_name = collection_name
        self._in_memory_docs: Dict[str, Dict[str, Any]] = {}

    @property
    def collection(self):
        db = get_database()
        if db is not None:
            return db[self.collection_name]
        return None

    async def create(self, document: Dict[str, Any]) -> Dict[str, Any]:
        if self.collection is not None:
            result = await self.collection.insert_one(document)
            document["_id"] = str(result.inserted_id)
            return document

        # In-memory storage fallback for offline/unit test execution
        doc_id = str(document.get("_id") or f"mock_{len(self._in_memory_docs) + 1}")
        document["_id"] = doc_id
        self._in_memory_docs[doc_id] = document
        return document

    async def find_by_id(self, doc_id: str) -> Optional[Dict[str, Any]]:
        if self.collection is not None:
            query = {"_id": ObjectId(doc_id)} if ObjectId.is_valid(doc_id) else {"_id": doc_id}
            doc = await self.collection.find_one(query)
            if doc:
                doc["_id"] = str(doc["_id"])
            return doc
        return self._in_memory_docs.get(doc_id)

    async def find_one(self, query: Dict[str, Any]) -> Optional[Dict[str, Any]]:
        if self.collection is not None:
            doc = await self.collection.find_one(query)
            if doc:
                doc["_id"] = str(doc["_id"])
            return doc

        for doc in self._in_memory_docs.values():
            match = True
            for k, v in query.items():
                if doc.get(k) != v:
                    match = False
                    break
            if match:
                return doc
        return None

    async def find_many(
        self, query: Dict[str, Any] = None, skip: int = 0, limit: int = 20
    ) -> List[Dict[str, Any]]:
        if query is None:
            query = {}
        if self.collection is not None:
            cursor = self.collection.find(query).skip(skip).limit(limit)
            docs = await cursor.to_list(length=limit)
            for doc in docs:
                doc["_id"] = str(doc["_id"])
            return docs

        results = []
        for doc in self._in_memory_docs.values():
            match = True
            for k, v in query.items():
                if doc.get(k) != v:
                    match = False
                    break
            if match:
                results.append(doc)
        return results[skip : skip + limit]

    async def update(self, doc_id: str, update_data: Dict[str, Any]) -> bool:
        if self.collection is not None:
            query = {"_id": ObjectId(doc_id)} if ObjectId.is_valid(doc_id) else {"_id": doc_id}
            result = await self.collection.update_one(query, {"$set": update_data})
            return result.modified_count > 0

        if doc_id in self._in_memory_docs:
            self._in_memory_docs[doc_id].update(update_data)
            return True
        return False

    async def delete(self, doc_id: str) -> bool:
        if self.collection is not None:
            query = {"_id": ObjectId(doc_id)} if ObjectId.is_valid(doc_id) else {"_id": doc_id}
            result = await self.collection.delete_one(query)
            return result.deleted_count > 0

        if doc_id in self._in_memory_docs:
            del self._in_memory_docs[doc_id]
            return True
        return False

    async def count(self, query: Dict[str, Any] = None) -> int:
        if query is None:
            query = {}
        if self.collection is not None:
            return await self.collection.count_documents(query)

        count_val = 0
        for doc in self._in_memory_docs.values():
            match = True
            for k, v in query.items():
                if doc.get(k) != v:
                    match = False
                    break
            if match:
                count_val += 1
        return count_val
