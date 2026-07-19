---
document:
  name: Annual Leave Encashment
  category: hr
  version: 1.0

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

  CompanyNameEn:
    label: Company Name (English — full)
    type: text
    group: Document
    order: 2

  CompanyNameAr:
    label: Company Name (Arabic)
    type: text
    required: true
    group: Document
    order: 3

  CRNumber:
    label: Commercial Registration Number
    type: text
    group: Document
    order: 4

  CompanyAddress:
    label: Company Address
    type: text
    group: Document
    order: 5

  ReferenceNumber:
    label: Reference Number
    type: text
    required: true
    group: Document
    order: 6

  IssueDate:
    label: Issue Date
    type: date
    required: true
    group: Document
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

  JobTitle:
    label: Job Title
    type: text
    required: true
    group: Employee
    order: 15

  Department:
    label: Department
    type: text
    group: Employee
    order: 16

  Branch:
    label: Branch
    type: text
    group: Employee
    order: 17

  IBAN:
    label: IBAN
    type: text
    required: true
    group: Bank
    order: 20

  BankNameEn:
    label: Bank Name (English)
    type: text
    required: true
    group: Bank
    order: 21

  BankNameAr:
    label: Bank Name (Arabic)
    type: text
    group: Bank
    order: 22

  LeaveType:
    label: Leave Type
    type: select
    required: true
    group: Leave Details
    order: 30
    options:
      - Annual Leave
      - Accumulated Leave
      - Other

  LeaveDays:
    label: Number of Leave Days
    type: number
    required: true
    group: Leave Details
    order: 31

  AmountPerDay:
    label: Daily Rate (SAR)
    type: currency
    required: true
    group: Leave Details
    order: 32

  TotalAmount:
    label: Total Amount (SAR)
    type: currency
    required: true
    group: Leave Details
    order: 33

  Currency:
    label: Currency
    type: text
    group: Leave Details
    order: 34
    placeholder: SAR

  ReasonOrNotes:
    label: Reason / Notes
    type: textarea
    group: Notes
    order: 40

  HRSignatoryName:
    label: HR Signatory Name
    type: text
    required: true
    group: Signatories
    order: 50

  HRSignatoryTitle:
    label: HR Signatory Title (English)
    type: text
    group: Signatories
    order: 51

  HRSignatoryTitleAr:
    label: HR Signatory Title (Arabic)
    type: text
    group: Signatories
    order: 52

  FinanceSignatoryName:
    label: Finance Signatory Name
    type: text
    group: Signatories
    order: 53

  FinanceSignatoryTitle:
    label: Finance Signatory Title (English)
    type: text
    group: Signatories
    order: 54

  FinanceSignatoryTitleAr:
    label: Finance Signatory Title (Arabic)
    type: text
    group: Signatories
    order: 55

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

# طلب صرف بدل الإجازة &nbsp;/&nbsp; Annual Leave Encashment Request

**Ref / المرجع:** {{ReferenceNumber}} &nbsp;&nbsp; **Date / التاريخ:** {{IssueDate}}

---

## بيانات المنشأة / Company Information

| البيان / Field | القيمة / Value |
|---|---|
| **اسم المنشأة / Company Name** | {{CompanyNameAr}} / {{CompanyNameEn}} |
| **رقم السجل التجاري / CR Number** | {{CRNumber}} |
| **العنوان / Address** | {{CompanyAddress}} |

---

## معلومات الموظف / Employee Information

| البيان / Field | القيمة / Value |
|---|---|
| **اسم الموظف / Employee Name** | {{EmployeeNameAr}} / {{EmployeeNameEn}} |
| **رقم الموظف / Employee Code** | {{EmployeeCode}} |
| **رقم الهوية / الإقامة / National ID or Iqama** | {{NationalID}} |
| **الجنسية / Nationality** | {{Nationality}} |
| **المسمى الوظيفي / Job Title** | {{JobTitle}} |
| **القسم / Department** | {{Department}} |
| **الفرع / Branch** | {{Branch}} |

---

## المعلومات البنكية / Bank Information

| البيان / Field | القيمة / Value |
|---|---|
| **رقم الآيبان / IBAN** | {{IBAN}} |
| **اسم البنك / Bank Name** | {{BankNameAr}} / {{BankNameEn}} |

---

## تفاصيل بدل الإجازة / Leave Encashment Details

| البيان / Field | القيمة / Value |
|---|---|
| **نوع الإجازة / Leave Type** | {{LeaveType}} |
| **عدد أيام الإجازة / Number of Leave Days** | {{LeaveDays}} |
| **المبلغ عن كل يوم / Amount Per Day** | {{AmountPerDay}} SAR |
| **المبلغ الإجمالي / Total Amount** | {{TotalAmount}} SAR |
| **العملة / Currency** | {{Currency}} |

---

## السبب / الملاحظات — Reason / Notes

{{ReasonOrNotes}}

---

## إقرار الموظف / Employee Declaration

أُقرّ أنا الموظف/ة المذكور/ة أعلاه بصحة جميع المعلومات الواردة في هذا الطلب، وأطلب صرف بدل الإجازة السنوية المشار إليه وفقاً لما هو مُدوَّن.

I, the above-named employee, confirm that all information provided in this request is accurate and complete. I hereby request the encashment of the annual leave entitlement as stated above.

---

## Signatures / التواقيع

| توقيع الموظف / Employee Signature | توقيع الموارد البشرية / HR Signature | توقيع المالية / Finance Signature |
|---|---|---|
| {{EmployeeNameEn}} | {{HRSignatoryName}} | {{FinanceSignatoryName}} |
| {{JobTitle}} | {{HRSignatoryTitle}} / {{HRSignatoryTitleAr}} | {{FinanceSignatoryTitle}} / {{FinanceSignatoryTitleAr}} |
| Signature: ___________________________ | Signature: ___________________________ | Signature: ___________________________ |
| التاريخ / Date: ___________________________ | التاريخ / Date: ___________________________ | التاريخ / Date: ___________________________ |

---

| الختم الرسمي للشركة / Official Company Stamp |
|---|
| *(Stamp here / ختم هنا)* |
