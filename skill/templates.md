# SevenD — Template Structures Reference

This file contains the exact structure, sections, tables, and placeholder formats for every file at every level. When generating customized files for a user's project, follow these structures precisely — replacing `[placeholders]` with real content from the assessment.

---

## Level 1: Two Files

### Product.md

```markdown
# Product — [Project Name]

> What we're building and why. Discovery + Definition + Design in one file.

---

## Vision

[One paragraph: what the product does and who it's for]

---

## Backlog

| ID | Feature | Status | Priority |
|----|---------|--------|----------|
| P-001 | [Feature] | Todo | Must Have |
| P-002 | [Feature] | Todo | Should Have |
| P-003 | [Feature] | Todo | Nice to Have |

> Status: Todo → Building → Done
> Priority: Must Have / Should Have / Nice to Have

---

## Requirements

### P-001: [Feature Name]

**Acceptance Criteria:**
- [ ] [Criterion — testable, specific]
- [ ] [Criterion]

**Out of Scope:** [What this is NOT]

### P-002: [Feature Name]

**Acceptance Criteria:**
- [ ] [Criterion]

---

## Design Decisions

| Decision | Choice | Why |
|----------|--------|-----|
| [e.g., Database] | [e.g., SQLite] | [Good enough for prototype, zero config] |
| [e.g., Auth] | [e.g., JWT] | [Stateless, simple for v1] |

---

## Out of Scope

- [e.g., Mobile app — web only for v1]
- [e.g., Multi-language support]

---

## Related Files

- **Tech.md** — Stack, setup, testing, deployment, and fix log. Read Product.md first, then Tech.md.

## Changelog

| Date | Change |
|------|--------|
| YYYY-MM-DD | Product.md created |
```

### Tech.md

```markdown
# Tech — [Project Name]

> How we build, test, ship, and fix. Development + Diagnostics + Deployment in one file.
> Read **Product.md** first — it defines WHAT to build. This file defines HOW.

---

## Stack

| Layer | Choice | Version |
|-------|--------|---------|
| Language | [e.g., TypeScript] | [e.g., 5.x] |
| Framework | [e.g., Next.js] | [e.g., 14] |
| Database | [e.g., SQLite] | |
| Hosting | [e.g., Vercel] | |
| Package Manager | [e.g., npm] | |

---

## Project Structure

[Provide directory tree for the project's framework]

---

## Setup

\`\`\`bash
git clone [repo]
cd [project]
[install command]
cp .env.example .env
[dev command]
\`\`\`

---

## Environment Variables

| Variable | Purpose | Default |
|----------|---------|---------|
| `DATABASE_URL` | Database connection | `file:./dev.db` |

---

## Conventions

- [e.g., Functional components only]
- [e.g., Prisma for all DB access]
- [e.g., Zod for validation]

---

## Testing

| Test | Command | Last Run | Result |
|------|---------|----------|--------|
| [e.g., Unit] | [e.g., npm test] | | |
| [e.g., Lint] | [e.g., npm run lint] | | |
| [e.g., Build] | [e.g., npm run build] | | |

---

## Deployment

**Method:** [e.g., git push → Vercel auto-deploys]
**URL:** [production URL]

| Date | Version | Status | Notes |
|------|---------|--------|-------|
| | | | |

---

## Fix Log

### Open

| ID | Error | Cause | Status |
|----|-------|-------|--------|
| | | | |

### Resolved

| ID | Error | Cause | Fix | Date |
|----|-------|-------|-----|------|
| | | | | |

### Common Errors

| Error | Cause | Fix |
|-------|-------|-----|
| `ECONNREFUSED` | Database not running | Start DB service |

---

## Dependencies

| Package | Purpose | Version |
|---------|---------|---------|
| | | |
```

---

## Level 2: Four Files

### Product.md (Level 2)

Same header + Vision as Level 1, but the Backlog table gains a Feature Count column, and Requirements become more detailed:

