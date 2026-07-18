---
template: Expense Approval Form
category: Finance
version: 2.0
---

{{Logo}}

**{{CompanyName}}**

---

# نموذج اعتماد مصروفات &nbsp;/&nbsp; EXPENSE APPROVAL FORM

---

| البيان / Field | القيمة / Value |
|---|---|
| **رقم المرجع / Reference No.** | {{ReferenceNumber}} |
| **التاريخ / Date** | {{Date}} |
| **مقدم الطلب / Requested By** | {{RequestedByAr}} / {{RequestedBy}} |
| **القسم / Department** | {{Department}} |
| **مركز التكلفة / Cost Centre** | {{CostCentre}} |
| **المشروع / Project Reference** | {{ProjectReference}} |

---

## تفاصيل المصروفات / Expense Details

| # | البيان / Description | التاريخ / Date | المبلغ / Amount | إيصال مرفق / Receipt |
|---|---|---|---|---|
| 1 | {{ExpenseDescription}} | {{ExpenseDate}} | {{Amount}} | نعم / Yes &nbsp;·&nbsp; لا / No |
| 2 | {{ExpenseDescription2}} | {{ExpenseDate2}} | {{Amount2}} | نعم / Yes &nbsp;·&nbsp; لا / No |
| 3 | | | | |

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
| مقدم الطلب / Requested By | {{RequestedBy}} | ___________ | | |
| المدير المباشر / Line Manager | {{LineManager}} | ___________ | | اعتمد / معلق &nbsp;·&nbsp; Approved / Rejected |
| المالية / Finance | {{FinanceApprover}} | ___________ | | اعتمد / معلق &nbsp;·&nbsp; Approved / Rejected |

---

**ملاحظات / Remarks:** {{Remarks}}

| الختم الرسمي / Official Stamp |
|---|
| *(Stamp here / ختم هنا)* |
