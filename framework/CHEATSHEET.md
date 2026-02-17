# 7D Framework Quick Reference

## At a Glance

```
DISCOVERY CYCLE          BRIDGE          DELIVERY CYCLE
┌─────────────────┐                    ┌─────────────────┐
│ 📋 Define       │                    │ 🔬 Diagnose     │
│    ↓            │                    │    ↓            │
│ 🎨 Design       │ ←── 📝 Document ──→│ 💻 Develop      │
│    ↓            │                    │    ↓            │
│ 🔍 Discover     │                    │ 🚀 Deploy       │
└─────────────────┘                    └─────────────────┘
```

---

## Quick Decision Guide

| If you're... | Start at... |
|--------------|-------------|
| Starting something new | 📋 Define |
| Have a solution idea | 🎨 Design (but validate problem first) |
| Need to prove something works | 🔍 Discover |
| Ready to write specs | 📝 Document |
| Have specs, need tasks | 🔬 Diagnose |
| Have tasks, ready to code | 💻 Develop |
| Code done, ready to ship | 🚀 Deploy |

---

## Phase Checklists

### 📋 Define - "What problem?"
- [ ] Problem statement written
- [ ] Users identified
- [ ] Success criteria defined
- [ ] Scope boundaries clear
→ **Exit when:** Stakeholders agree on the problem

### 🎨 Design - "How to solve?"
- [ ] Options considered
- [ ] Architecture decided
- [ ] Technical design complete
- [ ] UX flow defined
→ **Exit when:** Team agrees on approach

### 🔍 Discover - "Will it work?"
- [ ] Hypothesis defined
- [ ] Prototype/spike complete
- [ ] Findings documented
- [ ] Design updated if needed
→ **Exit when:** Confidence to proceed

### 📝 Document - "What exactly?"
- [ ] Implementation spec written
- [ ] Acceptance criteria clear
- [ ] Dependencies identified
- [ ] Risks documented
→ **Exit when:** Dev team can start

### 🔬 Diagnose - "How to build?"
- [ ] Tasks broken down
- [ ] Dependencies mapped
- [ ] Estimates provided
- [ ] Assignees set
→ **Exit when:** All tasks created

### 💻 Develop - "Build it"
- [ ] Code written
- [ ] Tests passing
- [ ] PR reviewed
- [ ] Merged
→ **Exit when:** Feature complete

### 🚀 Deploy - "Ship it"
- [ ] Deployed to staging
- [ ] Smoke tests pass
- [ ] Deployed to production
- [ ] Monitoring healthy
→ **Exit when:** Users have it

---

## Common Flows

### New Feature
```
Define → Design → Discover → Document → Diagnose → Develop → Deploy
```

### Bug Fix
```
Diagnose → Develop → Deploy
(Skip discovery if cause is known)
```

### Technical Spike
```
Define → Design → Discover → Document
(May not proceed to delivery immediately)
```

### Hotfix
```
Develop → Deploy
(Document after the fact)
```

---

## Feedback Loops

### "Design won't work"
```
Discover → Design (iterate)
```

### "Problem was wrong"
```
Discover → Define (reframe)
```

### "Tasks were wrong"
```
Develop → Diagnose (re-plan)
```

### "Production issue"
```
Deploy → Diagnose → Develop → Deploy
```

---

## GitHub Labels Quick Setup

```bash
# Stage labels
gh label create "define" -c "6B7280" -d "Problem definition"
gh label create "design" -c "3B82F6" -d "Solution design"
gh label create "discover" -c "8B5CF6" -d "Research & validation"
gh label create "document" -c "EAB308" -d "Documentation"
gh label create "diagnose" -c "F97316" -d "Planning & breakdown"
gh label create "develop" -c "22C55E" -d "Implementation"
gh label create "deploy" -c "EF4444" -d "Release"

# Cycle labels
gh label create "discovery" -c "6366F1" -d "Discovery cycle"
gh label create "delivery" -c "10B981" -d "Delivery cycle"
```

---

## Key Principles

1. **Don't skip Define** - Solving the wrong problem wastes everything
2. **Document is continuous** - Not a phase you do once
3. **Small tasks** - If it's XL, break it down
4. **Feedback is expected** - Loops back are healthy, not failures
5. **Ship early** - Deploy to learn, not just to finish

---

## Questions to Ask

| Phase | Key Question |
|-------|--------------|
| Define | "Are we solving the right problem?" |
| Design | "Is this the best approach?" |
| Discover | "Will this actually work?" |
| Document | "Could someone else implement this?" |
| Diagnose | "Is every task clear and small?" |
| Develop | "Does this meet acceptance criteria?" |
| Deploy | "Is production healthy?" |
