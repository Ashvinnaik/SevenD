# Label Reference

> All labels used in the 7D Framework. Create them with `setup/scripts/setup-labels.sh`.

---

## Stage Labels

Track which 7D phase an issue is in.

| Label | Color | Description |
|-------|-------|-------------|
| `define` | `#6B7280` | Define phase |
| `design` | `#3B82F6` | Design phase |
| `discover` | `#8B5CF6` | Discover phase |
| `document` | `#EAB308` | Document phase |
| `diagnose` | `#F97316` | Diagnose phase |
| `develop` | `#22C55E` | Develop phase |
| `deploy` | `#EF4444` | Deploy phase |

## Checkpoint Labels

Track which checkpoint gate an issue is at.

| Label | Color | Description |
|-------|-------|-------------|
| `checkpoint:cp-1` | `#9333EA` | At CP-1: Problem Approved |
| `checkpoint:cp-2` | `#9333EA` | At CP-2: Solution Approved |
| `checkpoint:cp-3` | `#9333EA` | At CP-3: Validated Approach |
| `checkpoint:cp-4` | `#9333EA` | At CP-4: Spec Complete |
| `checkpoint:cp-5` | `#9333EA` | At CP-5: Tasks Approved |
| `checkpoint:cp-6` | `#9333EA` | At CP-6: Code Complete |
| `checkpoint:cp-7` | `#9333EA` | At CP-7: Release Approved |

## Approval Labels

Track checkpoint review status.

| Label | Color | Description |
|-------|-------|-------------|
| `agent:approved` | `#16A34A` | Agent checkpoint approved |
| `agent:rejected` | `#DC2626` | Agent checkpoint rejected |
| `human:approved` | `#16A34A` | Human checkpoint approved |
| `human:rejected` | `#DC2626` | Human checkpoint rejected |
| `awaiting:agent` | `#7C3AED` | Waiting for agent review |
| `awaiting:human` | `#2563EB` | Waiting for human review |

## Type Labels

Classify the type of work.

| Label | Color | Description |
|-------|-------|-------------|
| `feature` | `#1D4ED8` | New feature |
| `bug` | `#DC2626` | Bug fix |
| `spike` | `#7C3AED` | Research / investigation |
| `docs` | `#CA8A04` | Documentation only |
| `refactor` | `#059669` | Code improvement |
| `chore` | `#6B7280` | Maintenance task |

## Cycle Labels

Track which 7D cycle an issue belongs to.

| Label | Color | Description |
|-------|-------|-------------|
| `discovery` | `#6366F1` | Discovery cycle work |
| `delivery` | `#10B981` | Delivery cycle work |

## Priority Labels

| Label | Color | Description |
|-------|-------|-------------|
| `priority:critical` | `#DC2626` | Blocking other work |
| `priority:high` | `#F97316` | Important for current milestone |
| `priority:medium` | `#EAB308` | Should be done soon |
| `priority:low` | `#22C55E` | Nice to have |

## Size Labels

| Label | Color | Description |
|-------|-------|-------------|
| `size:xs` | `#D1D5DB` | < 2 hours |
| `size:s` | `#9CA3AF` | 2-4 hours |
| `size:m` | `#6B7280` | 1-2 days |
| `size:l` | `#4B5563` | 3-5 days |
