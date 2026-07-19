---
document:
  name: Payslip
  category: hr
  reference: Alba A6
  version: 1.0

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

  JobTitle:
    label: Job Title
    type: text
    required: true
    group: Employee
    order: 12

  Branch:
    label: Branch
    type: text
    group: Employee
    order: 13

  PayPeriod:
    label: Pay Period
    type: text
    required: true
    group: Employee
    order: 14
    placeholder: e.g. January 2025 / 01-31 Jan 2025

  BasicSalary:
    label: Basic Salary (SAR)
    type: currency
    required: true
    group: Earnings
    order: 20

  HousingAllowance:
    label: Housing Allowance (SAR)
    type: currency
    group: Earnings
    order: 21

  TransportationAllowance:
    label: Transportation Allowance (SAR)
    type: currency
    group: Earnings
    order: 22

  OtherAllowance1Description:
    label: Other Allowance 1 — Name (EN)
    type: text
    group: Earnings
    order: 23

  OtherAllowance1DescriptionAr:
    label: Other Allowance 1 — Name (AR)
    type: text
    group: Earnings
    order: 24

  OtherAllowance1Amount:
    label: Other Allowance 1 — Amount (SAR)
    type: currency
    group: Earnings
    order: 25

  OtherAllowance2Description:
    label: Other Allowance 2 — Name (EN)
    type: text
    group: Earnings
    order: 26

  OtherAllowance2DescriptionAr:
    label: Other Allowance 2 — Name (AR)
    type: text
    group: Earnings
    order: 27

  OtherAllowance2Amount:
    label: Other Allowance 2 — Amount (SAR)
    type: currency
    group: Earnings
    order: 28

  TotalEarnings:
    label: Total Earnings (SAR)
    type: currency
    required: true
    group: Earnings
    order: 29

  Deduction1Description:
    label: Deduction 1 — Name (EN)
    type: text
    group: Deductions
    order: 30

  Deduction1DescriptionAr:
    label: Deduction 1 — Name (AR)
    type: text
    group: Deductions
    order: 31

  Deduction1Amount:
    label: Deduction 1 — Amount (SAR)
    type: currency
    group: Deductions
    order: 32

  Deduction2Description:
    label: Deduction 2 — Name (EN)
    type: text
    group: Deductions
    order: 33

  Deduction2DescriptionAr:
    label: Deduction 2 — Name (AR)
    type: text
    group: Deductions
    order: 34

  Deduction2Amount:
    label: Deduction 2 — Amount (SAR)
    type: currency
    group: Deductions
    order: 35

  TotalDeductions:
    label: Total Deductions (SAR)
    type: currency
    group: Deductions
    order: 36

  NetSalary:
    label: Net Salary (SAR)
    type: currency
    required: true
    group: Net Pay
    order: 40

  PreparedBy:
    label: HR Manager Name
    type: text
    required: true
    group: Signatory
    order: 50

  PreparedTitle:
    label: HR Manager Title (English)
    type: text
    group: Signatory
    order: 51

  PreparedTitleAr:
    label: HR Manager Title (Arabic)
    type: text
    group: Signatory
    order: 52

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

# قسيمة الراتب &nbsp;/&nbsp; Payslip

| البيان / Field | القيمة / Value |
|---|---|
| **اسم الموظف / Employee Name** | {{EmployeeNameAr}} / {{EmployeeNameEn}} |
| **المسمى الوظيفي / Job Title** | {{JobTitle}} |
| **الفرع / Branch** | {{Branch}} |
| **فترة الراتب / Pay Period** | {{PayPeriod}} |

---

## المستحقات / Earnings

| البند / Description | البند (عربي) | المبلغ / Amount (SAR) |
|---|---|---|
| Basic Salary | الراتب الأساسي | {{BasicSalary}} |
| Housing Allowance | بدل السكن | {{HousingAllowance}} |
| Transportation Allowance | بدل النقل | {{TransportationAllowance}} |
| {{OtherAllowance1Description}} | {{OtherAllowance1DescriptionAr}} | {{OtherAllowance1Amount}} |
| {{OtherAllowance2Description}} | {{OtherAllowance2DescriptionAr}} | {{OtherAllowance2Amount}} |
| **Total Earnings** | **إجمالي المستحقات** | **{{TotalEarnings}}** |

---

## الخصومات / Deductions

| البند / Description | البند (عربي) | المبلغ / Amount (SAR) |
|---|---|---|
| {{Deduction1Description}} | {{Deduction1DescriptionAr}} | ({{Deduction1Amount}}) |
| {{Deduction2Description}} | {{Deduction2DescriptionAr}} | ({{Deduction2Amount}}) |
| **Total Deductions** | **إجمالي الخصومات** | **({{TotalDeductions}})** |

---

## صافي الراتب / Net Salary

| **Net Salary / صافي الراتب** | **{{NetSalary}} SAR** |
|---|---|

---

## Signatures / التواقيع

| توقيع الموظف / Employee Signature | مدير الموارد البشرية / HR Manager |
|---|---|
| {{EmployeeNameEn}} | {{PreparedBy}} |
| | {{PreparedTitle}} / {{PreparedTitleAr}} |
| Signature: ___________________________ | Signature: ___________________________ |
| التاريخ / Date: ___________________________ | التاريخ / Date: {{IssueDate}} |

---

*هذه القسيمة مُنشأة للأغراض التوثيقية فقط. / This payslip is issued for documentation purposes only.*
