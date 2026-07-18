# Contributing to the documents Repository

This repository is for documentation only. No application source code belongs here.

---

## Who Contributes

Anyone working on the project — engineers, agents, architects, product managers — may contribute documents. Every significant decision, design, or finding must be committed here before the session that produced it ends.

---

## What Belongs Here

| Belongs here | Does NOT belong here |
|---|---|
| Architecture documents | Application source code |
| ADRs | Database migration files |
| Specifications | Test files |
| Audit reports | Configuration files |
| Research documents | CI/CD pipelines |
| Sprint reports | Secrets or credentials |
| Meeting notes | Personal notes or drafts not yet committed |
| Technical decisions | |
| Business rules | |

---

## Contribution Rules

### 1. Always use a template

Every document starts from the matching template in `templates/`. Never create a document from scratch with a free-form structure.

### 2. Register every document in the index

Every new document gets a row in `DOCUMENT_INDEX.md` at the time of creation, with `Status: Draft`. The index is never out of date.

### 3. Follow the naming convention

See `README.md` → Naming Conventions. IDs are sequential and never reused.

### 4. One document per commit is preferred

Keep commits focused. A commit that adds one document with its index entry is easier to review and revert than a commit that changes ten documents.

### 5. Commit messages follow this format

```
docs(<folder>): <action> — <document name>

Examples:
docs(adr): add ADR-001 — use Drizzle ORM
docs(specifications): update SPEC-002 — leave domain v1.1
docs(archive): archive SPEC-001 — superseded by SPEC-003
docs(index): register AUDIT-001
```

### 6. Never delete

Move superseded documents to `archive/` and add a supersession note at the top. Update their status in the index to `Archived`.

### 7. Never modify an Approved document's substance

If the content of an `Approved` document needs to change, create a new version (`2.0`) or a new document that supersedes it. Do not silently edit approved content.

### 8. Secrets and credentials are strictly forbidden

No API keys, tokens, passwords, connection strings, or personal information may be committed here.

---

## Review Process

1. Author sets `Status: Review` and updates the index.
2. Reviewer reads the document and records feedback as a commit or comment.
3. On acceptance, reviewer records their name and date in the `Approvals` section.
4. Author sets `Status: Approved` and updates the index.

Agents may self-approve documents that record factual findings (e.g., audit reports, sprint reports). Architectural decisions (ADRs) require explicit human approval before reaching `Approved` status.
