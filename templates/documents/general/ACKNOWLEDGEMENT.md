---
document:
  name: Acknowledgement
  category: general
  version: 2.1

form:
  direction: ltr
  layout: grouped

fields:
  CompanyName:
    label: Company Name
    type: text
    required: true
    group: Document
    order: 1
  ReferenceNumber:
    label: Reference Number
    type: text
    required: true
    group: Document
    order: 2
  Date:
    label: Date
    type: date
    required: true
    group: Document
    order: 3
  RecipientName:
    label: Recipient Name (English)
    type: text
    required: true
    group: Recipient
    order: 10
  RecipientNameAr:
    label: Recipient Name (Arabic)
    type: text
    group: Recipient
    order: 11
  JobTitle:
    label: Job Title (English)
    type: text
    group: Recipient
    order: 12
  JobTitleAr:
    label: Job Title (Arabic)
    type: text
    group: Recipient
    order: 13
  Department:
    label: Department
    type: text
    group: Recipient
    order: 14
  ItemDescription1:
    label: Item 1 — Description (English)
    type: text
    required: true
    group: Acknowledgement Items
    order: 20
  ItemDescription1Ar:
    label: Item 1 — Description (Arabic)
    type: text
    group: Acknowledgement Items
    order: 21
  ItemDate1:
    label: Item 1 — Date
    type: date
    group: Acknowledgement Items
    order: 22
  Notes1:
    label: Item 1 — Notes
    type: text
    group: Acknowledgement Items
    order: 23
  ItemDescription2:
    label: Item 2 — Description (English)
    type: text
    group: Acknowledgement Items
    order: 24
  ItemDescription2Ar:
    label: Item 2 — Description (Arabic)
    type: text
    group: Acknowledgement Items
    order: 25
  ItemDate2:
    label: Item 2 — Date
    type: date
    group: Acknowledgement Items
    order: 26
  Notes2:
    label: Item 2 — Notes
    type: text
    group: Acknowledgement Items
    order: 27
  IssuedBy:
    label: Issued by Name
    type: text
    required: true
    group: Signatory
    order: 30
  IssuedByTitle:
    label: Title (English)
    type: text
    group: Signatory
    order: 31
  IssuedByTitleAr:
    label: Title (Arabic)
    type: text
    group: Signatory
    order: 32

---

<style>
@page { size: A4; margin: 25mm 20mm 20mm 20mm; }
body { font-family: Arial, Helvetica, sans-serif; font-size: 11pt; color: #1a1a1a; max-width: 170mm; margin: 0 auto; line-height: 1.55; }
h1 { font-size: 14pt; font-weight: 700; text-align: center; border-bottom: 2.5px solid #1a1a2e; padding-bottom: 8px; margin: 24px 0 16px; }
h2 { font-size: 9pt; font-weight: 700; color: #1a1a2e; text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 1px solid #c0c6d6; padding-bottom: 3px; margin: 22px 0 10px; }
h3 { font-size: 10pt; font-weight: 700; color: #2a2a3e; margin: 14px 0 6px; }
table { width: 100%; border-collapse: collapse; margin: 6px 0 14px; font-size: 10pt; page-break-inside: avoid; }
th { background: #e8eaf2; color: #1a1a2e; font-weight: 700; padding: 7px 10px; text-align: left; font-size: 9pt; border: 1px solid #c0c6d6; }
td { border: 1px solid #d0d4dc; padding: 6px 10px; vertical-align: top; }
hr { border: none; border-top: 1px solid #d0d4dc; margin: 16px 0; }
blockquote { border-left: 3px solid #d4a000; padding: 8px 14px; background: #fffcf0; margin: 10px 0; font-size: 10pt; }
p { margin: 5px 0; }
em { color: #555; font-size: 9pt; }
@media print { body { max-width: none; } }
</style>


{{Logo}}

**{{CompanyName}}**

---

**Ref / المرجع:** {{ReferenceNumber}} &nbsp;|&nbsp; **Date / التاريخ:** {{Date}}

---

# إقرار استلام &nbsp;/&nbsp; Acknowledgement of Receipt

---

## معلومات المُستَلِم / Recipient Details

| البيان / Field | القيمة / Value |
|---|---|
| **الاسم / Name** | {{RecipientNameAr}} / {{RecipientName}} |
| **المسمى الوظيفي / Job Title** | {{JobTitleAr}} / {{JobTitle}} |
| **القسم / Department** | {{Department}} |

---

## ما تم استلامه / Item(s) Received

| # | البيان / Item Description | التاريخ / Date | الملاحظات / Notes |
|---|---|---|---|
| 1 | {{ItemDescription1Ar}} / {{ItemDescription1}} | {{ItemDate1}} | {{Notes1}} |
| 2 | {{ItemDescription2Ar}} / {{ItemDescription2}} | {{ItemDate2}} | {{Notes2}} |

---

## Arabic (إقرار):

أُقرّ أنا الموقّع أدناه بأنني استلمت ما هو مُدرج أعلاه بحالة سليمة وكاملة.

## English (Declaration):

I, the undersigned, hereby acknowledge receipt of the above-mentioned item(s) in good and complete condition.

---

## Signatures / التواقيع

| توقيع المُستَلِم / Recipient | توقيع الجهة المُسلِّمة / Issuing Party |
|---|---|
| {{RecipientName}} | {{IssuedBy}} |
| {{JobTitle}} | {{IssuedByTitle}} / {{IssuedByTitleAr}} |
| | *(Official Stamp / الختم الرسمي)* |
| Signature: ___________________________ | Signature: ___________________________ |
| Date: ___________________________ | Date: ___________________________ |

---

*يُحتفظ بهذا الإقرار في السجلات الرسمية للمنشأة. / This acknowledgement is retained in the company's official records.*
