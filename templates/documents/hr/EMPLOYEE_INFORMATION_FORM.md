---
document:
  name: Employee Information Form
  category: hr
  version: 2.1
  note: All fields must be completed in full. Incomplete forms will be returned.

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
    group: Document
    order: 2

  Date:
    label: Date
    type: date
    required: true
    group: Document
    order: 3

  FullNameEn:
    label: Full Name (English)
    type: text
    required: true
    group: Personal
    order: 10

  FullNameAr:
    label: Full Name (Arabic)
    type: text
    required: true
    group: Personal
    order: 11

  Nationality:
    label: Nationality (English)
    type: text
    required: true
    group: Personal
    order: 12

  NationalityAr:
    label: Nationality (Arabic)
    type: text
    group: Personal
    order: 13

  NationalID:
    label: National ID / Iqama Number
    type: text
    required: true
    group: Personal
    order: 14

  PassportNumber:
    label: Passport Number
    type: text
    group: Personal
    order: 15

  DateOfBirth:
    label: Date of Birth
    type: date
    required: true
    group: Personal
    order: 16

  Gender:
    label: Gender
    type: select
    required: true
    group: Personal
    order: 17
    options:
      - Male
      - Female

  MaritalStatus:
    label: Marital Status
    type: select
    group: Personal
    order: 18
    options:
      - Single
      - Married
      - Divorced
      - Widowed

  NumberOfDependants:
    label: Number of Dependants
    type: number
    group: Personal
    order: 19

  Address:
    label: Residential Address
    type: text
    required: true
    group: Contact
    order: 20

  City:
    label: City
    type: text
    group: Contact
    order: 21

  Mobile:
    label: Mobile Number
    type: phone
    required: true
    group: Contact
    order: 22

  Email:
    label: Email Address
    type: email
    required: true
    group: Contact
    order: 23

  EmergencyContactName:
    label: Emergency Contact Name
    type: text
    required: true
    group: Contact
    order: 24

  EmergencyContactPhone:
    label: Emergency Contact Phone
    type: phone
    required: true
    group: Contact
    order: 25

  EmergencyContactRelationship:
    label: Relationship to Employee
    type: text
    group: Contact
    order: 26

  JobTitle:
    label: Job Title (English)
    type: text
    required: true
    group: Employment
    order: 30

  JobTitleAr:
    label: Job Title (Arabic)
    type: text
    group: Employment
    order: 31

  Department:
    label: Department
    type: text
    group: Employment
    order: 32

  Branch:
    label: Branch
    type: text
    group: Employment
    order: 33

  StartDate:
    label: Start Date
    type: date
    required: true
    group: Employment
    order: 34

  EmploymentType:
    label: Employment Type
    type: select
    group: Employment
    order: 35
    options:
      - Full-Time
      - Part-Time
      - Contract

  ReportingManager:
    label: Reporting Manager
    type: text
    group: Employment
    order: 36

  BankName:
    label: Bank Name (English)
    type: text
    required: true
    group: Bank Details
    order: 40

  BankNameAr:
    label: Bank Name (Arabic)
    type: text
    group: Bank Details
    order: 41

  IBAN:
    label: IBAN
    type: text
    required: true
    group: Bank Details
    order: 42

  AccountName:
    label: Account Holder Name
    type: text
    required: true
    group: Bank Details
    order: 43

  ReceivedBy:
    label: Received by (HR Name)
    type: text
    group: Signatory
    order: 50

  ReceivedByTitle:
    label: HR Title (English)
    type: text
    group: Signatory
    order: 51

  ReceivedByTitleAr:
    label: HR Title (Arabic)
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

**Ref / المرجع:** {{ReferenceNumber}} &nbsp;|&nbsp; **Date / التاريخ:** {{Date}}

---

# نموذج بيانات الموظف &nbsp;/&nbsp; Employee Information Form

---

## المعلومات الشخصية / Personal Information

| البيان / Field | القيمة / Value |
|---|---|
| **الاسم الكامل (عربي) / Full Name (AR)** | {{FullNameAr}} |
| **الاسم الكامل (إنجليزي) / Full Name (EN)** | {{FullNameEn}} |
| **الجنسية / Nationality** | {{NationalityAr}} / {{Nationality}} |
| **رقم الهوية / الإقامة / National ID or Iqama** | {{NationalID}} |
| **رقم جواز السفر / Passport Number** | {{PassportNumber}} |
| **تاريخ الميلاد / Date of Birth** | {{DateOfBirth}} |
| **الجنس / Gender** | {{Gender}} |
| **الحالة الاجتماعية / Marital Status** | {{MaritalStatus}} |
| **عدد المعالين / Number of Dependants** | {{NumberOfDependants}} |

---

## معلومات التواصل / Contact Information

| البيان / Field | القيمة / Value |
|---|---|
| **العنوان / Address** | {{Address}} |
| **المدينة / City** | {{City}} |
| **رقم الجوال / Mobile** | {{Mobile}} |
| **البريد الإلكتروني / Email** | {{Email}} |
| **جهة الاتصال في حالة الطوارئ / Emergency Contact** | {{EmergencyContactName}} |
| **رقم الطوارئ / Emergency Phone** | {{EmergencyContactPhone}} |
| **صلة القرابة / Relationship** | {{EmergencyContactRelationship}} |

---

## معلومات التوظيف / Employment Information

| البيان / Field | القيمة / Value |
|---|---|
| **المسمى الوظيفي / Job Title** | {{JobTitleAr}} / {{JobTitle}} |
| **القسم / Department** | {{Department}} |
| **الفرع / Branch** | {{Branch}} |
| **تاريخ الالتحاق / Start Date** | {{StartDate}} |
| **نوع التوظيف / Employment Type** | {{EmploymentType}} |
| **المرجع المباشر / Reporting To** | {{ReportingManager}} |

---

## المعلومات البنكية / Bank Details

| البيان / Field | القيمة / Value |
|---|---|
| **اسم البنك / Bank Name** | {{BankNameAr}} / {{BankName}} |
| **رقم الآيبان / IBAN** | {{IBAN}} |
| **اسم صاحب الحساب / Account Name** | {{AccountName}} |

---

## إقرار / Declaration

أُقرّ بأن جميع المعلومات الواردة أعلاه صحيحة ودقيقة، وأتعهد بإبلاغ قسم الموارد البشرية بأي تغييرات.

I confirm that all information provided above is accurate and complete. I undertake to inform the HR Department of any changes.

---

## Signatures / التواقيع

| توقيع الموظف / Employee Signature | استُلم بواسطة / Received By (HR) |
|---|---|
| {{FullNameEn}} | {{ReceivedBy}} |
| | {{ReceivedByTitle}} / {{ReceivedByTitleAr}} |
| Signature: ___________________________ | Signature: ___________________________ |
| Date: ___________________________ | Date: ___________________________ |

---

*يُحتفظ بهذا النموذج في ملف الموظف ضمن السجلات الرسمية للموارد البشرية. / This form is retained in the employee's file within the official HR records.*
