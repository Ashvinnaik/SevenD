# CLAUDE.md — 7D Framework (Level 1)

You are working on a small project with two source-of-truth files. Everything you need to know is in these files. Read them before every task.

## The Two Files

| File | Contains | Read When | Update When |
|------|----------|-----------|-------------|
| `Product.md` | Vision, backlog, requirements, design decisions, scope | Before writing any code | Completing a backlog item, changing a decision, or discovering something out of scope |
| `Tech.md` | Stack, structure, setup, conventions, tests, deployment, fix log, dependencies | Before any technical decision | Adding a dependency, fixing an error, running tests, deploying |

## How You Work

**Before every task:**
1. Read `Product.md` — find the backlog item you're working on, read its acceptance criteria
2. Read `Tech.md` — check the stack, conventions, existing structure, and fix log
3. If the task isn't in the Product.md backlog, stop and ask. Don't build unscoped work.

**While building:**
4. Follow the conventions listed in Tech.md. Don't invent new patterns — match what's there.
5. Check the Fix Log before debugging anything. The answer may already exist.
6. Keep it simple. This is a small project. No microservices, no over-abstraction, no premature optimization.

**After building:**
7. Update the backlog status in Product.md (Todo → Building → Done)
8. Log every error you encountered in Tech.md Fix Log — even if trivial
9. Add any new dependencies to the Tech.md Dependencies table
10. Run tests and log results in Tech.md Testing table

## When You're Unsure

- **Requirements unclear?** Ask. Don't guess at what a feature should do.
- **Multiple ways to build it?** Pick the simplest one that meets the acceptance criteria.
- **Existing code conflicts with what's asked?** Point it out before changing anything.
- **Something is broken and you don't know why?** Say so. Don't silently rewrite working code.

## Don't

- Don't code without reading both files first
- Don't build features that aren't in the Product.md backlog
- Don't add packages without logging them in Tech.md Dependencies
- Don't fix errors silently — every error goes in the Fix Log with cause and fix
- Don't commit .env files or secrets
- Don't over-engineer — if the backlog says "auth," build auth, not a full IAM system
- Don't change design decisions in Product.md without asking first
- Don't create new conventions — follow the ones in Tech.md or ask to add one

## Scope Check

This is a Level 1 project — likely a weekend build, prototype, or MVP. When in doubt, build less, not more. Ship something that works over something that's architecturally perfect. The goal is a working product, not a framework.

---

## Customizing This File For Your Project

This CLAUDE.md is a starter. Make it yours:

**Fill in Product.md first.** Before you touch CLAUDE.md, write your vision, backlog items with acceptance criteria, and design decisions in Product.md. That's where the agent gets its marching orders.

**Fill in Tech.md second.** Pick your stack, define your project structure, write your setup commands, and add your first conventions. The agent can't follow conventions you haven't written down.

**Add your specific Don'ts.** After your first coding session, you'll notice the agent doing things you don't want. Capture those immediately: "Don't use class components — only functional" or "Don't use Axios — use the built-in fetch wrapper in `src/lib/api.ts`."

**Add a Quick Reference section** once you have your commands working:
```
## Quick Reference
- Dev server: `npm run dev`
- Run tests: `npm test`
- Build: `npm run build`
```

**Grow into Level 2 when needed.** If you find yourself wishing you had a component registry (because the agent keeps creating duplicates), or wishing the sprint tracking was separate from the tech docs — that's the signal to move to Level 2's four-file structure.
