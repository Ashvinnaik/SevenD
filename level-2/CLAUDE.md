# CLAUDE.md — 7D Framework (Level 2)

You are working on a real project with four source-of-truth files. These files define everything — requirements, architecture, resources, and execution. Read all four before starting work. Check them constantly during work.

## The Four Files

| File | Contains | Read When | Update When |
|------|----------|-----------|-------------|
| `Product.md` | Vision, backlog by priority, detailed requirements per item, acceptance criteria, open questions, glossary | Before any work on a feature | Completing items, adding requirements, resolving open questions |
| `Architecture.md` | Stack with rationale, component designs with interfaces and data models, naming conventions, API contracts, code standards, security, design decisions log | Before writing any code | Adding or changing components, interfaces, conventions, or design decisions |
| `Resources.md` | Component registry, interaction map, environments, infrastructure, dependencies, secrets locations, external APIs | Before creating anything, installing anything, or looking up anything | Adding components, packages, services, env vars, or infrastructure |
| `Project.md` | Team, current sprint with tasks, development log, diagnostics checks, test coverage, deployment log, fix log (open + resolved + common) | During all work | Every task update, test run, deploy, error, and sprint review |

## How You Work

**Before every task:**
1. Read `Product.md` — find the backlog item, read its full requirements and acceptance criteria
2. Read `Architecture.md` — understand the component design, interfaces, and code standards
3. Check `Resources.md` — look up component names, locations, packages, and env vars
4. Read the current sprint in `Project.md` — confirm the task is assigned and in scope

**While building:**
5. Follow Architecture.md naming conventions and code standards exactly. Don't invent patterns.
6. Check Resources.md before creating any new component, installing any package, or using any env var. If it exists, use the existing name. If it's new, register it.
7. Check the Fix Log in Project.md before debugging. The answer may already exist.
8. Log progress in Project.md Development Log as you work.

**After building:**
9. Update the sprint task status in Project.md
10. Run diagnostics per Project.md Pre-Deploy Checks
11. Update test coverage in Project.md for the requirements you implemented
12. Update Product.md backlog status (Todo → Defining → Defined → Building → Done)

## Key Rules

**Resources.md is the registry.** Before creating a new component, check if it exists. Before installing a package, check if it's listed. Before guessing an env var name, look it up. If you add something new, register it immediately — name, type, location, owner.

**Architecture.md is the law.** Follow the naming conventions table exactly. Follow the API contract shape exactly. Follow the code standards. If you need to deviate, update Architecture.md first and log it in the Design Decisions Log, then code.

**Sprint scope is sacred.** Only work on tasks in the current sprint in Project.md. If you discover something else that needs doing, note it but don't build it — add it to the backlog in Product.md for the next sprint.

## When You're Unsure

- **Requirements ambiguous?** Check Product.md Open Questions first. If not answered, ask. Don't interpret loosely.
- **Component might already exist?** Search Resources.md registry AND the codebase. Don't create duplicates.
- **Multiple architectural approaches?** Check Architecture.md Design Decisions Log for precedent. If no precedent, pick the simplest approach that matches existing patterns, and log the decision.
- **Error you haven't seen before?** Check Project.md Fix Log (both Resolved and Common Errors). If not there, debug, fix, and log it — root cause, fix, and lesson learned.
- **Something conflicts with the architecture?** Stop and flag it. Don't silently work around it.

## Don't

- Don't code without reading Product.md and Architecture.md first
- Don't create components without registering them in Resources.md
- Don't install packages without adding to Resources.md Dependencies
- Don't fix errors silently — every error goes in Project.md Fix Log with root cause and fix
- Don't deviate from Architecture.md naming or API contracts without updating the file first
- Don't work on tasks outside the current sprint
- Don't guess at env var names — look them up in Resources.md
- Don't duplicate existing components — check Resources.md registry and the Interactions table
- Don't commit .env files or secrets
- Don't close a task without verifying its acceptance criteria from Product.md

---

## Customizing This File For Your Project

This CLAUDE.md is a starter. Adapt it as your project takes shape:

**Add your project-specific workflow steps.** If your project has a specific test command, database migration step, or build process, add it to the "While building" or "After building" sections so the agent runs it automatically.

**Expand the Don't list.** As you discover patterns the agent keeps getting wrong — specific to your stack, your codebase, your conventions — add them. For example: "Don't use raw SQL — always use the Prisma client" or "Don't import from `@/internal` — that's server-only."

**Add a Quick Reference section.** Once your project is running, add common commands:
```
## Quick Reference
- Dev server: `npm run dev`
- Run tests: `npm test`
- Lint: `npm run lint`
- Database migration: `npx prisma migrate dev`
```

**Add file-specific instructions.** If certain files or directories have special rules (e.g., "never edit `src/generated/`" or "all API routes must use the `withAuth` wrapper"), add a "File Rules" section.

**Tune the "When You're Unsure" section.** Replace the generic advice with your project's actual decision-making patterns. If your team prefers the agent to always ask before adding dependencies, say so explicitly.
