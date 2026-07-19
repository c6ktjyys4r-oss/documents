---
document:
  name: Expense Approval Form
  category: finance
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
  Department:
    label: Department
    type: text
    required: true
    group: Requester
    order: 10
  CostCentre:
    label: Cost Centre
    type: text
    group: Requester
    order: 11
  ProjectReference:
    label: Project Reference
    type: text
    group: Requester
    order: 12
  Currency:
    label: Currency
    type: text
    group: Requester
    order: 13
    placeholder: SAR
  ExpenseDate1:
    label: Expense 1 — Date
    type: date
    group: Expenses
    order: 20
  ExpenseDescription1:
    label: Expense 1 — Description
    type: text
    required: true
    group: Expenses
    order: 21
  Amount1:
    label: Expense 1 — Amount
    type: currency
    required: true
    group: Expenses
    order: 22
  ExpenseDate2:
    label: Expense 2 — Date
    type: date
    group: Expenses
    order: 23
  ExpenseDescription2:
    label: Expense 2 — Description
    type: text
    group: Expenses
    order: 24
  Amount2:
    label: Expense 2 — Amount
    type: currency
    group: Expenses
    order: 25
  ExpenseDate3:
    label: Expense 3 — Date
    type: date
    group: Expenses
    order: 26
  ExpenseDescription3:
    label: Expense 3 — Description
    type: text
    group: Expenses
    order: 27
  Amount3:
    label: Expense 3 — Amount
    type: currency
    group: Expenses
    order: 28
  Justification:
    label: Justification (English)
    type: textarea
    group: Notes
    order: 30
  JustificationAr:
    label: Justification (Arabic)
    type: textarea
    group: Notes
    order: 31
  LineManager:
    label: Line Manager Name
    type: text
    required: true
    group: Approval
    order: 40
  FinanceApprover:
    label: Finance Approver Name
    type: text
    group: Approval
    order: 41
  PreparedBy:
    label: Prepared by Name
    type: text
    required: true
    group: Signatory
    order: 50
  PreparedByTitle:
    label: Title (English)
    type: text
    group: Signatory
    order: 51
  PreparedByTitleAr:
    label: Title (Arabic)
    type: text
    group: Signatory
    order: 52
  Purpose:
    label: Purpose (English)
    type: text
    group: Signatory
    order: 53
  PurposeAr:
    label: Purpose (Arabic)
    type: text
    group: Signatory
    order: 54
  ReceivedBy:
    label: Received by Name
    type: text
    group: Signatory
    order: 55
  TotalAmount:
    label: Total Amount
    type: currency
    required: true
    group: Totals
    order: 60
  VoucherNumber:
    label: Voucher Number
    type: text
    group: Document
    order: 4

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

# نموذج اعتماد مصروفات &nbsp;/&nbsp; Expense Approval Form

---

| البيان / Field | القيمة / Value |
|---|---|
| **مقدم الطلب / Requested By** | {{RequestedByAr}} / {{RequestedBy}} |
| **القسم / Department** | {{Department}} |
| **مركز التكلفة / Cost Centre** | {{CostCentre}} |
| **مرجع المشروع / Project Reference** | {{ProjectReference}} |

---

## تفاصيل المصروفات / Expense Details

| # | البيان / Description | التاريخ / Date | المبلغ / Amount | إيصال / Receipt |
|---|---|---|---|---|
| 1 | {{ExpenseDescription1}} | {{ExpenseDate1}} | {{Amount1}} | ☐ مرفق / Attached |
| 2 | {{ExpenseDescription2}} | {{ExpenseDate2}} | {{Amount2}} | ☐ مرفق / Attached |
| 3 | {{ExpenseDescription3}} | {{ExpenseDate3}} | {{Amount3}} | ☐ مرفق / Attached |

---

| | |
|---|---|
| **الإجمالي / Total Amount** | {{TotalAmount}} |
| **العملة / Currency** | {{Currency}} |

---

**المبرر التجاري / Business Justification:** {{JustificationAr}} / {{Justification}}

---

## الاعتمادات / Approvals

| الدور / Role | الاسم / Name | التوقيع / Signature | التاريخ / Date | القرار / Decision |
|---|---|---|---|---|
| مقدم الطلب / Requester | {{RequestedBy}} | ___________ | ___________ | — |
| المدير المباشر / Line Manager | {{LineManager}} | ___________ | ___________ | ☐ Approved &nbsp; ☐ Rejected |
| المالية / Finance | {{FinanceApprover}} | ___________ | ___________ | ☐ Approved &nbsp; ☐ Rejected |

---

**ملاحظات / Remarks:** {{Remarks}}

---

*يُحتفظ بهذا النموذج مع المستندات الداعمة في السجلات المالية الرسمية للمنشأة. / This form is retained with supporting documents in the company's official financial records.*
