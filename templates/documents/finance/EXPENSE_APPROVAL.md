---
template: Expense Approval Form
category: Finance
version: 2.1
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
