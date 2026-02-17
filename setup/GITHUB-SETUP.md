# GitHub Projects Setup

> Step-by-step guide to set up your GitHub repository and project boards for the 7D Framework.
> Run this after forking the template repo.

---

## Overview

The 7D Framework uses **two GitHub Projects boards** to track work through dual-track sprints:

1. **Product Sprint** — Discovery cycle (Define → Design → Discover → Document)
2. **Dev Sprint** — Delivery cycle (Diagnose → Develop → Deploy)

Both boards share the same repository with issue templates, labels, and workflows already configured in `.github/`.

---

## Step 1: Create Labels

Run the setup script to create all 7D labels:

```bash
cd setup/scripts
chmod +x setup-labels.sh
./setup-labels.sh
```

Or see [LABELS.md](LABELS.md) for the full label reference.

---

## Step 2: Create Two Projects

### Project 1: Product Sprint (Discovery Cycle)

1. Create new project: `[Your Product] - Product Sprint`
2. Choose **Board** layout
3. Configure columns:

| Column | Purpose |
|--------|---------|
| Define | Problem definition |
| CP-1 Queue | Awaiting Problem Approved checkpoint |
| Design | Solution architecture |
| CP-2 Queue | Awaiting Solution Approved checkpoint |
| Discover | Research & validation |
| CP-3 Queue | Awaiting Validated Approach checkpoint |
| Document | Specification |
| CP-4 Queue | Awaiting Spec Complete checkpoint |
| Ready for Dev | Handoff to Dev Sprint |

### Project 2: Dev Sprint (Delivery Cycle)

1. Create new project: `[Your Product] - Dev Sprint`
2. Choose **Board** layout
3. Configure columns:

| Column | Purpose |
|--------|---------|
| Incoming | Items from Product Sprint |
| Diagnose | Task breakdown |
| CP-5 Queue | Awaiting Tasks Approved checkpoint |
| Develop | Implementation |
| CP-6 Queue | Awaiting Code Complete checkpoint |
| Deploy | Release |
| CP-7 Queue | Awaiting Release Approved checkpoint |
| Done | Completed |

---

## Step 3: Configure Custom Fields

Add these fields to **both** projects.

### Work Item Type (Single Select)
| Value | Description |
|-------|-------------|
| Feature | New capability |
| Bug | Something broken |

### Priority (Single Select)
| Value | Color |
|-------|-------|
| Critical | Red |
| High | Orange |
| Medium | Yellow |
| Low | Green |

### Size (Single Select)
| Value | Estimate |
|-------|----------|
| XS | < 2 hours |
| S | 2-4 hours |
| M | 1-2 days |
| L | 3-5 days |

### Agent Approval (Single Select)
| Value | Meaning |
|-------|---------|
| Pending | Not yet reviewed |
| Approved | Agent passed |
| Rejected | Agent found issues |

### Human Approval (Single Select)
| Value | Meaning |
|-------|---------|
| Pending | Not yet reviewed |
| Approved | Human passed |
| Rejected | Human found issues |

### Current Checkpoint (Single Select)
| Value |
|-------|
| CP-1: Problem |
| CP-2: Solution |
| CP-3: Validated |
| CP-4: Spec |
| CP-5: Tasks |
| CP-6: Code |
| CP-7: Release |
| None (in progress) |

### Timestamps (Date fields)
- `Started Date`
- `Completed Date`

### Tracking (Number fields)
- `Rework Count` (default: 0)
- `Checkpoint Attempts` (default: 1)

---

## Step 4: Create Views

### Product Sprint Views

| View | Layout | Filter / Config |
|------|--------|----------------|
| Full Board | Board | Group by Status (default) |
| Checkpoint Queue | Table | `current-checkpoint:is-not-empty AND (agent-approval:Pending OR human-approval:Pending)` |
| My Work | Board | `assignee:@me`, group by Status |
| Blocked Items | Table | `agent-approval:Rejected OR human-approval:Rejected` |

### Dev Sprint Views

