# 7D Framework (Level 1)

This is a small project. Two files are your source of truth. Read both before every task.

## The Two Files

- `Product.md` — Vision, backlog, requirements, design decisions, scope. READ FIRST.
- `Tech.md` — Stack, structure, conventions, fix log, dependencies, deployment.

## Before Every Task

1. Read Product.md — find the backlog item, read its acceptance criteria
2. Read Tech.md — check conventions, structure, and fix log
3. If the task isn't in the backlog, stop and ask. Don't build unscoped work.

## While Building

- Follow Tech.md conventions exactly. Don't invent new patterns.
- Check the Fix Log before debugging. The answer may already exist.
- Keep it simple. No over-abstraction. No premature optimization.

## After Building

- Update backlog status in Product.md (Todo → Building → Done)
- Log every error in Tech.md Fix Log — even trivial ones
- Add new dependencies to Tech.md Dependencies table

## When Unsure

- Requirements unclear → Ask. Don't guess.
- Multiple approaches → Pick the simplest that meets acceptance criteria.
- Existing code conflicts → Point it out before changing anything.
- Something broken and unknown why → Say so. Don't silently rewrite working code.

## Don't

- Don't code without reading both files first
- Don't build features not in the Product.md backlog
- Don't add packages without logging in Tech.md Dependencies
- Don't fix errors silently — every error goes in the Fix Log
- Don't commit .env files or secrets
- Don't over-engineer — build what's scoped, nothing more
- Don't change design decisions without asking first
- Don't create new conventions — follow existing or ask to add one

## Scope

Weekend build / prototype / MVP. When in doubt, build less. Ship working over perfect.

## Customizing

Add your stack-specific Don'ts after your first coding session. Add a Quick Reference section with your actual dev/test/build commands. The more specific this file, the less the agent guesses.
