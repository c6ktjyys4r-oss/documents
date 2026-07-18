---
template: Expense Approval
category: Finance
version: 1.0
---

{{Logo}}

{{CompanyName}}

# EXPENSE APPROVAL FORM

---

| Field | Value |
|---|---|
| **Reference No.** | {{ReferenceNumber}} |
| **Date** | {{Date}} |
| **Requested By** | {{RequestedBy}} |
| **Department** | {{Department}} |
| **Cost Centre** | {{CostCentre}} |

---

## Expense Details

| # | Description | Date | Amount | Receipt Attached |
|---|---|---|---|---|
| 1 | {{ExpenseDescription}} | {{ExpenseDate}} | {{Amount}} | Yes / No |
| 2 | | | | |

---

| | |
|---|---|
| **Total Amount** | {{TotalAmount}} |
| **Currency** | {{Currency}} |

---

**Purpose / Business Justification:** {{Justification}}

**Project / Reference:** {{ProjectReference}}

---

## Approvals

| Role | Name | Signature | Date | Decision |
|---|---|---|---|---|
| Requested By | {{RequestedBy}} | ___________ | | |
| Line Manager | {{LineManager}} | ___________ | | Approved / Rejected |
| Finance | {{FinanceApprover}} | ___________ | | Approved / Rejected |

---

**Remarks:** {{Remarks}}
