---
template: Final Settlement Form
category: HR
reference: Alba A4
version: 1.0
note: Calculation fields (EOSB, leave compensation, deductions) are placeholders. Amounts must be computed and entered manually.
---

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
