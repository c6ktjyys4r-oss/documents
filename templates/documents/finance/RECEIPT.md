---
template: Receipt
category: Finance
version: 2.0
---

{{Logo}}

**{{CompanyName}}**
{{CompanyAddress}}
{{CompanyPhone}} &nbsp;|&nbsp; {{CompanyEmail}}

---

# إيصال استلام &nbsp;/&nbsp; RECEIPT

---

| البيان / Field | القيمة / Value |
|---|---|
| **رقم الإيصال / Receipt No.** | {{ReceiptNumber}} |
| **التاريخ / Date** | {{Date}} |
| **العملة / Currency** | {{Currency}} |

---

## استُلم من / Received From

**{{PayerName}}**
{{PayerAddress}}

---

## تفاصيل الدفع / Payment Details

| البيان / Description | المبلغ / Amount |
|---|---|
| {{PaymentDescription}} | {{Amount}} |
| {{PaymentDescription2}} | {{Amount2}} |
| **الإجمالي / Total** | **{{TotalAmount}}** |

**طريقة الدفع / Payment Method:** {{PaymentMethod}}

**رقم المرجع / Reference No.:** {{PaymentReference}}

---

**ملاحظات / Notes:** {{Notes}}

---

## Signatures / التواقيع

| استُلم بواسطة / Received By | الختم الرسمي / Official Stamp |
|---|---|
| {{ReceivedBy}} | *(Stamp here / ختم هنا)* |
| {{ReceivedByTitle}} / {{ReceivedByTitleAr}} | |
| Signature / التوقيع: ___________________________ | |
| Date / التاريخ: ___________________________ | |
