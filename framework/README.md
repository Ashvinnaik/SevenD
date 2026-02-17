# 7D Framework System

> These documents define **how the 7D process works**. They are the operating system for your project.
> Read these when onboarding. Customize them rarely — they represent proven process patterns.

---

## Core Framework

| Document | What It Covers |
|----------|---------------|
| [FRAMEWORK.md](FRAMEWORK.md) | The 7D lifecycle: phases, feedback loops, principles |
| [DUAL-TRACK-SPRINTS.md](DUAL-TRACK-SPRINTS.md) | Product Sprint + Dev Sprint system, checkpoint gates, cadence options |
| [AGENT-GUIDANCE.md](AGENT-GUIDANCE.md) | AI agent prompts per phase, checkpoint validation, anti-skip rules |
| [METRICS.md](METRICS.md) | 40+ velocity, quality, and governance metrics with targets |
| [CHEATSHEET.md](CHEATSHEET.md) | Quick reference card for the full framework |

## Sprint Operations

| Document | What It Covers |
|----------|---------------|
| [CEREMONIES.md](CEREMONIES.md) | Sprint planning, standup, review, and retrospective |
| [DEFINITION-OF-READY.md](DEFINITION-OF-READY.md) | Entry criteria — when can work enter each phase? |
| [DEFINITION-OF-DONE.md](DEFINITION-OF-DONE.md) | Exit criteria — when is each phase complete? |
| [BACKLOG-INTAKE.md](BACKLOG-INTAKE.md) | How new work enters the system and gets prioritized |
| [DEPENDENCY-ESCALATION.md](DEPENDENCY-ESCALATION.md) | Blocker handling and escalation paths |

---

## The 7D Lifecycle

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

Each phase ends with a **checkpoint gate** (CP-1 through CP-7) requiring both agent and human approval.
