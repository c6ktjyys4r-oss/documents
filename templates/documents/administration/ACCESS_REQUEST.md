---
template: Access Request
category: Administration
version: 1.0
---

{{Logo}}

{{CompanyName}}

# ACCESS REQUEST FORM

---

| Field | Value |
|---|---|
| **Reference No.** | {{ReferenceNumber}} |
| **Date** | {{Date}} |
| **Requested By** | {{RequestedBy}} |
| **Department** | {{Department}} |

---

## Access Required For

| Field | Value |
|---|---|
| **Name** | {{AccessForName}} |
| **Title** | {{AccessForTitle}} |
| **Department** | {{AccessForDepartment}} |
| **Employment Type** | {{EmploymentType}} |

---

## Access Details

| # | System / Location / Resource | Access Level | Reason |
|---|---|---|---|
| 1 | {{Resource}} | {{AccessLevel}} | {{Reason}} |
| 2 | | | |

---

**Access Start Date:** {{AccessStartDate}}
**Access End Date:** {{AccessEndDate}} *(leave blank if permanent)*

**Justification:** {{Justification}}

---

## Approvals

| Role | Name | Signature | Date | Decision |
|---|---|---|---|---|
| Requested By | {{RequestedBy}} | ___________ | | |
| Line Manager | {{LineManager}} | ___________ | | Approved / Rejected |
| IT / Security | {{ITApprover}} | ___________ | | Approved / Rejected |
| Administration | {{AdminApprover}} | ___________ | | Approved / Rejected |

---

**Remarks:** {{Remarks}}
