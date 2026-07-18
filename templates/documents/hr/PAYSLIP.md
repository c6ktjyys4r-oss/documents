---
template: Payslip
category: HR
reference: Alba A6
version: 1.0
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
