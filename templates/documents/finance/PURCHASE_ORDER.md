---
template: Purchase Order
category: Finance
version: 1.0
---

{{Logo}}

# PURCHASE ORDER

---

**Buyer:**
{{CompanyName}}
{{CompanyAddress}}
{{CompanyPhone}} | {{CompanyEmail}}

**Supplier:**
{{SupplierName}}
{{SupplierAddress}}
{{SupplierContactPerson}}

---

| Field | Value |
|---|---|
| **PO Number** | {{PONumber}} |
| **Date** | {{Date}} |
| **Required By** | {{RequiredByDate}} |
| **Currency** | {{Currency}} |
| **Delivery Location** | {{DeliveryLocation}} |

---

## Order Items

| # | Item Description | Qty | Unit | Unit Price | Total |
|---|---|---|---|---|---|
| 1 | {{ItemDescription}} | {{Qty}} | {{Unit}} | {{UnitPrice}} | {{LineTotal}} |
| 2 | | | | | |

---

| | |
|---|---|
| **Subtotal** | {{Subtotal}} |
| **Tax ({{TaxRate}}%)** | {{TaxAmount}} |
| **Shipping** | {{Shipping}} |
| **Total** | {{Total}} |

---

**Payment Terms:** {{PaymentTerms}}

**Special Instructions:** {{SpecialInstructions}}

**Notes:** {{Notes}}

---

**Prepared By:** {{PreparedBy}}
**Approved By:** {{ApprovedBy}}
**Signature:** ___________________________
**Date:** {{Date}}
