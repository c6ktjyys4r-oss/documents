---
template: Asset Return
category: Operations
version: 2.0
---

{{Logo}}

**{{CompanyName}}**

---

# محضر إعادة أصول &nbsp;/&nbsp; ASSET RETURN

---

| البيان / Field | القيمة / Value |
|---|---|
| **رقم المحضر / Reference No.** | {{ReferenceNumber}} |
| **التاريخ / Date** | {{Date}} |
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

| # | الأصل / Asset Description | رقم الأصل / Asset ID | الحالة عند الإعادة / Condition at Return | الملحقات / Accessories | ملاحظات / Notes |
|---|---|---|---|---|---|
| 1 | {{AssetDescription1}} | {{AssetID1}} | {{ConditionAtReturn1}} | {{Accessories1}} | {{Notes1}} |
| 2 | {{AssetDescription2}} | {{AssetID2}} | {{ConditionAtReturn2}} | {{Accessories2}} | {{Notes2}} |
| 3 | | | | | |

---

## تقييم الحالة / Condition Assessment

| رقم الأصل / Asset ID | الحالة المتوقعة / Expected | الحالة الفعلية / Actual | الفرق / Discrepancy |
|---|---|---|---|
| {{AssetID1}} | {{ExpectedCondition1}} | {{ActualCondition1}} | {{Discrepancy1}} |
| {{AssetID2}} | {{ExpectedCondition2}} | {{ActualCondition2}} | {{Discrepancy2}} |

---

**ملاحظات / Remarks:** {{Remarks}}

---

## Signatures / التواقيع

| المُعيد / Returned By | المُستَلِم / Received By | تحقق بواسطة / Verified By |
|---|---|---|
| {{ReturnedByName}} | {{ReceivedBy}} | {{VerifiedBy}} |
| {{ReturnedByTitle}} / {{ReturnedByTitleAr}} | {{ReceivedByTitle}} / {{ReceivedByTitleAr}} | {{VerifiedByTitle}} / {{VerifiedByTitleAr}} |
| Signature: ___________ | Signature: ___________ | Signature: ___________ |
| Date: ___________ | Date: ___________ | Date: ___________ |

| الختم الرسمي / Official Stamp |
|---|
| *(Stamp here / ختم هنا)* |
