---
document:
  name: Invoice
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

  TaxRegistrationNumber:
    label: Tax Registration Number
    type: text
    group: Seller
    order: 5

  InvoiceNumber:
    label: Invoice Number
    type: text
    required: true
    group: Invoice
    order: 10

  Date:
    label: Invoice Date
    type: date
    required: true
    group: Invoice
    order: 11

  DueDate:
    label: Due Date
    type: date
    required: true
    group: Invoice
    order: 12

  Currency:
    label: Currency
    type: text
    group: Invoice
    order: 13
    placeholder: SAR

  ClientName:
    label: Client / Customer Name
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
    label: Client Tax Registration Number
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
    required: true
    group: Line Items
    order: 31

  UnitPrice1:
    label: Item 1 — Unit Price
    type: currency
    required: true
    group: Line Items
    order: 32

  LineTotal1:
    label: Item 1 — Line Total
    type: currency
    required: true
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
    placeholder: e.g. 15

  TaxAmount:
    label: Tax Amount
    type: currency
    group: Totals
    order: 52

  Discount:
    label: Discount Amount
    type: currency
    group: Totals
    order: 53

  TotalDue:
    label: Total Due
    type: currency
    required: true
    group: Totals
    order: 54

  PaymentMethod:
    label: Payment Method
    type: text
    group: Payment
    order: 60
    placeholder: e.g. Bank Transfer / Cheque

  BankName:
    label: Bank Name
    type: text
    group: Payment
    order: 61

  IBAN:
    label: IBAN
    type: text
    group: Payment
    order: 62

  Notes:
    label: Notes
    type: textarea
    group: Notes
    order: 70

  PreparedBy:
    label: Prepared by Name
    type: text
    required: true
    group: Signatory
    order: 80

  PreparedByTitle:
    label: Preparer Title (English)
    type: text
    group: Signatory
    order: 81

  PreparedByTitleAr:
    label: Preparer Title (Arabic)
    type: text
    group: Signatory
    order: 82

  ApprovedBy:
    label: Authorised by Name
    type: text
    group: Signatory
    order: 83

  ApprovedByTitle:
    label: Authoriser Title (English)
    type: text
    group: Signatory
    order: 84

  ApprovedByTitleAr:
    label: Authoriser Title (Arabic)
    type: text
    group: Signatory
    order: 85

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
رقم السجل الضريبي / Tax Reg. No.: {{TaxRegistrationNumber}}

---

**Ref / المرجع:** {{InvoiceNumber}} &nbsp;|&nbsp; **Date / التاريخ:** {{Date}}

---

# فاتورة &nbsp;/&nbsp; Invoice

---

| البيان / Field | القيمة / Value |
|---|---|
| **رقم الفاتورة / Invoice No.** | {{InvoiceNumber}} |
| **تاريخ الاستحقاق / Due Date** | {{DueDate}} |
| **العملة / Currency** | {{Currency}} |

---

## من / From

**{{CompanyName}}**
{{CompanyAddress}}

## إلى / To

**{{ClientName}}**
{{ClientAddress}}
رقم السجل الضريبي / Tax Reg. No.: {{ClientTaxNumber}}

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
| **الإجمالي المستحق / Total Due** | **{{TotalDue}}** |

---

**طريقة الدفع / Payment Method:** {{PaymentMethod}}

**البيانات البنكية / Bank Details:** {{BankName}} &nbsp;|&nbsp; IBAN: {{IBAN}}

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

*تُعدّ هذه الفاتورة وثيقة رسمية معتمدة. / This invoice is an official and approved document.*
