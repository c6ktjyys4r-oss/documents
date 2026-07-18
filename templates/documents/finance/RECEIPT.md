---
template: Receipt
category: Finance
version: 2.1
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
