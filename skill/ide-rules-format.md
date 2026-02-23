# IDE Rules — Format Reference

Each IDE has its own file format for project-level AI agent instructions. Every level of the 7D Framework ships with all four.

## Claude Code — CLAUDE.md

- **Location:** Project root
- **Format:** Plain markdown, no frontmatter needed
- **Loaded:** Automatically when Claude Code opens the project
- **Max effective length:** No hard limit, but keep under 200 lines for Level 1-2, under 300 for Level 3-4
- **Notes:** This is the richest format — supports detailed prose, examples, code blocks. Use it as the primary IDE rules file and adapt the others from it.

```markdown
# CLAUDE.md — [Project Name]

You are working on [context sentence].

## Files
...

## How You Work
...

## Don't
...
```

## Cursor — .cursor/rules/7d-framework.mdc

- **Location:** `.cursor/rules/` directory
- **Format:** Markdown with YAML frontmatter (REQUIRED)
- **Loaded:** Based on frontmatter — `alwaysApply: true` means it loads on every prompt
- **Max effective length:** Keep under 150 lines — Cursor rule files compete with other context

```markdown
---
description: "7D Framework Level N — brief description"
globs: "**/*"
alwaysApply: true
---

# 7D Framework (Level N)
...
```

**Critical:** Without the frontmatter, Cursor will not load the rules. The `alwaysApply: true` field is what makes it active on every interaction.

## Windsurf — .windsurf/rules/7d-framework.md

- **Location:** `.windsurf/rules/` directory
- **Format:** Markdown with YAML frontmatter (REQUIRED)
- **Loaded:** Based on `trigger` field — `always_on` means every interaction
- **Max effective length:** Same as Cursor — keep concise

```markdown
---
trigger: always_on
---

# 7D Framework (Level N)
...
```

**Critical:** The `trigger: always_on` frontmatter is required. Without it, Windsurf won't load the rules automatically.

## VS Code Copilot — .github/copilot-instructions.md

- **Location:** `.github/` directory
- **Format:** Plain markdown, no frontmatter
- **Loaded:** Automatically when Copilot Chat is used in the project
- **Max effective length:** Keep under 150 lines
- **Notes:** Shares the `.github/` directory with GitHub Actions and templates. No naming conflicts — Copilot specifically looks for `copilot-instructions.md`.

```markdown
# 7D Framework (Level N)
...
```

## Customization Patterns

When generating IDE rules, always include these sections (adapted per level):

1. **Context sentence** — What the project is and how many files to read
2. **File map** — Which files exist and when to read/update them
3. **Before/While/After** — The three-phase workflow
4. **When Unsure** — How to handle ambiguity (the most important section for reducing slop)
5. **Don't list** — Explicit prohibitions, including stack-specific ones
6. **Customizing** — How the user should evolve this file

### Stack-Specific Don'ts to Add

**React/Next.js:**
- Don't use class components
- Don't use pages/ router if app/ router is the standard
- Don't import from server modules in client components
- Don't skip "use client" directive

**Python/FastAPI:**
- Don't use raw SQL — use the ORM
- Don't skip type hints
- Don't use sync where async is available
- Don't skip Pydantic validation on endpoints

**Node.js/Express:**
- Don't use callbacks — use async/await
- Don't skip error middleware
- Don't use `var` — use `const`/`let`

**TypeScript (any framework):**
- Don't use `any` type
- Don't use non-null assertions without justification
- Don't skip strict mode
