---
template: Payslip
category: HR
reference: Alba A6
version: 1.0
---

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
