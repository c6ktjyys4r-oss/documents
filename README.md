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
├── README.md               — this file
├── CONTRIBUTING.md         — how to contribute documents
├── DOCUMENT_INDEX.md       — master index of all documents and templates
│
├── templates/
│   │
│   ├── ADR_TEMPLATE.md                    — architectural decision record
│   ├── SPECIFICATION_TEMPLATE.md          — feature or technical specification
│   ├── SPRINT_REPORT_TEMPLATE.md          — sprint progress and outcome report
│   ├── AUDIT_REPORT_TEMPLATE.md           — audit findings report
│   ├── RESEARCH_TEMPLATE.md               — research and analysis document
│   ├── MEETING_NOTES_TEMPLATE.md          — meeting record
│   ├── DECISION_LOG_TEMPLATE.md           — project-level decision record
│   ├── CHANGE_REQUEST_TEMPLATE.md         — change request form
│   │
│   └── documents/
│       ├── general/                       — general business documents
│       │   ├── COMPANY_LETTER.md
│       │   ├── INTERNAL_MEMO.md
│       │   ├── OFFICIAL_LETTER.md
│       │   ├── CIRCULAR.md
│       │   ├── ANNOUNCEMENT.md
│       │   ├── CERTIFICATE.md
│       │   ├── ACKNOWLEDGEMENT.md
│       │   └── AUTHORIZATION_LETTER.md
│       │
│       ├── hr/                            — human resources documents
│       │   ├── JOB_OFFER.md
│       │   ├── EMPLOYMENT_VERIFICATION_LETTER.md
│       │   ├── EXPERIENCE_CERTIFICATE.md
│       │   ├── WARNING_LETTER.md
│       │   ├── APPRECIATION_LETTER.md
│       │   ├── PROMOTION_LETTER.md
│       │   ├── TRANSFER_LETTER.md
│       │   ├── TERMINATION_LETTER.md
│       │   ├── RESIGNATION_ACCEPTANCE.md
│       │   └── EMPLOYEE_INFORMATION_FORM.md
│       │
│       ├── finance/                       — finance documents
│       │   ├── INVOICE.md
│       │   ├── QUOTATION.md
│       │   ├── RECEIPT.md
│       │   ├── PAYMENT_VOUCHER.md
│       │   ├── PURCHASE_ORDER.md
│       │   └── EXPENSE_APPROVAL.md
│       │
│       ├── operations/                    — operations documents
│       │   ├── MEETING_MINUTES.md
│       │   ├── INSPECTION_REPORT.md
│       │   ├── INCIDENT_REPORT.md
│       │   ├── MAINTENANCE_REQUEST.md
│       │   ├── ASSET_HANDOVER.md
│       │   └── ASSET_RETURN.md
│       │
│       └── administration/               — administration documents
│           ├── VISITOR_PASS.md
│           ├── ACCESS_REQUEST.md
│           ├── EQUIPMENT_REQUEST.md
│           ├── IT_REQUEST.md
│           └── TRAINING_REQUEST.md
│
├── architecture/           — system and module architecture documents
├── adr/                    — architectural decision records
├── specifications/         — feature and technical specifications
├── audits/                 — audit reports and findings
├── research/               — research documents and analysis
├── sprint-reports/         — per-sprint progress and outcome reports
├── meeting-notes/          — meeting records
├── decisions/              — project-level decisions (non-ADR)
└── archive/                — superseded documents (never deleted)
```

---

## Template Library

43 templates are available. All templates contain placeholders only — no business-specific data, no formulas, no automation. They are reusable by any project or company.

### Framework Templates (`templates/`)

| Template | Use for |
|---|---|
| `ADR_TEMPLATE.md` | Architectural decisions with options, rationale, and consequences |
| `SPECIFICATION_TEMPLATE.md` | Feature or technical specifications with requirements and data model |
| `SPRINT_REPORT_TEMPLATE.md` | Per-sprint progress, blockers, decisions, and next-sprint preview |
| `AUDIT_REPORT_TEMPLATE.md` | Audit findings, severity ratings, and remediation tracking |
| `RESEARCH_TEMPLATE.md` | Research questions, findings, options evaluated, and recommendations |
| `MEETING_NOTES_TEMPLATE.md` | Meeting records with agenda, discussion, decisions, and action items |
| `DECISION_LOG_TEMPLATE.md` | Project or product decisions with rationale and alternatives |
| `CHANGE_REQUEST_TEMPLATE.md` | Proposed changes with impact analysis, implementation plan, and approvals |

### Business Document Templates (`templates/documents/`)

| Category | Templates |
|---|---|
| **General** | Company Letter, Internal Memo, Official Letter, Circular, Announcement, Certificate, Acknowledgement, Authorization Letter |
| **HR** | Job Offer, Employment Verification Letter, Experience Certificate, Warning Letter, Appreciation Letter, Promotion Letter, Transfer Letter, Termination Letter, Resignation Acceptance, Employee Information Form |
| **Finance** | Invoice, Quotation, Receipt, Payment Voucher, Purchase Order, Expense Approval |
| **Operations** | Meeting Minutes, Inspection Report, Incident Report, Maintenance Request, Asset Handover, Asset Return |
| **Administration** | Visitor Pass, Access Request, Equipment Request, IT Request, Training Request |

---

## Naming Conventions

All file names are uppercase, underscore-separated for templates. Project documents use the following patterns:

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
- When a document is superseded, the old document moves to `archive/` with its final version intact. A note is added to the top: `> Superseded by [NEW-DOC-ID]. Archived YYYY-MM-DD.`
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
6. Write the document content — replace all `{{Placeholders}}` with real values.
7. Commit with a descriptive message: `docs(adr): add ADR-001 — use Drizzle ORM`.
8. When ready for review, update `Status` to `Review` in both the document and the index.
9. On approval, update `Status` to `Approved` and record the approver in the `Approvals` section.
