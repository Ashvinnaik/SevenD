# D7-Sprint1 — [Goal]

**Phase:** Deployment
**Status:** [Active / Closed]
**Opened:** [YYYY-MM-DD]
**Closed:** [YYYY-MM-DD]

---

## Sprint Goal

[One paragraph. What is being deployed and where?]

---

## Build

<!-- Deployment work this sprint. -->

### Pre-Deploy Checklist

- [ ] All Diagnostics checks passed
- [ ] Feature branch merged to target
- [ ] Environment variables set
- [ ] Database migrations ready (if any)
- [ ] No open critical bugs

### Deploy Steps

```bash
# Step 1: Pre-deploy checks
[e.g., npm run build && npm test]

# Step 2: Deploy
[e.g., git push origin main]

# Step 3: Migrations (if needed)
[e.g., npx prisma migrate deploy]

# Step 4: Verify
[e.g., curl https://your-app.com/api/health]
```

### Post-Deploy Verification

| Check | Result | Notes |
|-------|--------|-------|
| App loads | [Pass / Fail] | |
| Health endpoint | [Pass / Fail] | |
| Auth flow | [Pass / Fail] | |
| [Critical path] | [Pass / Fail] | |

### Rollback Plan

```bash
# If something breaks:
[e.g., git revert [hash] && git push]
```

---

## Bug

<!-- Post-deploy issues. Sprint closes at zero. -->

| ID | Description | Severity | Status | Resolution |
|----|-------------|----------|--------|------------|
| | | [Critical / High / Medium / Low] | [Open / Fixed / Rolled Back] | |

**Open bugs: [0]** — Sprint closes when this hits zero.

---

## Sprint Report

<!-- Fill on close. -->

**Deployed:** [Version] → [Environment]
**Post-deploy status:** [Healthy / Degraded / Rolled Back]
**Bugs found post-deploy:** [N]
**Duration:** [X days]
**Key learning:** [One sentence]
