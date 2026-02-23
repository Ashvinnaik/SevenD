---
trigger: always_on
---

# 7D Framework (Level 4: GitHub-Native)

GitHub IS the system of record. Issues, PRs, Projects, and Actions enforce the 7D workflow.

```
PRODUCT LOOP: Issues (Discovery → Definition → Design)
TECH LOOP:    Branches/PRs → Actions CI → Actions Deploy
SYNC:         GitHub Projects Board
FIX LOG:      Issues labeled type:bug
```

## Where Things Live

- Discovery backlog: `gh issue list -l 7d:discovery`
- Requirements: `gh issue list -l 7d:definition`
- Architecture: `gh issue list -l 7d:design`
- Ready for dev: `gh issue list -l status:ready`
- Current sprint: `gh issue list --milestone "Sprint N"`
- Open bugs: `gh issue list -l type:bug`
- PR status: `gh pr list`
- CI status: `gh run list`

## Before Every Task

1. Check your sprint Milestone for assigned issues
2. Read the linked Definition issue — requirements and acceptance criteria
3. Read the linked Design issue — architecture, interfaces, conventions
4. Confirm Design issue has `status:ready` label

## While Building

- Follow Design issue specifications exactly. Don't invent patterns.
- Check Bug issues before debugging: `gh issue list -l type:bug -S "error"`
- Open PR using the template. Fill in EVERY checkbox.
- Actions CI runs automatically. All checks must pass.

## After Building

- Get PR approved + all Actions green before merge
- Merge triggers deploy workflow automatically
- Move issue to "Done" on Projects board

## Phase Gates (Enforced)

- PR template requires link to Definition issue
- Actions CI blocks merge on failing lint/test/build
- Branch protection requires "Diagnostics Gate" check
- PR approval required — no self-merging

## When Unsure

- Requirements unclear → Read Definition issue + comments. If still unclear, comment and ask.
- Architecture decision → Check Design issues for precedent. Comment if new decision.
- Error not seen → Search Bug issues. If new, create Bug issue with full context.
- PR checklist unclear → Don't uncheck. Ask in PR comments.
- Actions failing → Check run logs: `gh run view <id> --log`. Check Bug issues.
- Merge conflict → Rebase on main. Preserve Design spec.

## Don't

- Don't code without a Design issue in `status:ready`
- Don't merge with failing Actions — no exceptions
- Don't skip PR template checklist
- Don't create bugs without error messages, steps, and severity
- Don't close bugs without fix AND lesson learned
- Don't commit secrets — use GitHub Secrets
- Don't work outside current sprint Milestone
- Don't self-approve PRs
- Don't force-push to main

## Customizing

Add your team's label conventions, branch naming rules, PR review expectations, and deploy-specific rules. Document your Projects board column names. The more specific this file, the less the agent improvises.
