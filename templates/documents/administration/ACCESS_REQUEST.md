---
template: Access Request
category: Administration
version: 2.1
---

{{Logo}}

**{{CompanyName}}**

---

**Ref / المرجع:** {{ReferenceNumber}} &nbsp;|&nbsp; **Date / التاريخ:** {{Date}}

---

# نموذج طلب صلاحية وصول &nbsp;/&nbsp; Access Request Form

---

| البيان / Field | القيمة / Value |
|---|---|
| **مقدم الطلب / Requested By** | {{RequestedByAr}} / {{RequestedBy}} |
| **القسم / Department** | {{Department}} |

---

## الوصول المطلوب لـ / Access Required For

| البيان / Field | القيمة / Value |
|---|---|
| **الاسم / Name** | {{AccessForNameAr}} / {{AccessForName}} |
| **المسمى / Title** | {{AccessForTitleAr}} / {{AccessForTitle}} |
| **القسم / Department** | {{AccessForDepartment}} |
| **نوع التوظيف / Employment Type** | {{EmploymentType}} |
| **تاريخ بدء الوصول / Access Start Date** | {{AccessStartDate}} |
| **تاريخ انتهاء الوصول / Access End Date** | {{AccessEndDate}} *(اتركه فارغًا إذا كان دائمًا / leave blank if permanent)* |

---

## تفاصيل الوصول / Access Details

| # | النظام / الموقع / الأصل | مستوى الوصول / Access Level | المبرر / Reason |
|---|---|---|---|
| 1 | {{Resource1}} | {{AccessLevel1}} | {{Reason1}} |
| 2 | {{Resource2}} | {{AccessLevel2}} | {{Reason2}} |
| 3 | {{Resource3}} | {{AccessLevel3}} | {{Reason3}} |

---

**المبرر التجاري / Business Justification:** {{JustificationAr}} / {{Justification}}

---

## الاعتمادات / Approvals

| الدور / Role | الاسم / Name | التوقيع / Signature | التاريخ / Date | القرار / Decision |
|---|---|---|---|---|
| مقدم الطلب / Requester | {{RequestedBy}} | ___________ | ___________ | — |
| المدير المباشر / Line Manager | {{LineManager}} | ___________ | ___________ | ☐ Approved &nbsp; ☐ Rejected |
| تقنية المعلومات / IT | {{ITApprover}} | ___________ | ___________ | ☐ Approved &nbsp; ☐ Rejected |
| الإدارة / Administration | {{AdminApprover}} | ___________ | ___________ | ☐ Approved &nbsp; ☐ Rejected |

---

**ملاحظات / Remarks:** {{Remarks}}

---

*يُحتفظ بهذا الطلب في سجلات إدارة الوصول الرسمية للمنشأة. / This request is retained in the company's official access management records.*
