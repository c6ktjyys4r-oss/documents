---
document:
  name: Experience Certificate
  category: hr
  version: 2.1

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

  CompanyNameAr:
    label: Company Name (Arabic)
    type: text
    required: true
    group: Document
    order: 2

  CompanyAddress:
    label: Company Address
    type: text
    group: Document
    order: 3

  ReferenceNumber:
    label: Reference Number
    type: text
    required: true
    group: Document
    order: 4

  Date:
    label: Issue Date
    type: date
    required: true
    group: Document
    order: 5

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
    label: Department (English)
    type: text
    group: Employee
    order: 14

  DepartmentAr:
    label: Department (Arabic)
    type: text
    group: Employee
    order: 15

  StartDate:
    label: Employment Start Date
    type: date
    required: true
    group: Service Period
    order: 20

  EndDate:
    label: Employment End Date
    type: date
    required: true
    group: Service Period
    order: 21

  Duration:
    label: Duration of Service
    type: text
    required: true
    group: Service Period
    order: 22
    placeholder: e.g. 3 years 4 months

  PerformanceSummary:
    label: Performance Summary (English)
    type: textarea
    group: Performance
    order: 30
    placeholder: Optional note on performance, conduct, or achievements

  PerformanceSummaryAr:
    label: Performance Summary (Arabic)
    type: textarea
    group: Performance
    order: 31

  AuthorisedBy:
    label: Authorised Signatory Name
    type: text
    required: true
    group: Signatory
    order: 40

  AuthorisedTitle:
    label: Title (English)
    type: text
    group: Signatory
    order: 41

  AuthorisedTitleAr:
    label: Title (Arabic)
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

**{{CompanyName}}**
{{CompanyAddress}}

---

**Ref / المرجع:** {{ReferenceNumber}} &nbsp;|&nbsp; **Date / التاريخ:** {{Date}}

**إلى من يهمه الأمر / To Whom It May Concern**

---

# شهادة خبرة &nbsp;/&nbsp; Experience Certificate

---

## Arabic (يُشهد بأن):

تُفيد إدارة الموارد البشرية في **{{CompanyNameAr}}** بأن الموظف/ة **{{EmployeeNameAr}}** كان/كانت يعمل/تعمل لدى المنشأة بالتفاصيل التالية:

| البيان | القيمة |
|---|---|
| **المسمى الوظيفي** | {{JobTitleAr}} |
| **القسم** | {{DepartmentAr}} |
| **من تاريخ** | {{StartDate}} |
| **إلى تاريخ** | {{EndDate}} |
| **مدة الخدمة** | {{Duration}} |

{{PerformanceSummaryAr}}

نتمنى له/لها التوفيق والنجاح في مسيرته/مسيرتها المهنية.

---

## English (This is to certify that):

The Human Resources Department of **{{CompanyName}}** hereby certifies that **{{EmployeeNameEn}}** was employed with the company with the following details:

| Field | Value |
|---|---|
| **Job Title** | {{JobTitle}} |
| **Department** | {{Department}} |
| **From** | {{StartDate}} |
| **To** | {{EndDate}} |
| **Duration of Service** | {{Duration}} |

{{PerformanceSummary}}

We wish {{EmployeeNameEn}} every success in future endeavours.

---

## Signatures / التواقيع

| الختم الرسمي / Official Stamp | المفوّض بالتوقيع / Authorised Signatory |
|---|---|
| *(Stamp here / ختم هنا)* | {{AuthorisedBy}} |
| | {{AuthorisedTitle}} / {{AuthorisedTitleAr}} |
| | Signature: ___________________________ |
| | Date: ___________________________ |

---

*صدرت هذه الشهادة بتاريخ {{Date}} وتُحفظ في السجلات الرسمية للشركة. / This certificate was issued on {{Date}} and is retained in the company's official records.*
