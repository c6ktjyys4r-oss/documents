---
template: Payment Voucher
category: Finance
version: 2.1
---

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
