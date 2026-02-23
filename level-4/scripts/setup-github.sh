#!/usr/bin/env bash
#
# 7D Framework — GitHub Setup Script
#
# Creates labels, milestones, and a project board for the 7D workflow.
# Requires: gh CLI (https://cli.github.com) authenticated with your account.
#
# Usage:
#   ./scripts/setup-github.sh                    # Uses current repo
#   ./scripts/setup-github.sh owner/repo-name    # Specify repo

set -euo pipefail

REPO="${1:-$(gh repo view --json nameWithOwner -q .nameWithOwner 2>/dev/null || echo "")}"

if [ -z "$REPO" ]; then
  echo "Error: Could not detect repo. Run from inside a git repo or pass owner/repo as argument."
  echo "Usage: ./scripts/setup-github.sh owner/repo-name"
  exit 1
fi

echo "Setting up 7D Framework for: $REPO"
echo "================================================"

# -------------------------------------------------------------------
# 1. LABELS — One per D phase + status labels + type labels
# -------------------------------------------------------------------
echo ""
echo "Creating labels..."

create_label() {
  local name="$1" color="$2" description="$3"
  gh label create "$name" --repo "$REPO" --color "$color" --description "$description" --force 2>/dev/null \
    && echo "  + $name" \
    || echo "  ~ $name (already exists)"
}

# 7D Phase labels
create_label "7d:discovery"      "1d76db" "Discovery — backlog and ideation"
create_label "7d:definition"     "5319e7" "Definition — requirements specification"
create_label "7d:design"         "0075ca" "Design — architecture and technical decisions"
create_label "7d:documentation"  "006b75" "Documentation — status sync and feature docs"
create_label "7d:development"    "0e8a16" "Development — implementation"
create_label "7d:diagnostics"    "e4e669" "Diagnostics — testing and verification"
create_label "7d:deployment"     "d93f0b" "Deployment — release and shipping"

# Status labels
create_label "status:backlog"     "f9d0c4" "In the backlog, not yet started"
create_label "status:defining"    "f9d0c4" "Requirements being written"
create_label "status:designing"   "f9d0c4" "Architecture being designed"
create_label "status:ready"       "c2e0c6" "Ready for development"
create_label "status:in-progress" "fff2cc" "Actively being worked on"
create_label "status:review"      "d4c5f9" "In review"
create_label "status:done"        "0e8a16" "Completed"
create_label "status:blocked"     "d73a4a" "Blocked — see issue for details"

# Priority labels
create_label "priority:must"      "b60205" "Must Have — launch blocker"
create_label "priority:should"    "ff9f1c" "Should Have — important"
create_label "priority:nice"      "c5def5" "Nice to Have — if time permits"

# Type labels
create_label "type:feature"       "a2eeef" "New feature or capability"
create_label "type:bug"           "d73a4a" "Bug report (feeds Fix Log)"
create_label "type:refactor"      "d4c5f9" "Code improvement without behavior change"
create_label "type:docs"          "0075ca" "Documentation only"

echo ""
echo "Labels created."

# -------------------------------------------------------------------
# 2. MILESTONES — Weekly sprints
# -------------------------------------------------------------------
echo ""
echo "Creating sprint milestones..."

# Create 4 weekly sprint milestones from today
START_DATE=$(date +%Y-%m-%d)

for i in 1 2 3 4; do
  SPRINT_END=$(date -d "$START_DATE + $((i * 7)) days" +%Y-%m-%dT23:59:59Z 2>/dev/null \
    || date -v+"$((i * 7))"d +%Y-%m-%dT23:59:59Z 2>/dev/null \
    || echo "")

  if [ -n "$SPRINT_END" ]; then
    gh api repos/"$REPO"/milestones \
      --method POST \
      -f title="Sprint $i" \
      -f description="7D Framework — Sprint $i (1 week)" \
      -f due_on="$SPRINT_END" \
      -f state="open" 2>/dev/null \
      && echo "  + Sprint $i (due: $SPRINT_END)" \
      || echo "  ~ Sprint $i (may already exist)"
  else
    echo "  + Sprint $i (create manually — date calculation not supported on this OS)"
  fi
done

echo ""
echo "Milestones created."

# -------------------------------------------------------------------
# 3. BRANCH PROTECTION (informational)
# -------------------------------------------------------------------
echo ""
echo "================================================"
echo "MANUAL STEPS NEEDED:"
echo ""
echo "1. Branch protection (Settings → Branches → Add rule for 'main'):"
echo "   - Require pull request before merging"
echo "   - Require status checks: 'Diagnostics Gate'"
echo "   - Require branches to be up to date"
echo ""
echo "2. Enable GitHub Projects (if not already):"
echo "   - Go to repo → Projects tab → New project"
echo "   - Use 'Board' layout"
echo "   - Create columns: Backlog | Defining | Designing | Ready | In Progress | Review | Done"
echo "   - Drag issues between columns as they progress through the 7Ds"
echo ""
echo "3. Configure deployment (optional):"
echo "   - Settings → Environments → New environment → 'production'"
echo "   - Add required reviewers for deployment approval"
echo "   - Add environment secrets (VERCEL_TOKEN, etc.)"
echo ""
echo "4. Uncomment your stack in these workflow files:"
echo "   - .github/workflows/diagnostics.yml (lint, test, build commands)"
echo "   - .github/workflows/deploy.yml (hosting provider)"
echo ""
echo "================================================"
echo "7D Framework setup complete for $REPO"
