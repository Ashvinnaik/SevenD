# SevenD

A progressive framework for building software with AI coding agents. Structure your project so AI agents know what to read, what to build, and when to stop and ask.

```
PRODUCT LOOP                              TECH LOOP
Discovery --> Definition --> Design  -->  Development --> Diagnostics --> Deployment
                    |                                         |
                Documentation (sync point)
```

## The Problem

AI coding agents produce better output when they have structured context. Without it, they invent component names, skip tests, build features nobody asked for, and lose track of what's been decided. SevenD gives your project a skeleton that any AI agent can follow.

## Four Levels

Pick the level that matches your project. You can always upgrade.

| Level | Files | For | What you get |
|-------|-------|-----|-------------|
| **1** | 2 files | Solo, weekend, prototype | Product.md + Tech.md |
| **2** | 4 files | Small team, real project | + Architecture.md, Resources.md, Project.md |
| **3** | 7 folders | Complex project, weekly sprints | One folder per phase, sprint files, status board |
| **4** | GitHub-native | Team on GitHub, CI/CD | Issues, Actions, PR gates, Projects board |

Every level includes IDE rules for **Claude Code**, **Cursor**, **Windsurf**, and **VS Code Copilot**.

## Quick Start

### Option 1: Copy the templates

```bash
# Clone the repo
git clone https://github.com/AshNaik/SevenD.git

# Copy the level you need into your project
cp -r SevenD/level-1/ my-project/    # Solo / prototype
cp -r SevenD/level-2/ my-project/    # Small team
cp -r SevenD/level-3/ my-project/    # Complex project
cp -r SevenD/level-4/ my-project/    # GitHub-native

# Fill in the templates with your project details
# Replace [placeholders] with real content
```

### Option 2: Use the Claude skill (recommended)

The skill walks you through assessment, picks the right level, and generates files filled in with your actual project details instead of placeholders.

**Claude Code (CLI):**
```bash
# Install the skill
cp -r SevenD/skill/ ~/.claude/skills/SevenD/

# Start a conversation
claude

# The skill triggers automatically when you say:
# "set up my project" / "add a feature" / "sprint review"
```

**Claude.ai (Projects):**
1. Create a new Project in Claude.ai
2. Paste the contents of `skill/project-instructions.md` into **Custom Instructions**
3. Upload these 6 files to **Project Knowledge**:
   - `skill/SKILL.md`
   - `skill/7Dkb.md`
   - `skill/templates.md`
   - `skill/levels-overview.md`
   - `skill/ide-rules-format.md`
   - `skill/upgrade-paths.md`
4. Start a conversation: "Help me set up my project"

## The 7 Ds

| Phase | Loop | What happens |
|-------|------|-------------|
| **Discovery** | Product | Identify what to build and why |
| **Definition** | Product | Specify requirements and acceptance criteria |
| **Design** | Product | Architect components, interfaces, standards |
| **Documentation** | Bridge | Track status across all phases |
| **Development** | Tech | Build it in time-boxed sprints |
| **Diagnostics** | Tech | Verify correctness and quality |
| **Deployment** | Tech | Ship, monitor, learn |

Phase gates prevent premature advancement: no Design without approved Definition, no Development without completed Design, no Deployment without Diagnostics passing.

## What the Skill Does

The SevenD skill isn't just setup. It covers the full lifecycle:

- **Initial setup** -- Assess your project, recommend a level, generate customized files
- **Feature workflow** -- Walk through all 7 phases for your level, pointing to exact files
- **Sprint operations** -- Start sprints, run reviews, capture retrospectives
- **Level upgrades** -- Migrate from one level to the next without losing content
- **Agent debugging** -- Diagnose why your AI agent isn't following the framework

## Repo Structure

```
SevenD/
|-- level-1/           # Two files (Product.md + Tech.md + IDE rules)
|-- level-2/           # Four files (+ Architecture, Resources, Project + IDE rules)
|-- level-3/           # Seven folders (one per phase + Fix.md + IDE rules)
|-- level-4/           # GitHub-native (issue templates, Actions, PR gates + IDE rules)
|-- skill/             # Claude skill for guided setup and operations
|   |-- SKILL.md               # Operating instructions
|   |-- 7Dkb.md                # Methodology, vocabulary, conventions
|   |-- templates.md           # File structures for all levels
|   |-- levels-overview.md     # Decision matrix and file inventories
|   |-- ide-rules-format.md    # IDE rule file format specs
|   |-- upgrade-paths.md       # Level migration guides
|   +-- project-instructions.md # Claude.ai project custom instructions
+-- README.md
```

## License

MIT
