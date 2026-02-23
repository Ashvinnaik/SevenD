# 06 — Diagnostics

> Does it work? Does it meet the Definition? This phase verifies Development output against requirements.
> Two sub-phases: Pre-Deployment (code quality) and Post-Deployment (production health).
> Input: Code from Development. Output: Verified software ready for Deployment, or issues sent back to Development.

---

## Pre-Deployment Diagnostics

### Test Matrix

<!-- Map each Definition requirement to its verification method. -->

| Definition ID | Requirement | Test Type | Test File/Location | Status | Last Run |
|--------------|-------------|-----------|-------------------|--------|----------|
| D-001-F01 | User registration | Integration | `tests/integration/auth.test.ts` | Pass | YYYY-MM-DD |
| D-001-F02 | User login | Integration | `tests/integration/auth.test.ts` | Pass | YYYY-MM-DD |
| D-001-N01 | Login < 500ms | Performance | `tests/perf/auth-perf.test.ts` | Not Run | — |
| D-001-N02 | Password bcrypt | Unit | `tests/unit/auth.test.ts` | Pass | YYYY-MM-DD |

### Code Quality Checks

| Check | Command | Last Result | Date |
|-------|---------|-------------|------|
| Lint | `[e.g., npm run lint]` | [Pass/Fail] | |
| Type check | `[e.g., npx tsc --noEmit]` | [Pass/Fail] | |
| Unit tests | `[e.g., npm test]` | [X/Y passing] | |
| Integration tests | `[e.g., npm run test:integration]` | [X/Y passing] | |
| Build | `[e.g., npm run build]` | [Pass/Fail] | |
| Security scan | `[e.g., npm audit]` | [X vulnerabilities] | |

### Test Run Log

<!-- Record each test run. Newest at top. -->

```markdown
### YYYY-MM-DD — [Pre-deploy check for D-001]

**Runner:** [Human / Agent name]
**Scope:** [Which features tested]

| Test Suite | Pass | Fail | Skip | Duration |
|-----------|------|------|------|----------|
| Unit | | | | |
| Integration | | | | |

**Issues Found:**
- [Issue description → logged in Fix.md as ISSUE-XXX]

**Verdict:** [Ready for Deployment / Needs Fixes]
```

---

## Post-Deployment Diagnostics

### Health Checks

| Check | Endpoint/Method | Expected | Frequency |
|-------|----------------|----------|-----------|
| App health | `GET /api/health` | 200 OK | Every deploy |
| Database | `GET /api/health/db` | Connected | Every deploy |
| Auth flow | Manual signup + login | Success | Every deploy |
| [Critical path] | [Describe] | [Expected] | [When] |

### Post-Deploy Verification Log

```markdown
### YYYY-MM-DD — [Deployment version X.Y.Z]

**Deployer:** [Human / Agent name]
**Environment:** [Staging / Production]

| Check | Result | Notes |
|-------|--------|-------|
| App loads | [Pass/Fail] | |
| Health endpoint | [Pass/Fail] | |
| Auth flow | [Pass/Fail] | |
| [Critical path] | [Pass/Fail] | |

**Issues Found:**
- [Issue → logged in Fix.md / rolled back]

**Verdict:** [Healthy / Degraded / Rolled Back]
```

---

## Issue Tracking

<!-- When Diagnostics finds problems, they go here AND in Fix.md -->

### Open Issues (from Diagnostics)

| Issue ID | Found In | Severity | Description | Fix.md Link | Status |
|----------|----------|----------|-------------|-------------|--------|
| DIAG-001 | Pre-deploy | [Sev] | [Description] | [Fix.md ISSUE-XXX] | [Open/Fixing/Resolved] |

### Resolved Issues

| Issue ID | Found | Resolved | Root Cause | Time to Fix |
|----------|-------|----------|------------|-------------|
| | | | | |

---

## Quality Metrics

<!-- Track quality trends over time. -->

| Metric | Target | Current | Trend |
|--------|--------|---------|-------|
| Test coverage | [e.g., > 80%] | [e.g., 72%] | [Up/Down/Stable] |
| Build time | [e.g., < 60s] | [e.g., 45s] | |
| Open bugs | [e.g., 0 critical] | [e.g., 0] | |
| Lint warnings | 0 | [count] | |

---

## Diagnostics Checklist

### Pre-Deployment

- [ ] All Definition requirements have at least one test
- [ ] All tests passing
- [ ] Lint clean, no warnings
- [ ] Build succeeds
- [ ] Security scan clean (no critical/high vulnerabilities)
- [ ] Performance acceptable (if NFRs defined)
- [ ] Documentation (04) updated with feature docs
- [ ] Fix.md updated with any issues found and resolved

### Post-Deployment

- [ ] Health checks passing
- [ ] Critical user flows verified manually
- [ ] No new errors in logs
- [ ] Performance within acceptable range
- [ ] Documentation (04) Status Board updated to "Deployed"
