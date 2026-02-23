# Tech — [Project Name]

> How we build, test, ship, and fix. Development + Diagnostics + Deployment in one file.
> Read **Product.md** first — it defines WHAT to build. This file defines HOW.

---

## Stack

| Layer | Technology |
|-------|-----------|
| Language | [e.g., Python 3.12 / TypeScript] |
| Framework | [e.g., FastAPI / Next.js 14] |
| Database | [e.g., SQLite / PostgreSQL] |
| Hosting | [e.g., Vercel / Railway] |

## Project Structure

```
[project-name]/
├── Product.md          # What to build (read first)
├── Tech.md             # This file
├── src/                # Source code
│   ├── [app]/          # Routes / pages
│   ├── components/     # UI components
│   ├── lib/            # Utilities
│   └── db/             # Database
├── tests/              # Tests
└── .env.example        # Environment template
```

## Setup

```bash
# Install
[e.g., npm install / pip install -r requirements.txt]

# Environment
cp .env.example .env   # then edit with your values

# Database
[e.g., npx prisma migrate dev]

# Run
[e.g., npm run dev / uvicorn main:app --reload]
```

## Environment Variables

| Variable | Purpose | Required |
|----------|---------|----------|
| `DATABASE_URL` | Database connection | Yes |
| `SECRET_KEY` | Token signing | Yes |

## Conventions

- [e.g., All API routes return { data, error }]
- [e.g., try/catch on all async operations]
- [e.g., Tests colocated: feature.test.ts]

**Don't:**
- Don't commit .env or secrets
- Don't install packages without noting them here
- Don't skip error handling

## Testing

```bash
[e.g., npm test / pytest]
```

| Date | What Tested | Result |
|------|------------|--------|
| | | |

## Deployment

```bash
# Build check
[e.g., npm run build && npm test]

# Deploy
[e.g., git push origin main]

# Verify
[e.g., curl https://your-app.com/api/health]
```

| Environment | URL | Branch |
|-------------|-----|--------|
| Local | localhost:[port] | any |
| Production | [URL] | main |

## Fix Log

<!-- Log every error and fix. Check here before debugging — it may already be solved. -->

| Date | Error | Cause | Fix |
|------|-------|-------|-----|
| | | | |

## Dependencies

| Package | Purpose | Added |
|---------|---------|-------|
| | | |
