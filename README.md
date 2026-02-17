# 7D Framework

A structured software development lifecycle for AI-assisted teams. Seven phases, dual-track sprints, checkpoint governance.

---

## What is the 7D Framework?

The 7D Framework organizes software development into two interconnected cycles with documentation as the bridge:

```
    Discovery Cycle                         Delivery Cycle
┌─────────────────┐                     ┌─────────────────┐
│  Define ───┐    │                     │    ┌─── Diagnose│
│      │     │    │                     │    │      │     │
│      v     │    │                     │    │      v     │
│  Design    │    │<── Document ───────>│    │   Develop  │
│      │     │    │                     │    │      │     │
│      v     │    │                     │    │      v     │
│  Discover ─┘    │                     │    └─── Deploy  │
└─────────────────┘                     └─────────────────┘
```

Every phase ends with a **checkpoint gate** requiring both AI agent and human approval before work advances.

---

## Quick Start

1. **Use this template** — Click "Use this template" on GitHub to create your repo
2. **Fill in your project docs** — Start with the three docs in `docs/`
3. **Set up GitHub** — Run `setup/scripts/setup-labels.sh` and follow `setup/GITHUB-SETUP.md`
4. **Create your first issue** — Use the Feature template to start at Define
5. **Read the framework** — Browse `framework/` to understand the process

---

## Repository Structure

```
.
├── docs/                          # YOUR PROJECT DOCS (fill these in)
│   ├── ARCHITECTURE.md            # Your app's architecture
│   ├── PROJECT-STRUCTURE.md       # Your project's composition
│   └── JOB-BOARD.md              # Sprint tracking (Todo / Doing / Done)
│
├── framework/                     # THE 7D SYSTEM (pre-filled, rarely changed)
│   ├── FRAMEWORK.md               # 7D lifecycle and principles
│   ├── AGENT-GUIDANCE.md          # AI agent prompts per phase
│   ├── AGENT-AUTOMATION.md        # Automated agent configuration and overrides
│   ├── DUAL-TRACK-SPRINTS.md      # Sprint structure and checkpoints
│   ├── METRICS.md                 # Velocity and quality metrics
│   ├── CHEATSHEET.md              # Quick reference
│   ├── CEREMONIES.md              # Sprint ceremonies
│   ├── DEFINITION-OF-READY.md     # Phase entry criteria
│   ├── DEFINITION-OF-DONE.md      # Phase exit criteria
│   ├── BACKLOG-INTAKE.md          # Triage process
│   └── DEPENDENCY-ESCALATION.md   # Blocker handling
│
├── setup/                         # CONFIGURATION (run once after forking)
│   ├── GITHUB-SETUP.md            # GitHub Projects setup guide
│   ├── TEAM.md                    # Team roles and checkpoint ownership
│   ├── LABELS.md                  # Label reference
│   └── scripts/
│       ├── setup-labels.sh        # Create all labels via gh CLI
│       └── setup-project.sh       # Create GitHub Projects
│
└── .github/                       # GITHUB INFRASTRUCTURE
    ├── ISSUE_TEMPLATE/            # Issue templates for all 7 phases + feature/bug
    ├── PULL_REQUEST_TEMPLATE.md   # PR checklist
    ├── scripts/                   # Agent automation scripts
    │   ├── agent-prompts.js       # LLM prompt builder and API caller
    │   └── phase-config.json      # Phase sequence and threshold config
    └── workflows/                 # Automation (agent worker, tracking, labels)
```

---

## The Three Project Docs

After forking, your first task is to fill in these three documents:

### 1. [Architecture](docs/ARCHITECTURE.md) — What doesn't change easily

Your application's problem space, solution approach, system design, tech stack, and data model. This is the stable foundation that all 7D phases build on.

### 2. [Project Structure](docs/PROJECT-STRUCTURE.md) — How the project is composed

Your repository layout, key directories, entry points, dependencies, and build/run instructions. The map of your codebase.

### 3. [Job Board](docs/JOB-BOARD.md) — Todo / Doing / Done

Maps to your GitHub Projects boards. Tracks what's being shaped (Todo), what's in progress (Doing), and what's shipped (Done).

| Status | Phases |
|--------|--------|
| **Todo** | Define, Design, Discover |
| **Doing** | Document, Diagnose, Develop |
| **Done** | Deploy, Done |

---

## Agent Automation

The 7D Framework includes an automated AI agent that reviews checkpoints and advances items through phases:

- When an issue reaches a checkpoint, the agent calls Claude to assess the phase work
- **High confidence (>= 80)**: Auto-advances to the next phase (Discovery phases only)
- **Medium confidence (50-79)**: Approves but flags for human review
- **Low confidence (< 50)**: Rejects and flags for human review
- **Develop and Deploy phases always require human review**

All agent actions are posted as transparent issue comments with full reasoning. Configure thresholds via repository variables. See [`framework/AGENT-AUTOMATION.md`](framework/AGENT-AUTOMATION.md) for details.

---

## After Forking: Setup Checklist

- [ ] Fill in [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) with your app's architecture
- [ ] Fill in [`docs/PROJECT-STRUCTURE.md`](docs/PROJECT-STRUCTURE.md) with your repo layout
- [ ] Fill in [`setup/TEAM.md`](setup/TEAM.md) with your team members and roles
- [ ] Run [`setup/scripts/setup-labels.sh`](setup/scripts/setup-labels.sh) to create labels
- [ ] Follow [`setup/GITHUB-SETUP.md`](setup/GITHUB-SETUP.md) to create project boards
- [ ] Add `ANTHROPIC_API_KEY` secret for agent automation (see [`framework/AGENT-AUTOMATION.md`](framework/AGENT-AUTOMATION.md))
- [ ] Update links in [`.github/ISSUE_TEMPLATE/config.yml`](.github/ISSUE_TEMPLATE/config.yml)
- [ ] Create your first Feature issue to test the flow
- [ ] Read [`framework/CHEATSHEET.md`](framework/CHEATSHEET.md) for a quick overview

---

## License

<!-- Choose your license. For open source templates, MIT or Apache 2.0 are common. -->
