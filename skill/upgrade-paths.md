# Upgrade Paths — Migration Reference

## Level 1 → Level 2

### What Changes
- Product.md splits into Product.md (backlog + requirements) and Architecture.md (design + standards)
- Tech.md splits into Resources.md (registry + infra) and Project.md (sprints + execution)
- IDE rules update to reference four files instead of two

### Migration Steps

1. **Read existing Product.md**
   - Keep: Vision, Backlog, Requirements → new Product.md
   - Move: Design Decisions, Conventions → new Architecture.md
   - Move: Out of Scope → stays in Product.md

2. **Read existing Tech.md**
   - Move: Stack, Project Structure, Conventions → Architecture.md (code standards)
   - Move: Environment Variables, Dependencies → new Resources.md
   - Move: Testing log, Deployment, Fix Log → new Project.md
   - Move: Setup commands → Architecture.md or Project.md Quick Reference

3. **Create new files**
   - Architecture.md: Expand Design Decisions into full component designs with interfaces
   - Resources.md: Build the Component Registry by scanning the existing codebase
   - Project.md: Add Team table, create first sprint structure

4. **Update IDE rules** — Replace Level 1 rules with Level 2 rules

5. **Verify** — Check that no information was lost in the split

### What to Watch For
- Don't lose the Fix Log — it goes to Project.md
- Don't lose Conventions — they become Code Standards in Architecture.md
- Dependencies table moves from Tech.md to Resources.md

---

## Level 2 → Level 3 (April Release)

### What Changes
- Four files expand into seven phase folders + `reference/` directory + STATUS.md
- Sprint tracking moves from a section in Project.md to per-phase sprint files with Build + Bug sections
- Stable documents (architecture, components, contracts) move to `reference/`
- Fix Log is replaced by Bug sections within each sprint file
- Sprints close only when bugs hit zero; closed sprints archive to `reference/archive/`

### Migration Steps

1. **Create STATUS.md** at project root — active sprints, blockers, project health

2. **Create `reference/` directory:**
   - Architecture.md stack + security → `reference/ARCHITECTURE.md`
   - Architecture.md components + naming → `reference/COMPONENTS.md`
   - Architecture.md API contract → `reference/CONTRACTS.md`
   - Architecture.md Design Decisions Log → `reference/DECISIONS.md`
   - Create `reference/AGENT.md` for AI agent rules
   - Create `reference/archive/` for closed sprints

3. **Product.md splits into two phase folders:**
   - Backlog, priorities, out of scope → `01-discovery/INDEX.md` + `D1-Sprint1.md`
   - Requirements, acceptance criteria → `02-definition/INDEX.md` + `D2-Sprint1.md`

4. **Architecture.md becomes design sprints:**
   - Component designs → `03-design/INDEX.md` + `D3-Sprint1.md`
   - Stable outputs (stack, registry, contracts) → already in `reference/`

5. **Create the Documentation INDEX:**
   - `04-documentation/INDEX.md` — Build the Product Status Board
   - Map every Discovery item across all phases
   - Create sprint files for major documentation efforts

6. **Project.md splits into three phase folders:**
   - Sprint tasks, dev log → `05-development/INDEX.md` + `D5-Sprint1.md`
   - Test coverage, checks → `06-diagnostics/INDEX.md` + `D6-Sprint1.md`
   - Deploy log, environments → `07-deployment/INDEX.md` + `D7-Sprint1.md`

7. **Resources.md content gets absorbed:**
   - Component registry → `reference/COMPONENTS.md`
   - Environments, infrastructure → `reference/ARCHITECTURE.md`
   - Dependencies → sprint files or `reference/COMPONENTS.md`

8. **Fix Log migrates to sprint Bug sections:**
   - Open issues → Bug section of the relevant active sprint
   - Common errors → first Development sprint's Bug section
   - Resolved issues → already in closed sprint archives

9. **Update IDE rules** — Replace Level 2 rules with Level 3 rules

### What to Watch For
- The Documentation Status Board requires mapping all items across all phases
- Resources.md doesn't map 1:1 — registry goes to reference/COMPONENTS.md, infra to reference/ARCHITECTURE.md
- Every sprint file needs both Build AND Bug sections — don't skip the Bug section even if empty

---

## Level 3 → Level 4 (April Release)

### What Changes
- Phase sprint files (D1-Sprint1, etc.) become GitHub Issues + Milestones
- Documentation INDEX status board becomes GitHub Projects board
- Diagnostics and Deployment become automated via GitHub Actions
- Sprint Bug sections become Bug issues
- `reference/` directory STAYS — it's shared between Level 3 and Level 4
- STATUS.md STAYS — updated alongside the Projects board

### Migration Steps

1. **Set up GitHub infrastructure:**
   ```bash
   chmod +x scripts/setup-github.sh
   ./scripts/setup-github.sh
   ```
   This creates: 18 labels, 4 sprint milestones

2. **Keep `reference/` as-is** — Level 4 uses the same reference directory

3. **Migrate Discovery backlog → GitHub Issues:**
   - For each item in `01-discovery/INDEX.md`:
     ```bash
     gh issue create --title "D-001: [Item]" --label "7d:discovery,priority:must" --body "..."
     ```

4. **Migrate Definition specs → GitHub Issues:**
   - For each defined requirement, create a Definition issue linking to Discovery

5. **Migrate Design specs → GitHub Issues:**
   - For each designed component, create a Design issue linking to Definition

6. **Set up GitHub Projects board:**
   - Create board with columns: Backlog | Defining | Designing | Ready | In Progress | Review | Done
   - Add all migrated issues, position in correct column

7. **Configure Actions workflows:**
   - Edit `.github/workflows/diagnostics.yml` — uncomment your stack
   - Edit `.github/workflows/deploy.yml` — configure your hosting provider

8. **Migrate open bugs → Bug Issues:**
   - Open bugs from sprint files become Bug issues
   - Resolved bugs in archived sprints can stay in archives

9. **Set up branch protection:**
   - Settings → Branches → Add rule for `main`
   - Require PR, require "Diagnostics Gate" status check, require approval

10. **Archive or remove phase folders:**
    - Phase folders (01-07) can be removed — GitHub Issues replace them
    - Archive closed sprint files to `reference/archive/` before removing folders
    - Keep STATUS.md and `reference/` directory

11. **Update IDE rules** — Replace Level 3 rules with Level 4 rules

### What to Watch For
- Don't lose detail in the migration — GitHub issue bodies can hold full spec content
- The Projects board needs manual setup — the script can't create it via API
- Branch protection must be configured manually
- Test the Actions workflows with a dummy PR before migrating real work
- `reference/` stays local even when everything else moves to GitHub
