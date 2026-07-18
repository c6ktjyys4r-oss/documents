---
template: Quotation
category: Finance
version: 2.0
---

{{Logo}}

**{{CompanyName}}**
{{CompanyAddress}}
{{CompanyPhone}} &nbsp;|&nbsp; {{CompanyEmail}}

---

# عرض سعر &nbsp;/&nbsp; QUOTATION

---

| البيان / Field | القيمة / Value |
|---|---|
| **رقم عرض السعر / Quotation No.** | {{QuotationNumber}} |
| **التاريخ / Date** | {{Date}} |
| **صالح حتى / Valid Until** | {{ValidUntil}} |
| **العملة / Currency** | {{Currency}} |

---

## من / From

**{{CompanyName}}**
{{CompanyAddress}}

## إلى / To

**{{ClientName}}**
{{ClientAddress}}
للاهتمام: {{ClientContactPerson}}

---

## البنود / Line Items

| # | الوصف / Description | الكمية / Qty | سعر الوحدة / Unit Price | الإجمالي / Total |
|---|---|---|---|---|
| 1 | {{ItemDescription}} | {{Qty}} | {{UnitPrice}} | {{LineTotal}} |
| 2 | {{ItemDescription2}} | {{Qty2}} | {{UnitPrice2}} | {{LineTotal2}} |
| 3 | | | | |

---

| | |
|---|---|
| **المجموع / Subtotal** | {{Subtotal}} |
| **الضريبة / Tax ({{TaxRate}}%)** | {{TaxAmount}} |
| **الخصم / Discount** | {{Discount}} |
| **الإجمالي / Total** | **{{Total}}** |

---

**الشروط والأحكام / Terms and Conditions:** {{TermsAndConditions}}

**التسليم / Delivery Timeline:** {{DeliveryTimeline}}

**ملاحظات / Notes:** {{Notes}}

---

## Signatures / التواقيع

| أُعِدَّت بواسطة / Prepared By | اعتمد بواسطة / Approved By |
|---|---|
| {{PreparedBy}} | {{ApprovedBy}} |
| {{PreparedByTitle}} / {{PreparedByTitleAr}} | {{ApprovedByTitle}} / {{ApprovedByTitleAr}} |
| Signature / التوقيع: ___________________________ | Signature / التوقيع: ___________________________ |
| Date / التاريخ: ___________________________ | Date / التاريخ: ___________________________ |

| الختم الرسمي / Official Stamp |
|---|
| *(Stamp here / ختم هنا)* |
