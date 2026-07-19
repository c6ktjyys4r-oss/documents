---
document:
  name: Final Settlement Form
  category: hr
  reference: Alba A4
  version: 1.0
  note: Calculation fields (EOSB, leave compensation, deductions) must be computed and entered manually.

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

  IssueDate:
    label: Issue Date
    type: date
    required: true
    group: Document
    order: 2

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

  EmployeeCode:
    label: Employee Code
    type: text
    group: Employee
    order: 12

  NationalID:
    label: National ID / Iqama Number
    type: text
    required: true
    group: Employee
    order: 13

  Nationality:
    label: Nationality
    type: text
    group: Employee
    order: 14

  JobTitle:
    label: Job Title
    type: text
    required: true
    group: Employee
    order: 15

  DateOfJoining:
    label: Date of Joining
    type: date
    required: true
    group: Employee
    order: 16

  LastWorkingDay:
    label: Last Working Day
    type: date
    required: true
    group: Employee
    order: 17

  LengthOfService:
    label: Length of Service
    type: text
    required: true
    group: Employee
    order: 18
    placeholder: e.g. 4 years 2 months

  Branch:
    label: Branch
    type: text
    group: Employee
    order: 19

  ContractType:
    label: Contract Type
    type: select
    group: Employee
    order: 20
    options:
      - Fixed Term
      - Non-Fixed Term

  EOSBDetails:
    label: EOSB Details
    type: text
    group: Entitlements
    order: 30
    placeholder: e.g. 5 years × SAR 2,000 / year

  EOSBAmount:
    label: EOSB Amount (SAR)
    type: currency
    required: true
    group: Entitlements
    order: 31

  LeaveCompensationDays:
    label: Leave Compensation Days
    type: number
    group: Entitlements
    order: 32

  DailyRate:
    label: Daily Rate (SAR)
    type: currency
    group: Entitlements
    order: 33

  LeaveCompensationAmount:
    label: Leave Compensation Amount (SAR)
    type: currency
    group: Entitlements
    order: 34

  PartialMonthDetails:
    label: Partial Month Details
    type: text
    group: Entitlements
    order: 35

  PartialMonthSalary:
    label: Partial Month Salary (SAR)
    type: currency
    group: Entitlements
    order: 36

  CustomAddition1Label:
    label: Additional Item 1 — Label
    type: text
    group: Entitlements
    order: 37

  CustomAddition1Amount:
    label: Additional Item 1 — Amount (SAR)
    type: currency
    group: Entitlements
    order: 38

  CustomAddition2Label:
    label: Additional Item 2 — Label
    type: text
    group: Entitlements
    order: 39

  CustomAddition2Amount:
    label: Additional Item 2 — Amount (SAR)
    type: currency
    group: Entitlements
    order: 40

  TotalEntitlements:
    label: Total Entitlements (SAR)
    type: currency
    required: true
    group: Entitlements
    order: 41

  SalaryAdvancesDetails:
    label: Salary Advances Details
    type: text
    group: Deductions
    order: 50

  SalaryAdvancesDeduction:
    label: Salary Advances Amount (SAR)
    type: currency
    group: Deductions
    order: 51

  LoansDetails:
    label: Loans Details
    type: text
    group: Deductions
    order: 52

  LoansDeduction:
    label: Loans Amount (SAR)
    type: currency
    group: Deductions
    order: 53

  OtherDeductionsLabel:
    label: Other Deductions — Label
    type: text
    group: Deductions
    order: 54

  OtherDeductionsAmount:
    label: Other Deductions — Amount (SAR)
    type: currency
    group: Deductions
    order: 55

  TotalDeductions:
    label: Total Deductions (SAR)
    type: currency
    required: true
    group: Deductions
    order: 56

  NetSettlement:
    label: Net Final Settlement (SAR)
    type: currency
    required: true
    group: Net Settlement
    order: 60

  Notes:
    label: Notes
    type: textarea
    group: Notes
    order: 70

  AuthorisedBy:
    label: Authorised Signatory Name
    type: text
    required: true
    group: Signatory
    order: 80

  AuthorisedTitle:
    label: Title (English)
    type: text
    group: Signatory
    order: 81

  AuthorisedTitleAr:
    label: Title (Arabic)
    type: text
    group: Signatory
    order: 82

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

