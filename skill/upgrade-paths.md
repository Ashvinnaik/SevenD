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

## Level 2 → Level 3

### What Changes
- Four files expand into seven folders
- Sprint tracking moves from a section in Project.md to dedicated sprint files
- Each phase gets its own focused document
- Fix Log becomes a root-level shared file

### Migration Steps

1. **Product.md splits into two folders:**
   - Backlog, priorities, out of scope → `01-discovery/DISCOVERY.md`
   - Requirements, acceptance criteria → `02-definition/DEFINITION.md`

2. **Architecture.md becomes a folder:**
   - Full architecture → `03-design/DESIGN.md`
   - Expand: Add component designs with interfaces and data models
   - Add: Design review checklist, security section

3. **Create the bridge file:**
   - `04-documentation/DOCUMENTATION.md` — Build the Product Status Board
   - Map every Discovery item across all phases (Definition, Design, Development, Diagnostics, Deployed)
   - This is NEW content — synthesized from the state of all four Level 2 files

4. **Project.md splits into three folders:**
   - Sprint tasks, development log → `05-development/INDEX.md` + `sprint-NN.md`
   - Diagnostics, test coverage → `06-diagnostics/DIAGNOSTICS.md`
   - Deployment log, environments → `07-deployment/DEPLOYMENT.md`

5. **Resources.md content gets absorbed:**
   - Component registry → `03-design/DESIGN.md` (components section)
   - Environments, infrastructure → `07-deployment/DEPLOYMENT.md`
   - Dependencies → `03-design/DESIGN.md` or sprint files

6. **Fix Log becomes root-level:**
   - Project.md Fix Log → `Fix.md`
   - Expand: Add open issues, resolved with root cause, common errors sections

7. **Update IDE rules** — Replace Level 2 rules with Level 3 rules

### What to Watch For
- The Documentation Status Board is the hardest new file — it requires mapping all items across all phases
- Resources.md doesn't map 1:1 — component registry goes to Design, infra goes to Deployment
- Sprint files need to be small — if the current sprint section in Project.md is large, split into weekly files

---

## Level 3 → Level 4

### What Changes
- Markdown files for the Product Loop (Discovery, Definition, Design) become GitHub Issues
- Sprint files become GitHub Milestones
- Documentation status board becomes GitHub Projects board
- Diagnostics becomes automated via GitHub Actions
- Deployment becomes automated via GitHub Actions
- Fix.md becomes Bug issues
- Design.md and DOCUMENTATION.md may stay as local files alongside GitHub Issues

### Migration Steps

1. **Set up GitHub infrastructure:**
   ```bash
   chmod +x scripts/setup-github.sh
   ./scripts/setup-github.sh
   ```
   This creates: 18 labels, 4 sprint milestones

2. **Migrate Discovery backlog → GitHub Issues:**
   - For each item in `01-discovery/DISCOVERY.md`:
     ```bash
     gh issue create --title "D-001: [Item]" --label "7d:discovery,priority:must" --body "..."
     ```
   - Use the Discovery issue template for structure

3. **Migrate Definition specs → GitHub Issues:**
   - For each defined requirement:
     ```bash
     gh issue create --title "DEF: [Item] Requirements" --label "7d:definition" --body "..."
     ```
   - Link to the Discovery issue in the body
   - Use the Definition issue template for structure

4. **Migrate Design specs → GitHub Issues:**
   - For each designed component:
     ```bash
     gh issue create --title "DESIGN: [Component]" --label "7d:design" --body "..."
     ```
   - Link to the Definition issue
   - Use the Design issue template

5. **Set up GitHub Projects board:**
   - Create board with columns: Backlog | Defining | Designing | Ready | In Progress | Review | Done
   - Add all migrated issues to the board
   - Position in correct column based on current status

6. **Configure Actions workflows:**
   - Edit `.github/workflows/diagnostics.yml` — uncomment your stack, add actual commands
   - Edit `.github/workflows/deploy.yml` — configure your hosting provider

7. **Migrate Fix Log → Bug Issues:**
   - Open issues from Fix.md become Bug issues
   - Resolved issues become closed Bug issues (with fix and lesson learned)

8. **Set up branch protection:**
   - Settings → Branches → Add rule for `main`
   - Require PR, require "Diagnostics Gate" status check, require approval

9. **Keep or archive local files:**
   - DESIGN.md can stay as a local detailed reference alongside Design issues
   - DOCUMENTATION.md can be replaced entirely by the Projects board
   - Sprint files are replaced by Milestones
   - Fix.md is replaced by Bug issues

10. **Update IDE rules** — Replace Level 3 rules with Level 4 rules

### What to Watch For
- Don't lose detail in the migration — GitHub issue bodies can hold the full spec content
- The Projects board needs manual setup — the script can't create it via API
- Branch protection must be configured manually
- Test the Actions workflows with a dummy PR before migrating real work
