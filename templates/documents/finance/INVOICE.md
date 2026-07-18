---
template: Invoice
category: Finance
version: 2.1
---

{{Logo}}

**{{CompanyName}}**
{{CompanyAddress}} &nbsp;|&nbsp; {{CompanyPhone}} &nbsp;|&nbsp; {{CompanyEmail}}
رقم السجل الضريبي / Tax Reg. No.: {{TaxRegistrationNumber}}

---

**Ref / المرجع:** {{InvoiceNumber}} &nbsp;|&nbsp; **Date / التاريخ:** {{Date}}

---

# فاتورة &nbsp;/&nbsp; Invoice

---

| البيان / Field | القيمة / Value |
|---|---|
| **رقم الفاتورة / Invoice No.** | {{InvoiceNumber}} |
| **تاريخ الاستحقاق / Due Date** | {{DueDate}} |
| **العملة / Currency** | {{Currency}} |

---

## من / From

**{{CompanyName}}**
{{CompanyAddress}}

## إلى / To

**{{ClientName}}**
{{ClientAddress}}
رقم السجل الضريبي / Tax Reg. No.: {{ClientTaxNumber}}

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
| **الإجمالي المستحق / Total Due** | **{{TotalDue}}** |

---

**طريقة الدفع / Payment Method:** {{PaymentMethod}}

**البيانات البنكية / Bank Details:** {{BankName}} &nbsp;|&nbsp; IBAN: {{IBAN}}

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

*تُعدّ هذه الفاتورة وثيقة رسمية معتمدة. / This invoice is an official and approved document.*
