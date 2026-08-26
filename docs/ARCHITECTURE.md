# StudyLMS Architecture Document

## 1. System Overview
StudyLMS is designed as a distributed, decoupled multi-tier web application consisting of a Next.js front-end user interface, a Python FastAPI back-end service, and a MongoDB document store.

## 2. Core User Roles
1. **Student**: Accesses learning modules, AI study assistant, personal dashboard, saved sessions, profile settings, and payment subscriptions.
2. **Admin**: Manages users, views platform analytics, monitors usage and payment transactions, overrides permissions.
3. **Guest / Unauthenticated User**: Accesses public landing page, pricing page, and authentication pages (Login/Register).

## 3. Layered Architecture & Responsibilities

### 3.1 Frontend (Next.js 15+ App Router)
* **Presentation**: Renders modern responsive UI with Tailwind CSS and Lucide icons.
* **Authentication State**: Handles JWT token storage (httpOnly cookies / local state) and route protection.
* **Service Gateway**: Interacts with FastAPI backend via structured async API client (`lib/api-client.ts`).

### 3.2 Backend (FastAPI + Pydantic)
* **API Router (`/api/v1`)**: Versioned REST API endpoints for Auth, Users, Students, LM processing, and Payments.
* **Service Layer**: Implements business rules, AI model interactions, session management, and password hashing (bcrypt).
* **Repository Layer**: Abstraction layer built over Motor (Async PyMongo) for clean MongoDB interactions.
* **Middleware**: CORS handling, JWT token validation, rate-limiting, and error handlers.

### 3.3 Database Layer (MongoDB)
* Document-oriented storage optimal for flexible AI conversation histories, user profiles, and payment audit logs.

## 4. Authentication Flow
```text
Client (Next.js)                   FastAPI Backend                    MongoDB
    │                                    │                               │
    ├───── POST /api/v1/auth/login ─────►│                               │
    │      {email, password}             ├───── Find user by email ─────►│
    │                                    │◄──── User document ───────────┤
    │                                    ├───── Verify bcrypt hash       │
    │                                    ├───── Generate JWT token       │
    │◄──── {access_token, user} ─────────┤                               │
    │                                    │                               │
```

## 5. Payment Flow
```text
Client                             FastAPI Backend                    Payment Gateway / Mongo
  │                                      │                                  │
  ├───── POST /api/v1/payments/checkout ►│                                  │
  │      {plan_id}                       ├───── Create Payment Intent ─────►│
  │◄──── {checkout_url, payment_id} ─────┤                                  │
  │                                      │◄──── Webhook Notification ───────┤
  │                                      ├───── Verify & activate sub ─────►│
```
