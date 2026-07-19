---
document:
  name: Authorization Letter
  category: general
  version: 2.1

form:
  direction: ltr
  layout: grouped

fields:
  CompanyName:
    label: Company Name (English)
    type: text
    required: true
    group: Document
    order: 1
  CompanyNameAr:
    label: Company Name (Arabic)
    type: text
    required: true
    group: Document
    order: 2
  CompanyAddress:
    label: Company Address
    type: text
    group: Document
    order: 3
  ReferenceNumber:
    label: Reference Number
    type: text
    required: true
    group: Document
    order: 4
  Date:
    label: Issue Date
    type: date
    required: true
    group: Document
    order: 5
  AuthorizerName:
    label: Authorizer Name (English)
    type: text
    required: true
    group: Authorizer
    order: 10
  AuthorizerNameAr:
    label: Authorizer Name (Arabic)
    type: text
    group: Authorizer
    order: 11
  AuthorizerTitle:
    label: Authorizer Title (English)
    type: text
    group: Authorizer
    order: 12
  AuthorizerTitleAr:
    label: Authorizer Title (Arabic)
    type: text
    group: Authorizer
    order: 13
  Department:
    label: Department
    type: text
    group: Authorizer
    order: 14
  AuthorizedPersonName:
    label: Authorized Person Name (English)
    type: text
    required: true
    group: Authorized Person
    order: 20
  AuthorizedPersonNameAr:
    label: Authorized Person Name (Arabic)
    type: text
    group: Authorized Person
    order: 21
  AuthorizedPersonTitle:
    label: Authorized Person Title (English)
    type: text
    group: Authorized Person
    order: 22
  AuthorizedPersonTitleAr:
    label: Authorized Person Title (Arabic)
    type: text
    group: Authorized Person
    order: 23
  AuthorizedPersonID:
    label: Authorized Person ID Number
    type: text
    required: true
    group: Authorized Person
    order: 24
  AuthorizationPurpose:
    label: Authorization Purpose (English)
    type: textarea
    required: true
    group: Authorization
    order: 30
  AuthorizationPurposeAr:
    label: Authorization Purpose (Arabic)
    type: textarea
    group: Authorization
    order: 31
  AuthorizationScope:
    label: Scope of Authorization (English)
    type: textarea
    group: Authorization
    order: 32
  AuthorizationScopeAr:
    label: Scope of Authorization (Arabic)
    type: textarea
    group: Authorization
    order: 33
  ValidFrom:
    label: Valid From
    type: date
    required: true
    group: Validity
    order: 40
  ValidUntil:
    label: Valid Until
    type: date
    required: true
    group: Validity
    order: 41
  AdditionalConditions:
    label: Additional Conditions (English)
    type: textarea
    group: Validity
    order: 42
  AdditionalConditionsAr:
    label: Additional Conditions (Arabic)
    type: textarea
    group: Validity
    order: 43

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
{{CompanyAddress}}

---

**Ref / المرجع:** {{ReferenceNumber}} &nbsp;|&nbsp; **Date / التاريخ:** {{Date}}

**إلى من يهمه الأمر / To Whom It May Concern**

---

# خطاب تفويض &nbsp;/&nbsp; Letter of Authorization

---

## Arabic (تفويض):

أنا الموقّع أدناه، **{{AuthorizerNameAr}}**، **{{AuthorizerTitleAr}}** في **{{CompanyNameAr}}**، أُفوِّض بموجب هذا الخطاب:

| البيان | القيمة |
|---|---|
| **الاسم** | {{AuthorizedPersonNameAr}} |
| **رقم الهوية / الجواز** | {{AuthorizedPersonID}} |
| **المسمى / الصفة** | {{AuthorizedPersonTitleAr}} |

للتصرف نيابةً عن **{{CompanyNameAr}}** في:

**الغرض:** {{AuthorizationPurposeAr}}

**النطاق:** {{AuthorizationScopeAr}}

**الفترة:** من {{ValidFrom}} إلى {{ValidUntil}}

{{AdditionalConditionsAr}}

---

## English (Authorization):

I, the undersigned, **{{AuthorizerName}}**, **{{AuthorizerTitle}}** of **{{CompanyName}}**, hereby authorize:

| Field | Value |
|---|---|
| **Name** | {{AuthorizedPersonName}} |
| **ID / Passport No.** | {{AuthorizedPersonID}} |
| **Title / Role** | {{AuthorizedPersonTitle}} |

to act on behalf of **{{CompanyName}}** for:

**Purpose:** {{AuthorizationPurpose}}

**Scope:** {{AuthorizationScope}}

**Valid From:** {{ValidFrom}} &nbsp;|&nbsp; **Valid Until:** {{ValidUntil}}

{{AdditionalConditions}}

---

## Signatures / التواقيع

| المفوِّض / Authorizer | |
|---|---|
| {{AuthorizerNameAr}} / {{AuthorizerName}} | *(Official Stamp / الختم الرسمي)* |
| {{AuthorizerTitleAr}} / {{AuthorizerTitle}} | |
| {{Department}} — {{CompanyName}} | |
| Signature: ___________________________ | |
| Date: ___________________________ | |

---

*هذا التفويض ساري المفعول للفترة المحددة أعلاه فقط. / This authorization is valid only for the period specified above.*
