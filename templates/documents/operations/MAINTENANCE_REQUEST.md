---
document:
  name: Maintenance Request
  category: operations
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
    label: Request Date
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
  Location:
    label: Location / Area
    type: text
    required: true
    group: Requester
    order: 13
  LineManager:
    label: Line Manager Name
    type: text
    group: Requester
    order: 14
  AssetID:
    label: Asset ID / Equipment ID
    type: text
    group: Asset
    order: 20
  AssetDescription:
    label: Asset / Equipment Description
    type: text
    required: true
    group: Asset
    order: 21
  MaintenanceType:
    label: Maintenance Type
    type: select
    required: true
    group: Asset
    order: 22
    options:
      - Corrective
      - Preventive
      - Emergency
      - Routine
  Priority:
    label: Priority
    type: select
    required: true
    group: Asset
    order: 23
    options:
      - Low
      - Normal
      - High
      - Critical
  DateNoticed:
    label: Date Problem Noticed
    type: date
    group: Asset
    order: 24
  RequiredByDate:
    label: Required by Date
    type: date
    group: Asset
    order: 25
  ProblemDescription:
    label: Problem Description (English)
    type: textarea
    required: true
    group: Problem
    order: 30
  ProblemDescriptionAr:
    label: Problem Description (Arabic)
    type: textarea
    group: Problem
    order: 31
  SuggestedAction:
    label: Suggested Action (English)
    type: textarea
    group: Problem
    order: 32
  SuggestedActionAr:
    label: Suggested Action (Arabic)
    type: textarea
    group: Problem
    order: 33
  Remarks:
    label: Remarks
    type: textarea
    group: Problem
    order: 34
  MaintenanceApprover:
    label: Maintenance Approver Name
    type: text
    required: true
    group: Approval
    order: 40
  StartDate:
    label: Scheduled Start Date
    type: date
    group: Resolution
    order: 50
  CompletionDate:
    label: Completion Date
    type: date
    group: Resolution
    order: 51

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
