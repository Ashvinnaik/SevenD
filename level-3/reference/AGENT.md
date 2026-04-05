# Agent Guidelines — [Project Name]

> Rules and context for AI agents working on this project.
> This file is the single source of agent-specific instructions.
> IDE-specific rules (.cursor, .windsurf, CLAUDE.md) should point here.

---

## Project Context

**Project:** [Name]
**Stack:** [e.g., TypeScript + React + Node + PostgreSQL]
**Architecture:** See `reference/ARCHITECTURE.md`
**Components:** See `reference/COMPONENTS.md`
**Contracts:** See `reference/CONTRACTS.md`

---

## Agent Rules

### Before Writing Code

1. Read `STATUS.md` to know what's active
2. Read the relevant phase INDEX to find your sprint
3. Read the sprint file for your specific tasks
4. Check `reference/COMPONENTS.md` before creating new files — avoid duplicates
5. Check `reference/CONTRACTS.md` for API shapes and data formats

### While Writing Code

- Follow naming conventions in `reference/COMPONENTS.md`
- Keep files under [e.g., 300] lines
- Follow the error handling pattern in CONTRACTS.md
- Do not modify files outside your assigned sprint scope

### After Writing Code

- Update the sprint Build section with what was done
- Log any bugs in the sprint Bug section
- Update `reference/COMPONENTS.md` if new components were created

---

## Prohibited Actions

<!-- Rules born from past failures. Do not remove without team discussion. -->

- [e.g., NEVER touch production data directly]
- [e.g., NEVER merge without running diagnostics]
- [e.g., NEVER create files larger than 300 lines]

---

## Execution Patterns

### Starting a Session

```
1. Read STATUS.md
2. Read your phase INDEX.md
3. Read your sprint file
4. Read reference/AGENT.md (this file)
5. Begin work
```

### Ending a Session

```
1. Update sprint Build section
2. Update sprint Bug section
3. Update STATUS.md if sprint status changed
4. Commit with conventional message: type(phase): description
```

---

## Version

**Last updated:** [YYYY-MM-DD]
**Updated by:** [Who]
**Reason:** [What changed]
