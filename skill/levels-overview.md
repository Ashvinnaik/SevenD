# 7D Framework — Levels Quick Reference

## Level Decision Matrix

| Question | L1 | L2 | L3 | L4 |
|----------|----|----|----|----|
| Team size | 1 | 1-3 | 3-5 | 3+ on GitHub |
| Timeline | Weekend–2 weeks | Weeks–months | Months | Months+ |
| Features | <5 | 5-15 | 15+ | Any |
| Components | Monolith | Some separation | Clear boundaries | Clear boundaries |
| CI/CD needed | No | Optional | Helpful | Yes, enforced |
| Sprint structure | No | In Project.md | Dedicated files | GitHub Milestones |
| Component registry | No | Resources.md | In Design + Docs | In Design issues |
| Phase gates | Informal | Convention | Documented rules | PR + Actions enforce |

## File Inventory Per Level

### Level 1 (6 files)
```
Product.md
Tech.md
CLAUDE.md
.cursor/rules/7d-framework.mdc
.windsurf/rules/7d-framework.md
.github/copilot-instructions.md
```

### Level 2 (8 files)
```
Product.md
Architecture.md
Resources.md
Project.md
CLAUDE.md
.cursor/rules/7d-framework.mdc
.windsurf/rules/7d-framework.md
.github/copilot-instructions.md
```

### Level 3 (April Release — 24+ files)
```
STATUS.md
reference/ARCHITECTURE.md
reference/COMPONENTS.md
reference/CONTRACTS.md
reference/DECISIONS.md
reference/AGENT.md
reference/archive/README.md
01-discovery/INDEX.md
01-discovery/D1-Sprint1.md
02-definition/INDEX.md
02-definition/D2-Sprint1.md
03-design/INDEX.md
03-design/D3-Sprint1.md
04-documentation/INDEX.md
04-documentation/D4-Sprint1.md
05-development/INDEX.md
05-development/D5-Sprint1.md
06-diagnostics/INDEX.md
06-diagnostics/D6-Sprint1.md
07-deployment/INDEX.md
07-deployment/D7-Sprint1.md
CLAUDE.md
.cursor/rules/7d-framework.mdc
.windsurf/rules/7d-framework.md
.github/copilot-instructions.md
```

### Level 4 (April Release — 22+ files)
```
STATUS.md
reference/ARCHITECTURE.md
reference/COMPONENTS.md
reference/CONTRACTS.md
reference/DECISIONS.md
reference/AGENT.md
reference/archive/README.md
.github/ISSUE_TEMPLATE/discovery.yml
.github/ISSUE_TEMPLATE/definition.yml
.github/ISSUE_TEMPLATE/design.yml
.github/ISSUE_TEMPLATE/bug.yml
.github/PULL_REQUEST_TEMPLATE/default.md
.github/workflows/diagnostics.yml
.github/workflows/deploy.yml
.github/copilot-instructions.md
scripts/setup-github.sh
CLAUDE.md
.cursor/rules/7d-framework.mdc
.windsurf/rules/7d-framework.md
README.md
```

## Upgrade Triggers

**Level 1 → Level 2:**
- Product.md exceeds 100 lines
- You wish you had a component registry
- More than one person is contributing
- You're losing track of dependencies

**Level 2 → Level 3:**
- Product.md requirements need their own detailed specs per feature
- Sprint tasks are getting crowded in Project.md
- 3+ contributors working in parallel
- Phase gate violations are causing problems

**Level 3 → Level 4:**
- Team is already collaborating on GitHub
- Need automated enforcement (CI must pass before merge)
- Manual checklist compliance is inconsistent
- Want Issues/Projects as the canonical tracker (not markdown)
