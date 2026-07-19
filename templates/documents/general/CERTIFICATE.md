---
document:
  name: Certificate
  category: general
  version: 2.1

form:
  direction: ltr
  layout: grouped

fields:
  CompanyName:
    label: Issuing Organization
    type: text
    required: true
    group: Document
    order: 1
  ReferenceNumber:
    label: Reference Number
    type: text
    group: Document
    order: 2
  Date:
    label: Issue Date
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
  CertificateSubject:
    label: Certificate Subject (English)
    type: text
    required: true
    group: Certificate
    order: 20
    placeholder: e.g. Completion of Leadership Program
  CertificateSubjectAr:
    label: Certificate Subject (Arabic)
    type: text
    group: Certificate
    order: 21
  IssuanceReason:
    label: Reason / Details (English)
    type: textarea
    group: Certificate
    order: 22
  IssuanceReasonAr:
    label: Reason / Details (Arabic)
    type: textarea
    group: Certificate
    order: 23
  AuthorisedBy:
    label: Authorised by Name
    type: text
    required: true
    group: Signatory
    order: 30
  AuthorisedTitle:
    label: Title (English)
    type: text
    group: Signatory
    order: 31
  AuthorisedTitleAr:
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

# شهادة &nbsp;/&nbsp; Certificate

---

## Arabic (يُمنح هذا الإشهاد لـ):

يُشهد بأن **{{RecipientNameAr}}** قد استوفى/استوفت جميع المتطلبات المحددة، ويُمنح/تُمنح بموجب هذه الشهادة اعترافًا بـ **{{CertificateSubjectAr}}**.

صُدِرت هذه الشهادة بناءً على **{{IssuanceReasonAr}}**.

---

## English (This is to certify that):

This is to certify that **{{RecipientName}}** has fulfilled all specified requirements and is hereby awarded this certificate in recognition of **{{CertificateSubject}}**.

This certificate is issued on the basis of **{{IssuanceReason}}**.

---

## Signatures / التواقيع

| المفوّض بالتوقيع والختم / Authorised Signatory & Stamp | |
|---|---|
| {{AuthorisedBy}} | *(Official Stamp / الختم الرسمي)* |
| {{AuthorisedTitle}} / {{AuthorisedTitleAr}} | |
| {{CompanyName}} | |
| Signature: ___________________________ | |
| Date: ___________________________ | |

---

*صدرت هذه الشهادة بتاريخ {{Date}} وتُحفظ في السجلات الرسمية للمنشأة. / This certificate was issued on {{Date}} and is retained in the company's official records.*
