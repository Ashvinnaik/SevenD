# 03 — Design

> How will we build it? This phase turns Definition specs into a technical blueprint.
> Input: Approved requirements from Definition. Output: Architecture, components, interfaces, and standards ready for Development.

---

## Architecture Overview

<!-- High-level diagram description. What are the major components and how do they connect? -->

```
[Client / Frontend]
        |
   [API Gateway]
        |
  [Application Layer]
     /     \
[Database]  [External Services]
```

### Technology Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Frontend | [e.g., Next.js 14 + TypeScript] | [Why] |
| Backend | [e.g., FastAPI + Python 3.12] | [Why] |
| Database | [e.g., PostgreSQL 16] | [Why] |
| Cache | [e.g., Redis / None for v1] | [Why] |
| Hosting | [e.g., Vercel + Railway] | [Why] |
| Auth | [e.g., JWT + httpOnly cookies] | [Why] |

---

## Component Design

<!-- One section per major component. Link to Definition requirements. -->

### Component: [e.g., Authentication Service]

**Implements:** D-001-F01, D-001-F02, D-001-N02

**Responsibilities:**
- [e.g., User registration and login]
- [e.g., Session management]
- [e.g., Password hashing and verification]

**Interface:**

```
POST /api/auth/signup
  Body: { email: string, password: string, name: string }
  Response: { user: User, token: string }
  Errors: 400 (validation), 409 (email exists)

POST /api/auth/login
  Body: { email: string, password: string }
  Response: { user: User, token: string }
  Errors: 401 (invalid credentials)

POST /api/auth/logout
  Headers: Authorization: Bearer <token>
  Response: { success: true }
```

**Data Model:**

```
User {
  id: UUID (primary key)
  email: string (unique, indexed)
  password_hash: string
  name: string
  role: enum [user, admin]
  created_at: timestamp
  updated_at: timestamp
}
```

---

### Component: [Next Component]

**Implements:** [Definition requirement IDs]

<!-- Repeat the structure above -->

---

## Interface Contracts

<!-- Define how components talk to each other. -->

### API Response Shape

All API endpoints return this shape:

```json
{
  "data": {},
  "error": null,
  "meta": { "timestamp": "...", "request_id": "..." }
}
```

### Error Response Shape

```json
{
  "data": null,
  "error": { "code": "VALIDATION_ERROR", "message": "Email is required", "details": [] }
}
```

### Authentication Contract

- All protected routes require `Authorization: Bearer <token>` header
- Tokens expire after [duration]
- Refresh mechanism: [describe or "none for v1"]

---

## Naming Conventions

| Context | Convention | Example |
|---------|-----------|---------|
| Files (components) | PascalCase | `UserProfile.tsx` |
| Files (utilities) | camelCase / snake_case | `formatDate.ts` / `format_date.py` |
| Database tables | snake_case, plural | `user_sessions` |
| API routes | kebab-case | `/api/user-profile` |
| Environment variables | SCREAMING_SNAKE | `DATABASE_URL` |
| CSS classes | [e.g., Tailwind utilities] | `text-sm font-bold` |
| Git branches | `type/short-description` | `feat/user-auth` |

---

## Development Standards

### Code Style

- [e.g., TypeScript strict mode enabled]
- [e.g., ESLint + Prettier with project config]
- [e.g., Ruff for Python formatting and linting]
- [e.g., No `any` types — always explicit]

### Error Handling

- All async operations wrapped in try/catch
- User-facing errors return the standard error shape above
- Internal errors logged with context, never exposed to client
- [e.g., Use custom error classes: `AppError`, `ValidationError`, `AuthError`]

### Testing Standards

- Unit tests for all utility functions
- Integration tests for API endpoints
- [e.g., Minimum 80% coverage on business logic]
- Test files colocated: `feature.ts` → `feature.test.ts`

### Git Workflow

- `main` — production, always deployable
- `staging` — pre-production testing
- Feature branches: `feat/description`, `fix/description`
- PR required for all merges to main
- [e.g., Squash merge only]

---

## Security Design

- [e.g., Passwords hashed with bcrypt, cost factor 12]
- [e.g., CORS restricted to known origins]
- [e.g., Rate limiting: 100 req/min per IP on auth endpoints]
- [e.g., Input validation on all endpoints using Zod/Pydantic]
- [e.g., SQL injection prevention via ORM — no raw queries]

---

## Design Decisions Log

<!-- Record WHY you chose an approach. This is institutional memory. -->

| Date | Decision | Options Considered | Choice | Reasoning |
|------|----------|-------------------|--------|-----------|
| YYYY-MM-DD | [e.g., Session storage] | [JWT vs. server sessions vs. cookies] | [JWT] | [Stateless, scales horizontally, no session store needed for v1] |

---

## Component Registry

<!-- Every named thing in the system. This replaces Resources.md from Level 2.
     AI agents: check here before creating anything new — avoid duplicate names. -->

| Component | Type | Location | Owner | Description |
|-----------|------|----------|-------|-------------|
| [e.g., AuthService] | Backend service | `src/api/auth/` | [Name] | Handles signup, login, token refresh |
| [e.g., UserProfile] | Frontend component | `src/components/UserProfile.tsx` | [Name] | Displays and edits user info |
| [e.g., users] | Database table | `src/db/schema.sql` | [Name] | User accounts |

---

## Design Review Checklist

- [ ] Every Definition requirement is mapped to a component
- [ ] All component interfaces are documented
- [ ] Data model covers all entities from Definition
- [ ] Naming conventions are consistent and documented
- [ ] Security considerations are addressed
- [ ] Error handling strategy is defined
- [ ] Git workflow is agreed upon
