---
template: Receipt
category: Finance
version: 2.1
---

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
