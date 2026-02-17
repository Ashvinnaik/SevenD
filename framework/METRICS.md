# 7D Framework: Velocity & Quality Metrics

## Overview

Track these metrics to understand and improve your development process over time.

---

## Metric Categories

```
┌─────────────────────────────────────────────────────────────────┐
│                        METRICS DASHBOARD                         │
├─────────────────────┬─────────────────────┬─────────────────────┤
│    VELOCITY         │      QUALITY        │    GOVERNANCE       │
│                     │                     │                     │
│ • Cycle Time        │ • Escaped Defects   │ • CP Pass Rate      │
│ • Throughput        │ • Rework Rate       │ • Agent Accuracy    │
│ • Phase Duration    │ • Test Coverage     │ • Skip Attempts     │
│ • WIP Limits        │ • Code Review Time  │ • Approval Latency  │
└─────────────────────┴─────────────────────┴─────────────────────┘
```

---

## Velocity Metrics

### 1. End-to-End Cycle Time
**What:** Total time from Define to Deploy for a work item
**Why:** Primary measure of delivery speed
**Formula:** `Deploy.completed_date - Define.created_date`

| Rating | Feature | Bug (full path) | Bug (fast path) |
|--------|---------|-----------------|-----------------|
| 🟢 Excellent | < 2 weeks | < 1 week | < 2 days |
| 🟡 Good | 2-4 weeks | 1-2 weeks | 2-5 days |
| 🔴 Needs Work | > 4 weeks | > 2 weeks | > 5 days |

### 2. Phase Duration
**What:** Time spent in each phase
**Why:** Identify bottlenecks

| Phase | Target (Feature) | Target (Bug) |
|-------|------------------|--------------|
| Define | 1-2 days | 0.5-1 day |
| Design | 2-3 days | 1-2 days |
| Discover | 2-5 days | 1-3 days |
| Document | 1-2 days | 0.5-1 day |
| Diagnose | 0.5-1 day | 0.5 day |
| Develop | 3-7 days | 1-3 days |
| Deploy | 0.5-1 day | 0.5 day |

### 3. Sprint Throughput
**What:** Number of items completed per sprint
**Why:** Measure team capacity

Track separately:
- Features completed
- Bugs fixed
- Items by size (XS, S, M, L)

### 4. Work in Progress (WIP)
**What:** Items currently in each phase
**Why:** High WIP = context switching = slower delivery

**Recommended WIP Limits:**

| Phase | Max WIP (per person) | Max WIP (team of 4) |
|-------|---------------------|---------------------|
| Define | 1 | 2 |
| Design | 1 | 2 |
| Discover | 2 | 4 |
| Document | 1 | 2 |
| Diagnose | 2 | 4 |
| Develop | 2 | 6 |
| Deploy | 1 | 2 |

---

## Quality Metrics

### 1. Escaped Defects
**What:** Bugs found in production that should have been caught earlier
**Why:** Measures effectiveness of quality gates
**Formula:** `bugs_found_in_prod / features_deployed`

| Rating | Ratio |
|--------|-------|
| 🟢 Excellent | < 0.1 (1 bug per 10 features) |
| 🟡 Good | 0.1 - 0.3 |
| 🔴 Needs Work | > 0.3 |

**Track by escape point:**
- Should have been caught in Design (architecture issues)
- Should have been caught in Discover (validation gaps)
- Should have been caught in Develop (test coverage gaps)
- Should have been caught in Deploy (deployment issues)

### 2. Rework Rate
**What:** Items sent back to earlier phases
**Why:** High rework = poor upfront work or unclear requirements
**Formula:** `items_with_rework / total_items`

| Rating | Rate |
|--------|------|
| 🟢 Excellent | < 10% |
| 🟡 Good | 10-25% |
| 🔴 Needs Work | > 25% |

**Track rework by type:**
- Define → (back from Design) - Problem wasn't clear
- Design → (back from Discover) - Design didn't validate
- Document → (back from Develop) - Spec was incomplete
- Develop → (back from Deploy) - Code had issues

### 3. Test Coverage
**What:** Percentage of code covered by tests
**Why:** Baseline quality indicator

| Rating | Coverage |
|--------|----------|
| 🟢 Excellent | > 80% |
| 🟡 Good | 60-80% |
| 🔴 Needs Work | < 60% |

### 4. Code Review Turnaround
**What:** Time from PR opened to PR merged
**Why:** Slow reviews block delivery

| Rating | Time |
|--------|------|
| 🟢 Excellent | < 4 hours |
| 🟡 Good | 4-24 hours |
| 🔴 Needs Work | > 24 hours |

---

## Governance Metrics

### 1. Checkpoint Pass Rate (First Attempt)
**What:** % of items passing checkpoint on first review
**Why:** Measures quality of phase work

| Checkpoint | Target Pass Rate |
|------------|------------------|
| CP-1 (Problem) | > 80% |
| CP-2 (Solution) | > 70% |
| CP-3 (Validated) | > 75% |
| CP-4 (Spec) | > 85% |
| CP-5 (Tasks) | > 90% |
| CP-6 (Code) | > 85% |
| CP-7 (Release) | > 95% |

