# Architecture — [Project Name]

> System architecture reference. Updated when architecture changes, not every sprint.
> Source: Design sprints produce architecture decisions that land here.

---

## Architecture Overview

```
[Client / Frontend]
        |
   [API Gateway]
        |
  [Application Layer]
     /     \
[Database]  [External Services]
```

---

## Technology Stack

| Layer | Choice | Rationale | Since |
|-------|--------|-----------|-------|
| Frontend | [e.g., Next.js 14 + TypeScript] | [Why] | [Design sprint] |
| Backend | [e.g., FastAPI + Python 3.12] | [Why] | |
| Database | [e.g., PostgreSQL 16] | [Why] | |
| Cache | [e.g., Redis / None for v1] | [Why] | |
| Hosting | [e.g., Vercel + Railway] | [Why] | |
| Auth | [e.g., JWT + httpOnly cookies] | [Why] | |

---

## System Dependencies

| Dependency | Purpose | Version | Critical |
|-----------|---------|---------|----------|
| [e.g., PostgreSQL] | Primary database | 16 | Yes |

---

## Security Architecture

- [e.g., Passwords hashed with bcrypt, cost factor 12]
- [e.g., CORS restricted to known origins]
- [e.g., Rate limiting on auth endpoints]
- [e.g., Input validation via Zod/Pydantic]

---

## Infrastructure

### Services

| Service | Provider | Purpose | Cost |
|---------|----------|---------|------|
| [e.g., Hosting] | [e.g., Vercel] | App hosting | [Free / $X/mo] |

### Domain and DNS

| Domain | Provider | Points To | SSL |
|--------|----------|-----------|-----|
| [e.g., app.example.com] | [e.g., Cloudflare] | [CNAME] | Auto |

### Secrets

<!-- WHERE secrets live. Never the values. -->

| Secret | Stored In | Used By | Rotation |
|--------|-----------|---------|----------|
| `DATABASE_URL` | [e.g., Vercel env vars] | App | On change |
