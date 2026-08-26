# StudyLMS Database Schema Specification (MongoDB)

## Collections Structure

### 1. `users`
```json
{
  "_id": "ObjectId",
  "email": "student@example.com",
  "hashed_password": "string(bcrypt_hash)",
  "full_name": "Jane Doe",
  "role": "student | admin",
  "is_active": true,
  "is_verified": false,
  "created_at": "ISODate",
  "updated_at": "ISODate"
}
```

### 2. `student_profiles`
```json
{
  "_id": "ObjectId",
  "user_id": "ObjectId(users._id)",
  "grade_level": "Undergraduate",
  "major": "Computer Science",
  "learning_style": "Visual",
  "preferences": {
    "theme": "dark",
    "notifications": true
  },
  "created_at": "ISODate"
}
```

### 3. `conversations`
```json
{
  "_id": "ObjectId",
  "user_id": "ObjectId(users._id)",
  "title": "Data Structures Study Session",
  "messages": [
    {
      "sender": "user | assistant",
      "content": "Explain binary search trees",
      "timestamp": "ISODate"
    }
  ],
  "token_usage": 350,
  "created_at": "ISODate",
  "updated_at": "ISODate"
}
```

### 4. `payments`
```json
{
  "_id": "ObjectId",
  "user_id": "ObjectId(users._id)",
  "transaction_id": "tx_123456789",
  "amount": 1999,
  "currency": "USD",
  "status": "succeeded | pending | failed",
  "payment_method": "card",
  "created_at": "ISODate"
}
```

### 5. `subscriptions`
```json
{
  "_id": "ObjectId",
  "user_id": "ObjectId(users._id)",
  "plan_id": "pro_monthly",
  "status": "active | canceled | expired",
  "current_period_start": "ISODate",
  "current_period_end": "ISODate",
  "created_at": "ISODate"
}
```
