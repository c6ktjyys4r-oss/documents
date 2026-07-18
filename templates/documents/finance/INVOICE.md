---
template: Invoice
category: Finance
version: 1.0
---

{{Logo}}

# INVOICE

---

**From:**
{{CompanyName}}
{{CompanyAddress}}
{{CompanyPhone}} | {{CompanyEmail}}
{{TaxRegistrationNumber}}

**To:**
{{ClientName}}
{{ClientAddress}}
{{ClientTaxNumber}}

---

| Field | Value |
|---|---|
| **Invoice No.** | {{InvoiceNumber}} |
| **Date** | {{Date}} |
| **Due Date** | {{DueDate}} |
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
| **Total Due** | {{TotalDue}} |

---

**Payment Method:** {{PaymentMethod}}
**Bank Details:** {{BankDetails}}
**Notes:** {{Notes}}

---

**Prepared By:** {{PreparedBy}}
**Approved By:** {{ApprovedBy}}
**Signature:** ___________________________