```markdown
# Product — [Project Name]

> Discovery + Definition. What we're building, why, and the detailed requirements.
> AI agents: read this BEFORE writing any code.

## Vision
[One paragraph]

## Backlog

| ID | Feature | Status | Priority | Features |
|----|---------|--------|----------|----------|
| P-001 | [Feature] | Todo | Must Have | [count] |
| P-002 | [Feature] | Todo | Should Have | [count] |

> Status: Todo → Defining → Defined → Building → Done

## Requirements

### P-001: [Feature Name]

**Functional Requirements:**
- [ ] **P-001-F01:** [Requirement] → Acceptance: [How to verify]
- [ ] **P-001-F02:** [Requirement] → Acceptance: [How to verify]

**Non-functional Requirements:**
- [ ] **P-001-N01:** [Requirement] → Metric: [Measurable target]

**Edge Cases:**
- [What happens when X fails?]

### Open Questions

| ID | Question | Status | Decision |
|----|----------|--------|----------|
| Q-001 | [Question] | Open | |

### Glossary

| Term | Definition |
|------|-----------|
| [Term] | [What it means in this project] |

## Related Files

- **Architecture.md** — Stack, components, interfaces, naming conventions.
- **Resources.md** — Component registry, environments, dependencies.
- **Project.md** — Sprint tasks, diagnostics, deployment, fix log.

## Changelog

| Date | Change |
|------|--------|
| YYYY-MM-DD | Product.md created |
```

### Architecture.md (Level 2)

```markdown
# Architecture — [Project Name]

> Design. How we build it — stack, components, interfaces, and standards.
> AI agents: follow these conventions exactly. Don't deviate without updating this file first.
> Related: **Product.md** (what to build), **Resources.md** (component registry), **Project.md** (execution).

## Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Frontend | [e.g., Next.js 14 + TypeScript] | [Why] |
| Backend | [e.g., Next.js API Routes] | [Why] |
| Database | [e.g., PostgreSQL via Prisma] | [Why] |
| Auth | [e.g., NextAuth.js] | [Why] |
| Hosting | [e.g., Vercel] | [Why] |

## Components

### [Component Name] (implements P-001)

**Responsibilities:** [What it does]

**Interface:**
\`\`\`
[API endpoints, function signatures]
\`\`\`

**Data Model:**
\`\`\`
[Entity definitions, schema]
\`\`\`

## Naming Conventions

| Entity | Pattern | Example |
|--------|---------|---------|
| Components | PascalCase | `UserProfile` |
| Functions | camelCase | `getUserById` |
| API routes | kebab-case | `/api/user-profile` |
| Database tables | snake_case | `user_profiles` |
| Environment vars | SCREAMING_SNAKE | `DATABASE_URL` |

## API Contract

[Standard response shape, error format, auth headers]

## Code Standards

- [e.g., Always use async/await, never callbacks]
- [e.g., All errors must have error codes]

## Design Decisions Log

| Date | Decision | Options Considered | Choice | Reasoning |
|------|----------|-------------------|--------|-----------|
| YYYY-MM-DD | [Decision] | [Options] | [Choice] | [Why] |

## Security

- [e.g., bcrypt cost factor 12]
- [e.g., CORS restricted to known origins]
- [e.g., Rate limiting on auth endpoints]
- [e.g., Input validation via Zod/Pydantic]
```

### Resources.md (Level 2)

```markdown
# Resources — [Project Name]

> Technical assets that cut across both Product and Tech.
> Environments, infrastructure, dependencies, and the component registry.
> AI agents: check here for names, locations, and service details before asking or guessing.
> Related: **Architecture.md** (component designs), **Project.md** (sprint dependencies), **Product.md** (what we're building).

## Component Registry

| Component | Type | Location | Owner | Description |
|-----------|------|----------|-------|-------------|
| [Name] | [Frontend/Backend/DB/Service] | [path] | [Name] | [What it does] |

## Interactions

| From | To | Method | Purpose |
|------|----|--------|---------|
| [Component A] | [Component B] | [REST/import/event] | [Why] |

## Environments

| Name | URL | Purpose | Config |
|------|-----|---------|--------|
| Local | localhost:[port] | Development | .env |
| Production | [URL] | Live | [Provider env vars] |

## Infrastructure

| Service | Provider | Purpose | Cost |
|---------|----------|---------|------|
| [e.g., Hosting] | [e.g., Vercel] | App hosting | [Free] |

## Dependencies

| Package | Purpose | Version |
|---------|---------|---------|
| [package] | [why] | [ver] |

## Secrets

| Secret | Stored In | Used By |
|--------|-----------|---------|
| `DATABASE_URL` | [e.g., Vercel env vars] | App |

## External APIs

| API | Purpose | Auth Method | Rate Limit | Docs |
|-----|---------|-------------|------------|------|
| [API] | [Purpose] | [Key/OAuth] | [Limit] | [URL] |
```