# نموذج المسوية النهائية &nbsp;/&nbsp; Final Settlement Form

**تاريخ الإصدار / Issue Date:** {{IssueDate}}

---

## معلومات الموظف / Employee Information

| البيان / Field | القيمة / Value |
|---|---|
| **اسم الموظف / Employee Name** | {{EmployeeNameAr}} / {{EmployeeNameEn}} |
| **رقم الموظف / Employee Code** | {{EmployeeCode}} |
| **رقم الهوية / الإقامة / National ID or Iqama** | {{NationalID}} |
| **الجنسية / Nationality** | {{Nationality}} |
| **المسمى الوظيفي / Job Title** | {{JobTitle}} |
| **تاريخ الالتحاق / Date of Joining** | {{DateOfJoining}} |
| **آخر يوم عمل / Last Working Day** | {{LastWorkingDay}} |
| **مدة الخدمة / Length of Service** | {{LengthOfService}} |

---

## تفاصيل التوظيف / Employment Details

| البيان / Field | القيمة / Value |
|---|---|
| **الفرع / Branch** | {{Branch}} |
| **نوع العقد / Contract Type** | {{ContractType}} *(Fixed Term / Non-Fixed Term)* |

---

## المستحقات / Entitlements

| البند / Item | التفاصيل / Details | المبلغ / Amount (SAR) |
|---|---|---|
| مكافأة نهاية الخدمة / End of Service Benefit (EOSB) | {{EOSBDetails}} | {{EOSBAmount}} |
| تعويض الإجازة / Leave Compensation | {{LeaveCompensationDays}} days × {{DailyRate}} | {{LeaveCompensationAmount}} |
| راتب شهر جزئي / Partial Month Salary | {{PartialMonthDetails}} | {{PartialMonthSalary}} |
| {{CustomAddition1Label}} | | {{CustomAddition1Amount}} |
| {{CustomAddition2Label}} | | {{CustomAddition2Amount}} |
| **إجمالي المستحقات / Total Entitlements** | | **{{TotalEntitlements}}** |

---

## الخصومات / Deductions

| البند / Item | التفاصيل / Details | المبلغ / Amount (SAR) |
|---|---|---|
| سلف الراتب / Salary Advances | {{SalaryAdvancesDetails}} | ({{SalaryAdvancesDeduction}}) |
| القروض / Loans | {{LoansDetails}} | ({{LoansDeduction}}) |
| {{OtherDeductionsLabel}} | | ({{OtherDeductionsAmount}}) |
| **إجمالي الخصومات / Total Deductions** | | **({{TotalDeductions}})** |

---

## صافي المسوية النهائية / Net Final Settlement

| | |
|---|---|
| **إجمالي المستحقات / Total Entitlements** | {{TotalEntitlements}} SAR |
| **إجمالي الخصومات / Total Deductions** | ({{TotalDeductions}}) SAR |
| **صافي المسوية / Net Settlement** | **{{NetSettlement}} SAR** |

---

## ملاحظات / Notes

{{Notes}}

---

## Signatures / التواقيع

| المفوّض بالتوقيع والختم / Authorised Signatory & Stamp | إقرار الموظف / Employee Acknowledgement |
|---|---|
| {{AuthorisedBy}} | {{EmployeeNameEn}} |
| {{AuthorisedTitle}} / {{AuthorisedTitleAr}} | {{JobTitle}} |
| Signature: ___________________________ | Signature: ___________________________ |
| التوقيع والختم / Signature & Stamp | التاريخ / Date: ___________________________ |
| التاريخ / Date: ___________________________ | |
