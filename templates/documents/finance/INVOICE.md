---
template: Invoice
category: Finance
version: 2.0
---

{{Logo}}

**{{CompanyName}}**
{{CompanyAddress}}
{{CompanyPhone}} &nbsp;|&nbsp; {{CompanyEmail}}
{{TaxRegistrationNumber}}

---

# فاتورة &nbsp;/&nbsp; INVOICE

---

| البيان / Field | القيمة / Value |
|---|---|
| **رقم الفاتورة / Invoice No.** | {{InvoiceNumber}} |
| **التاريخ / Date** | {{Date}} |
| **تاريخ الاستحقاق / Due Date** | {{DueDate}} |
| **العملة / Currency** | {{Currency}} |

---

## من / From

**{{CompanyName}}**
{{CompanyAddress}}
رقم السجل الضريبي / Tax Reg. No.: {{TaxRegistrationNumber}}

## إلى / To

**{{ClientName}}**
{{ClientAddress}}
رقم السجل الضريبي / Tax Reg. No.: {{ClientTaxNumber}}

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
| **الإجمالي المستحق / Total Due** | **{{TotalDue}}** |

---

**طريقة الدفع / Payment Method:** {{PaymentMethod}}

**البيانات البنكية / Bank Details:**
{{BankName}} &nbsp;|&nbsp; IBAN: {{IBAN}}

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
