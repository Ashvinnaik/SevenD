# Project — [Project Name]

> People, time, and execution. Development + Diagnostics + Deployment tracking.
> Who's doing what, sprint status, test results, deploy log, and error tracking.
> Related: **Product.md** (backlog + requirements), **Architecture.md** (design to follow), **Resources.md** (component registry).

---

## Team

| Role | Name | Focus Area | Availability |
|------|------|-----------|--------------|
| [e.g., Lead] | [Name or AI Agent] | Full stack | [Hours/week] |
| [e.g., Frontend] | [Name or AI Agent] | UI components | |
| [e.g., Backend] | [Name or AI Agent] | API + DB | |

---

## Current Sprint

**Sprint:** [Number] | **Dates:** [Start] → [End] | **Goal:** [One sentence]

| Task | Assigned To | Product ID | Branch | Status | Notes |
|------|-------------|-----------|--------|--------|-------|
| [e.g., Build login API] | [Name] | P-001-F02 | `feat/login` | [Todo / In Progress / Review / Done] | |
| [e.g., Build signup form] | [Name] | P-001-F01 | `feat/signup` | | |

### Sprint Retrospective

<!-- Fill in at end of sprint -->

**What went well:** [Summary]
**What didn't:** [Summary]
**Action items:** [What to change next sprint]

---

## Sprint History

<!-- One entry per completed sprint. Newest at top. -->

<!--
### Sprint [N] — [Dates]
**Goal:** [What we aimed to do]
**Outcome:** [What actually happened]
**Velocity:** [Tasks completed / tasks planned]
-->

---

## Development Log

| Date | What | Who | Product ID | PR/Commit | Status |
|------|------|-----|-----------|-----------|--------|
| | | | | | |

---

## Diagnostics

### Pre-Deploy Checks

| Check | Command | Last Result | Date |
|-------|---------|-------------|------|
| Lint | [e.g., `npm run lint`] | | |
| Types | [e.g., `npx tsc --noEmit`] | | |
| Tests | [e.g., `npm test`] | | |
| Build | [e.g., `npm run build`] | | |

### Test Coverage

| Product ID | Requirement | Has Test | Last Result |
|-----------|-------------|----------|-------------|
| P-001-F01 | User registration | [Yes/No] | [Pass/Fail] |
| P-001-F02 | User login | | |

---

## Deployment Log

<!-- Newest at top -->

| Date | Version | Environment | Deployer | Features | Status |
|------|---------|-------------|----------|----------|--------|
| | | | | | |

### Rollback Procedure

```bash
[e.g., git revert <hash> && git push origin main]
```

---

## Fix Log

<!-- Every error and fix. Check here before debugging — it may already be solved. -->

### Open Issues

| ID | Severity | Description | Found In | Attempts |
|----|----------|-------------|----------|----------|
| | | | | |

### Resolved

| ID | Error | Root Cause | Fix | Date Fixed | Lesson |
|----|-------|------------|-----|------------|--------|
| | | | | | |

### Common Errors

| Error | Cause | Fix |
|-------|-------|-----|
| `ECONNREFUSED` | Database not running | Start DB service |
| `401 Unauthorized` | Token expired | Re-authenticate |
| `Module not found` | Missing dependency | Run install |
