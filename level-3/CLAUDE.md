# CLAUDE.md — 7D Framework (Level 3)

You are working on a complex project with seven phase folders, weekly sprints, and a shared fix log. Two loops — Product and Tech — are kept in sync through Documentation. Every phase has a dedicated folder with its own source-of-truth file.

## The Two Loops

```
PRODUCT LOOP                              TECH LOOP
01-discovery/ → 02-definition/ → 03-design/ → 05-development/ → 06-diagnostics/ → 07-deployment/
                        ↕                                    ↕
                  04-documentation/ (sync point)
                        ↕
                     Fix.md (shared error log)
```

## The 7D Files

| Folder | File | What It Contains | Read When | Update When |
|--------|------|-----------------|-----------|-------------|
| `01-discovery/` | DISCOVERY.md | Backlog by priority, out of scope, open questions, stakeholders | Starting a new feature | Adding or reprioritizing backlog items |
| `02-definition/` | DEFINITION.md | Per-item requirements, acceptance criteria, constraints, glossary | Before designing or coding any feature | Writing or approving requirements |
| `03-design/` | DESIGN.md | Architecture, components, interfaces, naming conventions, code standards, security | Before writing any code | Architecture changes, new components, design decisions |
| `04-documentation/` | DOCUMENTATION.md | Product Status Board, feature docs, architecture record, dependencies, changelog | Before and after any phase work | Every phase completion — this is the sync point |
| `05-development/` | INDEX.md + sprint-NN.md | Sprint schedule, active work, individual sprint tasks and logs | During coding | Every task update, error, dependency added |
| `06-diagnostics/` | DIAGNOSTICS.md | Test matrix, code quality checks, test run log, post-deploy verification, quality metrics | After coding, before and after deploy | Every test run, quality check, post-deploy verification |
| `07-deployment/` | DEPLOYMENT.md | Strategy, environments, checklists, deployment log, rollback procedure, infrastructure, versioning | When shipping | Every deployment |
| Root | Fix.md | Shared error log — open issues, resolved with root cause, common errors | When you hit ANY error | Every error and every fix |

## How You Work

**Before every task:**
1. Read your current sprint file in `05-development/sprint-NN.md` — find your assigned task
2. Read `02-definition/DEFINITION.md` — understand the requirements and acceptance criteria for that task
3. Read `03-design/DESIGN.md` — understand the architecture, component design, naming conventions, and code standards
4. Check `04-documentation/DOCUMENTATION.md` Status Board — confirm the feature has completed Design phase

**While coding:**
5. Follow Design naming conventions and code standards exactly. Don't invent patterns.
6. Log progress in the sprint file Development Log.
7. If you hit an error: check `Fix.md` first (both Resolved and Common Errors). If it's there, apply the known fix. If it's new, debug it, fix it, and log it in BOTH Fix.md (global) AND the sprint file (local).

**After coding:**
8. Update your task status in the sprint file
9. Run diagnostics per `06-diagnostics/DIAGNOSTICS.md` — update the test matrix and test run log
10. Update `04-documentation/DOCUMENTATION.md` Status Board with the current phase status
11. If deploying, follow `07-deployment/DEPLOYMENT.md` checklist exactly

## Phase Gates

These are hard rules. Do not skip phases.

- **No Definition without Discovery.** Every requirement must trace back to a Discovery backlog item.
- **No Design without Approved Definition.** Requirements must be status "Approved" before architecture work begins.
- **No Development without completed Design.** The component must be designed with interfaces and data models before coding starts.
- **No Deployment without Diagnostics passing.** All pre-deploy checks in DIAGNOSTICS.md must pass. No exceptions.

## Sprint Rules

- Each sprint is one week. One sprint file per week.
- Tasks come from the Product backlog via Definition and Design — not from your head.
- Only work on tasks in YOUR current sprint file. If you discover something else, add it to Discovery backlog, not your sprint.
- Log errors in BOTH Fix.md (global) AND the sprint file (local context).
- Sprint review happens at end of week — fill in the review section with what worked, what didn't, and action items.

## When You're Unsure

- **Requirements unclear?** Check DEFINITION.md constraints and acceptance criteria. Check DISCOVERY.md open questions. If still unclear, ask. Don't interpret.
- **Component might already exist?** Check DESIGN.md component list AND DOCUMENTATION.md architecture record AND the codebase. Don't duplicate.
- **Architecture decision needed?** Check DESIGN.md Design Decisions Log for precedent. If no precedent, pick simplest approach matching existing patterns, and log the decision.
- **Error you haven't seen?** Check Fix.md (Resolved + Common). If not there, debug, fix, log in Fix.md with root cause, fix, and lesson learned.
- **Diagnostics failing?** Check DIAGNOSTICS.md test run log for patterns. Check Fix.md for related errors. Don't deploy until all checks pass.
- **Conflict between phases?** Stop. Flag it. Documentation.md is the sync point — check there first.

## Don't

- Don't code without reading Definition + Design for the feature
- Don't skip Documentation updates after completing any phase work
- Don't fix errors silently — log in Fix.md AND sprint file, every time
- Don't add features not in the Discovery backlog
- Don't work on tasks outside your current sprint
- Don't install packages without documenting in sprint file and Design dependencies
- Don't deploy without Diagnostics passing — no exceptions
- Don't deviate from Design without updating DESIGN.md first and logging the decision
- Don't commit secrets or .env files
- Don't skip the sprint review at end of week
- Don't close a task without verifying its acceptance criteria from Definition

---

## Customizing This File For Your Project

This CLAUDE.md is a starter. Adapt it as your project grows:

**Add your project-specific phase steps.** Every project has unique workflows within each phase. If your Design phase requires generating OpenAPI specs, add that. If your Diagnostics includes load testing, add the command and the threshold.

**Expand the Don't list with stack-specific rules.** As the agent gets things wrong, capture the patterns here. For example: "Don't use `useState` for server data — use React Query" or "Don't write raw SQL — use Drizzle ORM" or "Don't create API routes outside `src/api/`."

**Add a Quick Reference section** with the commands you use constantly:
```
## Quick Reference
- Dev server: `npm run dev`
- Run all tests: `npm test`
- Run single test: `npm test -- --grep "auth"`
- Lint + fix: `npm run lint:fix`
- Database migration: `npx prisma migrate dev`
- Generate types: `npx prisma generate`
```

**Add cross-folder rules.** As you discover how the phases interact in your specific project, document it. For example: "When updating DESIGN.md components, always also update DOCUMENTATION.md architecture record" or "When a sprint task touches the database, run the migration before marking it done."

**Tune sprint scope.** If your team finds one week too short or too long for your domain, adjust the Sprint Rules. But err toward shorter — context degrades over time.

**Add team-specific conventions.** If specific team members own specific folders or components, document that here so the agent knows who to flag for reviews.
