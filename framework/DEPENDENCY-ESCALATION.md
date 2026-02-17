# Dependency & Escalation Management

> How to identify, track, and resolve blockers within the 7D process.

---

## Identifying Dependencies

### When to Flag

- During **Document** phase: list all dependencies in the implementation spec
- During **Diagnose** phase: map dependencies between tasks
- Anytime a task cannot proceed without another completing first

### How to Flag

1. Add a comment on the blocked issue: `Blocked by #[issue-number]`
2. Tag the dependency owner
3. Add context: what's needed and by when

---

## Escalation Path

| Timeframe | Action | Who |
|-----------|--------|-----|
| **0-24 hours** | Comment on issue, tag dependency owner | Assignee |
| **24 hours** | Raise in daily standup | Assignee |
| **48 hours** | Escalate to Engineering Lead | Team lead |
| **Cross-team** | Create a linked issue in the other team's repo | Engineering Lead |

---

## Checkpoint Review Latency

Checkpoint queues should not stall work. Target: reviews complete within 4 hours.

| Situation | Action |
|-----------|--------|
| Agent review pending > 4 hours | Trigger agent review manually |
| Human review pending > 4 hours | Ping reviewer directly |
| Reviewer unavailable > 24 hours | Assign alternate reviewer |
| Repeated checkpoint rejection (3+ attempts) | Pair with reviewer to resolve issues |

---

## Blocked Items

When an item is blocked:

1. Move it to the side (don't let it consume a WIP slot)
2. Document the blocker clearly on the issue
3. Start the escalation path above
4. Pick up the next ready item while waiting
5. Update the [Job Board](../docs/JOB-BOARD.md) to reflect blocked status
