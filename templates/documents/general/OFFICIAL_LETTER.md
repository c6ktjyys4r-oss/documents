---
document:
  name: Official Letter
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

  CompanyAddress:
    label: Company Address
    type: text
    group: Document
    order: 2

  CompanyPhone:
    label: Company Phone
    type: phone
    group: Document
    order: 3

  CompanyEmail:
    label: Company Email
    type: email
    group: Document
    order: 4

  ReferenceNumber:
    label: Reference Number
    type: text
    required: true
    group: Document
    order: 5

  Date:
    label: Issue Date
    type: date
    required: true
    group: Document
    order: 6

  RecipientName:
    label: Recipient Name
    type: text
    required: true
    group: Recipient
    order: 10

  RecipientTitle:
    label: Recipient Title
    type: text
    group: Recipient
    order: 11

  RecipientOrganization:
    label: Recipient Organization
    type: text
    group: Recipient
    order: 12

  RecipientAddress:
    label: Recipient Address
    type: text
    group: Recipient
    order: 13

  RecipientSalutation:
    label: Salutation (English)
    type: text
    group: Recipient
    order: 14
    placeholder: e.g. Mr. / Ms. / Dr.

  RecipientSalutationAr:
    label: Salutation (Arabic)
    type: text
    group: Recipient
    order: 15
    placeholder: e.g. السيد / السيدة / الدكتور

  DeliveryMethod:
    label: Delivery Method
    type: text
    group: Document
    order: 7
    placeholder: e.g. Hand delivery / Email / Courier

  Subject:
    label: Subject
    type: text
    required: true
    group: Content
    order: 20

  OpeningParagraph:
    label: Opening Paragraph (English)
    type: textarea
    group: Content
    order: 21

  OpeningParagraphAr:
    label: Opening Paragraph (Arabic)
    type: textarea
    group: Content
    order: 22

  Body:
    label: Letter Body (English)
    type: textarea
    required: true
    group: Content
    order: 23

  BodyAr:
    label: Letter Body (Arabic)
    type: textarea
    required: true
    group: Content
    order: 24

  ClosingParagraph:
    label: Closing Paragraph (English)
    type: textarea
    group: Content
    order: 25

  ClosingParagraphAr:
    label: Closing Paragraph (Arabic)
    type: textarea
    group: Content
    order: 26

  PreparedBy:
    label: Authorised Signatory Name
    type: text
    required: true
    group: Signatory
    order: 30

  PreparedByTitle:
    label: Title (English)
    type: text
    group: Signatory
    order: 31

  PreparedByTitleAr:
    label: Title (Arabic)
    type: text
    group: Signatory
    order: 32

  Department:
    label: Department
    type: text
    group: Signatory
    order: 33

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
{{CompanyAddress}} &nbsp;|&nbsp; {{CompanyPhone}} &nbsp;|&nbsp; {{CompanyEmail}}

---

**Ref / المرجع:** {{ReferenceNumber}} &nbsp;|&nbsp; **Date / التاريخ:** {{Date}}

---

**إلى / To:**
{{RecipientName}}
{{RecipientTitle}}
{{RecipientOrganization}}
{{RecipientAddress}}

**عبر / Via:** {{DeliveryMethod}}

**الموضوع / Subject:** {{Subject}}

---

## Arabic (عربي):

حضرة {{RecipientSalutationAr}}،

{{OpeningParagraphAr}}

{{BodyAr}}

{{ClosingParagraphAr}}

مع خالص التقدير،

---

## English:

Dear {{RecipientSalutation}},

{{OpeningParagraph}}

{{Body}}

{{ClosingParagraph}}

Yours faithfully,

---

## Signatures / التواقيع

| المفوّض بالتوقيع والختم / Authorised Signatory & Stamp | |
|---|---|
| {{PreparedBy}} | *(Official Stamp / الختم الرسمي)* |
| {{PreparedByTitle}} / {{PreparedByTitleAr}} | |
| {{Department}} — {{CompanyName}} | |
| Signature: ___________________________ | |
| Date: ___________________________ | |

---

*يُحتفظ بنسخة من هذا الخطاب في السجلات الرسمية للمنشأة. / A copy of this letter is retained in the company's official records.*
