---
document:
  name: Purchase Order
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
    group: Buyer
    order: 1
  CompanyAddress:
    label: Company Address
    type: text
    group: Buyer
    order: 2
  CompanyPhone:
    label: Company Phone
    type: phone
    group: Buyer
    order: 3
  CompanyEmail:
    label: Company Email
    type: email
    group: Buyer
    order: 4
  PONumber:
    label: PO Number
    type: text
    required: true
    group: Order
    order: 10
  Date:
    label: Order Date
    type: date
    required: true
    group: Order
    order: 11
  DeliveryDate:
    label: Required Delivery Date
    type: date
    group: Order
    order: 12
  Currency:
    label: Currency
    type: text
    group: Order
    order: 13
    placeholder: SAR
  CostCentre:
    label: Cost Centre
    type: text
    group: Order
    order: 14
  SupplierName:
    label: Supplier Name
    type: text
    required: true
    group: Supplier
    order: 20
  SupplierAddress:
    label: Supplier Address
    type: text
    group: Supplier
    order: 21
  SupplierContact:
    label: Supplier Contact
    type: text
    group: Supplier
    order: 22
  SupplierTaxNumber:
    label: Supplier Tax Number
    type: text
    group: Supplier
    order: 23
  ItemDescription1:
    label: Item 1 — Description
    type: text
    required: true
    group: Line Items
    order: 30
  Unit1:
    label: Item 1 — Unit
    type: text
    group: Line Items
    order: 31
  Qty1:
    label: Item 1 — Quantity
    type: number
    group: Line Items
    order: 32
  ItemDescription2:
    label: Item 2 — Description
    type: text
    group: Line Items
    order: 33
  Qty2:
    label: Item 2 — Quantity
    type: number
    group: Line Items
    order: 34
  ItemDescription3:
    label: Item 3 — Description
    type: text
    group: Line Items
    order: 35
  Qty3:
    label: Item 3 — Quantity
    type: number
    group: Line Items
    order: 36
  Subtotal:
    label: Subtotal
    type: currency
    required: true
    group: Totals
    order: 40
  TaxRate:
    label: Tax Rate (%)
    type: number
    group: Totals
    order: 41
  TaxAmount:
    label: Tax Amount
    type: currency
    group: Totals
    order: 42
  TotalAmount:
    label: Total Amount
    type: currency
    required: true
    group: Totals
    order: 43
  PaymentTerms:
    label: Payment Terms
    type: text
    group: Terms
    order: 50
    placeholder: e.g. Net 30 / Upon Delivery
  DeliveryTerms:
    label: Delivery Terms
    type: text
    group: Terms
    order: 51
  Notes:
    label: Notes
    type: textarea
    group: Terms
    order: 52
  RequestedBy:
    label: Requested by Name
    type: text
    required: true
    group: Approval
    order: 60
  RequestedByTitle:
    label: Requester Title (English)
    type: text
    group: Approval
    order: 61
  RequestedByTitleAr:
    label: Requester Title (Arabic)
    type: text
    group: Approval
    order: 62
  FinanceApprover:
    label: Finance Approver Name
    type: text
    group: Approval
    order: 63
  FinanceTitle:
    label: Finance Title (English)
    type: text
    group: Approval
    order: 64
  FinanceTitleAr:
    label: Finance Title (Arabic)
    type: text
    group: Approval
    order: 65
  AuthorisedBy:
    label: Authorised by Name
    type: text
    required: true
    group: Approval
    order: 66
  AuthorisedTitle:
    label: Authoriser Title (English)
    type: text
    group: Approval
    order: 67
  AuthorisedTitleAr:
    label: Authoriser Title (Arabic)
    type: text
    group: Approval
    order: 68

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

**Ref / المرجع:** {{PONumber}} &nbsp;|&nbsp; **Date / التاريخ:** {{Date}}

---

# أمر شراء &nbsp;/&nbsp; Purchase Order

---

| البيان / Field | القيمة / Value |
|---|---|
| **رقم أمر الشراء / PO No.** | {{PONumber}} |
| **تاريخ التسليم المطلوب / Required Delivery Date** | {{DeliveryDate}} |
| **العملة / Currency** | {{Currency}} |
| **مركز التكلفة / Cost Centre** | {{CostCentre}} |

---

## المورد / Supplier

| البيان / Field | القيمة / Value |
|---|---|
| **اسم المورد / Supplier Name** | {{SupplierName}} |
| **العنوان / Address** | {{SupplierAddress}} |
| **جهة التواصل / Contact** | {{SupplierContact}} |
| **رقم السجل الضريبي / Tax Reg. No.** | {{SupplierTaxNumber}} |

---

## البنود / Line Items

| # | الوصف / Description | الكمية / Qty | الوحدة / Unit | سعر الوحدة / Unit Price | الإجمالي / Total |
|---|---|---|---|---|---|
| 1 | {{ItemDescription1}} | {{Qty1}} | {{Unit1}} | {{UnitPrice1}} | {{LineTotal1}} |
| 2 | {{ItemDescription2}} | {{Qty2}} | {{Unit2}} | {{UnitPrice2}} | {{LineTotal2}} |
| 3 | {{ItemDescription3}} | {{Qty3}} | {{Unit3}} | {{UnitPrice3}} | {{LineTotal3}} |

---

| | |
|---|---|
| **المجموع / Subtotal** | {{Subtotal}} |
| **الضريبة / Tax ({{TaxRate}}%)** | {{TaxAmount}} |
| **الإجمالي / Total** | **{{TotalAmount}}** |

---

**شروط التسليم / Delivery Terms:** {{DeliveryTerms}}

**شروط الدفع / Payment Terms:** {{PaymentTerms}}

**ملاحظات / Notes:** {{Notes}}

---

## Signatures / التواقيع

| طُلب بواسطة / Requested By | اعتمد بواسطة / Authorised By | المالية / Finance |
|---|---|---|
| {{RequestedBy}} | {{AuthorisedBy}} | {{FinanceApprover}} |
| {{RequestedByTitle}} / {{RequestedByTitleAr}} | {{AuthorisedTitle}} / {{AuthorisedTitleAr}} | {{FinanceTitle}} / {{FinanceTitleAr}} |
| *(Official Stamp / الختم الرسمي)* | | |
| Signature: ___________ | Signature: ___________ | Signature: ___________ |
| Date: ___________ | Date: ___________ | Date: ___________ |

---

*يُحتفظ بهذا الأمر في سجلات المشتريات الرسمية للمنشأة. / This order is retained in the company's official procurement records.*
