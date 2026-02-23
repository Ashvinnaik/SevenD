# 04 — Documentation

> The bridge between the Product Loop and the Tech Loop.
> This file tracks what needs to be built, what IS built, and how it works.
> Updated continuously by both loops to stay in sync.

---

## How This File Works

Documentation is the sync point between two loops:

```
PRODUCT LOOP                    TECH LOOP
Discovery → Definition → Design → Development → Diagnostics → Deployment
                    \                              /
                     ←——— Documentation ———→
```

The Product Loop (Discovery, Definition, Design) feeds requirements INTO Documentation.
The Tech Loop (Development, Diagnostics, Deployment) feeds status BACK into Documentation.
Both loops read Documentation to stay aligned.

---

## Product Status Board

<!-- What needs to be built, what's in progress, what's done. Single view of truth. -->

| ID | Feature | Definition | Design | Development | Diagnostics | Deployed | Notes |
|----|---------|-----------|--------|-------------|-------------|----------|-------|
| D-001 | [e.g., User Auth] | Approved | Done | In Progress | — | — | |
| D-002 | [e.g., Dashboard] | Approved | In Progress | — | — | — | Blocked by D-001 |
| D-003 | [e.g., CSV Export] | Draft | — | — | — | — | |

**Status values:** — (not started), Draft, In Progress, Done, Approved, Blocked, Deployed

---

## Feature Documentation

<!-- For each completed feature, document how it works. This is the user/developer manual. -->

### [Feature Name] (D-001)

**What it does:** [One sentence]

**How it works:**
[Brief description of the user flow and technical implementation]

**API Endpoints:** [If applicable]
- `POST /api/auth/signup` — Create account
- `POST /api/auth/login` — Get session token

**Configuration:**
- Requires `SECRET_KEY` env var
- Token expiry: 24 hours

**Known Limitations:**
- [e.g., No password reset yet — see D-015]
- [e.g., OAuth not supported — see D-020]

---

## Architecture Record

<!-- Living document of how the system is actually built (not how it was designed — that's in 03-design). -->

### Current Architecture

```
[Update this diagram as the system evolves]
```

### System Dependencies

| Dependency | Purpose | Version | Critical |
|-----------|---------|---------|----------|
| [e.g., PostgreSQL] | Primary database | 16 | Yes |
| [e.g., Redis] | Cache | 7.2 | No |
| [e.g., SendGrid] | Email | API v3 | Yes |

### Environment Configuration

| Environment | URL | Branch | Database | Notes |
|-------------|-----|--------|----------|-------|
| Local | `localhost:3000` | any | SQLite | Dev only |
| Staging | [URL] | `staging` | PostgreSQL | Testing |
| Production | [URL] | `main` | PostgreSQL | Live |

---

## Changelog

<!-- Major changes to the product. Newest at top. Links back to the D that drove the change. -->

| Date | Version | Change | Driven By |
|------|---------|--------|-----------|
| YYYY-MM-DD | 0.1.0 | Initial release with auth and dashboard | D-001, D-002 |

---

## Sync Checklist

Run this checklist when updating Documentation from either loop:

**From Product Loop:**
- [ ] New Discovery items reflected in Product Status Board
- [ ] Definition approvals update the Status Board
- [ ] Design completions update the Status Board

**From Tech Loop:**
- [ ] Development progress reflected in Status Board
- [ ] Diagnostics results noted (pass/fail)
- [ ] Deployment status updated
- [ ] Feature documentation written for completed features
- [ ] Known limitations documented
