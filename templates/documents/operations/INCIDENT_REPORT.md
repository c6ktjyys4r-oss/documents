---
document:
  name: Incident Report
  category: operations
  version: 2.1

form:
  direction: ltr
  layout: grouped

fields:
  CompanyName:
    label: Company Name
    type: text
    required: true
    group: Document
    order: 1
  ReferenceNumber:
    label: Report Reference Number
    type: text
    required: true
    group: Document
    order: 2
  ReportDate:
    label: Report Date
    type: date
    required: true
    group: Document
    order: 3
  Department:
    label: Department
    type: text
    required: true
    group: Document
    order: 4
  ReporterName:
    label: Reporter Name (English)
    type: text
    required: true
    group: Reporter
    order: 10
  ReporterNameAr:
    label: Reporter Name (Arabic)
    type: text
    group: Reporter
    order: 11
  ReporterTitle:
    label: Reporter Title
    type: text
    group: Reporter
    order: 12
  IncidentDate:
    label: Incident Date
    type: date
    required: true
    group: Incident
    order: 20
  IncidentTime:
    label: Incident Time
    type: text
    group: Incident
    order: 21
    placeholder: e.g. 02:30 PM
  IncidentLocation:
    label: Location of Incident
    type: text
    required: true
    group: Incident
    order: 22
  IncidentType:
    label: Incident Type
    type: select
    required: true
    group: Incident
    order: 23
    options:
      - Safety / Injury
      - Property Damage
      - Security Breach
      - Near Miss
      - Fire / Hazard
      - Other
  Severity:
    label: Severity
    type: select
    required: true
    group: Incident
    order: 24
    options:
      - Low
      - Medium
      - High
      - Critical
  IncidentDescription:
    label: Incident Description (English)
    type: textarea
    required: true
    group: Description
    order: 30
  IncidentDescriptionAr:
    label: Incident Description (Arabic)
    type: textarea
    group: Description
    order: 31
  PersonName1:
    label: Person Involved 1 — Name
    type: text
    group: Persons Involved
    order: 40
  PersonRole1:
    label: Person 1 — Role
    type: text
    group: Persons Involved
    order: 41
  Injury1:
    label: Person 1 — Injury / Impact
    type: text
    group: Persons Involved
    order: 42
  PersonName2:
    label: Person Involved 2 — Name
    type: text
    group: Persons Involved
    order: 43
  PersonRole2:
    label: Person 2 — Role
    type: text
    group: Persons Involved
    order: 44
  Injury2:
    label: Person 2 — Injury / Impact
    type: text
    group: Persons Involved
    order: 45
  ImmediateActions:
    label: Immediate Actions Taken (English)
    type: textarea
    required: true
    group: Response
    order: 50
  ImmediateActionsAr:
    label: Immediate Actions Taken (Arabic)
    type: textarea
    group: Response
    order: 51
  RootCause:
    label: Root Cause Analysis (English)
    type: textarea
    group: Response
    order: 52
  RootCauseAr:
    label: Root Cause Analysis (Arabic)
    type: textarea
    group: Response
    order: 53
  CorrectiveAction1:
    label: Corrective Action 1
    type: text
    group: Corrective Actions
    order: 60
  Owner1:
    label: Action 1 — Owner
    type: text
    group: Corrective Actions
    order: 61
  DueDate1:
    label: Action 1 — Due Date
    type: date
    group: Corrective Actions
    order: 62
  CorrectiveAction2:
    label: Corrective Action 2
    type: text
    group: Corrective Actions
    order: 63
  Owner2:
    label: Action 2 — Owner
    type: text
    group: Corrective Actions
    order: 64
  DueDate2:
    label: Action 2 — Due Date
    type: date
    group: Corrective Actions
    order: 65
  PreparedBy:
    label: Prepared by Name
    type: text
    required: true
    group: Signatory
    order: 70
  PreparedByTitle:
    label: Title (English)
    type: text
    group: Signatory
    order: 71
  PreparedByTitleAr:
    label: Title (Arabic)
    type: text
    group: Signatory
    order: 72
  ReviewedBy:
    label: Reviewed by Name
    type: text
    group: Signatory
    order: 73
  ReviewedByTitle:
    label: Reviewer Title (English)
    type: text
    group: Signatory
    order: 74
  ReviewedByTitleAr:
    label: Reviewer Title (Arabic)
    type: text
    group: Signatory
    order: 75
  ApprovedBy:
    label: Approved by Name
    type: text
    group: Signatory
    order: 76
  ApprovedByTitle:
    label: Approver Title (English)
    type: text
    group: Signatory
    order: 77
  ApprovedByTitleAr:
    label: Approver Title (Arabic)
    type: text
    group: Signatory
    order: 78

