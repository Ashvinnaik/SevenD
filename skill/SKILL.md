---
name: SevenD
description: |
  **SevenD — 7D Framework Full Lifecycle Skill**: Scaffolds, customizes, deploys, and operates the 7D development framework for any project. Covers initial setup (assess → customize → deploy), ongoing operations (sprint management, feature workflow, agent debugging), and level upgrades. Make sure to use this skill whenever the user mentions 7D, SevenD, project setup for AI agents, framework levels, sprint reviews, feature workflows, or wants help structuring any project for AI-assisted development.
  - MANDATORY TRIGGERS: 7D, SevenD, seven D, framework setup, project setup, scaffold project, project structure, set up my project, start a new project, project template, configure framework, upgrade level, GitHub setup, sprint setup, IDE rules setup, sprint review, new feature workflow, agent not following rules, framework feels heavy, framework feels light
  - Also trigger when: user wants to organize a project for AI-assisted development, wants to set up Cursor/Windsurf/Claude Code/Copilot rules, wants to migrate between framework levels, wants help running a sprint review, wants to add a feature through the full 7D workflow, wants to debug why an AI agent isn't following framework rules, or asks how to structure any project so AI agents can work effectively — even non-software projects
---

# SevenD — 7D Framework Skill

Detect what the user needs and jump to the right section:

| User intent | Go to |
|-------------|-------|
| "Set up my project" / "Start a new project" | **Initial Setup** |
| "Add a feature" / "What do I update?" | **Feature Workflow** |
| "Sprint review" / "End of sprint" | **Sprint Operations** |
| "Upgrade to Level 3" / "Framework feels light" | **Level Upgrades** |
| "Agent isn't following rules" / "AI keeps inventing names" | **Agent Debugging** |
| "What is 7D?" / "How does this work?" | **Meta-Model** (+ read `7Dkb.md` for full methodology) |

---

## The Meta-Model

The 7D Framework has two layers:

```
┌─────────────────────────────────────────────────────────────────┐
│                     INVARIANT LAYER                             │
│  The 7 phases, gates, AI/Human synergy, feedback loop,         │
│  two-loop structure, phase dependencies                        │
│  These NEVER change regardless of application                  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ Customized by
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      VARIANT LAYER                              │
│  Design dimensions, components, interfaces, diagnosis          │
│  strategy, deployment targets, domain constraints,             │
│  terminology, metrics                                          │
│  These ADAPT per application                                   │
└─────────────────────────────────────────────────────────────────┘
```

### Invariants (Never Change)

1. **The 7 Phases**: Discovery → Definition → Design → Documentation → Development → Diagnostics → Deployment
2. **Two Loops**: Product Loop (Discovery → Definition → Design) and Tech Loop (Development → Diagnostics → Deployment), synced by Documentation
3. **Feedback Loop**: Deployment outcomes feed back into Discovery
4. **Phase Gates**: No Definition without Discovery. No Design without Approved Definition. No Development without completed Design. No Deployment without Diagnostics passing.
5. **AI/Human Synergy**: AI executes, Human validates. AI stops for human approval at phase gates.
6. **Phase Dependencies**: Earlier phases produce artifacts that later phases consume
7. **Component Independence**: Each component builds and tests independently
8. **Interface Evolution**: PROPOSED → APPROVED → IMPLEMENTED → VERIFIED → FINALIZED

### Variants (Always Adapt)

1. **Design Dimensions**: What gets designed (UI, API, data model, policy, conversation flow, curriculum)
2. **Component Architecture**: What the system is made of (services, pages, models, pipelines)
3. **Interface Contracts**: How components communicate (REST, GraphQL, events, function calls)
4. **Diagnosis Strategy**: What tests verify correctness (unit, integration, e2e, compliance)
5. **Deployment Targets**: Where it ships (cloud, on-prem, app store, marketplace)
6. **Domain Constraints**: Regulatory, technical, business rules (HIPAA, GDPR, rate limits)
7. **Terminology**: Domain-specific language — seed the Glossary early
8. **Success Metrics**: KPIs that measure outcomes (uptime, conversion, time-to-market)

When customizing, fill in the Variant Layer. Leave the Invariant Layer alone. For the full glossary, status vocabulary, ID conventions, and phase gate details, see `7Dkb.md`.

### Cross-Domain Adaptation

The templates are optimized for software, but the meta-model works for any structured creation process:

| 7D Phase | Software | Product/Hardware | Content/Education | Service Design |
|----------|----------|-----------------|-------------------|----------------|
| Discovery | Feature backlog | Market research | Topic research | Journey mapping |
| Definition | Requirements specs | Product specs, BOM | Learning objectives | Service requirements |
| Design | Architecture, APIs | CAD, schematics | Course structure | Process flows |
| Documentation | Status board | Change orders | Syllabus | Runbooks |
| Development | Code sprints | Prototyping | Content creation | Pilot programs |
| Diagnostics | Testing, CI | QA, compliance | Peer review | User testing |
| Deployment | Release, hosting | Launch, distribution | Publication | Go-live |

