---
document:
  name: Meeting Minutes
  category: operations
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
    group: Document
    order: 2

  Date:
    label: Meeting Date
    type: date
    required: true
    group: Meeting
    order: 10

  MeetingTitle:
    label: Meeting Title / Subject
    type: text
    required: true
    group: Meeting
    order: 11

  StartTime:
    label: Start Time
    type: text
    group: Meeting
    order: 12
    placeholder: e.g. 10:00 AM

  EndTime:
    label: End Time
    type: text
    group: Meeting
    order: 13

  Location:
    label: Location / Platform
    type: text
    group: Meeting
    order: 14
    placeholder: e.g. Board Room / Microsoft Teams

  Chairperson:
    label: Chairperson Name
    type: text
    required: true
    group: Meeting
    order: 15

  PreparedBy:
    label: Minutes Recorded by Name
    type: text
    required: true
    group: Meeting
    order: 16

  AttendeeName1:
    label: Attendee 1 — Name
    type: text
    group: Attendees
    order: 20

  AttendeeTitle1:
    label: Attendee 1 — Title
    type: text
    group: Attendees
    order: 21

  AttendeeDept1:
    label: Attendee 1 — Department
    type: text
    group: Attendees
    order: 22

  AttendeeName2:
    label: Attendee 2 — Name
    type: text
    group: Attendees
    order: 23

  AttendeeTitle2:
    label: Attendee 2 — Title
    type: text
    group: Attendees
    order: 24

  AttendeeDept2:
    label: Attendee 2 — Department
    type: text
    group: Attendees
    order: 25

  AttendeeName3:
    label: Attendee 3 — Name
    type: text
    group: Attendees
    order: 26

  AttendeeTitle3:
    label: Attendee 3 — Title
    type: text
    group: Attendees
    order: 27

  AttendeeDept3:
    label: Attendee 3 — Department
    type: text
    group: Attendees
    order: 28

  AgendaItem1:
    label: Agenda Item 1
    type: text
    required: true
    group: Agenda
    order: 30

  Presenter1:
    label: Item 1 — Presenter
    type: text
    group: Agenda
    order: 31

  AgendaItem2:
    label: Agenda Item 2
    type: text
    group: Agenda
    order: 32

  Presenter2:
    label: Item 2 — Presenter
    type: text
    group: Agenda
    order: 33

  Discussion1:
    label: Item 1 — Discussion Summary
    type: textarea
    required: true
    group: Decisions
    order: 40

  Decision1:
    label: Item 1 — Decision
    type: textarea
    group: Decisions
    order: 41

  Action1:
    label: Item 1 — Action Required
    type: text
    group: Decisions
    order: 42

  Owner1:
    label: Item 1 — Owner
    type: text
    group: Decisions
    order: 43

  DueDate1:
    label: Item 1 — Due Date
    type: date
    group: Decisions
    order: 44

  Discussion2:
    label: Item 2 — Discussion Summary
    type: textarea
    group: Decisions
    order: 45

  Decision2:
    label: Item 2 — Decision
    type: textarea
    group: Decisions
    order: 46

  Action2:
    label: Item 2 — Action Required
    type: text
    group: Decisions
    order: 47

  Owner2:
    label: Item 2 — Owner
    type: text
    group: Decisions
    order: 48

  DueDate2:
    label: Item 2 — Due Date
    type: date
    group: Decisions
    order: 49

  NextMeetingDate:
    label: Next Meeting Date
    type: date
    group: Next Meeting
    order: 50

  NextMeetingTime:
    label: Next Meeting Time
    type: text
    group: Next Meeting
    order: 51

  NextMeetingLocation:
    label: Next Meeting Location
    type: text
    group: Next Meeting
    order: 52

  PreparedByTitle:
    label: Minutes Recorder Title (English)
    type: text
    group: Signatory
    order: 60

  PreparedByTitleAr:
    label: Minutes Recorder Title (Arabic)
    type: text
    group: Signatory
    order: 61

  ChairpersonTitle:
    label: Chairperson Title (English)
    type: text
    group: Signatory
    order: 62

  ChairpersonTitleAr:
    label: Chairperson Title (Arabic)
    type: text
    group: Signatory
    order: 63

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

# محضر اجتماع &nbsp;/&nbsp; Meeting Minutes

---

| البيان / Field | القيمة / Value |
|---|---|
| **عنوان الاجتماع / Meeting Title** | {{MeetingTitle}} |
| **التاريخ / Date** | {{Date}} |
| **الوقت / Time** | {{StartTime}} — {{EndTime}} |
| **الموقع / Location** | {{Location}} |
| **رئيس الاجتماع / Chairperson** | {{Chairperson}} |
| **محرر المحضر / Minutes Recorded By** | {{PreparedBy}} |

---

## الحاضرون / Attendees

| الاسم / Name | المسمى / Title | القسم / Department |
|---|---|---|
| {{AttendeeName1}} | {{AttendeeTitle1}} | {{AttendeeDept1}} |
| {{AttendeeName2}} | {{AttendeeTitle2}} | {{AttendeeDept2}} |
| {{AttendeeName3}} | {{AttendeeTitle3}} | {{AttendeeDept3}} |

---

## جدول الأعمال / Agenda

| # | البند / Item | المقدِّم / Presenter |
|---|---|---|
| 1 | {{AgendaItem1}} | {{Presenter1}} |
| 2 | {{AgendaItem2}} | {{Presenter2}} |

---

## مناقشات وقرارات / Discussion & Decisions

### البند 1 &nbsp;/&nbsp; Item 1 — {{AgendaItem1}}

**المناقشة / Discussion:** {{Discussion1}}

**القرار / Decision:** {{Decision1}}

**الإجراء / Action:** {{Action1}} &nbsp;|&nbsp; المسؤول / Owner: {{Owner1}} &nbsp;|&nbsp; الموعد / Due: {{DueDate1}}

---

### البند 2 &nbsp;/&nbsp; Item 2 — {{AgendaItem2}}

**المناقشة / Discussion:** {{Discussion2}}

**القرار / Decision:** {{Decision2}}

**الإجراء / Action:** {{Action2}} &nbsp;|&nbsp; المسؤول / Owner: {{Owner2}} &nbsp;|&nbsp; الموعد / Due: {{DueDate2}}

---

## ملخص الإجراءات / Action Items Summary

| # | الإجراء / Action | المسؤول / Owner | الموعد / Due Date | الحالة / Status |
|---|---|---|---|---|
| 1 | {{Action1}} | {{Owner1}} | {{DueDate1}} | مفتوح / Open |
| 2 | {{Action2}} | {{Owner2}} | {{DueDate2}} | مفتوح / Open |

---

**الاجتماع القادم / Next Meeting:** {{NextMeetingDate}} &nbsp;|&nbsp; {{NextMeetingTime}} &nbsp;|&nbsp; {{NextMeetingLocation}}

---

## Signatures / التواقيع

| محرر المحضر / Minutes Prepared By | رئيس الاجتماع / Chairperson |
|---|---|
| {{PreparedBy}} | {{Chairperson}} |
| {{PreparedByTitle}} / {{PreparedByTitleAr}} | {{ChairpersonTitle}} / {{ChairpersonTitleAr}} |
| Signature: ___________________________ | Signature: ___________________________ |
| Date: ___________________________ | Date: ___________________________ |

---

*يُحتفظ بهذا المحضر في السجلات الرسمية للمنشأة. / These minutes are retained in the company's official records.*
