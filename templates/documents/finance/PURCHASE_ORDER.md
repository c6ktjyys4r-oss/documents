---
template: Purchase Order
category: Finance
version: 2.0
---

{{Logo}}

**{{CompanyName}}**
{{CompanyAddress}}
{{CompanyPhone}} &nbsp;|&nbsp; {{CompanyEmail}}

---

# أمر شراء &nbsp;/&nbsp; PURCHASE ORDER

---

| البيان / Field | القيمة / Value |
|---|---|
| **رقم أمر الشراء / PO No.** | {{PONumber}} |
| **التاريخ / Date** | {{Date}} |
| **تاريخ التسليم المطلوب / Required Delivery Date** | {{DeliveryDate}} |
| **العملة / Currency** | {{Currency}} |
| **مركز التكلفة / Cost Centre** | {{CostCentre}} |

---

## المورد / Supplier

| البيان / Field | القيمة / Value |
|---|---|
| **اسم المورد / Supplier Name** | {{SupplierName}} |
| **العنوان / Address** | {{SupplierAddress}} |
| **جهة التواصل / Contact** | {{SupplierContact}} |
| **رقم السجل الضريبي / Tax Reg. No.** | {{SupplierTaxNumber}} |

---

## البنود / Line Items

| # | الوصف / Description | الكمية / Qty | الوحدة / Unit | سعر الوحدة / Unit Price | الإجمالي / Total |
|---|---|---|---|---|---|
| 1 | {{ItemDescription}} | {{Qty}} | {{Unit}} | {{UnitPrice}} | {{LineTotal}} |
| 2 | {{ItemDescription2}} | {{Qty2}} | {{Unit2}} | {{UnitPrice2}} | {{LineTotal2}} |
| 3 | | | | | |

---

| | |
|---|---|
| **المجموع / Subtotal** | {{Subtotal}} |
| **الضريبة / Tax ({{TaxRate}}%)** | {{TaxAmount}} |
| **الإجمالي / Total** | **{{TotalAmount}}** |

---

**شروط التسليم / Delivery Terms:** {{DeliveryTerms}}

**شروط الدفع / Payment Terms:** {{PaymentTerms}}

**ملاحظات / Notes:** {{Notes}}

---

## Signatures / التواقيع

| طُلب بواسطة / Requested By | اعتمد بواسطة / Authorised By | المالية / Finance |
|---|---|---|
| {{RequestedBy}} | {{AuthorisedBy}} | {{FinanceApprover}} |
| {{RequestedByTitle}} / {{RequestedByTitleAr}} | {{AuthorisedTitle}} / {{AuthorisedTitleAr}} | {{FinanceTitle}} / {{FinanceTitleAr}} |
| Signature: ___________ | Signature: ___________ | Signature: ___________ |
| Date: ___________ | Date: ___________ | Date: ___________ |

| الختم الرسمي / Official Stamp |
|---|
| *(Stamp here / ختم هنا)* |
