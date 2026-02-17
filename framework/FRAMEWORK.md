# The 7D Software Development Framework

## Overview

The 7D Framework consists of two interconnected cycles with **Documentation** as the central bridge:

```
    ┌─────────────────┐                     ┌─────────────────┐
    │   LEFT CYCLE    │                     │   RIGHT CYCLE   │
    │   (Discovery)   │                     │   (Delivery)    │
    │                 │                     │                 │
    │  Define ───┐    │                     │    ┌─── Diagnose│
    │      │     │    │                     │    │      │     │
    │      ▼     │    │                     │    │      ▼     │
    │  Design    │    │◄── Document ───────►│    │   Develop  │
    │      │     │    │                     │    │      │     │
    │      ▼     │    │                     │    │      ▼     │
    │  Discover ─┘    │                     │    └─── Deploy  │
    │                 │                     │                 │
    └─────────────────┘                     └─────────────────┘
```

---

## The Seven D's Explained

### LEFT CYCLE: Discovery Phase

#### 1. DEFINE
**Purpose:** Establish what problem we're solving and for whom.

**Key Activities:**
- Problem statement articulation
- User/stakeholder identification
- Success criteria definition
- Scope boundaries
- Constraints and assumptions

**Outputs:**
- Problem Definition Document
- User Personas
- Success Metrics
- Project Charter

**Questions to Answer:**
- What pain point are we addressing?
- Who experiences this pain?
- How will we know we've succeeded?
- What's explicitly OUT of scope?

---

#### 2. DESIGN
**Purpose:** Architect the solution approach.

**Key Activities:**
- Solution brainstorming
- Architecture decisions
- Technical design
- UX/UI design
- API contracts
- Data modeling

**Outputs:**
- Architecture Decision Records (ADRs)
- Wireframes/Mockups
- Technical Design Document
- API Specifications
- Database Schema

**Questions to Answer:**
- What are the possible solutions?
- What are the tradeoffs of each?
- How do components interact?
- What does the user experience look like?

---

#### 3. DISCOVER
**Purpose:** Validate assumptions and reduce unknowns through research and prototyping.

**Key Activities:**
- Proof of concepts
- Technical spikes
- User research
- Competitive analysis
- Risk identification
- Feasibility testing

**Outputs:**
- Spike findings
- Prototype demos
- Research summaries
- Risk register
- Validated assumptions

**Questions to Answer:**
- Does our design actually work?
- What did we learn from users?
- What risks have we uncovered?
- Are our assumptions valid?

---

### THE BRIDGE: Documentation

#### 4. DOCUMENT
**Purpose:** Capture decisions, learnings, and plans to enable the Delivery cycle.

**Key Activities:**
- Consolidate discovery learnings
- Create implementation specs
- Write acceptance criteria
- Prepare handoff materials
- Update project documentation

**Outputs:**
- Implementation Specification
- User Stories with Acceptance Criteria
- Updated Technical Documentation
- Decision Log
- Knowledge Base Articles

**Why It's Central:**
Documentation bridges Discovery and Delivery. Without it:
- Knowledge is lost between phases
- Decisions get revisited unnecessarily
- New team members can't onboard
- Deployment lacks context for troubleshooting

---

### RIGHT CYCLE: Delivery Phase

#### 5. DIAGNOSE
**Purpose:** Break down the work and identify implementation approach.

**Key Activities:**
- Task breakdown
- Dependency mapping
- Estimation
- Sprint/milestone planning
- Technical approach decisions
- Code review of existing systems

**Outputs:**
- Task list with estimates
- Dependency diagram
- Sprint/milestone plan
- Technical approach notes

**Questions to Answer:**
- How do we break this into manageable pieces?
- What depends on what?
- How long will each piece take?
- What existing code do we need to understand?

---

#### 6. DEVELOP
**Purpose:** Build the solution.

**Key Activities:**
- Writing code
- Writing tests
- Code reviews
- Integration
- Bug fixing
- Performance optimization

**Outputs:**
- Working code
- Test suites
- Code review feedback
- Build artifacts

**Questions to Answer:**
- Does the code meet acceptance criteria?
- Is it tested adequately?
- Does it follow our standards?
- Is it performant enough?

---

#### 7. DEPLOY
**Purpose:** Release to users and validate in production.

**Key Activities:**
- Deployment to environments
- Release management
- Monitoring setup
- User communication
- Rollback planning
- Production validation

**Outputs:**
- Deployed application
- Release notes
- Monitoring dashboards
- Runbooks

**Questions to Answer:**
- Is the deployment successful?
- Are users experiencing issues?
- Do we need to rollback?
- What did we learn for next time?

---

## Cycle Feedback Loops

### Within Left Cycle (Discovery)
- **Discover → Define:** Research reveals the problem was misunderstood
- **Discover → Design:** Prototype shows design won't work
- **Design → Define:** Design constraints require scope changes

### Within Right Cycle (Delivery)
- **Deploy → Diagnose:** Production issues reveal missed requirements
- **Deploy → Develop:** Bugs found in production need fixing
- **Develop → Diagnose:** Implementation reveals task breakdown was wrong

### Between Cycles
- **Deploy → Document → Define:** Production learnings inform next iteration
- **Diagnose → Document → Design:** Implementation reveals design gaps

---

## Framework Principles

1. **Documentation is continuous**, not a phase between cycles
2. **Cycles can run in parallel** for different features
3. **Each D has clear entry/exit criteria**
4. **Feedback loops are expected**, not failures
5. **The framework scales** from solo to large teams
