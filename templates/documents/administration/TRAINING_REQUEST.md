---
document:
  name: Training Request
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
  EmployeeNameEn:
    label: Employee Name (English)
    type: text
    required: true
    group: Employee
    order: 10
  EmployeeNameAr:
    label: Employee Name (Arabic)
    type: text
    required: true
    group: Employee
    order: 11
  JobTitle:
    label: Job Title (English)
    type: text
    required: true
    group: Employee
    order: 12
  JobTitleAr:
    label: Job Title (Arabic)
    type: text
    group: Employee
    order: 13
  Department:
    label: Department
    type: text
    required: true
    group: Employee
    order: 14
  Branch:
    label: Branch
    type: text
    group: Employee
    order: 15
  CostCentre:
    label: Cost Centre
    type: text
    group: Employee
    order: 16
  TrainingTitle:
    label: Training Course Title
    type: text
    required: true
    group: Training Details
    order: 20
  TrainingProvider:
    label: Training Provider / Institution
    type: text
    required: true
    group: Training Details
    order: 21
  TrainingType:
    label: Training Type
    type: select
    group: Training Details
    order: 22
    options:
      - Internal
      - External
      - Online
      - Conference
  Location:
    label: Location
    type: text
    group: Training Details
    order: 23
  ProposedDates:
    label: Proposed Dates
    type: text
    required: true
    group: Training Details
    order: 24
    placeholder: e.g. 15–17 March 2025
  Duration:
    label: Duration
    type: text
    group: Training Details
    order: 25
    placeholder: e.g. 3 days / 24 hours
  TrainingFee:
    label: Training Fee
    type: currency
    group: Costs
    order: 30
  TravelCost:
    label: Travel Cost
    type: currency
    group: Costs
    order: 31
  AccommodationCost:
    label: Accommodation Cost
    type: currency
    group: Costs
    order: 32
  OtherCosts:
    label: Other Costs
    type: currency
    group: Costs
    order: 33
  TotalCost:
    label: Total Cost
    type: currency
    required: true
    group: Costs
    order: 34
  Currency:
    label: Currency
    type: text
    group: Costs
    order: 35
    placeholder: SAR
  ExpectedBenefit:
    label: Expected Benefit (English)
    type: textarea
    required: true
    group: Justification
    order: 40
  ExpectedBenefitAr:
    label: Expected Benefit (Arabic)
    type: textarea
    group: Justification
    order: 41
  Justification:
    label: Justification (English)
    type: textarea
    group: Justification
    order: 42
  JustificationAr:
    label: Justification (Arabic)
    type: textarea
    group: Justification
    order: 43
  Remarks:
    label: Remarks
    type: textarea
    group: Justification
    order: 44
  RequestedBy:
    label: Requested by (English)
    type: text
    required: true
    group: Approval
    order: 50
  RequestedByAr:
    label: Requested by (Arabic)
    type: text
    group: Approval
    order: 51
  LineManager:
    label: Line Manager Name
    type: text
    required: true
    group: Approval
    order: 52
  HRApprover:
    label: HR Approver Name
    type: text
    group: Approval
    order: 53
  FinanceApprover:
    label: Finance Approver Name
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

# نموذج طلب تدريب &nbsp;/&nbsp; Training Request Form

---

| البيان / Field | القيمة / Value |
|---|---|
| **مقدم الطلب / Requested By** | {{RequestedByAr}} / {{RequestedBy}} |
| **القسم / Department** | {{Department}} |

---

## بيانات الموظف / Employee Details

| البيان / Field | القيمة / Value |
|---|---|
| **الاسم / Name** | {{EmployeeNameAr}} / {{EmployeeNameEn}} |
| **المسمى الوظيفي / Job Title** | {{JobTitleAr}} / {{JobTitle}} |
| **الفرع / Branch** | {{Branch}} |

---

## تفاصيل التدريب / Training Details

| البيان / Field | القيمة / Value |
|---|---|
| **عنوان الدورة / Training Title** | {{TrainingTitle}} |
| **الجهة المنظِّمة / Provider** | {{TrainingProvider}} |
| **نوع التدريب / Type** | {{TrainingType}} |
| **الموقع / المنصة / Location or Platform** | {{Location}} |
| **التواريخ المقترحة / Proposed Dates** | {{ProposedDates}} |
| **المدة / Duration** | {{Duration}} |

---

## التكاليف / Costs

| البند / Item | المبلغ / Amount |
|---|---|
| رسوم التدريب / Tuition Fees | {{TrainingFee}} |
| تكاليف السفر / Travel | {{TravelCost}} |
| الإقامة / Accommodation | {{AccommodationCost}} |
| أخرى / Other | {{OtherCosts}} |
| **الإجمالي / Total** | **{{TotalCost}}** |
| **العملة / Currency** | {{Currency}} |

---

**المبرر التجاري / Business Justification:** {{JustificationAr}} / {{Justification}}

**النتائج المتوقعة / Expected Outcome:** {{ExpectedBenefitAr}} / {{ExpectedBenefit}}

**مركز التكلفة / Cost Centre:** {{CostCentre}}

---

## الاعتمادات / Approvals

| الدور / Role | الاسم / Name | التوقيع / Signature | التاريخ / Date | القرار / Decision |
|---|---|---|---|---|
| مقدم الطلب / Requester | {{RequestedBy}} | ___________ | ___________ | — |
| المدير المباشر / Line Manager | {{LineManager}} | ___________ | ___________ | ☐ Approved &nbsp; ☐ Rejected |
| الموارد البشرية / HR | {{HRApprover}} | ___________ | ___________ | ☐ Approved &nbsp; ☐ Rejected |
| المالية / Finance | {{FinanceApprover}} | ___________ | ___________ | ☐ Approved &nbsp; ☐ Rejected |

---

**ملاحظات / Remarks:** {{Remarks}}

---

*يُحتفظ بهذا الطلب في سجلات التدريب الرسمية للموارد البشرية. / This request is retained in the official HR training records.*
