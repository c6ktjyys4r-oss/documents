---
template: Asset Return
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

# محضر إعادة أصول &nbsp;/&nbsp; Asset Return Record

---

| البيان / Field | القيمة / Value |
|---|---|
| **مرجع تسليم الأصل الأصلي / Original Handover Ref.** | {{OriginalHandoverReference}} |

---

## جهة الإعادة / Returning Party

| البيان / Field | القيمة / Value |
|---|---|
| **الاسم / Name** | {{ReturnedByNameAr}} / {{ReturnedByName}} |
| **المسمى / Title** | {{ReturnedByTitleAr}} / {{ReturnedByTitle}} |
| **القسم / Department** | {{Department}} |

---

## الأصول المُعادة / Assets Returned

| # | الأصل / Asset | رقم الأصل / Asset ID | الحالة عند الإعادة / Return Condition | الملحقات / Accessories | ملاحظات / Notes |
|---|---|---|---|---|---|
| 1 | {{AssetDescription1}} | {{AssetID1}} | {{ConditionAtReturn1}} | {{Accessories1}} | {{Notes1}} |
| 2 | {{AssetDescription2}} | {{AssetID2}} | {{ConditionAtReturn2}} | {{Accessories2}} | {{Notes2}} |
| 3 | {{AssetDescription3}} | {{AssetID3}} | {{ConditionAtReturn3}} | {{Accessories3}} | {{Notes3}} |

---

## تقييم الحالة / Condition Assessment

| رقم الأصل / Asset ID | الحالة المتوقعة / Expected | الحالة الفعلية / Actual | الفرق / Discrepancy |
|---|---|---|---|
| {{AssetID1}} | {{ExpectedCondition1}} | {{ActualCondition1}} | {{Discrepancy1}} |
| {{AssetID2}} | {{ExpectedCondition2}} | {{ActualCondition2}} | {{Discrepancy2}} |

---

**ملاحظات / General Remarks:** {{Remarks}}

---

## Signatures / التواقيع

| المُعيد / Returned By | المُستَلِم / Received By | تحقق بواسطة / Verified By |
|---|---|---|
| {{ReturnedByName}} | {{ReceivedBy}} | {{VerifiedBy}} |
| {{ReturnedByTitle}} / {{ReturnedByTitleAr}} | {{ReceivedByTitle}} / {{ReceivedByTitleAr}} | {{VerifiedByTitle}} / {{VerifiedByTitleAr}} |
| *(Official Stamp / الختم الرسمي)* | | |
| Signature: ___________ | Signature: ___________ | Signature: ___________ |
| Date: ___________ | Date: ___________ | Date: ___________ |

---

*يُحتفظ بهذا المحضر في سجلات الأصول الرسمية للمنشأة. / This record is retained in the company's official asset registry.*
