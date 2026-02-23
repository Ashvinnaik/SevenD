# CLAUDE.md — 7D Framework (Level 4: GitHub-Native)

You are working on a team project where GitHub IS the system of record. Issues, PRs, Projects, and Actions enforce the 7D workflow — not markdown files. Everything is tracked through GitHub primitives.

## How This Project Works

```
PRODUCT LOOP                              TECH LOOP
GitHub Issues → GitHub Issues → GitHub Issues → Branches/PRs → Actions CI → Actions Deploy
(Discovery)     (Definition)    (Design)        (Development)  (Diagnostics) (Deployment)
                        ↕                                           ↕
                  GitHub Projects Board (Documentation / status sync)
                        ↕
                  Bug Issues (Fix Log)
```

## Where Things Live

| 7D Phase | GitHub Primitive | How to Find |
|----------|-----------------|-------------|
| Discovery | Issues labeled `7d:discovery` | `gh issue list -l 7d:discovery` |
| Definition | Issues labeled `7d:definition` | `gh issue list -l 7d:definition` |
| Design | Issues labeled `7d:design` | `gh issue list -l 7d:design` |
| Documentation | Projects board columns | Repo → Projects tab |
| Development | Branches + PRs + Milestones | `gh pr list` |
| Diagnostics | Actions workflow `diagnostics.yml` | Runs on every PR automatically |
| Deployment | Actions workflow `deploy.yml` | Runs on merge to main |
| Fix Log | Issues labeled `type:bug` | `gh issue list -l type:bug` |

## How You Work

**Starting a new feature:**
1. Check the Discovery backlog: `gh issue list -l 7d:discovery`
2. Read the linked Definition issue for requirements and acceptance criteria
3. Read the linked Design issue for architecture, interfaces, and conventions
4. Confirm the Design issue is approved (has `status:ready` label)
5. Check the sprint Milestone: `gh issue list --milestone "Sprint N"`

**Building a feature:**
6. Create a branch: `feat/[description]` matching the Git branch convention from the Design issue
7. Write code following the Design issue specifications exactly
8. Check existing Bug issues before debugging: `gh issue list -l type:bug`
9. Open a PR — the template enforces Definition/Design/Diagnostics checks. Fill in every checkbox.
10. Diagnostics Actions run automatically (lint, test, build). All must pass.

**Shipping:**
11. Get PR approved + all Actions checks green before merge
12. Merge to main triggers the deploy workflow
13. Post-deploy health check runs automatically
14. Move issue to "Done" column on Projects board

**When something breaks:**
15. Create a Bug issue using the template — include error message, severity, steps to reproduce, and fix attempts
16. When fixed, fill in the fix and lesson learned fields. These become the team's institutional memory.

## Phase Gates (Enforced by PR Template + Actions)

- Every PR must link to a Definition issue — the template checklist requires it
- Every PR must have tests, passing lint, and successful build — Actions enforce this
- Branch protection requires the "Diagnostics Gate" status check before merge
- PR approval is required before merge — no self-merging

## Sprint Milestones

- Sprints are weekly. Each sprint is a GitHub Milestone.
- Only work on issues assigned to the current sprint Milestone.
- Use `gh issue list --milestone "Sprint N"` to see your current work.
- At end of week, review the Milestone completion percentage.

## Key Commands

```bash
# Discovery backlog
gh issue list -l 7d:discovery

# What's ready for development
gh issue list -l status:ready

# Current sprint
gh issue list --milestone "Sprint 1"

# Open bugs
gh issue list -l type:bug

# PR status
gh pr list

# Actions status
gh run list

# View a specific issue
gh issue view <number>
```

## When You're Unsure

- **Requirements unclear?** Read the full Definition issue including comments. If still unclear, comment on the issue and ask. Don't guess.
- **Architecture decision needed?** Check the Design issue for the feature. Check other Design issues for precedent. If new decision, comment on the Design issue.
- **Error you haven't seen?** Search Bug issues: `gh issue list -l type:bug -S "error message"`. If not found, create a new Bug issue with full context.
- **PR checklist item unclear?** Don't uncheck it. Ask in the PR comments.
- **Actions failing unexpectedly?** Check the run logs: `gh run view <id> --log`. Check Bug issues for known CI problems.
- **Merge conflict?** Rebase on main, don't merge main into your branch. Resolve conflicts preserving the Design spec.

## Don't

- Don't start coding without a Design issue in `status:ready`
- Don't merge PRs with failing Actions checks — no exceptions
- Don't skip the PR template checklist — every checkbox matters
- Don't create bugs without error messages, reproduction steps, and severity
- Don't close bug issues without filling in the fix AND lesson learned
- Don't commit secrets — use GitHub Secrets for Actions, `.env` for local
- Don't work on issues outside the current sprint Milestone
- Don't self-approve PRs
- Don't force-push to main
- Don't skip commenting on issues when requirements are unclear

---

## Customizing This File For Your Project

This CLAUDE.md is a starter. Adapt it for your team:

**Add your repository-specific commands.** Replace the generic Quick Reference with your actual dev server, test, lint, and deploy commands. Add database migration commands, type generation, seed scripts — anything the agent needs to run regularly.

**Add label conventions.** If your team uses additional labels beyond the 7D defaults (e.g., `team:frontend`, `team:backend`, `priority:urgent`), document them here so the agent applies them correctly.

**Add branch naming rules.** If your branch conventions go beyond `feat/` (e.g., `fix/`, `chore/`, `release/`), list them all with examples.

**Expand the Don't list.** Add your stack-specific CI/CD traps: "Don't update `package-lock.json` manually — let CI do it" or "Don't edit workflow files without testing in a draft PR first."

**Add PR review conventions.** If your team expects specific PR descriptions, reviewer assignments, or label flows (e.g., "add `needs-review` label when PR is ready"), document it here.

**Add deployment-specific rules.** If your deploy process has pre-conditions (e.g., "don't deploy on Fridays," "staging must be verified before production"), add them to the Don't list or create a "Deploy Rules" section.

**Document your Projects board columns.** List the exact column names and what moving an issue between columns means, so the agent can update the board correctly.
