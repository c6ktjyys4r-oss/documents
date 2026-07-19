---
document:
  name: Internal Memo
  category: general
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
    label: Reference Number
    type: text
    required: true
    group: Document
    order: 2

  Date:
    label: Date
    type: date
    required: true
    group: Document
    order: 3

  Recipient:
    label: To (Recipient Name / Department)
    type: text
    required: true
    group: Memo Header
    order: 10

  PreparedBy:
    label: From (Sender Name)
    type: text
    required: true
    group: Memo Header
    order: 11

  Department:
    label: Sender Department
    type: text
    group: Memo Header
    order: 12

  Subject:
    label: Subject
    type: text
    required: true
    group: Memo Header
    order: 13

  Priority:
    label: Priority
    type: select
    group: Memo Header
    order: 14
    options:
      - Normal
      - High
      - Urgent

  ConfidentialityLevel:
    label: Confidentiality
    type: select
    group: Memo Header
    order: 15
    options:
      - Internal
      - Confidential
      - Strictly Confidential

  Purpose:
    label: Purpose (English)
    type: textarea
    required: true
    group: Content
    order: 20

  PurposeAr:
    label: Purpose (Arabic)
    type: textarea
    group: Content
    order: 21

  Body:
    label: Details (English)
    type: textarea
    required: true
    group: Content
    order: 22

  BodyAr:
    label: Details (Arabic)
    type: textarea
    group: Content
    order: 23

  ActionRequired:
    label: Action Required (English)
    type: textarea
    group: Action
    order: 30

  ActionRequiredAr:
    label: Action Required (Arabic)
    type: textarea
    group: Action
    order: 31

  Deadline:
    label: Deadline
    type: date
    group: Action
    order: 32

  PreparedByTitle:
    label: Sender Title (English)
    type: text
    group: Signatory
    order: 40

  PreparedByTitleAr:
    label: Sender Title (Arabic)
    type: text
    group: Signatory
    order: 41

  ApprovedBy:
    label: Approved by Name
    type: text
    group: Signatory
    order: 42

  ApprovedByTitle:
    label: Approver Title (English)
    type: text
    group: Signatory
    order: 43

  ApprovedByTitleAr:
    label: Approver Title (Arabic)
    type: text
    group: Signatory
    order: 44

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

# مذكرة داخلية &nbsp;/&nbsp; Internal Memorandum

---

| البيان / Field | القيمة / Value |
|---|---|
| **إلى / To** | {{Recipient}} |
| **من / From** | {{PreparedBy}} — {{Department}} |
| **التاريخ / Date** | {{Date}} |
| **المرجع / Reference** | {{ReferenceNumber}} |
| **الموضوع / Subject** | {{Subject}} |
| **الأولوية / Priority** | {{Priority}} |
| **السرية / Confidentiality** | {{ConfidentialityLevel}} |

---

## الغرض / Purpose

**عربي:** {{PurposeAr}}

**English:** {{Purpose}}

---

## التفاصيل / Details

**عربي:** {{BodyAr}}

**English:** {{Body}}

---

## الإجراء المطلوب / Action Required

**عربي:** {{ActionRequiredAr}}

**English:** {{ActionRequired}}

**الموعد النهائي / Deadline:** {{Deadline}}

---

## Signatures / التواقيع

| أُعِدَّت بواسطة / Prepared By | اعتمد بواسطة / Approved By |
|---|---|
| {{PreparedBy}} | {{ApprovedBy}} |
| {{PreparedByTitle}} / {{PreparedByTitleAr}} | {{ApprovedByTitle}} / {{ApprovedByTitleAr}} |
| Signature: ___________________________ | Signature: ___________________________ |
| Date: ___________________________ | Date: ___________________________ |

---

*هذه المذكرة للاستخدام الداخلي فقط. / This memorandum is for internal use only.*
