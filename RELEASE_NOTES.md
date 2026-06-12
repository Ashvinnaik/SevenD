# SevenD — April Release Notes

**Version:** April 2026
**Release date:** April 4, 2026
**Repo:** https://github.com/Ashvinnaik/SevenD

---

## Why This Release

The original SevenD worked well for linear projects. But real projects aren't linear. You circle back to Discovery mid-build. You run parallel design and development sprints. You find bugs in Definition while you're deploying.

The April Release restructures Levels 3 and 4 around three insights from a year of AI-assisted development across 34 projects:

1. **Every phase needs its own sprint cadence.** Discovery doesn't move at the same speed as Development. Forcing them into the same structure creates friction.

2. **Stable documents and active work need different homes.** Architecture decisions shouldn't be buried in a sprint file that gets archived next week.

3. **You can't close a sprint with open bugs.** This is the simplest rule that produces the biggest quality improvement.

---

## What's New

### Sprint-Based Phase Indexes

Every phase folder (01-discovery through 07-deployment) now uses an INDEX.md that links to individual sprint files. Work within any phase can have multiple sprints running at their own pace.

**Before:** One monolithic DISCOVERY.md, DESIGN.md, etc.
**After:** Lightweight INDEX.md + focused sprint files (D1-Sprint1.md, D3-Sprint2.md, etc.)

### Build + Bug Sections in Every Sprint

Every sprint file has two mandatory sections: **Build** (what the sprint produces) and **Bug** (issues found). A sprint closes only when Bug reaches zero open items.

This is the governance insight from the research: AI-assisted velocity without bug accountability produces technical debt faster than value.

### reference/ Directory

Stable documents that outlive any sprint now live in `reference/`:

- **ARCHITECTURE.md** — System architecture, stack, infrastructure
- **COMPONENTS.md** — Component registry, naming conventions, dev standards
- **CONTRACTS.md** — Interface contracts, API shapes, data flows
- **DECISIONS.md** — Decision log (why X over Y)
- **AGENT.md** — AI agent rules and execution patterns
- **archive/** — Closed sprints archived here

### STATUS.md

A root-level dashboard that answers "where are we right now?" in one glance. Active sprints, blockers, recently closed, project health metrics. Updated at sprint open/close.

### Sprint Reports and Archiving

Every sprint file includes a report section filled on close: metrics, key learnings, what carried over. Closed sprints archive to `reference/archive/`, keeping working directories clean.

---

## What Changed Per Level

| Level | Change |
|-------|--------|
| **1** | No change — still 2 files for weekend projects |
| **2** | No change — still 4 files for small teams |
| **3** | Full restructure: phase INDEX + sprint files, reference/, STATUS.md |
| **4** | Added reference/ and STATUS.md alongside GitHub-native workflow |

---

## Migration from Previous Version

If you're using Level 3 from the previous release:

1. Create `reference/` and move stable content from DESIGN.md (architecture, components, contracts, decisions) into the new reference files
2. Convert each monolithic phase file into an INDEX.md + sprint file
3. Move Fix.md content into sprint Bug sections
4. Create STATUS.md at root
5. See `skill/upgrade-paths.md` for detailed steps

---

## Skill Updates

The Claude skill (for Claude Code CLI and Claude.ai Projects) has been updated to match:

- Feature workflow now points to INDEX + sprint files at Level 3
- Sprint operations include zero-bug close and archiving
- Agent debugging references `reference/COMPONENTS.md` and `reference/AGENT.md`
- Templates reflect the new structure
- 7Dkb.md glossary adds: Reference Directory, Sprint Close, Archive, STATUS.md

---

## What's Next

- Level 2 sprint structure improvements
- Cross-sprint dependency tracking
- Sprint velocity metrics dashboard
- Community-contributed domain adaptations (non-software templates)

---

## Links

- **Repo:** https://github.com/Ashvinnaik/SevenD
- **Research report:** https://powerprompts-website-prod.s3.us-east-1.amazonaws.com/assets/AI-Human+Interactions+Report.pdf
- **Author:** Ash Naik (@Ashvinnaik)
