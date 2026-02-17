# 7D Framework: Dual-Track Sprint System

## Overview

The 7D Framework operates as two parallel sprints with **governance checkpoints** requiring both Agent and Human approval before milestone progression.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           PRODUCT SPRINT                                     │
│                    (Discovery Cycle + Document)                              │
│                                                                              │
│   ┌──────────┐      ┌──────────┐      ┌──────────┐      ┌──────────┐       │
│   │  DEFINE  │ ──►  │  DESIGN  │ ──►  │ DISCOVER │ ──►  │ DOCUMENT │       │
│   └────┬─────┘      └────┬─────┘      └────┬─────┘      └────┬─────┘       │
│        │                 │                 │                 │              │
│     [CP-1]            [CP-2]            [CP-3]            [CP-4]            │
│    Gate: Problem      Gate: Solution    Gate: Validated   Gate: Spec       │
│    Approved           Approved          Approach          Complete         │
│                                                              │              │
└──────────────────────────────────────────────────────────────┼──────────────┘
                                                               │
                                                               ▼
                                                         ┌──────────┐
                                                         │ HANDOFF  │
                                                         │ GATE     │
                                                         └────┬─────┘
                                                              │
┌─────────────────────────────────────────────────────────────┼──────────────┐
│                            DEV SPRINT                        │              │
│                    (Delivery Cycle)                          │              │
│                                                              ▼              │
│                                                        ┌──────────┐        │
│   ┌──────────┐      ┌──────────┐      ┌──────────┐    │ DIAGNOSE │        │
│   │  DEPLOY  │ ◄──  │ DEVELOP  │ ◄──  │ DIAGNOSE │◄───┴──────────┘        │
│   └────┬─────┘      └────┬─────┘      └────┬─────┘                         │
│        │                 │                 │                                │
│     [CP-7]            [CP-6]            [CP-5]                              │
│    Gate: Release      Gate: Code        Gate: Tasks                         │
│    Approved           Complete          Approved                            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Work Item Types

### 🆕 Feature
A new capability that doesn't exist today.
- **Starts at:** Define (must go through full Discovery)
- **Full path:** Define → Design → Discover → Document → Diagnose → Develop → Deploy

### 🐛 Bug
Something that's broken and needs fixing.
- **Starts at:** Diagnose (problem already known) OR Define (if root cause unclear)
- **Fast path:** Diagnose → Develop → Deploy
- **Investigation path:** Define → Design → Discover → Document → Diagnose → Develop → Deploy

---

## Checkpoint (CP) System

Each checkpoint requires **TWO approvals** before progression:

```
┌─────────────────────────────────────────────────────┐
│                   CHECKPOINT                         │
│                                                      │
│   ┌─────────────┐         ┌─────────────┐          │
│   │   AGENT     │         │   HUMAN     │          │
│   │   REVIEW    │         │   REVIEW    │          │
│   └──────┬──────┘         └──────┬──────┘          │
│          │                       │                  │
│          ▼                       ▼                  │
│   ┌─────────────┐         ┌─────────────┐          │
│   │  ✅ / ❌    │         │  ✅ / ❌    │          │
│   │  + Notes    │         │  + Notes    │          │
│   └──────┬──────┘         └──────┬──────┘          │
│          │                       │                  │
│          └───────────┬───────────┘                  │
│                      ▼                              │
│              ┌─────────────┐                        │
│              │ BOTH ✅ ?   │                        │
│              └──────┬──────┘                        │
│                     │                               │
│         ┌──────────┴──────────┐                    │
│         ▼                     ▼                    │
│   ┌──────────┐         ┌──────────────┐           │
│   │ PROCEED  │         │ BLOCKED      │           │
│   │ to next  │         │ Address      │           │
│   │ phase    │         │ feedback     │           │
│   └──────────┘         └──────────────┘           │
│                                                    │
└────────────────────────────────────────────────────┘
```

### Checkpoint Details

| CP | Gate Name | Agent Validates | Human Validates |
|----|-----------|-----------------|-----------------|
| CP-1 | Problem Approved | Problem is well-defined, measurable, scoped | Problem is real, worth solving, prioritized |
| CP-2 | Solution Approved | Design is technically sound, follows patterns | Approach aligns with product vision |
| CP-3 | Validated Approach | Spike/prototype proves feasibility | Risk level acceptable, proceed to build |
| CP-4 | Spec Complete | Spec is implementable, unambiguous | Requirements captured correctly |
| CP-5 | Tasks Approved | Tasks are sized correctly, dependencies clear | Effort/timeline acceptable |
| CP-6 | Code Complete | Tests pass, code quality checks pass | Acceptance criteria met |
| CP-7 | Release Approved | Deployment checklist complete, rollback ready | Business ready for release |

---

## Sprint Cadence Options

### Option A: Synchronized Sprints
```
Week 1-2: Product Sprint (Define → Document)
Week 3-4: Dev Sprint (Diagnose → Deploy)
```

### Option B: Overlapping Sprints (Recommended for AI-assisted)
```
         Week 1    Week 2    Week 3    Week 4
Feature A: [Product Sprint][Dev Sprint]
Feature B:          [Product Sprint][Dev Sprint]
Feature C:                   [Product Sprint][Dev Sprint]
```

### Option C: Continuous Flow (Daily Milestones)
```
Each item flows through independently
Daily standup reviews items at each checkpoint
Items can move 1-2 phases per day with AI assistance
```

---

## Velocity Metrics

### Product Sprint Velocity
- **Discovery Cycle Time:** Days from Define → Document complete
- **Checkpoint Pass Rate:** % of items passing each CP on first attempt
- **Rework Rate:** # of items sent back to earlier phase

### Dev Sprint Velocity
- **Delivery Cycle Time:** Days from Diagnose → Deploy complete
- **Code Review Turnaround:** Hours from PR created → merged
- **Deployment Frequency:** Deploys per week

### Quality Metrics
- **Escaped Defects:** Bugs found in production per feature
- **Checkpoint Rejection Reasons:** Categorized reasons for CP failures
- **Agent Accuracy:** % of agent approvals that humans agreed with

---

## GitHub Project Structure

### Project Views

1. **Product Sprint Board**
   - Filter: `cycle:Discovery OR stage:document`
   - Columns: Define | Design | Discover | Document

2. **Dev Sprint Board**
   - Filter: `cycle:Delivery`
   - Columns: Diagnose | Develop | Deploy | Done

3. **Checkpoint Queue**
   - Filter: `status:awaiting-review`
   - Group by: Checkpoint (CP-1 through CP-7)

4. **Velocity Dashboard**
   - Table view with cycle time calculations
   - Charts for throughput over time

### Labels for Checkpoint Status

```
awaiting-agent-review    #9333EA   Needs agent checkpoint review
awaiting-human-review    #2563EB   Needs human checkpoint review
checkpoint-passed        #16A34A   Both approvals received
checkpoint-blocked       #DC2626   Failed checkpoint, needs rework
```

### Custom Fields

| Field | Type | Values |
|-------|------|--------|
| Current Checkpoint | Select | CP-1 through CP-7 |
| Agent Approval | Select | Pending / Approved / Rejected |
| Human Approval | Select | Pending / Approved / Rejected |
| Cycle Time (Days) | Number | Auto-calculated |
| Rework Count | Number | Times sent back |