### Project.md (Level 2)

```markdown
# Project — [Project Name]

> People, time, and execution. Development + Diagnostics + Deployment tracking.
> Who's doing what, sprint status, test results, deploy log, and error tracking.
> Related: **Product.md** (backlog + requirements), **Architecture.md** (design to follow), **Resources.md** (component registry).

## Team

| Name | Role | Focus |
|------|------|-------|
| [Name] | [Role] | [What they own] |

## Sprint [N] — [Goal]

**Dates:** [Start] → [End]

| Task | Owner | Product ID | Branch | Status | Notes |
|------|-------|------------|--------|--------|-------|
| [Task] | [Name] | P-001-F01 | `feat/xxx` | Todo | |

> Status: Todo → In Progress → Review → Done

### Sprint Review

- **Completed:** [count/total]
- **Carried over:** [items + why]
- **What went well:** [notes]
- **What didn't:** [notes]
- **Changes for next sprint:** [notes]

## Development Log

| Date | What | Who | Files | Notes |
|------|------|-----|-------|-------|
| YYYY-MM-DD | [What was done] | [Name] | [Files changed] | |

## Pre-Deploy Checks

| Check | Command | Last Result | Date |
|-------|---------|-------------|------|
| Lint | [command] | [Pass/Fail] | |
| Tests | [command] | [Pass/Fail] | |
| Build | [command] | [Pass/Fail] | |

## Test Coverage

| Product ID | Requirement | Test File | Status |
|-----------|-------------|-----------|--------|
| P-001-F01 | [Requirement] | [test path] | [Pass/Fail/None] |

## Deployment Log

| Date | Version | Environment | Status | Notes |
|------|---------|-------------|--------|-------|
| | | | | |

## Fix Log

### Open Issues

| ID | Severity | Error | Cause | Sprint |
|----|----------|-------|-------|--------|
| | | | | |

### Resolved

| ID | Error | Root Cause | Fix | Lesson | Date |
|----|-------|------------|-----|--------|------|
| | | | | | |

### Common Errors

| Error | Cause | Fix |
|-------|-------|-----|
| [error] | [cause] | [fix] |
```

---

## Level 3: Seven Folders + Fix.md

Level 3 distributes content into folders numbered 01 through 07. Each folder has a single primary markdown file. Sprint files are one-per-week.

### 01-discovery/DISCOVERY.md

Same as Level 2 Product.md backlog section, but with `D-` prefix IDs (D-001, D-002). Includes: Backlog table, Open Questions, Stakeholders, and Out of Scope.

### 02-definition/DEFINITION.md

Same requirements structure as Level 2, but each backlog item gets its own detailed spec. Uses D-001-F01 format. Includes: Functional requirements, non-functional requirements, edge cases, constraints, user stories, glossary.

### 03-design/DESIGN.md

Expands Level 2 Architecture.md. Adds:
- **Component Registry** (absorbs Resources.md from L2)
- Design Review Checklist
- More detailed data models and interface contracts

### 04-documentation/DOCUMENTATION.md

NEW at Level 3 — the bridge file. Contains the **Product Status Board**:

```markdown
| ID | Item | Discovery | Definition | Design | Development | Diagnostics | Deployment |
|----|------|-----------|------------|--------|-------------|-------------|------------|
| D-001 | [Item] | Done | Approved | Done | Sprint 1 | Pass | v0.1 |
| D-002 | [Item] | Done | In Progress | — | — | — | — |
```

Plus: Document Index, Team, Changelog.

### 05-development/INDEX.md

Sprint schedule table + dev setup + active work tracker + commands.

### 05-development/sprint-NN.md

```markdown
# Sprint [NN] — [Goal]

**Dates:** [Start] → [End]

## Tasks

| Task | Owner | Def ID | Branch | Status | Notes |
|------|-------|--------|--------|--------|-------|
| [Task] | [Name] | D-001-F02 | `feat/login` | Todo | |

## Daily Log

### YYYY-MM-DD
- [What happened]

## Sprint Review

- **Velocity:** [completed / planned]
- **Carried over:** [items + reason]
- **What went well:**
- **What didn't:**
- **Action items for next sprint:**
```

