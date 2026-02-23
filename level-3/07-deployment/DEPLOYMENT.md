# 07 — Deployment

> Ship it. This phase moves verified code from Development into production.
> Input: Code that passed Diagnostics. Output: Running software accessible to users.

---

## Deployment Strategy

<!-- How does code get from a developer's machine to production? -->

**Approach:** [e.g., Git push to main triggers auto-deploy via Vercel / Manual deploy via Docker / CI/CD pipeline]

```
Developer → PR → Review → Merge to main → [Auto/Manual] → Staging → Production
```

---

## Environments

| Environment | URL | Branch | Infra | Database | Deploy Method |
|-------------|-----|--------|-------|----------|---------------|
| Local | `localhost:[port]` | any | Local machine | [SQLite] | `npm run dev` |
| Staging | [URL] | `staging` | [e.g., Vercel Preview] | [e.g., PostgreSQL] | [Auto on push] |
| Production | [URL] | `main` | [e.g., Vercel] | [e.g., PostgreSQL] | [Auto on merge] |

---

## Deployment Checklist

### Before Every Deploy

- [ ] All Diagnostics checks passed (see 06-diagnostics)
- [ ] Feature branch merged to target branch
- [ ] Environment variables set in target environment
- [ ] Database migrations ready (if any)
- [ ] No open critical issues in Fix.md

### During Deploy

```bash
# Step 1: Run pre-deploy checks
[e.g., npm run build && npm test]

# Step 2: Deploy
[e.g., git push origin main]
[e.g., docker compose up -d --build]
[e.g., railway up]

# Step 3: Run database migrations (if needed)
[e.g., npx prisma migrate deploy]

# Step 4: Verify health
[e.g., curl https://your-app.com/api/health]
```

### After Deploy

- [ ] Health checks passing (see 06-diagnostics Post-Deploy checklist)
- [ ] Smoke test critical flows
- [ ] Check error logs for new errors
- [ ] Update Documentation (04) Status Board
- [ ] Tag the release in git

---

## Deployment Log

<!-- Record every deployment. Newest at top. -->

```markdown
### YYYY-MM-DD — v[X.Y.Z] → [Environment]

**Deployer:** [Human / Agent name]
**Features:** [List of Definition IDs included]
**Migrations:** [Yes (describe) / No]
**Status:** [Success / Rolled Back]
**Post-deploy check:** [Pass / Issues found]

**Notes:**
[Anything notable about this deploy]
```

---

## Rollback Procedure

If a deployment causes issues:

```bash
# Option 1: Revert the merge commit
git revert [commit-hash]
git push origin main

# Option 2: Deploy previous version
[e.g., vercel rollback]
[e.g., docker compose up -d --build previous-tag]

# Option 3: Feature flag (if applicable)
[Disable the feature flag for the broken feature]
```

**After rollback:**
1. Log the issue in Fix.md with severity Critical
2. Update Deployment Log above with "Rolled Back" status
3. Update Documentation (04) Status Board
4. Investigate root cause before redeploying

---

## Infrastructure

### Services

| Service | Provider | Purpose | Cost | Docs |
|---------|----------|---------|------|------|
| [e.g., Hosting] | [e.g., Vercel] | App hosting | [Free / $X/mo] | [link] |
| [e.g., Database] | [e.g., Supabase] | PostgreSQL | [Free / $X/mo] | [link] |
| [e.g., Email] | [e.g., Resend] | Transactional email | [Free / $X/mo] | [link] |

### Domain and DNS

| Domain | Provider | Points To | SSL |
|--------|----------|-----------|-----|
| [e.g., app.example.com] | [e.g., Cloudflare] | [e.g., Vercel CNAME] | [Auto / Manual] |

---

## Secrets Management

<!-- WHERE secrets are stored, never the secrets themselves. -->

| Secret | Stored In | Used By | Rotation |
|--------|-----------|---------|----------|
| `DATABASE_URL` | [e.g., Vercel env vars] | App | On change |
| `SECRET_KEY` | [e.g., Vercel env vars] | Auth | Never / Annually |
| `API_KEY` | [e.g., Vercel env vars] | [Service] | On expiry |

---

## Release Versioning

**Format:** Semantic versioning — `MAJOR.MINOR.PATCH`

- **MAJOR**: Breaking changes to user-facing features
- **MINOR**: New features, backward compatible
- **PATCH**: Bug fixes

**Tagging:**
```bash
git tag -a v1.0.0 -m "Initial release"
git push origin v1.0.0
```
