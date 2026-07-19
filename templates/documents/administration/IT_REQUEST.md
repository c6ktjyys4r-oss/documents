---
document:
  name: IT Request
  category: administration
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
    label: Location
    type: text
    group: Requester
    order: 13
  RequestType:
    label: Request Type
    type: select
    required: true
    group: Request
    order: 20
    options:
      - New Equipment
      - Repair / Maintenance
      - Software Installation
      - Network / Connectivity
      - Account / Access
      - Other
  SystemOrDevice:
    label: System / Device
    type: text
    group: Request
    order: 21
    placeholder: e.g. Laptop Model / Software Name
  Priority:
    label: Priority
    type: select
    required: true
    group: Request
    order: 22
    options:
      - Low
      - Normal
      - High
      - Critical
  RequiredByDate:
    label: Required by Date
    type: date
    group: Request
    order: 23
  StartDate:
    label: Start Date
    type: date
    group: Request
    order: 24
  Description:
    label: Problem / Request Description (English)
    type: textarea
    required: true
    group: Details
    order: 30
  DescriptionAr:
    label: Problem / Request Description (Arabic)
    type: textarea
    group: Details
    order: 31
  BusinessImpact:
    label: Business Impact (English)
    type: textarea
    group: Details
    order: 32
  BusinessImpactAr:
    label: Business Impact (Arabic)
    type: textarea
    group: Details
    order: 33
  LineManager:
    label: Line Manager Name
    type: text
    required: true
    group: Approval
    order: 40
  ITManager:
    label: IT Manager Name
    type: text
    group: Approval
    order: 41
  AssignedTo:
    label: Assigned To (IT Staff)
    type: text
    group: Resolution
    order: 50
  Resolution:
    label: Resolution Details
    type: textarea
    group: Resolution
    order: 51
  ClosureDate:
    label: Closure Date
    type: date
    group: Resolution
    order: 52
  Remarks:
    label: Remarks
    type: textarea
    group: Resolution
    order: 53

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

# نموذج طلب تقنية المعلومات &nbsp;/&nbsp; IT Request Form

---

| البيان / Field | القيمة / Value |
|---|---|
| **الأولوية / Priority** | {{Priority}} |
| **نوع الطلب / Request Type** | {{RequestType}} |
| **مقدم الطلب / Requested By** | {{RequestedByAr}} / {{RequestedBy}} |
| **القسم / Department** | {{Department}} |
| **النظام / الجهاز / System or Device** | {{SystemOrDevice}} |
| **الموقع / Location** | {{Location}} |
| **تاريخ الإنجاز المطلوب / Required By** | {{RequiredByDate}} |

---

## وصف الطلب / Request Description

**عربي:** {{DescriptionAr}}

**English:** {{Description}}

---

**تأثير على العمل / Business Impact:** {{BusinessImpactAr}} / {{BusinessImpact}}

---

## الاعتمادات / Approvals

| الدور / Role | الاسم / Name | التوقيع / Signature | التاريخ / Date | القرار / Decision |
|---|---|---|---|---|
| مقدم الطلب / Requester | {{RequestedBy}} | ___________ | ___________ | — |
| المدير المباشر / Line Manager | {{LineManager}} | ___________ | ___________ | ☐ Approved &nbsp; ☐ Rejected |
| مدير تقنية المعلومات / IT Manager | {{ITManager}} | ___________ | ___________ | ☐ Approved &nbsp; ☐ Rejected |

---

## للاستخدام الداخلي — تقنية المعلومات / For IT Use Only

| البيان / Field | القيمة / Value |
|---|---|
| **المعالج / Assigned To** | {{AssignedTo}} |
| **تاريخ البدء / Start Date** | {{StartDate}} |
| **تاريخ الإغلاق / Closure Date** | {{ClosureDate}} |
| **الحل / Resolution** | {{Resolution}} |

---

**ملاحظات / Remarks:** {{Remarks}}

---

*يُحتفظ بهذا الطلب في سجلات تقنية المعلومات الرسمية للمنشأة. / This request is retained in the company's official IT records.*
