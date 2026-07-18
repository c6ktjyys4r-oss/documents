---
template: Asset Return
category: Operations
version: 1.0
---

{{Logo}}

{{CompanyName}}

# ASSET RETURN FORM

---

| Field | Value |
|---|---|
| **Reference No.** | {{ReferenceNumber}} |
| **Date** | {{Date}} |
| **Original Handover Ref.** | {{OriginalHandoverReference}} |

---

## Returning Party

| Field | Value |
|---|---|
| **Name** | {{ReturnedByName}} |
| **Title** | {{ReturnedByTitle}} |
| **Department** | {{Department}} |

---

## Assets Returned

| # | Asset Description | Asset ID / Serial | Condition at Return | Accessories Returned | Notes |
|---|---|---|---|---|---|
| 1 | {{AssetDescription}} | {{AssetID}} | {{Condition}} | {{Accessories}} | {{Notes}} |
| 2 | | | | | |

---

## Condition Assessment

| Asset ID | Expected Condition | Actual Condition | Discrepancy |
|---|---|---|---|
| {{AssetID}} | {{ExpectedCondition}} | {{ActualCondition}} | {{Discrepancy}} |

---

**Remarks:** {{Remarks}}

---

**Returned By:** {{ReturnedByName}}
**Signature:** ___________________________
**Date:** ___________________________

**Received By:** {{ReceivedBy}}
**Title:** {{ReceivedByTitle}}
**Signature:** ___________________________
**Date:** ___________________________

**Verified By:** {{ApprovedBy}}
**Signature:** ___________________________