### 2. Agent Accuracy
**What:** % of agent checkpoint approvals that humans agreed with
**Why:** Calibrate trust in agent assessments

**Formula:** `agent_approvals_human_also_approved / agent_approvals_total`

| Rating | Accuracy |
|--------|----------|
| 🟢 High Trust | > 90% |
| 🟡 Moderate Trust | 70-90% |
| 🔴 Needs Calibration | < 70% |

**Also track:**
- False positives: Agent approved, Human rejected
- False negatives: Agent rejected, Human approved

### 3. Skip Attempts
**What:** Times agent was asked to skip phases
**Why:** Indicates process friction or gaming attempts

Track:
- Skip requests per item
- Which phases people try to skip
- Reasons given for skip requests

**Target:** < 1 skip attempt per 10 items

### 4. Approval Latency
**What:** Time waiting for human approval at checkpoints
**Why:** Identifies human bottlenecks

| Rating | Wait Time |
|--------|-----------|
| 🟢 Excellent | < 4 hours |
| 🟡 Good | 4-24 hours |
| 🔴 Blocking | > 24 hours |

---

## GitHub Project Custom Fields for Metrics

Add these fields to track metrics:

```yaml
Custom Fields:
  # Timestamps (Date type)
  - define_started
  - define_completed
  - design_started
  - design_completed
  - discover_started
  - discover_completed
  - document_started
  - document_completed
  - diagnose_started
  - diagnose_completed
  - develop_started
  - develop_completed
  - deploy_started
  - deploy_completed

  # Checkpoint tracking (Single Select)
  - cp1_agent_result: [Pending, Approved, Rejected]
  - cp1_human_result: [Pending, Approved, Rejected]
  - cp2_agent_result: [Pending, Approved, Rejected]
  - cp2_human_result: [Pending, Approved, Rejected]
  # ... repeat for CP3-CP7

  # Quality tracking (Number)
  - rework_count: 0
  - checkpoint_attempts: 0
  - escaped_defects: 0

  # Calculated (Number, auto-calc in views)
  - cycle_time_days
  - phase_durations
```

---

## Dashboard Views

### View 1: Cycle Time Chart
```
Table view showing:
| Item | Define | Design | Discover | Document | Diagnose | Develop | Deploy | Total |
|------|--------|--------|----------|----------|----------|---------|--------|-------|
| #123 | 2d     | 3d     | 4d       | 1d       | 0.5d     | 5d      | 0.5d   | 16d   |
```

### View 2: Checkpoint Health
```
| Checkpoint | Pass Rate | Avg Attempts | Agent Accuracy |
|------------|-----------|--------------|----------------|
| CP-1       | 85%       | 1.2          | 92%            |
| CP-2       | 72%       | 1.4          | 88%            |
```

### View 3: WIP Monitor
```
| Phase     | Current WIP | Limit | Status |
|-----------|-------------|-------|--------|
| Define    | 1           | 2     | 🟢     |
| Design    | 3           | 2     | 🔴     |
| Develop   | 5           | 6     | 🟡     |
```

### View 4: Quality Trend
```
Weekly chart showing:
- Escaped defects
- Rework rate
- Test coverage
```

---

## Metric Collection Automation

### GitHub Actions Workflow

```yaml
# .github/workflows/7d-metrics.yml
name: 7D Metrics Collection

on:
  schedule:
    - cron: '0 9 * * 1'  # Weekly on Monday 9am
  workflow_dispatch:

jobs:
  collect-metrics:
    runs-on: ubuntu-latest
    steps:
      - name: Query project data
        uses: actions/github-script@v7
        with:
          script: |
            // Query project items
            // Calculate cycle times
            // Generate metrics report
            // Post to issue or wiki

      - name: Update metrics dashboard
        run: |
          # Update README badges
          # Generate charts
          # Commit to repo
```

### Weekly Metrics Review Checklist

```markdown
## Weekly 7D Metrics Review

### Velocity
- [ ] Average cycle time this week: ___ days
- [ ] Items completed: ___
- [ ] WIP violations: ___

### Quality
- [ ] Escaped defects: ___
- [ ] Rework rate: ___%
- [ ] Test coverage: ___%

### Governance
- [ ] Checkpoint pass rate: ___%
- [ ] Agent accuracy: ___%
- [ ] Skip attempts: ___

### Action Items
- [ ] ___
- [ ] ___
```

---

## Improving Based on Metrics

| If You See... | Consider... |
|---------------|-------------|
| High cycle time in Design | More upfront discovery, clearer problem definition |
| High rework from Develop | Better specs, more detailed acceptance criteria |
| Low checkpoint pass rate | Clearer exit criteria, more agent guidance |
| High agent false positives | More specific validation prompts |
| WIP limits exceeded | Finish before starting, smaller batch sizes |
| High approval latency | Dedicated review time, async approval process |
