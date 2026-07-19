---
document:
  name: Warning Letter
  category: hr
  reference: Alba A7
  version: 2.0

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

  SerialNumber:
    label: Reference / Serial Number
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

  WarningType:
    label: Warning Type
    type: select
    required: true
    group: Document
    order: 4
    options:
      - Verbal Warning
      - Written Warning
      - Final Warning

  WarningDate:
    label: Warning Date
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

  EmployeeCode:
    label: Employee Code
    type: text
    group: Employee
    order: 12

  NationalID:
    label: National ID / Iqama Number
    type: text
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

  ViolationReasonEn:
    label: Violation / Reason (English)
    type: textarea
    required: true
    group: Violation
    order: 20

  ViolationReasonAr:
    label: Violation / Reason (Arabic)
    type: textarea
    required: true
    group: Violation
    order: 21

  AdditionalNotes:
    label: Additional Notes
    type: textarea
    group: Notes
    order: 30

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

  PreparedBy:
    label: Prepared by (HR Manager Name)
    type: text
    group: Signatory
    order: 43

  PreparedTitle:
    label: HR Manager Title (English)
    type: text
    group: Signatory
    order: 44

  PreparedTitleAr:
    label: HR Manager Title (Arabic)
    type: text
    group: Signatory
    order: 45

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

**Ref / المرجع:** {{SerialNumber}} &nbsp;&nbsp; **Date / التاريخ:** {{IssueDate}}

---

# رسالة إنذار &nbsp;|&nbsp; Warning Letter

**نوع الإنذار / Warning Type:** {{WarningType}}
*(إنذار شفهي / Verbal Warning — إنذار خطي / Written Warning — إنذار نهائي / Final Warning)*

---

## معلومات الموظف / Employee Details

| البيان / Field | القيمة / Value | البيان / Field | القيمة / Value |
|---|---|---|---|
| **اسم الموظف / Employee Name** | {{EmployeeNameAr}} / {{EmployeeNameEn}} | | |
| **رمز الموظف / Employee Code** | {{EmployeeCode}} | **الجنسية / Nationality** | {{Nationality}} |
| **رقم الهوية / الإقامة / ID or Iqama** | {{NationalID}} | **المسمى الوظيفي / Job Title** | {{JobTitle}} |
| **تاريخ الإنذار / Warning Date** | {{WarningDate}} | **نوع الإنذار / Warning Type** | {{WarningType}} |

---

## المخالفة / Violation — Reason

**عربي:**

{{ViolationReasonAr}}

**English:**

{{ViolationReasonEn}}

---

> ⚠️ **إنذار نهائي / Final Warning** *(include only if Warning Type = Final)*
>
> **تحذير أخير:** يُعدّ هذا الإنذار النهائي في مسار التأديب. قد يترتب على تكرار المخالفة إجراءات أشد، بما فيها إنهاء الخدمة.
>
> **Final Warning:** This constitutes a final warning. Any further violations may result in more serious disciplinary action, including termination of employment.

---

## ملاحظات إضافية / Additional Notes

{{AdditionalNotes}}

---

## إقرار الموظف / Employee Acknowledgement

أُقرّ بأنني استلمت نسخة من هذا الإنذار وفهمت مضمونه، وأتعهّد بعدم تكرار المخالفة مستقبلاً.

I acknowledge receipt of this warning letter and confirm that I have read and understood its contents. I commit to not repeating the violation.

---

## Signatures / التواقيع

| توقيع الموظف / Employee Signature | الختم / Stamp | المفوض بالتوقيع / Authorised Signatory |
|---|---|---|
| {{EmployeeNameEn}} | *(Official Stamp)* | {{AuthorisedBy}} |
| Signature: ___________________________ | | {{AuthorisedTitle}} / {{AuthorisedTitleAr}} |
| التاريخ / Date: ___________________________ | | Signature: ___________________________ |

---

| مدير الموارد البشرية / HR Manager |
|---|
| {{PreparedBy}} — {{PreparedTitle}} / {{PreparedTitleAr}} |
| Signature: ___________________________ &nbsp;&nbsp; التاريخ / Date: {{IssueDate}} |
