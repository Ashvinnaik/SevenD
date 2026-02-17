# Sprint Ceremonies

> These ceremonies keep the 7D process running. Adapt the timing and format to your team's cadence.
> See [DUAL-TRACK-SPRINTS.md](DUAL-TRACK-SPRINTS.md) for sprint structure options.

---

## Sprint Planning

**When:** Start of each sprint
**Duration:** 30-60 minutes
**Attendees:** All team members + Product Owner

### Agenda

1. **Review completed work** — What shipped since last planning?
2. **Review checkpoint queues** — Any items stuck in CP review?
3. **Pull items into sprint**
   - Product Sprint: pull items into Define from backlog
   - Dev Sprint: pull items from "Ready for Dev" (passed CP-4)
4. **Confirm capacity** — Who's available, any planned time off?
5. **Assign ownership** — Each item gets a clear owner
6. **Identify dependencies** — Flag items that block each other

### Output
- Sprint backlog committed
- [Job Board](../docs/JOB-BOARD.md) updated with sprint items

---

## Daily Standup

**When:** Daily (same time each day)
**Duration:** 15 minutes max
**Format:** Each person answers 3 questions

### Per Person

1. **What phase/checkpoint am I at?** — Where is my work in the 7D lifecycle?
2. **What am I working on today?** — Specific activity within the current phase
3. **Any blockers?** — Especially checkpoint queue delays

### Focus Areas

- Items sitting in checkpoint queues (awaiting:agent or awaiting:human)
- Items that have been in the same phase for more than 2 days
- Dependencies between team members' work

### Rules
- Stand-ups are for status, not problem-solving
- Take detailed discussions offline
- Update the Job Board before standup

---

## Sprint Review / Demo

**When:** End of each sprint
**Duration:** 30 minutes
**Attendees:** Team + stakeholders

### Agenda

1. **Demo deployed features** — Only show work that reached Deploy/Done
2. **Review items that completed the full cycle** — Define through Deploy
3. **Gather stakeholder feedback** — Does the shipped work meet expectations?
4. **Preview upcoming work** — What's in the Product Sprint pipeline?

### Output
- Stakeholder feedback documented
- Items for next sprint identified

---

## Sprint Retrospective

**When:** End of each sprint (after Review)
**Duration:** 30 minutes
**Attendees:** Team only (no stakeholders)

### Agenda

1. **Review velocity metrics** — Items completed, cycle time, throughput (see [METRICS.md](METRICS.md))
2. **Checkpoint pass rate** — How many items passed on first attempt?
3. **What went well?** — What should we keep doing?
4. **What could improve?** — Where did the process slow down?
5. **Action items** — 1-2 specific improvements for next sprint

### Questions to Consider

- Did any items get stuck at a checkpoint repeatedly?
- Were phase durations within targets?
- Did we have to send any items back to earlier phases?
- Were estimates accurate?
- Did the agent assessments align with human assessments?
