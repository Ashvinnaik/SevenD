# 7D Framework — Level 4: GitHub-Native (April Release)

The 7D workflow running on GitHub primitives plus a `reference/` directory for stable docs.

## How It Works

GitHub features handle workflow. Reference docs handle institutional memory.

```
WORKFLOW (GitHub)                         REFERENCE (Markdown)
Issues (Discovery, Definition, Design)   reference/ARCHITECTURE.md
PRs + Branches (Development)             reference/COMPONENTS.md
Actions CI (Diagnostics)                 reference/CONTRACTS.md
Actions CD (Deployment)                  reference/DECISIONS.md
Projects Board (Documentation/Status)    reference/AGENT.md
Milestones (Sprints)                     reference/archive/
```

### Sprint Model

- Each **Milestone** is a sprint scoped to a phase
- Issues within a milestone have Build work (features, tasks) and Bug work (issues, fixes)
- A milestone closes only when all bugs are resolved (zero-bug close)
- Closed milestone notes are archived in `reference/archive/`

## Setup

```bash
# 1. Copy into your repo
cp -r .github/ your-project/.github/
cp -r reference/ your-project/reference/
cp STATUS.md your-project/
cp CLAUDE.md your-project/
cp -r .cursor/ your-project/
cp -r .windsurf/ your-project/

# 2. Push to GitHub
cd your-project && git add -A && git commit -m "Add 7D Framework" && git push

# 3. Run setup script for labels, milestones, and project board
./scripts/setup-github.sh
```

## What You Get

### Reference Directory

Stable documents that outlive any sprint:

| File | Purpose |
|------|---------|
| `reference/ARCHITECTURE.md` | System architecture, stack, infrastructure |
| `reference/COMPONENTS.md` | Component registry, naming conventions, dev standards |
| `reference/CONTRACTS.md` | Interface contracts, API shapes, data flows |
| `reference/DECISIONS.md` | Decision log — why X over Y |
| `reference/AGENT.md` | AI agent rules and execution patterns |
| `reference/archive/` | Closed sprint notes |

### STATUS.md

Single-glance project dashboard. Active sprints, blockers, health metrics.

### Issue Templates (4 templates)

| Template | 7D Phase | Creates Labels |
|----------|----------|---------------|
| Discovery — New Backlog Item | Discovery | `7d:discovery`, `status:backlog` |
| Definition — Requirements Spec | Definition | `7d:definition`, `status:defining` |
| Design — Architecture Decision | Design | `7d:design`, `status:designing` |
| Bug Report (Fix Log) | Diagnostics | `7d:diagnostics`, `type:bug` |

### PR Template

Phase gate checklist: Definition linked, Design exists, tests pass, components registered.

### Actions Workflows

**Diagnostics** (`diagnostics.yml`) — Runs on every PR: lint, test, build.
**Deploy** (`deploy.yml`) — Runs on merge to main: deploy, health check, auto-tag.

### Labels, Milestones, Projects Board

Created by setup script. See `scripts/setup-github.sh`.

## The Flow

1. **Idea** → Create Discovery issue
2. **Specify** → Create Definition issue
3. **Design** → Create Design issue, update `reference/` docs
4. **Build** → Create milestone (sprint), assign issues, branch + PR
5. **Verify** → Actions CI runs, PR checklist enforced
6. **Ship** → Merge to main, Actions deploy
7. **Bug** → Create Bug issue, assign to current milestone
8. **Close sprint** → All bugs at zero, close milestone, archive notes
9. **Track** → Projects board columns + STATUS.md

## Combining with Level 3

Level 4 works alongside Level 3's phase folders. Use GitHub for team coordination (issues, PRs, milestones) and keep detailed sprint files in the 7D phase folders for AI agent context. Both levels share the same `reference/` directory.
