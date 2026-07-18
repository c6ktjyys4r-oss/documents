---
template: Maintenance Request
category: Operations
version: 2.1
---

{{Logo}}

**{{CompanyName}}**

---

**Ref / المرجع:** {{ReferenceNumber}} &nbsp;|&nbsp; **Date / التاريخ:** {{Date}}

---

# طلب صيانة &nbsp;/&nbsp; Maintenance Request

---

| البيان / Field | القيمة / Value |
|---|---|
| **الأولوية / Priority** | {{Priority}} |
| **مقدم الطلب / Requested By** | {{RequestedByAr}} / {{RequestedBy}} |
| **القسم / Department** | {{Department}} |
| **الموقع / Location** | {{Location}} |

---

## تفاصيل الصيانة / Maintenance Details

| البيان / Field | القيمة / Value |
|---|---|
| **نوع الصيانة / Maintenance Type** | {{MaintenanceType}} |
| **الأصل / Asset** | {{AssetDescription}} |
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
| مقدم الطلب / Requester | {{RequestedBy}} | ___________ | ___________ | — |
| المدير المباشر / Line Manager | {{LineManager}} | ___________ | ___________ | ☐ Approved &nbsp; ☐ Rejected |
| الصيانة / Maintenance | {{MaintenanceApprover}} | ___________ | ___________ | ☐ Approved &nbsp; ☐ Rejected |

---

## للاستخدام الداخلي / For Internal Use Only

**تاريخ البدء / Start Date:** {{StartDate}} &nbsp;|&nbsp; **تاريخ الإنجاز / Completion Date:** {{CompletionDate}}

**الملاحظات / Remarks:** {{Remarks}}

---

*يُحتفظ بهذا الطلب في سجلات الصيانة الرسمية للمنشأة. / This request is retained in the company's official maintenance records.*
