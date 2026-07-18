---
template: Payment Voucher
category: Finance
version: 2.0
---

{{Logo}}

**{{CompanyName}}**

---

# سند صرف &nbsp;/&nbsp; PAYMENT VOUCHER

---

| البيان / Field | القيمة / Value |
|---|---|
| **رقم السند / Voucher No.** | {{VoucherNumber}} |
| **التاريخ / Date** | {{Date}} |
| **مركز التكلفة / Cost Centre** | {{CostCentre}} |
| **العملة / Currency** | {{Currency}} |

---

## يُصرف إلى / Pay To

| البيان / Field | القيمة / Value |
|---|---|
| **الاسم / Name** | {{PayeeName}} |
| **رقم الهوية / ID No.** | {{PayeeID}} |
| **الجهة / Organization** | {{PayeeOrganization}} |
| **رقم الآيبان / IBAN** | {{IBAN}} |
| **اسم البنك / Bank Name** | {{BankNameAr}} / {{BankName}} |

---

## تفاصيل المبلغ / Payment Details

| البيان / Description | المبلغ / Amount (SAR) |
|---|---|
| {{PaymentDescription}} | {{Amount}} |
| {{PaymentDescription2}} | {{Amount2}} |
| **الإجمالي / Total** | **{{TotalAmount}}** |

**المبلغ كتابةً / Amount in Words (AR):** {{AmountInWordsAr}}

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
| Signature: ___________ | Signature: ___________ | Signature: ___________ |
| Date: ___________ | Date: ___________ | Date: ___________ |

| الختم الرسمي / Official Stamp |
|---|
| *(Stamp here / ختم هنا)* |