If the user's project isn't software, adapt the Variant Layer: rename column headers in templates (e.g., "Sprint" → "Production Cycle"), swap component types (e.g., "API endpoint" → "lesson module"), and replace tech-specific sections (e.g., "CI/CD" → "peer review pipeline"). The Invariant Layer — phases, gates, loops — stays identical.

---

## Initial Setup

Three steps: Assess → Customize → Deploy.

### Step 1: Assess

Ask these questions. Skip any the user has already answered.

**Project basics:**
- What are you building? (one sentence)
- Who is it for?
- How many people are working on this? (solo, 2-3, 4+)
- What's the timeline? (weekend, weeks, months)

**Technical basics:**
- What's the stack? (language, framework, database, hosting)
- Which IDE? (Claude Code, Cursor, Windsurf, VS Code + Copilot — or multiple)
- Is the code on GitHub?
- Greenfield or existing code?

**Complexity signal:**
- How many features/pages/endpoints? (rough count)
- Will different people work on different parts?
- Do you need CI/CD?

**Domain profile (the Variant Layer):**
- What are the core components?
- What are the key interfaces between them?
- What metrics matter?
- What constraints exist? (regulatory, technical, business)
- What domain terms need defining?

**Conventions** (populate the User Conventions section in `7Dkb.md` with answers):
- Naming patterns? (components, functions, routes, tables, branches, commits)
- Sprint cadence? (default: 1 week)
- Priority scheme? (default: Must Have / Should Have / Nice to Have)
- Code style? (language, indent, quotes, line length)

**Recommend a level** using the decision matrix in `levels-overview.md`. Cross-reference the user's answers against team size, timeline, feature count, component boundaries, and CI/CD needs. If between two levels, recommend the lower one — upgrading is easy, over-structuring kills momentum. Present your recommendation with the specific signals that led to it, then wait for the user to confirm before proceeding.

### Step 2: Customize

This is where the skill earns its keep. Don't copy templates with brackets — fill them in with real content from the assessment.

Read `templates.md` for the exact structure, sections, tables, and placeholder format of every file at every level. This is the golden reference — follow it when generating files.

For detailed IDE rule file format specs, read: `ide-rules-format.md`
For level decision matrix and file inventories, read: `levels-overview.md`

**For every level, generate these IDE rule files** (all four unless user specifies one IDE):
1. `CLAUDE.md` — Claude Code (project root, plain markdown)
2. `.cursor/rules/7d-framework.mdc` — Cursor (YAML frontmatter with `alwaysApply: true`)
3. `.windsurf/rules/7d-framework.md` — Windsurf (YAML frontmatter with `trigger: always_on`)
4. `.github/copilot-instructions.md` — VS Code Copilot (plain markdown)

Customize each IDE rule file:
- Replace generic workflow steps with the user's actual commands (dev server, test runner, linter)
- Add stack-specific Don'ts
- Fill in the When Unsure section with realistic scenarios for their project
- Add a Customizing section with guidance specific to their stack

**Level-specific customization:**

For Level 1 (Product.md + Tech.md): Fill in vision, backlog with real IDs (P-001, P-002), acceptance criteria for top items, stack table, project structure, setup commands, conventions, environment variables.

For Level 2 (+ Architecture.md + Resources.md + Project.md): Add components with interfaces and data models, naming conventions, component registry, environment details, sprint 1 with real tasks, test coverage matrix.

For Level 3 (seven folders): Distribute across folders. Fill in Discovery backlog, Definition requirements for Must Haves, full architecture in Design (including Component Registry), Documentation status board, sprint-01 with tasks, diagnostics test matrix, deployment strategy. Seed Fix.md with common errors for their stack.

For Level 4 (GitHub-native): Customize issue template fields for their domain, PR template with stack-specific items, diagnostics.yml for their stack, deploy.yml for their hosting, setup-github.sh ready to run.

### Step 3: Deploy

The user should have already chosen their output method (direct write vs. review-first artifacts). If they haven't, ask now: **"Should I write files directly to your project, or generate them as artifacts for review first?"**

**Direct deployment:**
```bash
mkdir -p <project-name>
# Write each customized file to the correct path
# Verify: find <project-name> -type f | sort
```

**Review-first deployment:**
Write files to a staging directory. Present a summary of what was generated. Deploy on user confirmation.

**For Level 4 / GitHub projects:**
1. Verify `gh` CLI is installed and authenticated
2. Write all framework files to the local repo
3. Run `chmod +x scripts/setup-github.sh && ./scripts/setup-github.sh`
4. Walk through the manual steps the script prints (branch protection, Projects board)
5. Commit and push on user confirmation

