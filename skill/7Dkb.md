# 7D Knowledge Base

The methodology, vocabulary, and conventions for the 7D Framework. This is the reference Claude reads when explaining 7D to users or when it needs to look up terminology, status values, or ID formats.

---

## The 7 Ds

```
PRODUCT LOOP                              TECH LOOP
Discovery → Definition → Design    →    Development → Diagnostics → Deployment
                    ↕                                       ↕
                Documentation (sync point)
```

| Phase | Loop | What happens | What it produces |
|-------|------|-------------|-----------------|
| Discovery | Product | Identify what to build and why | Backlog with priorities |
| Definition | Product | Specify requirements and acceptance criteria | Testable specs per feature |
| Design | Product | Architect components, interfaces, standards | Technical blueprint + component registry |
| Documentation | Bridge | Track status across all phases | Status board, changelog, document index |
| Development | Tech | Build it in time-boxed sprints | Working code, sprint logs |
| Diagnostics | Tech | Verify correctness and quality | Test results, coverage reports |
| Deployment | Tech | Ship, monitor, learn | Running software, deploy logs, fix log |

**Product Loop** figures out WHAT to build. **Tech Loop** BUILDS, VERIFIES, and SHIPS it. **Documentation** keeps them in sync — after any phase completes work, Documentation gets updated; before any phase starts work, it checks Documentation for current status.

**Feedback loop:** Deployment outcomes (errors, user feedback, metrics) feed back into Discovery as new backlog items.

---

## Phase Gates

Work cannot advance without completing the prior phase:

| Gate | Rule | Why |
|------|------|-----|
| Discovery → Definition | No spec without a backlog entry | Prevents speccing things nobody asked for |
| Definition → Design | No design without approved spec | Prevents building to a moving target |
| Design → Development | No code without completed design | Prevents AI agents from inventing architecture |
| Diagnostics → Deployment | No deploy without tests passing | Prevents shipping broken code |

At Levels 1–3, IDE rules instruct the AI agent to check the relevant file before proceeding. At Level 4, PR checklists and GitHub Actions enforce gates — Actions provide hard automated gates for Diagnostics.

---

## ID Conventions

IDs link items across phases. A backlog item in Discovery connects to its spec in Definition, its component in Design, and its tasks in Development.

| Level | Prefix | Format | Examples |
|-------|--------|--------|---------|
| 1–2 | `P-` | P-NNN for items, P-NNN-F## for functional reqs, P-NNN-N## for non-functional | P-001, P-001-F01, P-001-N01 |
| 3–4 | `D-` | D-NNN for items, D-NNN-F## for functional reqs, D-NNN-N## for non-functional | D-001, D-001-F02, D-001-N01 |

The prefix changes at Level 3 because items originate in a dedicated Discovery file, not a combined Product file. When upgrading from Level 2 → 3, rename all P- IDs to D-.

**ID suffixes:**
- `-F##` = Functional requirement (what the system does)
- `-N##` = Non-functional requirement (how well it does it — performance, security, accessibility)
- `-Q###` = Open question (Q-001, Q-002)
- `-FIX###` = Fix log entry

---

## Status Vocabulary

Each level has its own status flow. Use these exact values when generating files.

### Backlog Status (Discovery → Definition flow)

| Level | Values | Transition |
|-------|--------|-----------|
| 1 | Todo, Building, Done | Todo → Building → Done |
| 2 | Todo, Defining, Defined, Building, Done | Todo → Defining → Defined → Building → Done |
| 3 | Discovery, In Definition, Defined, Approved | Discovery → In Definition → Defined → Approved |
| 4 | GitHub labels: `status:backlog`, `status:defining`, `status:ready`, `status:in-progress`, `status:done` | Labels replace text values |

### Sprint Task Status (Development flow)

| Level | Values | Transition |
|-------|--------|-----------|
| 1 | (no sprints) | — |
| 2–3 | Todo, In Progress, Review, Done | Todo → In Progress → Review → Done |
| 4 | Same values via GitHub labels or Projects board columns | Columns: Backlog → In Progress → Review → Done |

### Interface Evolution States (Design flow)

| State | Meaning | Can build against it? |
|-------|---------|----------------------|
| PROPOSED | Initial sketch, subject to change | No |
| APPROVED | Reviewed and accepted | Yes, with caution |
| IMPLEMENTED | Code written to match | Yes |
| VERIFIED | Tests confirm it works | Yes |
| FINALIZED | Stable, breaking changes need a new version | Yes |

### Documentation Status Board (Level 3+)

Tracks each item across ALL seven phases in a single row:

```
| ID | Item | Discovery | Definition | Design | Development | Diagnostics | Deployment |
```

Cell values: `—` (not started), `Draft`, `In Progress`, `Done`, `Approved`, `Sprint N`, `Pass`/`Fail`, `vX.X`

---

## Glossary

Core terms used throughout the framework. When generating files, use these terms consistently.

| Term | Definition |
|------|-----------|
| **Backlog** | Prioritized list of things to build, maintained in Discovery |
| **Component** | A named, independently buildable part of the system (service, page, model, pipeline) |
| **Component Registry** | Canonical list of every named component — prevents AI agents from inventing duplicates. Lives in Resources.md (L2) or DESIGN.md (L3+) |
| **Fix Log** | Running record of errors, root causes, and fixes. Institutional memory. In Tech.md (L1), Project.md (L2), Fix.md (L3), Bug issues (L4) |
| **Invariant Layer** | The parts of 7D that never change: phases, gates, loops, feedback, AI/Human synergy |
| **Variant Layer** | The parts that adapt per project: components, interfaces, constraints, terminology, metrics |
| **Phase Gate** | A checkpoint requiring human approval before work advances to the next phase |
| **Product Loop** | Discovery → Definition → Design. Figures out what to build |
| **Tech Loop** | Development → Diagnostics → Deployment. Builds, verifies, ships |
| **Sprint** | A time-boxed work cycle (default: 1 week). One sprint file per cycle at Level 3 |
| **Status Board** | A table in Documentation tracking every item across all 7 phases. The single source of truth for project state |
| **IDE Rules** | The file that onboards the AI agent to the project — tells it what to read, how to work, what not to do |

---

## User Conventions

This section is for the user to define project-specific conventions. Claude: when this section is filled in, these conventions override defaults.

### Naming Conventions

| Entity | Pattern | Example |
|--------|---------|---------|
| Components | `[user defines]` | |
| Functions/methods | `[user defines]` | |
| API routes | `[user defines]` | |
| Database tables | `[user defines]` | |
| Environment variables | `[user defines]` | |
| Branch names | `[user defines]` | |
| Commit messages | `[user defines]` | |

### Sprint Cadence

- **Duration:** 1 week (default — change if needed)
- **Review day:** (e.g., Friday)
- **Planning day:** (e.g., Monday)

### Priority Labels

| Label | Meaning |
|-------|---------|
| Must Have | Ship-blocking — the release doesn't work without this |
| Should Have | Important but workarounds exist |
| Nice to Have | Improves experience, can defer |

Override these if your team uses a different scheme (P0/P1/P2, Critical/High/Medium/Low, etc.).

### Domain Terms

Add project-specific terminology here. Claude will use these terms in generated files instead of generic equivalents.

| Term | Definition | Use instead of |
|------|-----------|---------------|
| | | |

### File Conventions

| Convention | Value |
|-----------|-------|
| Primary language | |
| Indent style | (spaces / tabs) |
| Indent size | |
| Line endings | (LF / CRLF) |
| Max line length | |
| Quotes | (single / double) |
