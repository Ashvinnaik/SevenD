# Resources — [Project Name]

> Technical assets that cut across both Product and Tech.
> Environments, infrastructure, dependencies, and the component registry.
> AI agents: check here for names, locations, and service details before asking or guessing.
> Related: **Architecture.md** (component designs), **Project.md** (sprint dependencies), **Product.md** (what we're building).

---

## Component Registry

<!-- Every named thing in the system. Reduces duplicate names and keeps agents aligned. -->

| Component | Type | Location | Owner | Description |
|-----------|------|----------|-------|-------------|
| [e.g., AuthService] | Backend service | `src/api/auth/` | [Name] | Handles signup, login, token refresh |
| [e.g., UserProfile] | Frontend component | `src/components/UserProfile.tsx` | [Name] | Displays and edits user info |
| [e.g., users] | Database table | `src/db/schema.sql` | [Name] | User accounts |
| [e.g., /api/auth/*] | API routes | `src/api/auth/` | [Name] | Authentication endpoints |

---

## Interactions

<!-- How components talk to each other. Prevents agents from creating duplicate connections. -->

| From | To | Method | Purpose |
|------|----|--------|---------|
| [UserProfile] | [/api/auth/me] | GET | Fetch current user |
| [LoginForm] | [/api/auth/login] | POST | Authenticate user |
| [AuthService] | [users table] | SQL via ORM | Read/write user records |
| [AuthService] | [EmailService] | Function call | Send confirmation email |

---

## Environments

| Environment | URL | Database | Services | Notes |
|-------------|-----|----------|----------|-------|
| Local | `localhost:[port]` | [SQLite / local Postgres] | [List running services] | Dev only |
| Staging | [URL] | [Connection string location] | [List] | Preview deploys |
| Production | [URL] | [Connection string location] | [List] | Live |

**Environment Variables Location:**
- Local: `.env` file (never committed)
- Staging: [e.g., Vercel dashboard → Settings → Environment]
- Production: [e.g., Vercel dashboard → Settings → Environment]

---

## Infrastructure

| Service | Provider | Purpose | Tier | Monthly Cost | Dashboard |
|---------|----------|---------|------|-------------|-----------|
| [Hosting] | [e.g., Vercel] | App hosting | [Free / Pro] | [$0] | [URL] |
| [Database] | [e.g., Supabase] | PostgreSQL | [Free] | [$0] | [URL] |
| [Email] | [e.g., Resend] | Transactional email | [Free] | [$0] | [URL] |
| [Auth] | [e.g., Self-hosted] | JWT tokens | — | $0 | — |

---

## Dependencies

<!-- Every package and why it's here. AI agents: check before installing anything new. -->

| Package | Purpose | Added | Required By |
|---------|---------|-------|-------------|
| [e.g., bcrypt] | Password hashing | YYYY-MM-DD | AuthService |
| [e.g., zod] | Input validation | YYYY-MM-DD | All API routes |
| [e.g., tailwindcss] | Styling | YYYY-MM-DD | All components |

---

## Secrets

<!-- WHERE secrets are stored, never the secrets themselves. -->

| Secret | Stored In | Used By | Rotate |
|--------|-----------|---------|--------|
| `DATABASE_URL` | .env / Vercel | App | On change |
| `SECRET_KEY` | .env / Vercel | AuthService | Annually |
| `RESEND_API_KEY` | .env / Vercel | EmailService | On expiry |

---

## Domain and DNS

| Domain | Provider | Points To | SSL |
|--------|----------|-----------|-----|
| [e.g., app.example.com] | [e.g., Cloudflare] | [e.g., Vercel] | Auto |

---

## External APIs

| API | Purpose | Auth Method | Rate Limit | Docs |
|-----|---------|-------------|------------|------|
| [e.g., Resend] | Email sending | API key | 100/day free | [URL] |
