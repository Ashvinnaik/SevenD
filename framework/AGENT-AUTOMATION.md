# Agent Automation

> How the 7D Framework uses GitHub Actions + an LLM to automate checkpoint reviews and phase advancement.

---

## Overview

When an issue reaches a checkpoint (gets the `awaiting:agent` label), the **7D Agent Worker** automatically:

1. Reads the issue body and all comments
2. Determines the current phase from labels
3. Calls Claude with the appropriate phase prompt from [AGENT-GUIDANCE.md](AGENT-GUIDANCE.md)
4. Posts a structured assessment as an issue comment
5. Decides whether to auto-advance, flag for human review, or reject

```
Issue gets "awaiting:agent" label
         |
   Agent Worker triggers
         |
   Calls LLM with phase prompt
         |
   Posts assessment comment
         |
    ┌────────┼────────┐
    |        |        |
 >= 80     50-79     < 50
    |        |        |
auto-       approve   reject
advance     + flag    + flag
to next     human     human
phase
```

---

## Confidence Thresholds

The agent scores its confidence (0-100) on each assessment:

| Score | Action | What Happens |
|-------|--------|--------------|
| **80-100** | Auto-advance | Agent approves and moves the item to the next phase automatically |
| **50-79** | Approve + flag | Agent approves but flags for human review before advancing |
| **0-49** | Reject + flag | Agent rejects, item stays in current phase, human notified |

### Guardrails

- **Develop and Deploy phases always require human review** — even at 100% confidence, these phases never auto-advance
- The agent posts its full reasoning transparently on the issue
- All thresholds are configurable via repository variables

---

## Configuration

### Required Secrets

Add these in your GitHub repository settings under **Settings > Secrets and variables > Actions**:

| Secret | Required | Description |
|--------|----------|-------------|
| `ANTHROPIC_API_KEY` | Yes | Your Anthropic API key for Claude |

### Repository Variables

Add these under **Settings > Secrets and variables > Actions > Variables**:

| Variable | Default | Description |
|----------|---------|-------------|
| `AGENT_ENABLED` | `true` | Set to `false` to disable all agent automation |
| `AGENT_MODEL` | `claude-sonnet-4-5-20250929` | Which Claude model to use |
| `AGENT_CONFIDENCE_AUTO` | `80` | Minimum confidence for auto-advance |
| `AGENT_CONFIDENCE_APPROVE` | `50` | Minimum confidence for approval |

---

## Workflows

### 7d-agent-worker.yml

The main agent. Triggers when `awaiting:agent` label is added to an issue.

- Checks out the repo to access prompt configuration
- Runs `.github/scripts/agent-prompts.js` which calls the Anthropic API
- Posts the assessment comment
- Applies labels and advances (or flags) based on confidence

### 7d-agent-tracking.yml

Automated item tracking:

- **Phase transitions**: Posts a timestamp comment when an issue enters a new phase
- **Dual approval detection**: When both `agent:approved` and `human:approved` are present, automatically cleans up labels and advances to the next phase
- **Weekly metrics**: Collects open issue counts per phase, checkpoint queue sizes, and throughput

### 7d-checkpoint-notify.yml

Human notification only. When `awaiting:human` label is added, posts a comment requesting human review with context about the agent's verdict.

---

## How to Override

### Disable for a single issue

Remove the `awaiting:agent` label before the workflow runs. Perform a manual checkpoint review instead.

### Disable globally

Set the repository variable `AGENT_ENABLED` to `false`. All `awaiting:agent` labels will be ignored.

### Override an agent decision

If the agent auto-advanced and you disagree:
1. Move the item back by removing the new phase label
2. Add the previous phase label
3. Add a comment explaining why
4. The agent will re-assess on the next checkpoint

---

## Files

| File | Purpose |
|------|---------|
| `.github/workflows/7d-agent-worker.yml` | Main agent workflow |
| `.github/workflows/7d-agent-tracking.yml` | Item tracking and metrics |
| `.github/workflows/7d-checkpoint-notify.yml` | Human review notifications |
| `.github/scripts/agent-prompts.js` | LLM prompt builder and API caller |
| `.github/scripts/phase-config.json` | Phase sequence, transitions, thresholds |
