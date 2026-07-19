---
document:
  name: Receipt
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
    group: Issuer
    order: 1
  CompanyAddress:
    label: Company Address
    type: text
    group: Issuer
    order: 2
  CompanyPhone:
    label: Company Phone
    type: phone
    group: Issuer
    order: 3
  CompanyEmail:
    label: Company Email
    type: email
    group: Issuer
    order: 4
  ReceiptNumber:
    label: Receipt Number
    type: text
    required: true
    group: Receipt
    order: 10
  Date:
    label: Date
    type: date
    required: true
    group: Receipt
    order: 11
  PaymentReference:
    label: Payment Reference
    type: text
    group: Receipt
    order: 12
  Currency:
    label: Currency
    type: text
    group: Receipt
    order: 13
    placeholder: SAR
  PayerName:
    label: Received From (Payer Name)
    type: text
    required: true
    group: Payer
    order: 20
  PayerAddress:
    label: Payer Address
    type: text
    group: Payer
    order: 21
  PaymentDescription1:
    label: Payment Item 1 — Description
    type: text
    required: true
    group: Items
    order: 30
  Amount1:
    label: Payment Item 1 — Amount
    type: currency
    required: true
    group: Items
    order: 31
  PaymentDescription2:
    label: Payment Item 2 — Description
    type: text
    group: Items
    order: 32
  Amount2:
    label: Payment Item 2 — Amount
    type: currency
    group: Items
    order: 33
  TotalAmount:
    label: Total Amount Received
    type: currency
    required: true
    group: Totals
    order: 40
  PaymentMethod:
    label: Payment Method
    type: select
    required: true
    group: Totals
    order: 41
    options:
      - Bank Transfer
      - Cheque
      - Cash
      - Credit Card
      - Online Payment
  Notes:
    label: Notes
    type: textarea
    group: Notes
    order: 50
  ReceivedBy:
    label: Received by Name
    type: text
    required: true
    group: Signatory
    order: 60
  ReceivedByTitle:
    label: Title (English)
    type: text
    group: Signatory
    order: 61
  ReceivedByTitleAr:
    label: Title (Arabic)
    type: text
    group: Signatory
    order: 62

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

**Ref / المرجع:** {{ReceiptNumber}} &nbsp;|&nbsp; **Date / التاريخ:** {{Date}}

---

# إيصال استلام &nbsp;/&nbsp; Receipt

---

| البيان / Field | القيمة / Value |
|---|---|
| **رقم الإيصال / Receipt No.** | {{ReceiptNumber}} |
| **العملة / Currency** | {{Currency}} |

---

## استُلم من / Received From

**{{PayerName}}**
{{PayerAddress}}

---

## تفاصيل الدفع / Payment Details

| البيان / Description | المبلغ / Amount |
|---|---|
| {{PaymentDescription1}} | {{Amount1}} |
| {{PaymentDescription2}} | {{Amount2}} |
| **الإجمالي / Total** | **{{TotalAmount}}** |

---

**طريقة الدفع / Payment Method:** {{PaymentMethod}}

**رقم المرجع / Reference No.:** {{PaymentReference}}

**ملاحظات / Notes:** {{Notes}}

---

## Signatures / التواقيع

| استُلم بواسطة / Received By | |
|---|---|
| {{ReceivedBy}} | *(Official Stamp / الختم الرسمي)* |
| {{ReceivedByTitle}} / {{ReceivedByTitleAr}} | |
| Signature: ___________________________ | |
| Date: ___________________________ | |

---

*هذا الإيصال وثيقة رسمية دليل على استلام الدفع. / This receipt is an official document confirming payment received.*