| View | Layout | Filter / Config |
|------|--------|----------------|
| Full Board | Board | Group by Status (default) |
| Checkpoint Queue | Table | `current-checkpoint:is-not-empty AND (agent-approval:Pending OR human-approval:Pending)` |
| Ready to Deploy | Table | `status:Deploy AND agent-approval:Approved AND human-approval:Approved` |
| Sprint Burndown | Table | `iteration:@current`, group by Status |

---

## Step 5: Checkpoint Workflow

How items flow through checkpoint gates:

```
1. Work completes in current phase
         |
2. Move item to "CP-X Queue" column
         |
3. Add label "awaiting:agent"
         |
4. Agent performs checkpoint review
   - Uses validation prompt from framework/AGENT-GUIDANCE.md
   - Posts assessment as comment
   - Adds "agent:approved" or "agent:rejected" label
         |
5. Remove "awaiting:agent", add "awaiting:human"
         |
6. Human reviews agent assessment
   - Validates agent's evaluation
   - Adds "human:approved" or "human:rejected" label
         |
7. If BOTH approved:
   - Move to next phase column
   - Update "current-checkpoint" field
   - Remove checkpoint labels
         |
8. If EITHER rejected:
   - Move back to phase column (not queue)
   - Address feedback
   - Increment "checkpoint-attempts"
   - Return to step 1
```

### Checkpoint Comment Template

```markdown
## Checkpoint CP-[X]: [Name] - Agent Assessment

### Validation Results

| Criteria | Status | Notes |
|----------|--------|-------|
| [Criterion 1] | PASS/FAIL | [Details] |
| [Criterion 2] | PASS/FAIL | [Details] |

### Agent Verdict: APPROVED / REJECTED

**Summary:** [Brief explanation]

**If rejected:**
- Missing: [What's missing]
- Action needed: [What to do]

---
@[human-reviewer] - Please review this assessment and provide your approval.
```

---

## Step 6: Configure Agent Automation

The 7D Agent Worker automates checkpoint reviews using Claude. See [AGENT-AUTOMATION.md](../framework/AGENT-AUTOMATION.md) for full details.

### Add Secret

Go to **Settings > Secrets and variables > Actions > Secrets**:

| Secret | Value |
|--------|-------|
| `ANTHROPIC_API_KEY` | Your Anthropic API key |

### Add Variables (Optional)

Go to **Settings > Secrets and variables > Actions > Variables**:

| Variable | Default | Description |
|----------|---------|-------------|
| `AGENT_ENABLED` | `true` | Set `false` to disable agent automation |
| `AGENT_MODEL` | `claude-sonnet-4-5-20250929` | Claude model to use |
| `AGENT_CONFIDENCE_AUTO` | `80` | Confidence threshold for auto-advance |
| `AGENT_CONFIDENCE_APPROVE` | `50` | Confidence threshold for approval |

---

## Step 7: Verify Setup

- [ ] Labels created (run `gh label list` to confirm)
- [ ] Product Sprint project created with all columns
- [ ] Dev Sprint project created with all columns
- [ ] Custom fields added to both projects
- [ ] Views created for both projects
- [ ] `ANTHROPIC_API_KEY` secret added
- [ ] Create a test Feature issue and verify it appears in Product Sprint at Define
- [ ] Verify the agent worker triggers and posts a checkpoint assessment
- [ ] Test the full checkpoint workflow (agent review → human review → advance)

---

## Appendix: Simple Setup (Single Board)

For small teams that prefer a single board instead of dual-track:

1. Create one project: `[Your Product] - 7D Development`
2. Configure columns for all 7 phases + Done:

| Column | Phase |
|--------|-------|
| Define | Problem definition |
| Design | Solution architecture |
| Discover | Research & validation |
| Document | Specification |
| Diagnose | Task breakdown |
| Develop | Implementation |
| Deploy | Release |
| Done | Completed |

3. Add the same custom fields (Priority, Size, Type)
4. Skip checkpoint queue columns — use labels only for checkpoint tracking
5. Create views: Full Board, My Work, Current Iteration

This approach trades governance visibility for simplicity. Consider upgrading to dual-track when your team grows or when you need checkpoint oversight.
