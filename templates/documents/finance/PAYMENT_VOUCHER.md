---
document:
  name: Payment Voucher
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
    group: Document
    order: 1
  VoucherNumber:
    label: Voucher Number
    type: text
    required: true
    group: Document
    order: 2
  Date:
    label: Date
    type: date
    required: true
    group: Document
    order: 3
  Currency:
    label: Currency
    type: text
    group: Document
    order: 4
    placeholder: SAR
  CostCentre:
    label: Cost Centre
    type: text
    group: Document
    order: 5
  PayeeName:
    label: Payee Name
    type: text
    required: true
    group: Payee
    order: 10
  PayeeOrganization:
    label: Payee Organization
    type: text
    group: Payee
    order: 11
  PayeeID:
    label: Payee ID / CR Number
    type: text
    group: Payee
    order: 12
  PaymentMethod:
    label: Payment Method
    type: select
    required: true
    group: Payment
    order: 20
    options:
      - Bank Transfer
      - Cheque
      - Cash
      - Online
  BankName:
    label: Bank Name (English)
    type: text
    group: Payment
    order: 21
  BankNameAr:
    label: Bank Name (Arabic)
    type: text
    group: Payment
    order: 22
  IBAN:
    label: IBAN
    type: text
    group: Payment
    order: 23
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
    label: Total Amount
    type: currency
    required: true
    group: Totals
    order: 40
  AmountInWords:
    label: Amount in Words (English)
    type: text
    required: true
    group: Totals
    order: 41
    placeholder: e.g. Ten Thousand Saudi Riyals
  AmountInWordsAr:
    label: Amount in Words (Arabic)
    type: text
    group: Totals
    order: 42
  Purpose:
    label: Purpose (English)
    type: text
    required: true
    group: Notes
    order: 50
  PurposeAr:
    label: Purpose (Arabic)
    type: text
    group: Notes
    order: 51
  Notes:
    label: Notes
    type: textarea
    group: Notes
    order: 52
  PreparedBy:
    label: Prepared by Name
    type: text
    required: true
    group: Signatory
    order: 60
  PreparedByTitle:
    label: Title (English)
    type: text
    group: Signatory
    order: 61
  PreparedByTitleAr:
    label: Title (Arabic)
    type: text
    group: Signatory
    order: 62
  AuthorisedBy:
    label: Authorised by Name
    type: text
    required: true
    group: Signatory
    order: 63
  AuthorisedTitle:
    label: Authoriser Title (English)
    type: text
    group: Signatory
    order: 64
  AuthorisedTitleAr:
    label: Authoriser Title (Arabic)
    type: text
    group: Signatory
    order: 65
  ReceivedBy:
    label: Received by Name
    type: text
    group: Signatory
    order: 66

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

---

**Ref / المرجع:** {{VoucherNumber}} &nbsp;|&nbsp; **Date / التاريخ:** {{Date}}

---

# سند صرف &nbsp;/&nbsp; Payment Voucher

---

| البيان / Field | القيمة / Value |
|---|---|
| **رقم السند / Voucher No.** | {{VoucherNumber}} |
| **مركز التكلفة / Cost Centre** | {{CostCentre}} |
| **العملة / Currency** | {{Currency}} |

---

## يُصرف إلى / Pay To

| البيان / Field | القيمة / Value |
|---|---|
| **الاسم / Name** | {{PayeeName}} |
| **رقم الهوية / ID No.** | {{PayeeID}} |
| **الجهة / Organization** | {{PayeeOrganization}} |
| **اسم البنك / Bank Name** | {{BankNameAr}} / {{BankName}} |
| **رقم الآيبان / IBAN** | {{IBAN}} |

---

## تفاصيل المبلغ / Payment Details

| البيان / Description | المبلغ / Amount (SAR) |
|---|---|
| {{PaymentDescription1}} | {{Amount1}} |
| {{PaymentDescription2}} | {{Amount2}} |
| **الإجمالي / Total** | **{{TotalAmount}}** |

**المبلغ كتابةً (عربي):** {{AmountInWordsAr}}

**Amount in Words (EN):** {{AmountInWords}}

**طريقة الدفع / Payment Method:** {{PaymentMethod}}

**الغرض / Purpose:** {{PurposeAr}} / {{Purpose}}

**ملاحظات / Notes:** {{Notes}}

---

## Signatures / التواقيع

| أُعِدَّت بواسطة / Prepared By | اعتمد بواسطة / Authorised By | استُلم بواسطة / Received By |
|---|---|---|
| {{PreparedBy}} | {{AuthorisedBy}} | {{ReceivedBy}} |
| {{PreparedByTitle}} / {{PreparedByTitleAr}} | {{AuthorisedTitle}} / {{AuthorisedTitleAr}} | |
| *(Official Stamp / الختم الرسمي)* | | |
| Signature: ___________ | Signature: ___________ | Signature: ___________ |
| Date: ___________ | Date: ___________ | Date: ___________ |

---

*يُحتفظ بهذا السند في السجلات المالية الرسمية للمنشأة. / This voucher is retained in the company's official financial records.*
