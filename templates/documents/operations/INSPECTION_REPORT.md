---
template: Inspection Report
category: Operations
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

# تقرير فحص وتفتيش &nbsp;/&nbsp; Inspection Report

---

| البيان / Field | القيمة / Value |
|---|---|
| **نوع الفحص / Inspection Type** | {{InspectionType}} |
| **الموقع / Location** | {{Location}} |
| **المفتِّش / Inspector** | {{InspectorName}} |
| **تاريخ الفحص / Inspection Date** | {{InspectionDate}} |

---

## نطاق الفحص / Scope of Inspection

**عربي:** {{InspectionScopeAr}}

**English:** {{InspectionScope}}

---

## قائمة الفحص / Checklist

| # | البند / Item | الحالة / Status | الملاحظات / Remarks |
|---|---|---|---|
| 1 | {{InspectionItem1}} | ☐ Pass &nbsp; ☐ Fail &nbsp; ☐ N/A | {{Remarks1}} |
| 2 | {{InspectionItem2}} | ☐ Pass &nbsp; ☐ Fail &nbsp; ☐ N/A | {{Remarks2}} |
| 3 | {{InspectionItem3}} | ☐ Pass &nbsp; ☐ Fail &nbsp; ☐ N/A | {{Remarks3}} |

---

## المخالفات / Findings

| # | المنطقة / Area | الملاحظة / Observation | الخطورة / Severity | التوصية / Recommendation |
|---|---|---|---|---|
| 1 | {{Area1}} | {{Observation1}} | {{Severity1}} | {{Recommendation1}} |
| 2 | {{Area2}} | {{Observation2}} | {{Severity2}} | {{Recommendation2}} |

---

## الخلاصة / Summary

**الحالة العامة / Overall Status:** {{OverallStatus}}

**عربي:** {{SummaryNotesAr}}

**English:** {{SummaryNotes}}

---

## الإجراءات المطلوبة / Actions Required

| الإجراء / Action | المسؤول / Owner | الأولوية / Priority | الموعد / Due Date |
|---|---|---|---|
| {{CorrectiveAction1}} | {{Owner1}} | {{Priority1}} | {{DueDate1}} |
| {{CorrectiveAction2}} | {{Owner2}} | {{Priority2}} | {{DueDate2}} |

---

## Signatures / التواقيع

| المفتِّش / Inspector | مراجعة بواسطة / Reviewed By |
|---|---|
| {{InspectorName}} | {{ReviewedBy}} |
| {{InspectorTitle}} / {{InspectorTitleAr}} | {{ReviewedByTitle}} / {{ReviewedByTitleAr}} |
| *(Official Stamp / الختم الرسمي)* | |
| Signature: ___________________________ | Signature: ___________________________ |
| Date: ___________________________ | Date: ___________________________ |

---

*يُحتفظ بهذا التقرير في السجلات التشغيلية الرسمية للمنشأة. / This report is retained in the company's official operational records.*
