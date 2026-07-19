---
document:
  name: Visitor Pass
  category: administration
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
  PassNumber:
    label: Pass Number
    type: text
    required: true
    group: Document
    order: 2
  Date:
    label: Date of Visit
    type: date
    required: true
    group: Document
    order: 3
  ValidForDate:
    label: Valid For Date
    type: date
    required: true
    group: Document
    order: 4
  VisitorName:
    label: Visitor Name (English)
    type: text
    required: true
    group: Visitor
    order: 10
  VisitorNameAr:
    label: Visitor Name (Arabic)
    type: text
    group: Visitor
    order: 11
  VisitorOrganization:
    label: Visitor's Organization
    type: text
    group: Visitor
    order: 12
  VisitorNationality:
    label: Visitor Nationality
    type: text
    group: Visitor
    order: 13
  VisitorID:
    label: Visitor ID / Passport Number
    type: text
    group: Visitor
    order: 14
  VisitorPhone:
    label: Visitor Phone
    type: phone
    group: Visitor
    order: 15
  HostName:
    label: Host Name (English)
    type: text
    required: true
    group: Visit
    order: 20
  HostNameAr:
    label: Host Name (Arabic)
    type: text
    group: Visit
    order: 21
  HostDepartment:
    label: Host Department
    type: text
    required: true
    group: Visit
    order: 22
  VisitPurpose:
    label: Purpose of Visit (English)
    type: text
    required: true
    group: Visit
    order: 23
  VisitPurposeAr:
    label: Purpose of Visit (Arabic)
    type: text
    group: Visit
    order: 24
  PermittedArea:
    label: Permitted Area(s)
    type: text
    group: Visit
    order: 25
  CheckInTime:
    label: Check-in Time
    type: text
    group: Visit
    order: 26
    placeholder: e.g. 09:30 AM
  CheckOutTime:
    label: Check-out Time
    type: text
    group: Visit
    order: 27
  PreparedBy:
    label: Issued by Name
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

**Ref / المرجع:** {{PassNumber}} &nbsp;|&nbsp; **Date / التاريخ:** {{Date}}

---

# تصريح زيارة &nbsp;/&nbsp; Visitor Pass

---

## بيانات الزائر / Visitor Information

| البيان / Field | القيمة / Value |
|---|---|
| **الاسم الكامل / Full Name** | {{VisitorNameAr}} / {{VisitorName}} |
| **رقم الهوية / الجواز / ID or Passport No.** | {{VisitorID}} |
| **الجهة / Organization** | {{VisitorOrganization}} |
| **رقم الجوال / Contact Number** | {{VisitorPhone}} |
| **الجنسية / Nationality** | {{VisitorNationality}} |

---

## تفاصيل الزيارة / Visit Details

| البيان / Field | القيمة / Value |
|---|---|
| **الغرض / Purpose of Visit** | {{VisitPurposeAr}} / {{VisitPurpose}} |
| **المضيف / Host Name** | {{HostNameAr}} / {{HostName}} |
| **القسم / Department** | {{HostDepartment}} |
| **المنطقة المسموح بها / Permitted Area** | {{PermittedArea}} |
| **وقت الدخول / Check-In Time** | {{CheckInTime}} |
| **وقت الخروج / Check-Out Time** | {{CheckOutTime}} |
| **صالح حتى / Valid Until** | {{ValidForDate}} |

---

*يجب أن يكون الزائر برفقة مضيفه في جميع الأوقات. يُعاد هذا التصريح عند المغادرة.*

*Visitor must be accompanied by their host at all times. This pass must be returned upon departure.*

---

## Signatures / التواقيع

| صادر بواسطة / Issued By | توقيع الزائر / Visitor Acknowledgement |
|---|---|
| {{PreparedBy}} | {{VisitorName}} |
| {{PreparedByTitle}} / {{PreparedByTitleAr}} | |
| *(Official Stamp / الختم الرسمي)* | |
| Signature: ___________________________ | Signature: ___________________________ |
| Date: ___________________________ | Date: ___________________________ |
