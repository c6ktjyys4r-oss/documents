---
template: Training Request
category: Administration
version: 2.1
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

# نموذج طلب تدريب &nbsp;/&nbsp; Training Request Form

---

| البيان / Field | القيمة / Value |
|---|---|
| **مقدم الطلب / Requested By** | {{RequestedByAr}} / {{RequestedBy}} |
| **القسم / Department** | {{Department}} |

---

## بيانات الموظف / Employee Details

| البيان / Field | القيمة / Value |
|---|---|
| **الاسم / Name** | {{EmployeeNameAr}} / {{EmployeeNameEn}} |
| **المسمى الوظيفي / Job Title** | {{JobTitleAr}} / {{JobTitle}} |
| **الفرع / Branch** | {{Branch}} |

---

## تفاصيل التدريب / Training Details

| البيان / Field | القيمة / Value |
|---|---|
| **عنوان الدورة / Training Title** | {{TrainingTitle}} |
| **الجهة المنظِّمة / Provider** | {{TrainingProvider}} |
| **نوع التدريب / Type** | {{TrainingType}} |
| **الموقع / المنصة / Location or Platform** | {{Location}} |
| **التواريخ المقترحة / Proposed Dates** | {{ProposedDates}} |
| **المدة / Duration** | {{Duration}} |

---

## التكاليف / Costs

| البند / Item | المبلغ / Amount |
|---|---|
| رسوم التدريب / Tuition Fees | {{TrainingFee}} |
| تكاليف السفر / Travel | {{TravelCost}} |
| الإقامة / Accommodation | {{AccommodationCost}} |
| أخرى / Other | {{OtherCosts}} |
| **الإجمالي / Total** | **{{TotalCost}}** |
| **العملة / Currency** | {{Currency}} |

---

**المبرر التجاري / Business Justification:** {{JustificationAr}} / {{Justification}}

**النتائج المتوقعة / Expected Outcome:** {{ExpectedBenefitAr}} / {{ExpectedBenefit}}

**مركز التكلفة / Cost Centre:** {{CostCentre}}

---

## الاعتمادات / Approvals

| الدور / Role | الاسم / Name | التوقيع / Signature | التاريخ / Date | القرار / Decision |
|---|---|---|---|---|
| مقدم الطلب / Requester | {{RequestedBy}} | ___________ | ___________ | — |
| المدير المباشر / Line Manager | {{LineManager}} | ___________ | ___________ | ☐ Approved &nbsp; ☐ Rejected |
| الموارد البشرية / HR | {{HRApprover}} | ___________ | ___________ | ☐ Approved &nbsp; ☐ Rejected |
| المالية / Finance | {{FinanceApprover}} | ___________ | ___________ | ☐ Approved &nbsp; ☐ Rejected |

---

**ملاحظات / Remarks:** {{Remarks}}

---

*يُحتفظ بهذا الطلب في سجلات التدريب الرسمية للموارد البشرية. / This request is retained in the official HR training records.*
