# Architecture — [Project Name]

> Design. How we build it — stack, components, interfaces, and standards.
> AI agents: follow these conventions exactly. Don't deviate without updating this file first.
> Related: **Product.md** (what to build), **Resources.md** (component registry), **Project.md** (execution).

---

## Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Frontend | [e.g., Next.js 14 + TypeScript] | [Why] |
| Backend | [e.g., FastAPI + Python 3.12] | [Why] |
| Database | [e.g., SQLite for v1] | [Why] |
| Auth | [e.g., JWT + httpOnly cookies] | [Why] |
| Hosting | [e.g., Vercel] | [Why] |
| CSS | [e.g., Tailwind CSS] | [Why] |

---

## Components

### [Component Name] (implements P-001)

**Responsibilities:** [What it does]

**Interface:**
```
POST /api/auth/signup
  Body: { email, password, name }
  Returns: { data: { user, token }, error: null }

POST /api/auth/login
  Body: { email, password }
  Returns: { data: { user, token }, error: null }
```

**Data Model:**
```
User {
  id: UUID
  email: string (unique)
  password_hash: string
  name: string
  created_at: timestamp
}
```

---

### [Next Component] (implements P-002)

<!-- Repeat structure above -->

---

## Naming Conventions

| Context | Convention | Example |
|---------|-----------|---------|
| Components | PascalCase | `UserProfile.tsx` |
| Utilities | camelCase | `formatDate.ts` |
| Database tables | snake_case plural | `user_sessions` |
| API routes | kebab-case | `/api/user-profile` |
| Env vars | SCREAMING_SNAKE | `DATABASE_URL` |
| Git branches | type/description | `feat/user-auth` |

---

## API Contract

**Success:** `{ "data": { ... }, "error": null }`
**Error:** `{ "data": null, "error": { "code": "...", "message": "..." } }`

All protected routes: `Authorization: Bearer <token>`

---

## Code Standards

- [e.g., TypeScript strict mode, no `any`]
- [e.g., All async operations in try/catch]
- [e.g., No inline SQL — use the ORM]
- [e.g., Test files colocated: `feature.test.ts`]

**Don't:**
- Don't use inline styles — use Tailwind
- Don't skip input validation
- Don't commit secrets or .env
- Don't deviate from this architecture without updating this file

---

## Design Decisions Log

| Date | Decision | Options Considered | Choice | Why |
|------|----------|--------------------|--------|-----|
| YYYY-MM-DD | [e.g., Session storage] | [JWT vs server sessions] | JWT | [Stateless, no session store] |

---

## Security

- [e.g., bcrypt cost factor 12]
- [e.g., CORS restricted to known origins]
- [e.g., Rate limiting on auth endpoints]
- [e.g., Input validation via Zod/Pydantic]
