---
document:
  name: Contract Termination Letter
  category: hr
  reference: Alba A5
  version: 2.0

form:
  direction: ltr
  layout: grouped

fields:
  CompanyNameEn:
    label: Company Name (English)
    type: text
    required: true
    group: Company
    order: 1

  CompanyNameAr:
    label: Company Name (Arabic)
    type: text
    required: true
    group: Company
    order: 2

  CRNumber:
    label: Commercial Registration Number
    type: text
    group: Company
    order: 3

  CompanyAddress:
    label: Company Address
    type: text
    group: Company
    order: 4

  CompanyPhone:
    label: Company Phone
    type: phone
    group: Company
    order: 5

  CompanyEmail:
    label: Company Email
    type: email
    group: Company
    order: 6

  IssueDate:
    label: Issue Date
    type: date
    required: true
    group: Company
    order: 7

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

  MobileNumber:
    label: Mobile Number
    type: phone
    group: Employee
    order: 15

  EmployeeEmail:
    label: Employee Email
    type: email
    group: Employee
    order: 16

  JobTitle:
    label: Job Title
    type: text
    required: true
    group: Employment
    order: 20

  DateOfJoining:
    label: Date of Joining
    type: date
    required: true
    group: Employment
    order: 21

  ContractType:
    label: Contract Type
    type: select
    required: true
    group: Employment
    order: 22
    options:
      - Fixed Term
      - Non-Fixed Term
      - Open-Ended

  Branch:
    label: Branch
    type: text
    group: Employment
    order: 23

  LengthOfService:
    label: Length of Service
    type: text
    group: Employment
    order: 24
    placeholder: e.g. 2 years 6 months

  TerminationDate:
    label: Termination Date
    type: date
    required: true
    group: Termination
    order: 30

  LastWorkingDay:
    label: Last Working Day
    type: date
    required: true
    group: Termination
    order: 31

  TerminationReason:
    label: Termination Reason
    type: text
    required: true
    group: Termination
    order: 32
    placeholder: e.g. End of contract / Mutual agreement / Resignation

  RepresentativeName:
    label: Company Representative Name
    type: text
    required: true
    group: Signatory
    order: 40

  RepresentativeTitle:
    label: Representative Title (English)
    type: text
    group: Signatory
    order: 41

  RepresentativeTitleAr:
    label: Representative Title (Arabic)
    type: text
    group: Signatory
    order: 42

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

---

# نموذج إنهاء العقد &nbsp;/&nbsp; CONTRACT TERMINATION FORM

**Issue Date / تاريخ الإصدار:** {{IssueDate}}

---

## بيانات الجهة المُصدِرة / Issuing Company Details

| البيان / Field | القيمة / Value |
|---|---|
| **اسم المنشأة / Company Name** | {{CompanyNameAr}} / {{CompanyNameEn}} |
| **رقم السجل التجاري / CR Number** | {{CRNumber}} |
| **العنوان / Address** | {{CompanyAddress}} |
| **الهاتف / Phone** | {{CompanyPhone}} |
| **البريد الإلكتروني / Email** | {{CompanyEmail}} |

---

## معلومات الموظف / Employee Information

| البيان / Field | القيمة / Value |
|---|---|
| **اسم الموظف / Employee Name** | {{EmployeeNameAr}} / {{EmployeeNameEn}} |
| **رقم الموظف / Employee Code** | {{EmployeeCode}} |
| **رقم الهوية / الإقامة / National ID or Iqama** | {{NationalID}} |
| **الجنسية / Nationality** | {{Nationality}} |
| **رقم الجوال / Mobile Number** | {{MobileNumber}} |
| **البريد الإلكتروني / Email Address** | {{EmployeeEmail}} |

---

## تفاصيل التوظيف / Employment Details

| البيان / Field | القيمة / Value |
|---|---|
| **المسمى الوظيفي / Job Title** | {{JobTitle}} |
| **تاريخ الالتحاق / Date of Joining** | {{DateOfJoining}} |
| **نوع العقد / Contract Type** | {{ContractType}} *(Fixed Term / Non-Fixed Term / Open-Ended)* |
| **الفرع / Branch** | {{Branch}} |
| **مدة الخدمة / Length of Service** | {{LengthOfService}} |

---

## تفاصيل إنهاء العقد / Termination Details

| البيان / Field | القيمة / Value |
|---|---|
| **تاريخ إنهاء العقد / Termination Date** | {{TerminationDate}} |
| **آخر يوم عمل / Last Working Day** | {{LastWorkingDay}} |
| **سبب إنهاء العقد / Termination Reason** | {{TerminationReason}} |

---

تُقرّ **{{CompanyNameAr}}** بأن عقد عمل الموظف/ة المذكور/ة أعلاه قد تمّ إنهاؤه اعتباراً من التاريخ المحدد، وذلك وفقاً لأحكام نظام العمل والاتفاقية المبرمة بين الطرفين.

**{{CompanyNameEn}}** hereby confirms that the employment contract of the above-named employee has been terminated effective the date stated herein, in accordance with the applicable Labour Law and the terms agreed between both parties.

*يُحتفظ بهذا النموذج في ملف الموظف للأغراض الإدارية. / This form is retained in the employee's file for administrative purposes.*

---

## Signatures / التواقيع

| المفوّض بالتوقيع والختم / Authorised Signatory & Stamp | إقرار الموظف / Employee Acknowledgement |
|---|---|
| {{RepresentativeName}} | {{EmployeeNameEn}} |
| {{RepresentativeTitle}} / {{RepresentativeTitleAr}} | {{JobTitle}} |
| التوقيع والختم / Signature & Stamp | التوقيع / Signature |
| ___________________________ | ___________________________ |
| التاريخ / Date: ___________________________ | التاريخ / Date: ___________________________ |
