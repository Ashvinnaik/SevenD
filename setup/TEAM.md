# Team & Role Registry

> Fill this in after forking the template. Maps team members to 7D roles and checkpoint responsibilities.

---

## Team Members

### Product Owners (Discovery Cycle)

| Role | Name | GitHub Handle | Responsibilities |
|------|------|---------------|-----------------|
| Primary Product Owner | <!-- Your name --> | <!-- @handle --> | Owns Discovery pipeline, human reviewer for CP-1 through CP-4 |
| Secondary Product Owner | <!-- Name --> | <!-- @handle --> | Backup reviewer for Discovery checkpoints |

### Engineering Leads (Delivery Cycle)

| Role | Name | GitHub Handle | Responsibilities |
|------|------|---------------|-----------------|
| Engineering Lead | <!-- Name --> | <!-- @handle --> | Owns Delivery pipeline, human reviewer for CP-5 through CP-7 |
| Tech Lead | <!-- Name --> | <!-- @handle --> | Backup reviewer for Delivery checkpoints |

### AI Agents

| Agent | Platform | Role |
|-------|----------|------|
| <!-- e.g., Claude --> | <!-- e.g., Cursor, CLI --> | Primary development agent |
| <!-- e.g., Perplexity --> | <!-- Platform --> | Research agent |
| GitHub Actions Bot | GitHub | Automation (labels, notifications, metrics) |

---

## Checkpoint Ownership

Who reviews at each checkpoint gate:

| Checkpoint | Agent Reviewer | Human Reviewer |
|-----------|---------------|----------------|
| CP-1: Problem Approved | Primary AI Agent | Product Owner |
| CP-2: Solution Approved | Primary AI Agent | Product Owner |
| CP-3: Validated Approach | Primary AI Agent | Product Owner |
| CP-4: Spec Complete | Primary AI Agent | Product Owner + Engineering Lead |
| CP-5: Tasks Approved | Primary AI Agent | Engineering Lead |
| CP-6: Code Complete | Primary AI Agent | Engineering Lead |
| CP-7: Release Approved | Primary AI Agent | Engineering Lead |

---

## Role Definitions

### Product Owner
- Owns the Discovery cycle (Define → Design → Discover → Document)
- Human reviewer for CP-1 through CP-4
- Drives sprint planning for the Product Sprint
- Responsible for backlog prioritization and triage

### Engineering Lead
- Owns the Delivery cycle (Diagnose → Develop → Deploy)
- Human reviewer for CP-5 through CP-7
- Drives sprint planning for the Dev Sprint
- Responsible for technical quality and architecture decisions

### AI Agent
- Performs phase work as instructed by [AGENT-GUIDANCE.md](../framework/AGENT-GUIDANCE.md)
- Provides checkpoint self-assessments
- Cannot bypass phases, checkpoints, or anti-skip rules
- Flags concerns for human review

### Contributor
- Works on assigned tasks within their current phase
- Follows the 7D process for all work items
- Participates in sprint ceremonies
- Reports blockers per [DEPENDENCY-ESCALATION.md](../framework/DEPENDENCY-ESCALATION.md)