**Verify the setup works:**
1. List the generated file tree and confirm all expected files are present for the chosen level (cross-check against file inventory in `levels-overview.md`)
2. Tell the user: "Open your IDE, start a new chat, and ask the agent to describe the project. If it reads the framework files and summarizes them, the rules are active. If it asks what the project is, the rules file isn't being loaded — check the file location and frontmatter."
3. If using Claude Code: verify CLAUDE.md is at project root. If using Cursor: verify `.cursor/rules/7d-framework.mdc` has `alwaysApply: true`. If using Windsurf: verify `.windsurf/rules/7d-framework.md` has `trigger: always_on`.

---

## Feature Workflow

When a user wants to add a feature, walk them through the full 7D path. This is the framework in action.

### The steps (adapt to their level)

**1. Discovery** — Add to backlog
- Level 1-2: Add row to Product.md backlog table with next ID
- Level 3: Add to `01-discovery/DISCOVERY.md` backlog
- Level 4: Create a Discovery issue using the template

**2. Definition** — Write requirements
- Level 1: Add acceptance criteria under the backlog item in Product.md
- Level 2: Add functional/non-functional requirements section in Product.md
- Level 3: Add spec to `02-definition/DEFINITION.md` (or separate file for complex items)
- Level 4: Create a Definition issue, link to Discovery issue

GATE: Requirements need human approval before proceeding to Design.

**3. Design** — Technical blueprint
- Level 1: Add to Design Decisions in Product.md
- Level 2: Add component to Architecture.md, register in Resources.md
- Level 3: Add to `03-design/DESIGN.md`, update Component Registry
- Level 4: Create a Design issue, link to Definition issue

GATE: Design needs human approval before Development starts.

**4. Documentation** — Update status
- Level 1-2: Update status column in backlog table
- Level 3: Update `04-documentation/DOCUMENTATION.md` status board
- Level 4: Move issue on Projects board

**5. Development** — Code it
- Level 1: Just build, note in Tech.md
- Level 2: Add task to current sprint in Project.md
- Level 3: Add task to current sprint file in `05-development/`
- Level 4: Assign to current Milestone, create branch

**6. Diagnostics** — Verify
- Level 1: Run tests, log in Tech.md
- Level 2: Run pre-deploy checks, update Test Coverage in Project.md
- Level 3: Update `06-diagnostics/DIAGNOSTICS.md`
- Level 4: CI runs automatically on PR

GATE: Tests must pass before deployment.

**7. Deployment** — Ship it
- Level 1: Deploy, log in Tech.md
- Level 2: Log in Project.md deployment section
- Level 3: Update `07-deployment/DEPLOYMENT.md`
- Level 4: Merge PR, Actions deploy automatically

**After deployment:** Log any errors in Fix Log. Outcomes feed back into Discovery.

Show the user which specific files to update at each step. Don't just describe the process — point to exact file paths and table rows.

---

## Sprint Operations

### Starting a Sprint

1. Read the previous sprint's carried-over tasks
2. Pull ready items from the backlog (Definition status = Approved, Design = Done)
3. Create tasks with IDs linking back to backlog items
4. Set the sprint goal (one sentence: what does "done" look like?)
5. Assign tasks to team members

**Level 2:** Add sprint section to Project.md
**Level 3:** Create new `05-development/sprint-NN.md` from template
**Level 4:** Create new Milestone, assign issues

### Running a Sprint Review

1. Read the current sprint file/milestone
2. Count: planned vs completed vs carried over
3. For each carried-over task, note why it didn't finish
4. Fill in retrospective: what went well, what didn't, changes for next sprint
5. Archive the sprint (mark complete)
6. Create the next sprint file/milestone
7. Update Documentation status board

### Sprint Review Prompts

Ask the user:
- "Which tasks are done? Which are carrying over?"
- "What went well this sprint?"
- "What blocked you or slowed you down?"
- "What should change next sprint?"

Capture answers in the sprint review section. Don't invent answers — if the user gives brief responses, keep them brief.

---

## Level Upgrades

When a user's framework level no longer fits (files are too crowded, team has grown, need enforcement), help them upgrade.

For detailed step-by-step migration guides, read: `upgrade-paths.md`

### Quick Upgrade Decision

| They say... | Upgrade to |
|-------------|-----------|
| "Product.md is huge" / "Can't find anything" | Level 1 → 2 |
| "Need a component registry" | Level 1 → 2 |
| "Multiple people stepping on each other" | Level 2 (add sprints) |
| "Need per-feature specs" / "Sprint tasks are crowded" | Level 2 → 3 |
| "Need CI to block bad merges" | Level 3 → 4 |
| "Framework feels too heavy" | Downgrade — remove files, merge back |

