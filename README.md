# StudyLMS (Student LMS)

StudyLMS is an AI-powered Learning Management System (LMS) designed for modern student workflows, intelligent study assistance, personalized learning pathways, and administrative management.

## 🏗 Architecture Overview

The system follows a modern decoupled architecture:
* **Frontend**: Next.js (App Router), React, TypeScript, Tailwind CSS
* **Backend**: Python FastAPI, Pydantic, Motor (Async MongoDB), PyJWT Authentication
* **Database**: MongoDB
* **DevOps**: Docker, Docker Compose

```text
                    ┌──────────────────────┐
                    │      Next.js         │
                    │      Frontend        │
                    │                      │
                    │ • Landing Page       │
                    │ • Auth UI            │
                    │ • Student Dashboard  │
                    │ • Profile            │
                    │ • Payments UI        │
                    │ • Admin Dashboard    │
                    └──────────┬───────────┘
                               │
                         REST API / JSON
                               │
                    ┌──────────▼───────────┐
                    │    Python Backend    │
                    │     FastAPI          │
                    │                      │
                    │ • Authentication     │
                    │ • User Management    │
                    │ • Core LM Logic      │
                    │ • Payments           │
                    │ • Webhooks            │
                    │ • Admin APIs          │
                    │ • Validation         │
                    │ • Rate Limiting      │
                    └──────────┬───────────┘
                               │
               ┌────────────────┼────────────────┐
               │                │                │
        ┌──────▼──────┐ ┌──────▼──────┐ ┌──────▼──────┐
        │   MongoDB   │ │   Gateway   │ │  LM / AI    │
        │             │ │             │ │   Service   │
        │ Users       │ │ Payments    │ │             │
        │ Sessions    │ │ Subscriptions│ │ Model/API  │
        │ Usage       │ │ Webhooks    │ │ Processing  │
        │ Payments    │ │ Refunds     │ │             │
        └─────────────┘ └─────────────┘ └─────────────┘
```

---

## 📂 Project Structure

```text
StudyLMS/
│
├── frontend/             # Next.js App Router Frontend
│   ├── app/              # Next.js pages & layouts
│   ├── components/       # UI & layout components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions & API client
│   └── services/         # Service layer API calls
│
├── backend/              # FastAPI Python Backend
│   ├── app/
│   │   ├── api/          # API v1 Router endpoints
│   │   ├── core/         # Security, database, & app config
│   │   ├── models/       # Mongo DB data models
│   │   ├── schemas/      # Pydantic schemas
│   │   ├── services/     # Business logic
│   │   ├── repositories/ # Data access layer
│   │   └── utils/        # Logging & helpers
│   ├── tests/            # Pytest test suite
│   └── requirements.txt  # Python dependencies
│
├── docker/               # Docker Compose & Dockerfiles
├── docs/                 # Architecture, API & DB documentation
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
* Node.js 18+ and npm
* Python 3.10+
* MongoDB running locally or a MongoDB Atlas connection string
* Docker & Docker Compose (optional for containerized setup)

### Setup Backend
```bash
cd backend
# Create virtual environment if not created
python -m venv env
# Activate virtual environment (Windows)
env\Scripts\activate
# Install dependencies
pip install -r requirements.txt
# Copy environment file
cp .env.example .env
# Run FastAPI server
uvicorn app.main:app --reload --port 8000
```

### Setup Frontend
```bash
cd frontend
# Install dependencies
npm install
# Copy environment file
cp .env.example .env.local
# Run dev server
npm run dev
```

### Docker Setup
```bash
docker-compose -f docker/docker-compose.yml up --build
```

---

## 📄 Documentation
Detailed specs are available in the [`docs/`](./docs) folder:
* [Architecture Overview](./docs/ARCHITECTURE.md)
* [API Specifications](./docs/API_SPEC.md)
* [Database Schema](./docs/DATABASE_SCHEMA.md)
