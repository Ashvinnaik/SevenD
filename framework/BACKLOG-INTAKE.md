# Backlog Intake & Triage

> How new work enters the 7D system and gets prioritized.

---

## Submission

All new work enters through GitHub Issue templates:

| Template | Entry Point | When to Use |
|----------|-------------|-------------|
| **Feature** | Define phase | New capability or enhancement |
| **Bug** | Define or Diagnose | Something broken (Diagnose if root cause is known) |
| **Phase templates** (1-7) | Specific phase | Work already triaged, entering a known phase |

---

## Triage

**Cadence:** Weekly (or more often if volume demands)
**Who:** Product Owner + Engineering Lead

### Triage Checklist

For each new issue:

1. **Is it a duplicate?** — Close and link to existing issue
2. **Is it in scope?** — Does it align with current goals?
3. **Assign priority:**
   - **Critical** — System down, data loss, security issue
   - **High** — Major feature broken, blocking users
   - **Medium** — Workaround exists, improvement needed
   - **Low** — Nice to have, minor inconvenience
4. **Assign size estimate:**
   - **XS** — < 2 hours
   - **S** — 2-4 hours
   - **M** — 1-2 days
   - **L** — 3-5 days
   - **XL** — Needs breakdown (too large for a single item)
5. **Decide disposition:**
   - **Accept into current sprint** — Add to Product Sprint board at Define
   - **Backlog** — Prioritized but not yet scheduled
   - **Reject** — Out of scope, close with explanation

---

## Backlog Grooming

**Cadence:** Monthly
**Who:** Product Owner

### Grooming Checklist

1. **Close stale issues** — No activity in 90+ days, no longer relevant
2. **Re-prioritize** — Adjust priorities based on current goals and feedback
3. **Identify ready items** — Which backlog items should enter the next sprint?
4. **Break down large items** — XL items should be split before they enter a sprint
5. **Update labels** — Ensure all items have correct priority and type labels