### Upgrade Process

1. Read all existing framework files
2. Read the upgrade path reference for their specific transition
3. Map content from old structure to new structure — don't lose anything
4. Generate all new files with content migrated from the old ones
5. Present the migration plan before writing files
6. **Do not delete old files until the user confirms the migration is correct**
7. Update IDE rules to the new level

### ID Prefix Change (Level 2 → 3)

See `7Dkb.md` for the full ID conventions table. Key rule: Level 1–2 uses `P-` prefix, Level 3–4 uses `D-` prefix. When upgrading, rename all P- IDs to D- across every file.

---

## Agent Debugging

When a user's AI agent isn't following the framework, diagnose and fix.

### Common Problems

**"Agent doesn't read my files before coding"**
- Check: Is the IDE rules file in the right location?
  - CLAUDE.md → project root
  - .cursor rules → `.cursor/rules/` with correct frontmatter
  - .windsurf rules → `.windsurf/rules/` with correct frontmatter
  - copilot-instructions → `.github/`
- Check: Does the rules file explicitly say "read [file] before coding"?
- Fix: Verify file location, check frontmatter, strengthen the "Before Building" instructions

**"Agent keeps inventing names instead of using existing ones"**
- Check: Is there a component registry? (Resources.md at L2, DESIGN.md at L3)
- Check: Do the IDE rules say "check the component registry before creating anything new"?
- Fix: Add or populate the registry. Add explicit instruction to IDE rules.

**"Agent skips phases"**
- Check: Are phase gates documented in the IDE rules?
- Check: Are they phrased as hard rules or suggestions?
- Fix: Strengthen gate language. "These are hard rules. Do not skip phases." works better than "try to follow the phases."

**"Agent produces inconsistent code style"**
- Check: Are naming conventions documented? (Architecture.md at L2, DESIGN.md at L3)
- Check: Are code standards in the IDE rules?
- Fix: Add explicit conventions table and Don'ts list.

**"Agent doesn't log errors"**
- Check: Do IDE rules mention the Fix Log?
- Check: Is the "After Building" step clear about when to log?
- Fix: Add explicit instruction: "If you encounter an error, log it in [Fix Log location] before moving on."

### Debugging Workflow

1. Ask which IDE they're using
2. Read their IDE rules file
3. Read the framework files the agent should be checking
4. Identify the gap between what the rules say and what the agent does
5. Suggest specific edits to the rules file
6. Have them test with a small task

---

## Key Principles

Apply these when making decisions or giving advice:

1. **Structure the input to improve the output.** Human slop (vague prompts, missing specs) causes AI slop (hallucinated code, duplicate packages). Every framework file exists to prevent a specific category of AI failure.

2. **The IDE rules file is the most important file.** It's the AI agent's onboarding document. If you fix one thing, fix the rules file. If the agent misbehaves, check the rules file first.

3. **The Component Registry prevents name invention.** AI agents' most common failure is creating new names instead of looking up existing ones. At Level 2+, always populate the registry during setup and tell the user to keep it current. Lives in Resources.md (L2) or DESIGN.md (L3+).

4. **Seed the Fix Log on day one.** Pre-populate Common Errors with 3-5 known issues for the user's stack (see Common Stacks section). Every error logged is an error the agent won't debug from scratch again.

5. **The Invariant Layer is sacred.** Never skip phases, remove gates, or break the feedback loop when customizing. If a user asks to remove a phase, explain what breaks without it and offer to simplify it instead.

6. **Interfaces evolve through states.** PROPOSED → APPROVED → IMPLEMENTED → VERIFIED → FINALIZED. When a user asks about building against an interface, check its state — don't build against anything below APPROVED.

---

## Common Stacks — Quick Patterns

When the user tells you their stack, use these to fill templates faster. Read `ide-rules-format.md` for stack-specific Don'ts.

**Next.js + TypeScript + Tailwind:**
Dev: `npm run dev` | Test: `vitest` | Lint: `npm run lint` | Build: `npm run build`
Conventions: functional components, server components by default, Prisma for DB, Zod for validation

**FastAPI + Python:**
Dev: `uvicorn app.main:app --reload` | Test: `pytest` | Lint: `ruff check . && mypy .` | Build: `docker build -t app .`
Conventions: Pydantic models, async endpoints, Alembic migrations, type hints everywhere

**React + Vite + Express:**
Dev: `npm run dev` (concurrently) | Test: `vitest` (client) + `jest` (server) | Lint: `eslint .`
Conventions: hooks only, Mongoose schemas, Express router pattern, shared types

After filling in stack-specific commands and conventions from these patterns, show the user the commands you used and ask: "Are these your actual dev/test/build commands, or should I adjust any?"
