---
trigger: always_on
---

# 7D Framework (Level 2)

This project has four source-of-truth files. Read all four before every task.

## The Four Files

- `Product.md` — Vision, backlog, requirements, acceptance criteria. What to build. READ FIRST.
- `Architecture.md` — Stack, components, interfaces, naming conventions, code standards. How to build it. THE LAW.
- `Resources.md` — Component registry, environments, infra, dependencies, secrets locations. LOOK UP BEFORE CREATING.
- `Project.md` — Team, sprints, dev log, tests, deploys, fix log. TRACK ALL WORK HERE.

## Before Every Task

1. Read Product.md — find the backlog item and its acceptance criteria
2. Read Architecture.md — understand the component design and code standards
3. Check Resources.md — look up names, locations, packages, env vars
4. Read the current sprint in Project.md — confirm the task is in scope

## While Building

- Follow Architecture.md naming conventions and code standards exactly. Don't invent patterns.
- Check Resources.md before creating components, installing packages, or using env vars.
- Check Project.md Fix Log before debugging. The answer may already exist.
- Log progress in Project.md Development Log.

## After Building

- Update sprint task status in Project.md
- Run diagnostics per Project.md Pre-Deploy Checks
- Update Product.md backlog status
- Register any new components/packages in Resources.md

## Key Rules

- Resources.md is the registry — check before creating or installing anything
- Architecture.md is the law — follow conventions exactly, update before deviating
- Sprint scope is sacred — only work on current sprint tasks

## When Unsure

- Requirements ambiguous → Check Product.md Open Questions, then ask. Don't guess.
- Component might exist → Search Resources.md AND the codebase first.
- Multiple approaches → Check Architecture.md Design Decisions Log for precedent. Pick simplest.
- Error not seen before → Check Fix Log first. If new, debug, fix, and log with root cause.
- Something conflicts → Stop and flag it. Don't silently work around it.

## Don't

- Don't code without reading Product.md and Architecture.md
- Don't create components without registering in Resources.md
- Don't install packages without adding to Resources.md Dependencies
- Don't fix errors silently — log in Project.md Fix Log with root cause
- Don't deviate from Architecture.md without updating it first
- Don't work outside the current sprint
- Don't guess env var names — look them up in Resources.md
- Don't duplicate existing components
- Don't commit .env files or secrets
- Don't close tasks without verifying acceptance criteria

## Customizing

Add your stack-specific rules to the Don't list as you discover them. Add common commands to a Quick Reference section. The more specific this file is to YOUR project, the less the agent guesses.
