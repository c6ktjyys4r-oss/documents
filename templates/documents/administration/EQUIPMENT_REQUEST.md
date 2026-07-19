---
document:
  name: Equipment Request
  category: administration
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
  RequestedBy:
    label: Requested by (English)
    type: text
    required: true
    group: Requester
    order: 10
  RequestedByAr:
    label: Requested by (Arabic)
    type: text
    group: Requester
    order: 11
  Department:
    label: Department
    type: text
    required: true
    group: Requester
    order: 12
  CostCentre:
    label: Cost Centre
    type: text
    group: Requester
    order: 13
  Priority:
    label: Priority
    type: select
    required: true
    group: Requester
    order: 14
    options:
      - Normal
      - High
      - Urgent
  RequiredByDate:
    label: Required by Date
    type: date
    group: Requester
    order: 15
  ItemDescription1:
    label: Item 1 — Description
    type: text
    required: true
    group: Items Requested
    order: 20
  Quantity1:
    label: Item 1 — Quantity
    type: number
    group: Items Requested
    order: 21
  Specification1:
    label: Item 1 — Specification
    type: text
    group: Items Requested
    order: 22
  Reason1:
    label: Item 1 — Reason
    type: text
    group: Items Requested
    order: 23
  ItemDescription2:
    label: Item 2 — Description
    type: text
    group: Items Requested
    order: 24
  Quantity2:
    label: Item 2 — Quantity
    type: number
    group: Items Requested
    order: 25
  Specification2:
    label: Item 2 — Specification
    type: text
    group: Items Requested
    order: 26
  Reason2:
    label: Item 2 — Reason
    type: text
    group: Items Requested
    order: 27
  ItemDescription3:
    label: Item 3 — Description
    type: text
    group: Items Requested
    order: 28
  Quantity3:
    label: Item 3 — Quantity
    type: number
    group: Items Requested
    order: 29
  Specification3:
    label: Item 3 — Specification
    type: text
    group: Items Requested
    order: 30
  Reason3:
    label: Item 3 — Reason
    type: text
    group: Items Requested
    order: 31
  Justification:
    label: Justification (English)
    type: textarea
    group: Notes
    order: 40
  JustificationAr:
    label: Justification (Arabic)
    type: textarea
    group: Notes
    order: 41
  Remarks:
    label: Remarks
    type: textarea
    group: Notes
    order: 42
  LineManager:
    label: Line Manager Name
    type: text
    required: true
    group: Approval
    order: 50
  ProcurementApprover:
    label: Procurement Approver Name
    type: text
    group: Approval
    order: 51
  FinanceApprover:
    label: Finance Approver Name
    type: text
    group: Approval
    order: 52

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

**Ref / المرجع:** {{ReferenceNumber}} &nbsp;|&nbsp; **Date / التاريخ:** {{Date}}

---

# نموذج طلب معدات وأجهزة &nbsp;/&nbsp; Equipment Request Form

---

| البيان / Field | القيمة / Value |
|---|---|
| **الأولوية / Priority** | {{Priority}} |
| **مقدم الطلب / Requested By** | {{RequestedByAr}} / {{RequestedBy}} |
| **القسم / Department** | {{Department}} |
| **التاريخ المطلوب / Required By Date** | {{RequiredByDate}} |
| **مركز التكلفة / Cost Centre** | {{CostCentre}} |

---

## المعدات المطلوبة / Equipment Requested

| # | البيان / Item | الكمية / Qty | المواصفات / Specification | المبرر / Reason |
|---|---|---|---|---|
| 1 | {{ItemDescription1}} | {{Quantity1}} | {{Specification1}} | {{Reason1}} |
| 2 | {{ItemDescription2}} | {{Quantity2}} | {{Specification2}} | {{Reason2}} |
| 3 | {{ItemDescription3}} | {{Quantity3}} | {{Specification3}} | {{Reason3}} |

---

**المبرر التجاري / Business Justification:** {{JustificationAr}} / {{Justification}}

---

## الاعتمادات / Approvals

| الدور / Role | الاسم / Name | التوقيع / Signature | التاريخ / Date | القرار / Decision |
|---|---|---|---|---|
| مقدم الطلب / Requester | {{RequestedBy}} | ___________ | ___________ | — |
| المدير المباشر / Line Manager | {{LineManager}} | ___________ | ___________ | ☐ Approved &nbsp; ☐ Rejected |
| المشتريات / Procurement | {{ProcurementApprover}} | ___________ | ___________ | ☐ Approved &nbsp; ☐ Rejected |
| المالية / Finance | {{FinanceApprover}} | ___________ | ___________ | ☐ Approved &nbsp; ☐ Rejected |

---

**ملاحظات / Remarks:** {{Remarks}}

---

*يُحتفظ بهذا الطلب في سجلات المشتريات الرسمية للمنشأة. / This request is retained in the company's official procurement records.*
