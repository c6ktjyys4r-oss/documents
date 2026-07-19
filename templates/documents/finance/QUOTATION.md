---
document:
  name: Quotation
  category: finance
  version: 2.1

form:
  direction: ltr
  layout: grouped

fields:
  CompanyName:
    label: Company Name
    type: text
    required: true
    group: Seller
    order: 1
  CompanyAddress:
    label: Company Address
    type: text
    group: Seller
    order: 2
  CompanyPhone:
    label: Company Phone
    type: phone
    group: Seller
    order: 3
  CompanyEmail:
    label: Company Email
    type: email
    group: Seller
    order: 4
  QuotationNumber:
    label: Quotation Number
    type: text
    required: true
    group: Quote
    order: 10
  Date:
    label: Issue Date
    type: date
    required: true
    group: Quote
    order: 11
  ValidUntil:
    label: Valid Until
    type: date
    required: true
    group: Quote
    order: 12
  Currency:
    label: Currency
    type: text
    group: Quote
    order: 13
    placeholder: SAR
  ClientName:
    label: Client Name
    type: text
    required: true
    group: Client
    order: 20
  ClientAddress:
    label: Client Address
    type: text
    group: Client
    order: 21
  ClientTaxNumber:
    label: Client Tax Number
    type: text
    group: Client
    order: 22
  ItemDescription1:
    label: Item 1 — Description
    type: text
    required: true
    group: Line Items
    order: 30
  Qty1:
    label: Item 1 — Quantity
    type: number
    group: Line Items
    order: 31
  UnitPrice1:
    label: Item 1 — Unit Price
    type: currency
    group: Line Items
    order: 32
  LineTotal1:
    label: Item 1 — Line Total
    type: currency
    group: Line Items
    order: 33
  ItemDescription2:
    label: Item 2 — Description
    type: text
    group: Line Items
    order: 34
  Qty2:
    label: Item 2 — Quantity
    type: number
    group: Line Items
    order: 35
  UnitPrice2:
    label: Item 2 — Unit Price
    type: currency
    group: Line Items
    order: 36
  LineTotal2:
    label: Item 2 — Line Total
    type: currency
    group: Line Items
    order: 37
  ItemDescription3:
    label: Item 3 — Description
    type: text
    group: Line Items
    order: 38
  Qty3:
    label: Item 3 — Quantity
    type: number
    group: Line Items
    order: 39
  UnitPrice3:
    label: Item 3 — Unit Price
    type: currency
    group: Line Items
    order: 40
  LineTotal3:
    label: Item 3 — Line Total
    type: currency
    group: Line Items
    order: 41
  Subtotal:
    label: Subtotal
    type: currency
    required: true
    group: Totals
    order: 50
  TaxRate:
    label: Tax Rate (%)
    type: number
    group: Totals
    order: 51
  TaxAmount:
    label: Tax Amount
    type: currency
    group: Totals
    order: 52
  Discount:
    label: Discount
    type: currency
    group: Totals
    order: 53
  Total:
    label: Total
    type: currency
    required: true
    group: Totals
    order: 54
  PaymentTerms:
    label: Payment Terms
    type: text
    group: Terms
    order: 60
  TermsAndConditions:
    label: Terms & Conditions
    type: textarea
    group: Terms
    order: 61
  Notes:
    label: Notes
    type: textarea
    group: Terms
    order: 62
  PreparedBy:
    label: Prepared by Name
    type: text
    required: true
    group: Signatory
    order: 70
  PreparedByTitle:
    label: Title (English)
    type: text
    group: Signatory
    order: 71
  PreparedByTitleAr:
    label: Title (Arabic)
    type: text
    group: Signatory
    order: 72

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
{{CompanyAddress}} &nbsp;|&nbsp; {{CompanyPhone}} &nbsp;|&nbsp; {{CompanyEmail}}

---

**Ref / المرجع:** {{QuotationNumber}} &nbsp;|&nbsp; **Date / التاريخ:** {{Date}}

---

# عرض سعر &nbsp;/&nbsp; Quotation

---

| البيان / Field | القيمة / Value |
|---|---|
| **رقم عرض السعر / Quotation No.** | {{QuotationNumber}} |
| **صالح حتى / Valid Until** | {{ValidUntil}} |
| **العملة / Currency** | {{Currency}} |

---

## من / From

**{{CompanyName}}**
{{CompanyAddress}}

## إلى / To

**{{ClientName}}**
{{ClientAddress}}
للاهتمام / Attn: {{ClientContactPerson}}

---

## البنود / Line Items

| # | الوصف / Description | الكمية / Qty | سعر الوحدة / Unit Price | الإجمالي / Total |
|---|---|---|---|---|
| 1 | {{ItemDescription1}} | {{Qty1}} | {{UnitPrice1}} | {{LineTotal1}} |
| 2 | {{ItemDescription2}} | {{Qty2}} | {{UnitPrice2}} | {{LineTotal2}} |
| 3 | {{ItemDescription3}} | {{Qty3}} | {{UnitPrice3}} | {{LineTotal3}} |

---

| | |
|---|---|
| **المجموع / Subtotal** | {{Subtotal}} |
| **الضريبة / Tax ({{TaxRate}}%)** | {{TaxAmount}} |
| **الخصم / Discount** | ({{Discount}}) |
| **الإجمالي / Total** | **{{Total}}** |

---

**شروط الدفع / Payment Terms:** {{PaymentTerms}}

**موعد التسليم / Delivery Timeline:** {{DeliveryTimeline}}

**الشروط والأحكام / Terms and Conditions:** {{TermsAndConditions}}

**ملاحظات / Notes:** {{Notes}}

---

## Signatures / التواقيع

| أُعِدَّت بواسطة / Prepared By | اعتمد بواسطة / Authorised By |
|---|---|
| {{PreparedBy}} | {{ApprovedBy}} |
| {{PreparedByTitle}} / {{PreparedByTitleAr}} | {{ApprovedByTitle}} / {{ApprovedByTitleAr}} |
| *(Official Stamp / الختم الرسمي)* | |
| Signature: ___________________________ | Signature: ___________________________ |
| Date: ___________________________ | Date: ___________________________ |

---

*هذا العرض ساري المفعول حتى {{ValidUntil}} ولا يُعدّ التزامًا تعاقديًا حتى يتم إصدار أمر الشراء. / This quotation is valid until {{ValidUntil}} and does not constitute a contractual commitment until a purchase order is issued.*
