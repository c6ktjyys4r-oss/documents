---
template: Salary Certificate
category: HR
reference: Alba A1
version: 1.1
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

**Ref / المرجع:** {{SerialNumber}} &nbsp;|&nbsp; **Date / التاريخ:** {{IssueDate}}

---

**إلى / To:** {{PurposeAr}} / {{Purpose}}
*(عام / General — إلى البنك / To the Bank — للسفارة / To the Embassy — لأغراض الإيجار / Rental Purposes — أخرى / Other: {{CustomPurpose}})*

---

# شهادة راتب &nbsp;/&nbsp; Salary Certificate

---

## معلومات الموظف / Employee Information

| البيان / Field | القيمة / Value |
|---|---|
| **الاسم (عربي) / Name (AR)** | {{EmployeeNameAr}} |
| **الاسم (إنجليزي) / Name (EN)** | {{EmployeeNameEn}} |
| **المسمى الوظيفي (عربي) / Job Title (AR)** | {{JobTitleAr}} |
| **المسمى الوظيفي (إنجليزي) / Job Title (EN)** | {{JobTitleEn}} |
| **الجنسية / Nationality** | {{Nationality}} |
| **رقم الهوية / الإقامة / National ID or Iqama** | {{NationalID}} |
| **تاريخ الالتحاق / Date of Joining** | {{DateOfJoining}} |

---

## Arabic (يُشهد بأن):

إلى {{PurposeAr}}،

يُشهد بأن الموظف/ة **{{EmployeeNameAr}}** يعمل/تعمل لدى **{{CompanyNameAr}}** بالمسمى الوظيفي **{{JobTitleAr}}** منذ تاريخ **{{DateOfJoining}}**.

**المرتب الشهري:**

| البند / Component | المبلغ / Amount |
|---|---|
| الراتب الأساسي / Basic Salary | {{BasicSalary}} |
| بدل السكن / Housing Allowance | {{HousingAllowance}} |
| بدل النقل / Transportation Allowance | {{TransportationAllowance}} |
| بدلات أخرى / Other Allowances | {{OtherAllowances}} |
| **الإجمالي / Total** | **{{TotalSalary}}** |

*(IBAN: {{IBAN}} — {{BankName}})*

صدرت هذه الشهادة بناءً على طلب الموظف/ة لتقديمها إلى **{{PurposeAr}}** ولا تُستخدم لأي غرض آخر.

---

## English (This is to certify that):

To {{Purpose}},

This is to certify that **{{EmployeeNameEn}}** is employed with **{{CompanyName}}** as **{{JobTitleEn}}** since **{{DateOfJoining}}**.

**Monthly Compensation:**

| Component | Amount |
|---|---|
| Basic Salary | {{BasicSalary}} |
| Housing Allowance | {{HousingAllowance}} |
| Transportation Allowance | {{TransportationAllowance}} |
| Other Allowances | {{OtherAllowances}} |
| **Total** | **{{TotalSalary}}** |

*(IBAN: {{IBAN}} — {{BankName}})*

This certificate is issued upon the request of the employee for **{{Purpose}}** and should not be used for any other purpose.

---

## Signatures / التواقيع

| الختم الرسمي / Official Stamp | المفوّض بالتوقيع / Authorised Signatory |
|---|---|
| *(Stamp here / ختم هنا)* | {{AuthorisedBy}} |
| | {{AuthorisedTitle}} / {{AuthorisedTitleAr}} |
| | Signature: ___________________________ |
| | Date: ___________________________ |

---

*{{AdditionalNote}}*

*صدرت هذه الشهادة بناءً على طلب الموظف/ة وتُحفظ في السجلات الرسمية للشركة. / This certificate is issued upon employee request and retained in the company's official records.*
