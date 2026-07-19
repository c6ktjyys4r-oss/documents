---
document:
  name: Job Offer
  category: hr
  reference: Alba A2
  version: 2.0

form:
  direction: ltr
  layout: grouped

fields:
  CompanyName:
    label: Company Name (English)
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

  IssueDate:
    label: Issue Date
    type: date
    required: true
    group: Document
    order: 3

  CandidateNameEn:
    label: Candidate Name (English)
    type: text
    required: true
    group: Candidate
    order: 10

  CandidateNameAr:
    label: Candidate Name (Arabic)
    type: text
    required: true
    group: Candidate
    order: 11

  Nationality:
    label: Nationality (English)
    type: text
    required: true
    group: Candidate
    order: 12

  NationalityAr:
    label: Nationality (Arabic)
    type: text
    group: Candidate
    order: 13

  IDNumber:
    label: Passport / Iqama Number
    type: text
    required: true
    group: Candidate
    order: 14

  JobTitle:
    label: Job Title (English)
    type: text
    required: true
    group: Offer Details
    order: 20

  JobTitleAr:
    label: Job Title (Arabic)
    type: text
    group: Offer Details
    order: 21

  ContractType:
    label: Contract Type
    type: select
    required: true
    group: Offer Details
    order: 22
    options:
      - Fixed Term
      - Non-Fixed Term

  ContractEndDate:
    label: Contract End Date
    type: date
    group: Offer Details
    order: 23
    placeholder: For Fixed Term contracts only

  Branch:
    label: Branch / Location
    type: text
    group: Offer Details
    order: 24

  StartDate:
    label: Joining Date
    type: date
    required: true
    group: Offer Details
    order: 25

  BasicSalary:
    label: Basic Salary (SAR)
    type: currency
    required: true
    group: Compensation
    order: 30
    placeholder: e.g. 10000.00

  HousingAllowance:
    label: Housing Allowance (SAR)
    type: currency
    group: Compensation
    order: 31

  TransportationAllowance:
    label: Transportation Allowance (SAR)
    type: currency
    group: Compensation
    order: 32

  OtherAllowanceDescription:
    label: Other Allowance Description
    type: text
    group: Compensation
    order: 33

  OtherAllowanceAmount:
    label: Other Allowance Amount (SAR)
    type: currency
    group: Compensation
    order: 34

  TotalSalary:
    label: Total Salary (SAR)
    type: currency
    required: true
    group: Compensation
    order: 35

  ProbationDays:
    label: Probation Period (Days)
    type: number
    group: Terms
    order: 40
    placeholder: e.g. 90

  AnnualLeaveDays:
    label: Annual Leave Days
    type: number
    group: Terms
    order: 41

  WorkingDaysPerWeek:
    label: Working Days per Week
    type: number
    group: Terms
    order: 42

  WorkingHoursPerDay:
    label: Working Hours per Day
    type: number
    group: Terms
    order: 43

  MedicalInsurance:
    label: Medical Insurance
    type: text
    group: Terms
    order: 44
    placeholder: e.g. Class A / Included

  OfferValidityDays:
    label: Offer Validity (Days)
    type: number
    group: Terms
    order: 45

  ApprovedBy:
    label: Approved by (HR Officer Name)
    type: text
    required: true
    group: Approval
    order: 50

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

**Ref:** {{ReferenceNumber}} &nbsp;|&nbsp; **Date:** {{IssueDate}}

---

# الـعرض الوظيفي &nbsp;/&nbsp; Job Offer Letter

---

| الوصف / Field | القيمة / Value |
|---|---|
| **التاريخ / Date** | {{IssueDate}} |
| **الاسم / Name** | {{CandidateNameAr}} / {{CandidateNameEn}} |
| **الجنسية / Nationality** | {{NationalityAr}} / {{Nationality}} |
| **رقم الجواز / الإقامة / Passport or ID No.** | {{IDNumber}} |
| **المسمى الوظيفي / Job Title** | {{JobTitleAr}} / {{JobTitle}} |
| | **تفاصيل العرض الوظيفي / Details of the Job Offer** |
| **مدة العقد / Contract Duration** | {{ContractType}} *(Fixed Term / Non-Fixed Term)* |
| **تاريخ انتهاء العقد / Contract End Date** | {{ContractEndDate}} *(for Fixed Term only)* |
| **الراتب الأساسي / Basic Salary** | {{BasicSalary}} |
| **بدل السكن / Housing Allowance** | {{HousingAllowance}} |
| **بدل النقل / Transportation Allowance** | {{TransportationAllowance}} |
| **بدلات أخرى / Other Allowances** | {{OtherAllowanceDescription}}: {{OtherAllowanceAmount}} |
| **الراتب الإجمالي / Total Salary** | {{TotalSalary}} |
| **فترة التجربة / Probation Period** | {{ProbationDays}} Days / أيام |
| **أيام الإجازة السنوية / Annual Leave Days** | {{AnnualLeaveDays}} Days / أيام |
| **عدد أيام العمل / Working Days** | {{WorkingDaysPerWeek}} Days / Week |
| **عدد ساعات العمل / Working Hours** | {{WorkingHoursPerDay}} Hours / Day |
| **التأمين الطبي / Medical Insurance** | {{MedicalInsurance}} |
| **صلاحية العرض / Offer Validity** | {{OfferValidityDays}} Days from Sending |
| **تاريخ مباشرة العمل / Joining Date** | {{StartDate}} |
| **الفرع / Branch / Location** | {{Branch}} |

---

| التوقيع عند قبول العرض الوظيفي / Signature upon Accepting the Job Offer |
|---|
| ___________________________ |

---

| يعتمد مدير إدارة الموارد البشرية / Approved by the Chief Human Resources Officer |
|---|
| {{ApprovedBy}} &nbsp;&nbsp; Signature: ___________________________ |
