# 02 — Definition

> What exactly does each item do? This phase turns Discovery backlog items into testable requirements.
> Input: Backlog items from Discovery. Output: Specifications ready for Design.

---

## How to Use This File

Each backlog item from `01-discovery/DISCOVERY.md` gets a requirements spec here. For simple items, add them directly below. For complex items (5+ requirements), create a separate file: `02-definition/ITEM-NAME.md`.

---

## Requirements Specs

### D-001: [Item Name from Discovery]

**Source:** Discovery backlog D-001
**Status:** [Draft / Review / Approved]
**Owner:** [Who owns this spec]

#### Functional Requirements

| ID | Requirement | Acceptance Criteria | Priority |
|----|-------------|---------------------|----------|
| D-001-F01 | [e.g., User can register with email and password] | [e.g., Account created, confirmation email sent, user redirected to dashboard] | Must |
| D-001-F02 | [e.g., User can log in with credentials] | [e.g., Valid credentials return session token, invalid show error message] | Must |
| D-001-F03 | | | |

#### Non-Functional Requirements

| ID | Requirement | Metric | Priority |
|----|-------------|--------|----------|
| D-001-N01 | [e.g., Login response time] | [e.g., < 500ms at p95] | Should |
| D-001-N02 | [e.g., Password security] | [e.g., bcrypt with cost factor 12] | Must |

#### User Stories

<!-- Optional but helpful for complex items. -->

**As a** [user type], **I want to** [action], **so that** [benefit].

#### Constraints

- [e.g., Must work on Chrome, Firefox, Safari]
- [e.g., Must comply with GDPR for EU users]

#### Dependencies

- [e.g., Email service provider for confirmation emails]
- [e.g., Database must support sessions — see Design]

---

### D-002: [Next Item]

**Source:** Discovery backlog D-002
**Status:** [Draft / Review / Approved]

<!-- Repeat the structure above -->

---

## Definition Checklist

<!-- Track which Discovery items have been fully defined. -->

| Discovery ID | Item | Definition Status | Design Ready |
|-------------|------|-------------------|--------------|
| D-001 | [Item name] | [Draft / Review / Approved] | [Yes / No] |
| D-002 | [Item name] | | |
| D-003 | [Item name] | | |

---

## Glossary

<!-- Define domain terms so all agents and humans share the same vocabulary. -->

| Term | Definition |
|------|-----------|
| [e.g., Workspace] | [e.g., A user's private area containing their projects and settings] |
| [e.g., Widget] | [e.g., A configurable dashboard component showing a single metric] |
