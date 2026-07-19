---
document:
  name: Access Request
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
  AccessForName:
    label: Access For — Name (English)
    type: text
    required: true
    group: Requestee
    order: 10
  AccessForNameAr:
    label: Access For — Name (Arabic)
    type: text
    group: Requestee
    order: 11
  AccessForTitle:
    label: Job Title (English)
    type: text
    group: Requestee
    order: 12
  AccessForTitleAr:
    label: Job Title (Arabic)
    type: text
    group: Requestee
    order: 13
  AccessForDepartment:
    label: Department
    type: text
    group: Requestee
    order: 14
  EmploymentType:
    label: Employment Type
    type: select
    group: Requestee
    order: 15
    options:
      - Full-Time
      - Part-Time
      - Contractor
      - Visitor
  Resource1:
    label: System / Resource 1
    type: text
    group: Access Details
    order: 20
  AccessLevel1:
    label: Access Level 1
    type: text
    group: Access Details
    order: 21
    placeholder: e.g. Read-Only / Edit / Admin
  Reason1:
    label: Reason 1
    type: text
    group: Access Details
    order: 22
  Resource2:
    label: System / Resource 2
    type: text
    group: Access Details
    order: 23
  AccessLevel2:
    label: Access Level 2
    type: text
    group: Access Details
    order: 24
  Reason2:
    label: Reason 2
    type: text
    group: Access Details
    order: 25
  Resource3:
    label: System / Resource 3
    type: text
    group: Access Details
    order: 26
  AccessLevel3:
    label: Access Level 3
    type: text
    group: Access Details
    order: 27
  Reason3:
    label: Reason 3
    type: text
    group: Access Details
    order: 28
  AccessStartDate:
    label: Access Start Date
    type: date
    required: true
    group: Period
    order: 30
  AccessEndDate:
    label: Access End Date
    type: date
    group: Period
    order: 31
  Justification:
    label: Justification (English)
    type: textarea
    group: Justification
    order: 40
  JustificationAr:
    label: Justification (Arabic)
    type: textarea
    group: Justification
    order: 41
  Remarks:
    label: Remarks
    type: textarea
    group: Justification
    order: 42
  RequestedBy:
    label: Requested by Name (English)
    type: text
    required: true
    group: Approval
    order: 50
  RequestedByAr:
    label: Requested by Name (Arabic)
    type: text
    group: Approval
    order: 51
  LineManager:
    label: Line Manager Name
    type: text
    required: true
    group: Approval
    order: 52
  ITApprover:
    label: IT Approver Name
    type: text
    group: Approval
    order: 53
  AdminApprover:
    label: Admin Approver Name
    type: text
    group: Approval
    order: 54

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