---

<style>
@page { size: A4; margin: 25mm 20mm 20mm 20mm; }
body { font-family: Arial, Helvetica, sans-serif; font-size: 11pt; color: #1a1a1a; max-width: 170mm; margin: 0 auto; line-height: 1.55; }
h1 { font-size: 14pt; font-weight: 700; text-align: center; border-bottom: 2.5px solid #1a1a2e; padding-bottom: 8px; margin: 24px 0 16px; }
h2 { font-size: 9pt; font-weight: 700; color: #1a1a2e; text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 1px solid #c0c6d6; padding-bottom: 3px; margin: 22px 0 10px; }
h3 { font-size: 10pt; font-weight: 700; color: #2a2a3e; margin: 14px 0 6px; }
table { width: 100%; border-collapse: collapse; margin: 6px 0 14px; font-size: 10pt; page-break-inside: avoid; }
th { background: #e8eaf2; color: #1a1a2e; font-weight: 700; padding: 7px 10px; text-align: left; font-size: 9pt; border: 1px solid #c0c6d6; }
td { border: 1px solid #d0d4dc; padding: 6px 10px; vertical-align: top; }
hr { border: none; border-top: 1px solid #d0d4dc; margin: 16px 0; }
blockquote { border-left: 3px solid #d4a000; padding: 8px 14px; background: #fffcf0; margin: 10px 0; font-size: 10pt; }
p { margin: 5px 0; }
em { color: #555; font-size: 9pt; }
@media print { body { max-width: none; } }
</style>


{{Logo}}

**{{CompanyName}}**

---

**Ref / المرجع:** {{ReferenceNumber}} &nbsp;|&nbsp; **Date / التاريخ:** {{ReportDate}}

---

# تقرير حادثة &nbsp;/&nbsp; Incident Report

---

| البيان / Field | القيمة / Value |
|---|---|
| **تاريخ الحادثة / Incident Date** | {{IncidentDate}} |
| **وقت الحادثة / Incident Time** | {{IncidentTime}} |
| **موقع الحادثة / Incident Location** | {{IncidentLocation}} |
| **نوع الحادثة / Incident Type** | {{IncidentType}} |
| **الخطورة / Severity** | {{Severity}} |

---

## المُبلِّغ عن الحادثة / Reported By

| البيان / Field | القيمة / Value |
|---|---|
| **الاسم / Name** | {{ReporterNameAr}} / {{ReporterName}} |
| **المسمى الوظيفي / Job Title** | {{ReporterTitle}} |
| **القسم / Department** | {{Department}} |

---

## وصف الحادثة / Incident Description

**عربي:** {{IncidentDescriptionAr}}

**English:** {{IncidentDescription}}

---

## المتضررون / Persons Involved

| الاسم / Name | الدور / Role | الإصابة / Injury | الحالة / Status |
|---|---|---|---|
| {{PersonName1}} | {{PersonRole1}} | {{Injury1}} | {{Status1}} |
| {{PersonName2}} | {{PersonRole2}} | {{Injury2}} | {{Status2}} |

---

## السبب الجذري / Root Cause

**عربي:** {{RootCauseAr}}

**English:** {{RootCause}}

---

## الإجراءات الفورية المتخذة / Immediate Actions Taken

**عربي:** {{ImmediateActionsAr}}

**English:** {{ImmediateActions}}

---

## الإجراءات التصحيحية / Corrective Actions

| الإجراء / Action | المسؤول / Owner | الموعد / Due Date | الحالة / Status |
|---|---|---|---|
| {{CorrectiveAction1}} | {{Owner1}} | {{DueDate1}} | مفتوح / Open |
| {{CorrectiveAction2}} | {{Owner2}} | {{DueDate2}} | مفتوح / Open |

---

## Signatures / التواقيع

| أُعِدَّ بواسطة / Prepared By | راجعه / Reviewed By | اعتمد بواسطة / Approved By |
|---|---|---|
| {{PreparedBy}} | {{ReviewedBy}} | {{ApprovedBy}} |
| {{PreparedByTitle}} / {{PreparedByTitleAr}} | {{ReviewedByTitle}} / {{ReviewedByTitleAr}} | {{ApprovedByTitle}} / {{ApprovedByTitleAr}} |
| *(Official Stamp / الختم الرسمي)* | | |
| Signature: ___________ | Signature: ___________ | Signature: ___________ |
| Date: ___________ | Date: ___________ | Date: ___________ |

---

*يُحتفظ بهذا التقرير في السجلات التشغيلية الرسمية للمنشأة. / This report is retained in the company's official operational records.*
