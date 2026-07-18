---
template: Loan Acknowledgement (Employee Loan / Salary Advance Receipt)
category: HR
reference: Alba A3
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

# إقرار استلام سلفة &nbsp;/&nbsp; Employee Loan Acknowledgement

**التاريخ / Date:** {{IssueDate}}

---

## معلومات الموظف / Employee Information

| البيان / Field | القيمة / Value |
|---|---|
| **اسم الموظف / Employee Name** | {{EmployeeNameAr}} / {{EmployeeNameEn}} |
| **رقم الهوية / الإقامة / National ID or Iqama** | {{NationalID}} |
| **المسمى الوظيفي / Job Title** | {{JobTitleAr}} / {{JobTitleEn}} |

---

## تفاصيل السلفة / Loan Details

| البيان / Field | القيمة / Value |
|---|---|
| **مبلغ السلفة / Loan Amount** | {{LoanAmount}} SAR |
| **تاريخ الصرف / Disbursement Date** | {{DisbursementDate}} |

---

## إقرار / Acknowledgement

أقر أنا الموظف المذكور أعلاه بأنني استلمت من الشركة سلفة مالية بمبلغ (**{{LoanAmount}}**) ريال سعودي.

كما أوافق على سداد هذه السلفة عن طريق الاستقطاع من رواتبي الشهرية وفقاً للبنود المتفق عليها، حتى يتم استرداد كامل المبلغ.

وأقر بأن هذه المعاملة تمت بموافقتي الكاملة وإرادتي الحرة دون أي إكراه أو اعتراض.

---

I, the above-named employee, hereby acknowledge that I have received from **{{CompanyName}}** an employee loan of **{{LoanAmount}} SAR**.

I agree to repay this amount through monthly deductions from my salary in accordance with the agreed repayment terms until the full amount is recovered.

I confirm that this transaction was completed with my full and voluntary consent, without any coercion or objection.

---

## Signatures / التواقيع

| توقيع الموظف / Employee Signature | مدير الموارد البشرية / HR Manager |
|---|---|
| {{EmployeeNameEn}} | {{PreparedBy}} |
| | {{PreparedTitle}} / {{PreparedTitleAr}} |
| Signature: ___________________________ | Signature: ___________________________ |
| التاريخ / Date: ___________________________ | التاريخ / Date: {{IssueDate}} |
