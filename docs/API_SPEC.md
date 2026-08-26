# StudyLMS API Specification

Base URL: `/api/v1`

## Authentication Router (`/auth`)
* `POST /auth/register` — Register a new student/user account.
* `POST /auth/login` — Authenticate user and receive JWT access token.
* `POST /auth/refresh` — Refresh expired access token.
* `POST /auth/logout` — Invalidate user session token.

## Users Router (`/users`)
* `GET /users/me` — Retrieve current authenticated user profile.
* `PUT /users/me` — Update user profile details.
* `POST /users/forgot-password` — Request password reset link.
* `POST /users/reset-password` — Reset password using token.

## Students Router (`/students`)
* `GET /students/dashboard` — Fetch student dashboard metrics and activity.
* `GET /students/preferences` — Get study preferences & configuration.
* `PUT /students/preferences` — Update study preferences.

## LM / AI Service Router (`/lm`)
* `POST /lm/process` — Send prompt / content for AI processing.
* `GET /lm/sessions` — List student conversation sessions.
* `POST /lm/sessions` — Create a new conversation session.
* `GET /lm/sessions/{session_id}` — Get session history and messages.
* `DELETE /lm/sessions/{session_id}` — Delete or archive conversation session.

## Payments & Subscriptions Router (`/payments` & `/subscriptions`)
* `GET /subscriptions/plans` — List available subscription tiers.
* `POST /payments/checkout` — Initiate subscription checkout session.
* `POST /payments/webhook` — Process payment gateway webhook events.
* `GET /payments/history` — Fetch user payment and invoice history.

## Admin Router (`/admin`)
* `GET /admin/users` — List and filter all system users.
* `GET /admin/metrics` — Aggregate system metrics and revenue stats.
