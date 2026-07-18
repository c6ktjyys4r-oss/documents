---
template: Access Request
category: Administration
version: 2.0
---

{{Logo}}

**{{CompanyName}}**

---

# نموذج طلب صلاحية وصول &nbsp;/&nbsp; ACCESS REQUEST FORM

---

| البيان / Field | القيمة / Value |
|---|---|
| **رقم المرجع / Reference No.** | {{ReferenceNumber}} |
| **التاريخ / Date** | {{Date}} |
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

---

## تفاصيل الوصول / Access Details

| # | النظام / الموقع / المورد | مستوى الوصول / Access Level | السبب / Reason |
|---|---|---|---|
| 1 | {{Resource1}} | {{AccessLevel1}} | {{Reason1}} |
| 2 | {{Resource2}} | {{AccessLevel2}} | {{Reason2}} |

**تاريخ البدء / Access Start Date:** {{AccessStartDate}}

**تاريخ الانتهاء / Access End Date:** {{AccessEndDate}} *(اتركه فارغًا إذا كان دائمًا / leave blank if permanent)*

**المبرر / Justification:** {{JustificationAr}} / {{Justification}}

---

## الاعتمادات / Approvals

| الدور / Role | الاسم / Name | التوقيع / Signature | التاريخ / Date | القرار / Decision |
|---|---|---|---|---|
| مقدم الطلب / Requested By | {{RequestedBy}} | ___________ | | |
| المدير المباشر / Line Manager | {{LineManager}} | ___________ | | اعتمد / معلق &nbsp;·&nbsp; Approved / Rejected |
| تقنية المعلومات / IT | {{ITApprover}} | ___________ | | اعتمد / معلق &nbsp;·&nbsp; Approved / Rejected |
| الإدارة / Administration | {{AdminApprover}} | ___________ | | اعتمد / معلق &nbsp;·&nbsp; Approved / Rejected |

---

**ملاحظات / Remarks:** {{Remarks}}

| الختم الرسمي / Official Stamp |
|---|
| *(Stamp here / ختم هنا)* |
