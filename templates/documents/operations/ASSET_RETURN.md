---
template: Asset Return
category: Operations
version: 2.1
---

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
