---
template: Quotation
category: Finance
version: 1.0
---

{{Logo}}

# QUOTATION

---

**From:**
{{CompanyName}}
{{CompanyAddress}}
{{CompanyPhone}} | {{CompanyEmail}}

**To:**
{{ClientName}}
{{ClientAddress}}
{{ClientContactPerson}}

---

| Field | Value |
|---|---|
| **Quotation No.** | {{QuotationNumber}} |
| **Date** | {{Date}} |
| **Valid Until** | {{ValidUntil}} |
| **Currency** | {{Currency}} |

---

## Items

| # | Description | Qty | Unit Price | Total |
|---|---|---|---|---|
| 1 | {{ItemDescription}} | {{Qty}} | {{UnitPrice}} | {{LineTotal}} |
| 2 | | | | |

---

| | |
|---|---|
| **Subtotal** | {{Subtotal}} |
| **Tax ({{TaxRate}}%)** | {{TaxAmount}} |
| **Discount** | {{Discount}} |
| **Total** | {{Total}} |

---

**Terms and Conditions:** {{TermsAndConditions}}

**Delivery / Timeline:** {{DeliveryTimeline}}

**Notes:** {{Notes}}

---

**Prepared By:** {{PreparedBy}}
**Approved By:** {{ApprovedBy}}
**Signature:** ___________________________
