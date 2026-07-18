---
template: Maintenance Request
category: Operations
version: 2.0
---

{{Logo}}

**{{CompanyName}}**

---

# طلب صيانة &nbsp;/&nbsp; MAINTENANCE REQUEST

---

| البيان / Field | القيمة / Value |
|---|---|
| **رقم الطلب / Request No.** | {{ReferenceNumber}} |
| **التاريخ / Date** | {{Date}} |
| **الأولوية / Priority** | {{Priority}} |
| **مقدم الطلب / Requested By** | {{RequestedByAr}} / {{RequestedBy}} |
| **القسم / Department** | {{Department}} |
| **الموقع / Location** | {{Location}} |

---

## تفاصيل الصيانة / Maintenance Details

| البيان / Field | القيمة / Value |
|---|---|
| **نوع الصيانة / Maintenance Type** | {{MaintenanceType}} |
| **الأصل / Asset / Item** | {{AssetDescription}} |
| **رقم الأصل / Asset ID** | {{AssetID}} |
| **تاريخ الاكتشاف / Date Noticed** | {{DateNoticed}} |
| **التاريخ المطلوب / Required By** | {{RequiredByDate}} |

---

**وصف المشكلة / Problem Description:**

**عربي:** {{ProblemDescriptionAr}}

**English:** {{ProblemDescription}}

---

**الإجراء المقترح / Suggested Action:**

**عربي:** {{SuggestedActionAr}}

**English:** {{SuggestedAction}}

---

## الاعتمادات / Approvals

| الدور / Role | الاسم / Name | التوقيع / Signature | التاريخ / Date | القرار / Decision |
|---|---|---|---|---|
| مقدم الطلب / Requested By | {{RequestedBy}} | ___________ | | |
| المدير المباشر / Line Manager | {{LineManager}} | ___________ | | اعتمد / معلق &nbsp;·&nbsp; Approved / Rejected |
| الصيانة / Maintenance | {{MaintenanceApprover}} | ___________ | | اعتمد / معلق &nbsp;·&nbsp; Approved / Rejected |

---

## للاستخدام الداخلي فقط / For Internal Use Only

**تاريخ البدء / Start Date:** {{StartDate}} &nbsp;&nbsp; **تاريخ الإنجاز / Completion Date:** {{CompletionDate}}

**الملاحظات / Remarks:** {{Remarks}}

| الختم الرسمي / Official Stamp |
|---|
| *(Stamp here / ختم هنا)* |
