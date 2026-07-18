---
template: Final Settlement Form
category: HR
reference: Alba A4
version: 1.0
note: Calculation fields (EOSB, leave compensation, deductions) are placeholders. Amounts must be computed and entered manually.
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