### 06-diagnostics/DIAGNOSTICS.md

Test matrix (mapping Definition IDs to tests), code quality checks, test run log, post-deploy health checks, issue tracking, quality metrics, checklists.

### 07-deployment/DEPLOYMENT.md

Deployment strategy, environments table, deployment checklist (before/during/after), deployment log, rollback procedure, infrastructure/services, domain/DNS, secrets management, release versioning.

### Fix.md

Shared error log: Open Issues table, Resolved section (with root cause, fix, failed attempts, lesson), Common Errors table.

---

## Level 4: GitHub-Native

Level 4 replaces markdown files with GitHub primitives. The templates below are YAML issue templates, a PR template, and Actions workflows.

### .github/ISSUE_TEMPLATE/discovery.yml

Issue template with fields: one-line summary (required), priority dropdown (Must Have / Should Have / Nice to Have), context textarea, out of scope, open questions, dependencies. Labels: `7d:discovery`, `status:backlog`.

### .github/ISSUE_TEMPLATE/definition.yml

Issue template with fields: discovery issue link (required), functional requirements as checkboxes (D-xxx-F01 format, required), non-functional requirements, user stories, constraints, edge cases. Labels: `7d:definition`, `status:defining`.

### .github/ISSUE_TEMPLATE/design.yml

Issue template with fields: definition issue link (required), component design (with interface and data model blocks, required), alternatives considered table, security considerations, testing strategy, design review checklist. Labels: `7d:design`, `status:designing`.

### .github/ISSUE_TEMPLATE/bug.yml

Issue template with fields: error message, steps to reproduce, expected vs actual behavior, environment, severity dropdown, related issues. Labels: `type:bug`.

### .github/PULL_REQUEST_TEMPLATE/default.md

```markdown
## What this PR does

<!-- One sentence. Link to the Definition issue. -->

Closes #

## 7D Checklist

### Definition → Design Gate
- [ ] Definition issue linked above
- [ ] Design issue exists and is approved
- [ ] Implementation matches the Design spec

### Development
- [ ] Code follows Architecture/Design conventions
- [ ] Branch named correctly (`feat/`, `fix/`, `chore/`)
- [ ] No hardcoded secrets or env values

### Diagnostics
- [ ] Tests written for new functionality
- [ ] All existing tests still pass
- [ ] Lint clean
- [ ] Build succeeds locally

### Documentation
- [ ] Component registered in Design issue or DESIGN.md (if new)
- [ ] API documentation updated (if applicable)
- [ ] README updated (if applicable)
```

### .github/workflows/diagnostics.yml

Runs on every PR to main/staging. Jobs: lint, test, build (each with commented-out blocks for Node.js and Python), plus a `diagnostics-gate` job that requires all three.

### .github/workflows/deploy.yml

Runs on push to main. Jobs: deploy (with commented-out blocks for Vercel, Railway, Docker), post-deploy health check, auto-tag release. Has concurrency group to prevent parallel deploys.

### scripts/setup-github.sh

Creates 18 labels (7d:discovery, 7d:definition, 7d:design, status:backlog, status:defining, status:designing, status:ready, status:in-progress, status:review, status:done, priority:must, priority:should, priority:nice, type:bug, type:feature, type:chore, type:docs, type:refactor) and 4 sprint milestones via `gh` CLI.

---

## IDE Rule Files

Every level ships with four IDE rule files. All follow the same structure adapted per level:

1. Context sentence → File map table → Before/While/After workflow → When Unsure → Don'ts → Customizing

**Formats:**
- **CLAUDE.md** — Plain markdown at project root
- **.cursor/rules/7d-framework.mdc** — Needs YAML frontmatter: `description`, `globs: "**/*"`, `alwaysApply: true`
- **.windsurf/rules/7d-framework.md** — Needs YAML frontmatter: `trigger: always_on`
- **.github/copilot-instructions.md** — Plain markdown in `.github/`

Cursor and Windsurf files should stay under 150 lines. CLAUDE.md can go up to 200-300 lines.

For stack-specific Don'ts to include in IDE rule files, see `ide-rules-format.md`.
