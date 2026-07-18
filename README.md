# documents

Official documentation repository for Alba 2.0.

This repository contains architecture documents, architectural decision records (ADRs), specifications, audit reports, research, sprint reports, meeting notes, and technical decisions. It contains no application source code.

---

## Purpose

All project knowledge that is not source code lives here. Every significant decision, design, and finding is committed to this repository before the session that produced it ends.

---

## Folder Structure

```
documents/
│
├── README.md             — this file
├── CONTRIBUTING.md       — how to contribute documents
├── DOCUMENT_INDEX.md     — master index of all documents
│
├── templates/            — reusable document templates
│   ├── ADR_TEMPLATE.md
│   ├── SPECIFICATION_TEMPLATE.md
│   ├── SPRINT_REPORT_TEMPLATE.md
│   ├── AUDIT_REPORT_TEMPLATE.md
│   ├── RESEARCH_TEMPLATE.md
│   ├── MEETING_NOTES_TEMPLATE.md
│   ├── DECISION_LOG_TEMPLATE.md
│   └── CHANGE_REQUEST_TEMPLATE.md
│
├── architecture/         — system and module architecture documents
├── adr/                  — architectural decision records
├── specifications/       — feature and technical specifications
├── audits/               — audit reports and findings
├── research/             — research documents and analysis
├── sprint-reports/       — per-sprint progress and outcome reports
├── meeting-notes/        — meeting records
├── decisions/            — project-level decisions (non-ADR)
└── archive/              — superseded documents (never deleted)
```

---

## Naming Conventions

All file names are lowercase, hyphen-separated, and include a date prefix where applicable.

| Document type | Pattern | Example |
|---|---|---|
| ADR | `adr/ADR-NNN-title.md` | `adr/ADR-001-use-drizzle-orm.md` |
| Specification | `specifications/SPEC-NNN-title.md` | `specifications/SPEC-001-employee-domain.md` |
| Sprint report | `sprint-reports/SPRINT-NN-report.md` | `sprint-reports/SPRINT-03-report.md` |
| Audit report | `audits/AUDIT-NNN-title.md` | `audits/AUDIT-001-infrastructure.md` |
| Research | `research/RESEARCH-NNN-title.md` | `research/RESEARCH-001-auth-options.md` |
| Meeting notes | `meeting-notes/YYYY-MM-DD-topic.md` | `meeting-notes/2026-07-18-sprint-planning.md` |
| Decision | `decisions/DECISION-NNN-title.md` | `decisions/DECISION-001-monorepo-structure.md` |
| Architecture | `architecture/TOPIC.md` | `architecture/PAYROLL-DOMAIN.md` |

IDs (`NNN`, `NN`) are zero-padded sequential integers. Never reuse an ID. Never rename a file after it reaches `Approved` status.

---

## Versioning Rules

- Documents start at `Version: 1.0`.
- Minor revisions (wording, clarifications, typo fixes) increment the minor version: `1.0 → 1.1`.
- Structural changes or scope changes increment the major version: `1.x → 2.0`.
- When a document is superseded by a newer document, the old document moves to `archive/` with its final version intact. A note is added to the top: `> Superseded by [NEW-DOC-ID]. Archived YYYY-MM-DD.`
- Never delete a document. Archive it.

---

## Document Lifecycle

```
Draft → Review → Approved → Archived
```

| Status | Meaning |
|---|---|
| `Draft` | Work in progress. Content may be incomplete or change significantly. |
| `Review` | Complete enough for feedback. Author has requested review. |
| `Approved` | Reviewed and accepted. Content is authoritative. |
| `Archived` | Superseded or no longer applicable. Retained for historical reference. |

Status is declared in the document header. Advancing from `Review` to `Approved` requires at least one explicit approval recorded in the `Approvals` section of the document.

---

## How to Create a New Document

1. Identify the correct folder for the document type.
2. Copy the appropriate template from `templates/`.
3. Rename the file following the naming convention above.
4. Add a row to `DOCUMENT_INDEX.md` with `Status: Draft`.
5. Fill in all header fields (Title, Author, Date, Status, Version).
6. Write the document content.
7. Commit with a descriptive message: `docs(adr): add ADR-001 — use Drizzle ORM`.
8. When ready for review, update `Status` to `Review` in both the document and the index.
9. On approval, update `Status` to `Approved` and record the approver in the `Approvals` section.
