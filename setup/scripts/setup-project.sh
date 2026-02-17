#!/bin/bash
# Helper script to create 7D Framework GitHub Projects.
# Usage: ./setup-project.sh <owner>
# Requires: gh CLI (https://cli.github.com/) authenticated
#
# NOTE: GitHub Projects v2 has limited CLI support for custom fields and columns.
# This script creates the two projects. You'll need to configure columns and
# custom fields manually through the GitHub UI. See setup/GITHUB-SETUP.md for details.

set -e

OWNER=${1:-"@me"}

echo "Creating 7D Framework Projects for: $OWNER"
echo ""

# Create Product Sprint project
echo "Creating Product Sprint project..."
gh project create --owner "$OWNER" --title "Product Sprint" --format "Getting started"
echo "Product Sprint project created."
echo ""

# Create Dev Sprint project
echo "Creating Dev Sprint project..."
gh project create --owner "$OWNER" --title "Dev Sprint" --format "Getting started"
echo "Dev Sprint project created."
echo ""

echo "Projects created. Next steps:"
echo ""
echo "1. Open each project in GitHub"
echo "2. Configure columns per setup/GITHUB-SETUP.md Step 2"
echo "3. Add custom fields per setup/GITHUB-SETUP.md Step 3"
echo "4. Create views per setup/GITHUB-SETUP.md Step 4"
echo ""
echo "See setup/GITHUB-SETUP.md for the full setup guide."
