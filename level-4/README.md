# 7D Framework — Level 4: GitHub-Native

The 7D workflow running entirely on GitHub primitives. No extra tools, no API costs.

## How It Works

Every 7D phase maps to a GitHub feature:

```
PRODUCT LOOP                              TECH LOOP
Issues          → Issues          → Issues         → PRs        → Actions CI  → Actions CD
(7d:discovery)   (7d:definition)   (7d:design)      + Branches   (diagnostics)  (deploy)
                                                     + Milestones
                         ↕                                            ↕
                  Projects Board (status sync)
                         ↕
                  Bug Issues (fix log)
```

## Setup

```bash
# 1. Copy the .github/ folder into your repo
cp -r .github/ your-project/.github/

# 2. Copy IDE rules
cp CLAUDE.md your-project/
cp -r .cursor/ your-project/
cp -r .windsurf/ your-project/

# 3. Push to GitHub
cd your-project && git add -A && git commit -m "Add 7D Framework" && git push

# 4. Run the setup script to create labels, milestones, and project board
./scripts/setup-github.sh
# Or specify a repo:
./scripts/setup-github.sh owner/repo-name

# 5. Follow the manual steps printed by the script:
#    - Enable branch protection
#    - Create a Projects board
#    - Uncomment your stack in the Actions workflows
```

## What You Get

### Issue Templates (4 templates)

When anyone clicks "New Issue," they choose from:

| Template | 7D Phase | Creates Labels |
|----------|----------|---------------|
| Discovery — New Backlog Item | Discovery | `7d:discovery`, `status:backlog` |
| Definition — Requirements Spec | Definition | `7d:definition`, `status:defining` |
| Design — Architecture Decision | Design | `7d:design`, `status:designing` |
| Bug Report (Fix Log) | Diagnostics | `7d:diagnostics`, `type:bug` |

Each template has required fields that enforce the 7D structure.

### PR Template

Every PR includes a phase gate checklist:

- Definition issue linked? Design issue exists?
- Code follows Design conventions?
- Tests written? Lint passing? Build succeeds?
- Components registered? Docs updated?

All boxes must be checked before merge.

### Actions Workflows

**Diagnostics** (`diagnostics.yml`) — Runs on every PR:
- Lint, test, build (uncomment your stack's commands)
- "Diagnostics Gate" job — all checks must pass

**Deploy** (`deploy.yml`) — Runs on merge to main:
- Deploy to production (uncomment your provider)
- Post-deploy health check
- Auto-tag release

### Labels (18 labels)

7D phase labels, status labels, priority labels, and type labels — all created by the setup script.

### Sprint Milestones

4 weekly sprint milestones created by the setup script. Assign issues to milestones to plan sprints.

## The Flow

1. **Someone has an idea** → Create a Discovery issue
2. **Ready to specify** → Create a Definition issue linking to it
3. **Ready to design** → Create a Design issue linking to the Definition
4. **Ready to build** → Label `status:ready`, assign to sprint Milestone
5. **Building** → Create branch, write code, open PR
6. **Verifying** → Actions CI runs automatically, PR checklist enforced
7. **Shipping** → Merge to main, Actions deploy, health check, auto-tag
8. **Something breaks** → Create Bug issue with error details
9. **Status tracking** → Move issues across Projects board columns

## Branch Protection (Manual Setup)

Go to Settings → Branches → Add rule for `main`:

- Require pull request reviews before merging
- Require status checks to pass: select "Diagnostics Gate"
- Require branches to be up to date before merging

This makes the Diagnostics Actions workflow a hard gate — no one can merge code that doesn't pass lint, tests, and build.

## Projects Board (Manual Setup)

Create a board-style project with these columns:

```
Backlog → Defining → Designing → Ready → In Progress → Review → Done
```

This IS the Documentation phase — the Projects board is the status board.

## Combining with Level 3

Level 4 works great alongside Level 3's markdown files. Use GitHub for team coordination (issues, PRs, sprints) and keep the detailed specs in the 7D folders for AI agent context. The IDE rules in Level 4 point agents to GitHub issues instead of markdown files.
