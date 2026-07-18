---
template: Quotation
category: Finance
version: 2.1
---

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
