#!/bin/bash
# Creates all 7D Framework labels in the current GitHub repository.
# Usage: ./setup-labels.sh
# Requires: gh CLI (https://cli.github.com/) authenticated

set -e

echo "Creating 7D Framework labels..."

# Stage labels
gh label create "define" -c "6B7280" -d "Define phase" --force
gh label create "design" -c "3B82F6" -d "Design phase" --force
gh label create "discover" -c "8B5CF6" -d "Discover phase" --force
gh label create "document" -c "EAB308" -d "Document phase" --force
gh label create "diagnose" -c "F97316" -d "Diagnose phase" --force
gh label create "develop" -c "22C55E" -d "Develop phase" --force
gh label create "deploy" -c "EF4444" -d "Deploy phase" --force

# Checkpoint labels
gh label create "checkpoint:cp-1" -c "9333EA" -d "At CP-1: Problem Approved" --force
gh label create "checkpoint:cp-2" -c "9333EA" -d "At CP-2: Solution Approved" --force
gh label create "checkpoint:cp-3" -c "9333EA" -d "At CP-3: Validated Approach" --force
gh label create "checkpoint:cp-4" -c "9333EA" -d "At CP-4: Spec Complete" --force
gh label create "checkpoint:cp-5" -c "9333EA" -d "At CP-5: Tasks Approved" --force
gh label create "checkpoint:cp-6" -c "9333EA" -d "At CP-6: Code Complete" --force
gh label create "checkpoint:cp-7" -c "9333EA" -d "At CP-7: Release Approved" --force

# Approval labels
gh label create "agent:approved" -c "16A34A" -d "Agent checkpoint approved" --force
gh label create "agent:rejected" -c "DC2626" -d "Agent checkpoint rejected" --force
gh label create "human:approved" -c "16A34A" -d "Human checkpoint approved" --force
gh label create "human:rejected" -c "DC2626" -d "Human checkpoint rejected" --force
gh label create "awaiting:agent" -c "7C3AED" -d "Waiting for agent review" --force
gh label create "awaiting:human" -c "2563EB" -d "Waiting for human review" --force

# Type labels
gh label create "feature" -c "1D4ED8" -d "New feature" --force
gh label create "bug" -c "DC2626" -d "Bug fix" --force
gh label create "spike" -c "7C3AED" -d "Research / investigation" --force
gh label create "docs" -c "CA8A04" -d "Documentation only" --force
gh label create "refactor" -c "059669" -d "Code improvement" --force
gh label create "chore" -c "6B7280" -d "Maintenance task" --force

# Cycle labels
gh label create "discovery" -c "6366F1" -d "Discovery cycle work" --force
gh label create "delivery" -c "10B981" -d "Delivery cycle work" --force

# Priority labels
gh label create "priority:critical" -c "DC2626" -d "Blocking other work" --force
gh label create "priority:high" -c "F97316" -d "Important for current milestone" --force
gh label create "priority:medium" -c "EAB308" -d "Should be done soon" --force
gh label create "priority:low" -c "22C55E" -d "Nice to have" --force

# Size labels
gh label create "size:xs" -c "D1D5DB" -d "< 2 hours" --force
gh label create "size:s" -c "9CA3AF" -d "2-4 hours" --force
gh label create "size:m" -c "6B7280" -d "1-2 days" --force
gh label create "size:l" -c "4B5563" -d "3-5 days" --force

echo "Done! All 7D Framework labels created."
