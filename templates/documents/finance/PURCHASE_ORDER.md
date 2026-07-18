---
template: Purchase Order
category: Finance
version: 2.1
---

{{Logo}}

**{{CompanyName}}**
{{CompanyAddress}} &nbsp;|&nbsp; {{CompanyPhone}} &nbsp;|&nbsp; {{CompanyEmail}}

---

**Ref / المرجع:** {{PONumber}} &nbsp;|&nbsp; **Date / التاريخ:** {{Date}}

---

# أمر شراء &nbsp;/&nbsp; Purchase Order

---

| البيان / Field | القيمة / Value |
|---|---|
| **رقم أمر الشراء / PO No.** | {{PONumber}} |
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
| 1 | {{ItemDescription1}} | {{Qty1}} | {{Unit1}} | {{UnitPrice1}} | {{LineTotal1}} |
| 2 | {{ItemDescription2}} | {{Qty2}} | {{Unit2}} | {{UnitPrice2}} | {{LineTotal2}} |
| 3 | {{ItemDescription3}} | {{Qty3}} | {{Unit3}} | {{UnitPrice3}} | {{LineTotal3}} |

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
| *(Official Stamp / الختم الرسمي)* | | |
| Signature: ___________ | Signature: ___________ | Signature: ___________ |
| Date: ___________ | Date: ___________ | Date: ___________ |

---

*يُحتفظ بهذا الأمر في سجلات المشتريات الرسمية للمنشأة. / This order is retained in the company's official procurement records.*
