---
document:
  name: Promotion Letter
  category: hr
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
    label: Issue Date
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

  EmployeeCode:
    label: Employee Code
    type: text
    group: Employee
    order: 12

  Nationality:
    label: Nationality
    type: text
    group: Employee
    order: 13

  NationalID:
    label: National ID / Iqama Number
    type: text
    group: Employee
    order: 14

  CurrentJobTitle:
    label: Current Job Title (English)
    type: text
    required: true
    group: Promotion Details
    order: 20

  CurrentJobTitleAr:
    label: Current Job Title (Arabic)
    type: text
    group: Promotion Details
    order: 21

  NewJobTitle:
    label: New Job Title (English)
    type: text
    required: true
    group: Promotion Details
    order: 22

  NewJobTitleAr:
    label: New Job Title (Arabic)
    type: text
    group: Promotion Details
    order: 23

  CurrentDepartment:
    label: Current Department
    type: text
    group: Promotion Details
    order: 24

  NewDepartment:
    label: New Department
    type: text
    group: Promotion Details
    order: 25

  CurrentManager:
    label: Current Reporting Manager
    type: text
    group: Promotion Details
    order: 26

  NewManager:
    label: New Reporting Manager
    type: text
    group: Promotion Details
    order: 27

  CurrentLocation:
    label: Current Location
    type: text
    group: Promotion Details
    order: 28

  NewLocation:
    label: New Location
    type: text
    group: Promotion Details
    order: 29

  EffectiveDate:
    label: Effective Date
    type: date
    required: true
    group: Promotion Details
    order: 30

  NewBasicSalary:
    label: New Basic Salary (SAR)
    type: currency
    required: true
    group: Revised Compensation
    order: 40

  NewHousingAllowance:
    label: New Housing Allowance (SAR)
    type: currency
    group: Revised Compensation
    order: 41

  NewTransportationAllowance:
    label: New Transportation Allowance (SAR)
    type: currency
    group: Revised Compensation
    order: 42

  NewOtherAllowances:
    label: New Other Allowances (SAR)
    type: currency
    group: Revised Compensation
    order: 43

  NewTotalSalary:
    label: New Total Salary (SAR)
    type: currency
    required: true
    group: Revised Compensation
    order: 44

  AdditionalNotes:
    label: Additional Notes (English)
    type: textarea
    group: Notes
    order: 50

  AdditionalNotesAr:
    label: Additional Notes (Arabic)
    type: textarea
    group: Notes
    order: 51

  AuthorisedBy:
    label: Authorised Signatory Name
    type: text
    required: true
    group: Signatory
    order: 60

  AuthorisedTitle:
    label: Title (English)
    type: text
    group: Signatory
    order: 61

  AuthorisedTitleAr:
    label: Title (Arabic)
    type: text
    group: Signatory
    order: 62

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

# خطاب ترقية &nbsp;/&nbsp; Promotion Letter

---

## معلومات الموظف / Employee Details

| البيان / Field | القيمة / Value |
|---|---|
| **اسم الموظف / Employee Name** | {{EmployeeNameAr}} / {{EmployeeNameEn}} |
| **رقم الموظف / Employee Code** | {{EmployeeCode}} |
| **الجنسية / Nationality** | {{Nationality}} |
| **رقم الهوية / الإقامة / National ID or Iqama** | {{NationalID}} |

---

## تفاصيل الترقية / Promotion Details

| البيان / Field | قبل الترقية / Before | بعد الترقية / After |
|---|---|---|
| **المسمى الوظيفي / Job Title** | {{CurrentJobTitleAr}} / {{CurrentJobTitle}} | {{NewJobTitleAr}} / {{NewJobTitle}} |
| **القسم / Department** | {{CurrentDepartment}} | {{NewDepartment}} |
| **المرجع المباشر / Reporting To** | {{CurrentManager}} | {{NewManager}} |
| **الموقع / Location** | {{CurrentLocation}} | {{NewLocation}} |

**تاريخ النفاذ / Effective Date:** {{EffectiveDate}}

---

## الراتب المعدَّل / Revised Compensation

| البند / Component | المبلغ / Amount (SAR) |
|---|---|
| الراتب الأساسي / Basic Salary | {{NewBasicSalary}} |
| بدل السكن / Housing Allowance | {{NewHousingAllowance}} |
| بدل النقل / Transportation Allowance | {{NewTransportationAllowance}} |
| بدلات أخرى / Other Allowances | {{NewOtherAllowances}} |
| **الإجمالي / Total** | **{{NewTotalSalary}}** |

---

## Arabic (عربي):

يسعدنا إبلاغكم بترقيتكم إلى منصب **{{NewJobTitleAr}}** اعتبارًا من **{{EffectiveDate}}**، وذلك تقديرًا لجهودكم ومساهماتكم المتميزة.

{{AdditionalNotesAr}}

---

## English:

We are pleased to inform you of your promotion to **{{NewJobTitle}}**, effective **{{EffectiveDate}}**, in recognition of your outstanding contributions.

{{AdditionalNotes}}

---

## Signatures / التواقيع

| المفوّض بالتوقيع والختم / Authorised Signatory & Stamp | إقرار الموظف / Employee Acknowledgement |
|---|---|
| {{AuthorisedBy}} | {{EmployeeNameEn}} |
| {{AuthorisedTitle}} / {{AuthorisedTitleAr}} | {{NewJobTitle}} |
| *(Official Stamp / الختم الرسمي)* | |
| Signature: ___________________________ | Signature: ___________________________ |
| Date: ___________________________ | Date: ___________________________ |

---

*يُحتفظ بنسخة من هذا الخطاب في ملف الموظف. / A copy of this letter is retained in the employee's file.*
