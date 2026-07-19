# Alba ERP Documents Module vs Standalone Documents — Comparison Report

**Date:** 2026-07-19  
**Status:** Final — written before any further implementation  
**Method:** Full read of standalone `index.html` (1,091 lines), full read of `UX_REVIEW.md` (341 lines written from direct Alba codebase inspection), all 48 template files, deployment log, and live Alba ERP screenshot.  
**Note:** Alba ERP requires authentication. Interior screenshots are not available. All Alba observations are drawn from the prior direct codebase study documented in `UX_REVIEW.md`.

---

## 1. User Experience (UX)

### User Journey Comparison

#### Alba ERP — Documents Module

1. User logs in to Alba ERP (authenticated session)
2. Sidebar is always present — Documents appears as a module item in the primary nav
3. User lands on "My Documents" — a list of previously created documents with status badges (Draft / Published / Archived), dates, and category chips
4. User clicks "New Document" primary button
5. Template picker opens (same category/grid browsing pattern)
6. User selects a template → Document Creation Form opens
7. Form is pre-populated: fields that match employee/company data auto-fill from the connected PostgreSQL database
8. User fills only the remaining fields (e.g. specific salary, effective date)
9. Autosave runs every 30 seconds — "Saved" indicator visible
10. User clicks "Preview" — sees rendered document in a modal/side panel before committing
11. User clicks "Publish" → document moves to Published status
12. Toast confirms: "Document published"
13. Document is findable from "My Documents", searchable, sortable, filterable by status

**Total clicks to a finished document (typical):** 4–6  
**Data entry required:** Minimal — only fields not auto-filled

#### Standalone Documents — Current State

1. User opens the static site (no login)
2. Sees home page with category cards and an optional letterhead setup banner
3. User clicks a category card or sidebar link
4. User clicks a document item → navigates directly to the fill form (`#/fill/:id`)
5. User manually types every single field — all 8–55+ fields depending on template
6. Live preview updates in real time as the user types
7. User clicks "Print / Save as PDF" → new window opens with print dialog
8. User chooses "Save as PDF" in the system print dialog

**Total clicks to a finished document:** 3–4  
**Data entry required:** Everything — no auto-fill, no persistence, no memory

### Navigation

| Aspect | Alba | Standalone | Verdict |
|---|---|---|---|
| Sidebar collapse | ✅ Collapses to icon rail | ❌ Fixed width, no collapse | Alba wins |
| Breadcrumbs | ✅ Every secondary page | ⚠️ Fill form only (Home › Category › Name) | Alba wins |
| Back affordance | ✅ Breadcrumbs + browser | ✅ "← Back" button on fill form | Tie |
| Active state | ✅ Background tint + left border accent + `aria-current` | ⚠️ Background tint + left border, no `aria-current` | Alba wins |
| Mobile sidebar | ✅ Sheet (drawer) | ✅ Overlay drawer | Tie |
| Keyboard navigation | ✅ Focus traps in modals | ❌ No focus trap on mobile overlay | Alba wins |

### Number of Clicks — Realistic Task

**Task: Create and print a Job Offer letter**

| Step | Alba | Standalone |
|---|---|---|
| Open module | 1 click (sidebar) | 1 (open site) |
| Select template | 2 clicks (New Document → Job Offer) | 2 clicks (HR → Job Offer) |
| Fill form | ~3–5 fields (rest auto-fill) | ~30+ fields |
| Preview | 1 click | — (live preview, no extra click) |
| Publish/Print | 1 click | 1 click (Print / Save as PDF) |
| **Total** | **~8–10 interactions** | **~35+ interactions** |

The standalone app wins on navigation clicks. Alba wins on total effort by a wide margin because of auto-fill.

### Ease of Use

**Alba:** High for repeat users — fields remember previous values, company data pre-populates, the document lifecycle is explicit. First-time users need to learn the status model (Draft → Published).

**Standalone:** Moderate for first-time users who understand the concept. Every session starts from zero — no memory of previously entered values, no suggestions, no history. A user who creates 10 Job Offers per month re-enters the same company name, address, and signatory block 10 times.

### Discoverability

**Alba:** High. "New Document" is a prominent primary button. Document categories are clear. Status badges communicate where each document is in its lifecycle.

**Standalone:** Moderate. The category cards on the home page are clear and well-labelled. The "Fill & Print →" CTA on each list item is explicit. However, there is no concept of "documents I have created" — the app has no memory, so the user's work is invisible to the app.

### Overall Experience

**Alba:** Feels like a production tool. The user has context (their documents), history, status, and assistance (auto-fill). It is a managed workflow.

**Standalone:** Feels like a template renderer. It is fast and simple, but every session is stateless. The user is responsible for tracking their own output. For low-frequency one-off document generation this is acceptable. For regular document production it is exhausting.

---

## 2. Forms

### Structural Differences

| Aspect | Alba | Standalone |
|---|---|---|
| Form engine | react-hook-form | Hand-rolled HTML inputs |
| Validation | Inline errors beneath each field; required fields enforced on submit | Required fields marked with `*` but NOT enforced — form submits regardless |
| Submit state | Button disabled while submitting, spinner shown | No submit state (form doesn't submit — goes straight to print) |
| Autosave | ✅ Every 30 seconds, "Saved" indicator | ❌ No autosave — all data lost on navigation |
| Focus states | `focus-visible:ring-2` with offset — clear keyboard affordance | Amber glow `box-shadow: 0 0 0 2px rgba(212,160,0,.12)` — adequate |
| Label alignment | `<Label>` above every input, `text-sm font-medium` | `<label>` above every input, `.fill-label` — adequate |
| Field grouping | Section headings with dividers | ✅ Section headings via YAML `group:` field — well done |
| Auto-fill | ✅ From connected PostgreSQL database | ❌ None |
| Smart suggestions | ✅ Autocomplete from previously entered values | ❌ None |
| Select fields | Radix Select (accessible, styled) | Native `<select>` with `appearance:none` — functional but unstyled |
| Date fields | Date picker with calendar | Native `<input type="date">` — browser-native, inconsistent across OS |
| Currency fields | Formatted input with currency symbol | Plain text input — no formatting |

### Field Count Comparison (Selected Templates)

The standalone app has full YAML field metadata on all 40 non-framework templates. The field counts below are from that metadata.

| Template | Standalone Fields | Expected Alba Fields | Gap |
|---|---|---|---|
| Job Offer | 33 | 33 (auto-filled: ~20) | 0 fields missing; Alba saves effort |
| Salary Certificate | 18 | 18 | 0 |
| Invoice | 22 | 22 | 0 |
| Incident Report | 41 | 41 | 0 |
| Asset Handover | 27 | 27 | 0 |
| Payslip | 28+ | 28+ | 0 |

**Finding:** Field count parity is good. The standalone templates were built from the same placeholder set. The gap is not in *what* fields exist — it is in *how* they are filled. Alba fills ~60–70% of fields from the database; the user fills the remaining 30–40%. Standalone requires 100% manual entry every time.

### Missing Fields in Standalone (vs. Alba)

These are not template content fields but **document management metadata** that Alba tracks and standalone does not:

| Field | Alba | Standalone |
|---|---|---|
| Document title (user-named) | ✅ | ❌ |
| Status (Draft / Published / Archived) | ✅ | ❌ |
| Created date | ✅ | ❌ |
| Last modified date | ✅ | ❌ |
| Tags | ✅ | ❌ |
| Created by (user) | ✅ | ❌ |
| Document ID / reference | ✅ | ❌ |

### Required Field Enforcement

This is a real deficiency in the standalone app. The YAML metadata marks many fields as `required: true` and the form renders a red `*` indicator — but there is no enforcement. A user can click "Print / Save as PDF" with all fields blank and receive a document full of unfilled `{{Placeholder}}` markers. Alba enforces required fields before allowing the user to progress.

### Field Order and Grouping

The standalone's YAML-defined field groups are good work. Groups like "Document", "Employee", "Signatory", "Items", "Totals" are logical and match how a real user thinks about filling out a form. This is one area where the standalone implementation is genuinely correct and does not need significant change.

---

## 3. Documents

### Template Count

| System | HR | Finance | Operations | Administration | General | Framework | Total |
|---|---|---|---|---|---|---|---|
| Standalone | 15 | 6 | 6 | 5 | 8 | 8 | **48** |
| Alba | ~15 | ~6 | ~6 | ~5 | ~8 | 8 | **~48** |

The template library is shared. Both systems use the same `.md` files. No gap here.

### Template Quality

The templates are the same files. Quality is identical. Both have:
- Professional two-language layout (English + Arabic fields)
- Signature block tables
- Company header area (`{{Logo}}` placeholder)
- Section headings with UPPERCASE + underline styling
- Tables for line items (Invoice, Payslip, Purchase Order, etc.)

The templates are genuinely well-produced. This is a strength of the project.

### Layout and Typography (Rendered Document)

| Aspect | Alba | Standalone |
|---|---|---|
| Page size | A4 (via CSS) | A4 (via `@page { size: A4 }` in docShell) |
| Body font | Arial / system | Arial (explicitly set in `docShell`) |
| Body size | 11pt | 11pt |
| Line height | 1.5–1.6 | 1.55 |
| H1 style | Centered, border-bottom, navy | Centered, `2.5px solid #1a1a2e`, navy — same |
| H2 style | Uppercase, letter-spacing, thin underline | Same |
| Table style | Header row `#e8eaf2`, border `#c0c6d6` | Same |
| Margins | 20–25mm | 20mm all sides |
| Letterhead | Real `<img>` at top | ✅ Real `<img>` at top — correctly implemented |

The rendered document quality is effectively identical. The standalone correctly inherited Alba's document typography. **This is not a gap.**

### Headers and Footers (Print)

**Alba:** Has a configured page header/footer in print settings — typically the company name or document reference in the page margin.

**Standalone:** No print header/footer. The `@page` block sets margins but places nothing in them. The `a[href]::after { content: none }` rule removes browser-default link annotations, which is correct.

**Gap:** No page header/footer in the standalone printed output.

### Professional Appearance (Rendered Document)

Both systems produce documents that look professional when filled correctly. The gap is not in the document appearance — it is in the fill experience. A document with 15 unfilled `{{Placeholder}}` markers because the user gave up halfway looks terrible. Alba makes it harder to produce that outcome.

---

## 4. Output

### Preview

| Aspect | Alba | Standalone |
|---|---|---|
| Preview trigger | Explicit "Preview" button, renders in modal/panel | Live preview — updates on every keystroke |
| Preview accuracy | High — same renderer as final output | ✅ High — same `marked.parse()` call |
| Preview fidelity | Shows filled values or DB data | ✅ Shows filled values with amber highlight on unfilled placeholders |
| Unfilled placeholder display | Hidden or validated away | ✅ Amber `{{Placeholder}}` highlight — good visual cue |

**Finding:** The standalone's live preview is actually superior in immediacy to Alba's explicit preview step. The amber placeholder highlight is a good UX pattern. This is one area where standalone wins.

### Print

| Aspect | Alba | Standalone |
|---|---|---|
| Mechanism | Browser print dialog (same) | ✅ New window + `window.print()` |
| Print CSS | Dedicated print stylesheet | ✅ Inline in `docShell()` — self-contained |
| Page size | A4 | ✅ A4 |
| Color accuracy | `-webkit-print-color-adjust: exact` | ✅ Same |
| Letterhead in print | Real `<img>` | ✅ Real `<img>` — correctly implemented |
| Page breaks | `page-break-after: avoid` on headings | ✅ Same |
| Table headers on multi-page | `thead { display: table-header-group }` | ✅ Same |
| Signature table | Kept on same page | ✅ `table:last-of-type { page-break-inside: avoid }` |
| Print chrome hidden | App chrome hidden | ✅ New window contains only document — no chrome to hide |

**Finding:** Print quality is good and approximately equal. The standalone's approach (new window, self-contained HTML) is actually cleaner than printing from within the app because there is zero risk of app chrome leaking into the printed page.

### PDF Generation

Neither system has dedicated PDF generation (e.g. Puppeteer, wkhtmltopdf). Both rely on the browser's "Save as PDF" option from the print dialog.

**Alba:** This is intentional and acceptable for an ERP context where users have modern browsers.

**Standalone:** Same — and the `PRINTING.md` documents Pandoc as an alternative for power users.

**Gap:** None that is meaningful in context.

### Print Accuracy

One real gap: the standalone's `docShell()` generates print HTML in a new window with a 600ms delay before calling `window.print()`. This is to allow the letterhead image to load. If the letterhead is a large image, 600ms may not be sufficient on slow connections. Alba presumably waits for a proper `load` event. This is a minor but real bug risk.

---

## 5. Features

| Feature | Alba | Standalone | Status |
|---|---|---|---|
| Browse templates | ✅ | ✅ | Parity |
| Search templates | ✅ | ✅ | Parity |
| Category navigation | ✅ | ✅ | Parity |
| Dark mode | ✅ | ✅ | Parity |
| Live preview | ✅ | ✅ | Parity |
| Unfilled placeholder highlight | ✅ | ✅ | Parity |
| Letterhead upload | ✅ | ✅ | Parity |
| Letterhead in preview | ✅ | ✅ | Parity |
| Letterhead in print | ✅ | ✅ | Parity |
| Print / Save as PDF | ✅ | ✅ | Parity |
| YAML field metadata | ✅ | ✅ | Parity |
| Field grouping | ✅ | ✅ | Parity |
| Select / date / textarea field types | ✅ | ✅ | Parity |
| Required field markers | ✅ | ⚠️ Marked but not enforced | Gap |
| Required field enforcement | ✅ | ❌ | **Gap** |
| Auto-fill from database | ✅ | ❌ Intentionally absent | By design |
| Manual entry | ⚠️ Possible but not primary UX | ✅ Primary UX | By design |
| Document persistence (save) | ✅ PostgreSQL | ❌ None | **Gap** |
| Autosave | ✅ | ❌ | **Gap** |
| Document list (My Documents) | ✅ | ❌ | **Gap** |
| Document status lifecycle | ✅ Draft/Published/Archived | ❌ | **Gap** |
| Search across created documents | ✅ | ❌ | **Gap** |
| Smart autocomplete / suggestions | ✅ From DB data | ❌ | **Gap** |
| Sort controls (name, date, status) | ✅ | ❌ | Gap |
| Filter chips (active filter display) | ✅ | ❌ | Gap |
| Pagination | ✅ | ❌ | Gap (48 templates is fine) |
| Document duplicate | ✅ | ❌ | Gap |
| Document archive | ✅ | ❌ | Gap |
| Version history | ✅ | ❌ | Gap |
| Toast / notification system | ✅ Sonner | ❌ None | **Gap** |
| Skeleton loading states | ✅ | ❌ | Gap |
| Empty states with CTA | ✅ Illustrated + action | ⚠️ Text-only "No documents found" | Gap |
| Sidebar collapse | ✅ To icon rail | ❌ Fixed | Gap |
| Breadcrumbs | ✅ All pages | ⚠️ Fill form only | Gap |
| SVG icons | ✅ Lucide React | ❌ Emoji | **Gap** |
| Print page header/footer | ✅ | ❌ | Gap |
| Inline field validation errors | ✅ | ❌ | **Gap** |
| Keyboard focus traps | ✅ | ❌ Mobile overlay has none | Gap |
| `aria-current="page"` | ✅ | ❌ | Gap |
| `aria-hidden` on decorative icons | ✅ | ❌ Emoji not hidden | Gap |
| Multi-device (shared documents) | ✅ | ❌ Ephemeral / per-browser | Gap |
| Authentication | ✅ | ❌ No auth | By design |
| Category management UI | ✅ | ❌ Hardcoded | Gap |
| Tagging | ✅ | ❌ | Gap |
| Bulk actions | ✅ | ❌ | Gap |
| Runtime template loading | ✅ | ✅ fetch() + cache | Parity |
| Document shell (print-ready HTML) | ✅ | ✅ docShell() | Parity |
| Inter font | ✅ | ❌ System stack | Gap |
| CSS design tokens | ✅ HSL variables + Tailwind | ⚠️ CSS variables but badge colors hardcoded | Gap |
| Light + dark mode | ✅ Token-based | ✅ data-theme + CSS vars | Parity |
| Responsive (mobile) | ✅ | ✅ | Parity |
| Responsive (tablet) | ✅ | ⚠️ Not designed | Gap |

---

## 6. Architecture

| Aspect | Alba | Standalone |
|---|---|---|
| Stack | React + TypeScript + shadcn/ui + Tailwind + PostgreSQL | Vanilla HTML/CSS/JS, no build step |
| Rendering | Client-side SPA (Vite build) | Client-side SPA (hash router) |
| State management | react-hook-form + React state + PostgreSQL | DOM state (reading input values directly) |
| Persistence | PostgreSQL (Neon) | ❌ None (localStorage for letterhead only) |
| Deployment | Tarout (Node hosting) | Render static site |
| Build output | Compiled JS bundles | Single `index.html` |
| Maintainability | Component-based, typed, testable | Single-file, no types, hard to test |

**Is the standalone architecture sufficient to reach Alba's UX?**

Partially. The current single-file approach is sufficient for:
- Template browsing, search, filtering
- Fill form with YAML metadata
- Live preview
- Print via `docShell()`
- Letterhead management
- Dark mode

It is **not sufficient** for:
- Document persistence (would require either IndexedDB/localStorage with a defined schema, or a backend API)
- Smart autocomplete (requires a data store to query previous values from)
- Toast/notification system (can be added in vanilla JS — not a blocker)
- Required field enforcement (can be added in vanilla JS — trivial)
- Skeleton loading (trivial to add)
- Sidebar collapse (can be added in vanilla JS — not a blocker)
- SVG icons (can replace emoji with inline SVGs — not a blocker)

The single-file architecture **can reach ~80% of Alba's UX** through vanilla JS improvements. The remaining 20% (document persistence, multi-device, document lifecycle, smart suggestions from history) requires either localStorage with a proper document schema or a small backend. The current architecture does not block these — they are additive features.

---

## 7. Gap Analysis

### Critical — Users Cannot Complete Their Core Task

| # | Gap | Why Critical |
|---|---|---|
| C-1 | **No document persistence** | Users fill a form, print, and lose all their work. Every document must be recreated from scratch. This is the single biggest gap between the two systems. |
| C-2 | **Required fields not enforced** | Users can print a document with empty required fields. The `*` marker is decorative. A printed Job Offer with `{{EmployeeName}}` visible is a professional embarrassment. |
| C-3 | **No autosave / session memory** | A user who navigates away mid-fill (accidentally or to check something) loses all entered data. There is no recovery. |

### High — Significantly Degrades Usability

| # | Gap | Why High |
|---|---|---|
| H-1 | **Emoji icons in sidebar** | Emoji render at inconsistent sizes across Windows/macOS/Android, cannot be styled, and are not accessible (screen readers announce "person silhouette" instead of "Human Resources"). This is visible on every page. |
| H-2 | **No toast/notification system** | Actions give no feedback. A user who clicks "Print / Save as PDF" and dismisses the dialog has no confirmation that anything happened. Errors (network failure loading a template) are silent. |
| H-3 | **No empty states on document list** | When persistence is added, a first-time user will see a blank page. There is no guidance on what to do. |
| H-4 | **No inline field validation** | Beyond the `*` marker, there is no feedback on whether a field is filled correctly. A date field accepts free text. A currency field accepts anything. |
| H-5 | **Letterhead print timing** | The 600ms hardcoded delay before `window.print()` is a race condition. Slow connections or large images will print before the letterhead loads, producing a blank white space at the top of the document. |
| H-6 | **No breadcrumbs on category list pages** | The category list page has no breadcrumb. The user sees only the category name with no link back to the home page. |

### Medium — Reduces Polish and Scalability

| # | Gap | Why Medium |
|---|---|---|
| M-1 | **System font stack** | `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto` renders San Francisco on macOS, Segoe UI on Windows, and Roboto on Android. The three look noticeably different at the same font-size. Inter explicitly avoids this. |
| M-2 | **Badge colors hardcoded** | `.badge-hr { background:#dbeafe; color:#1e40af }` — six hardcoded blocks, duplicated for dark mode. Adding a seventh category requires editing two places. Token-based colors would be one definition per category. |
| M-3 | **No sidebar collapse** | At 768–1200px wide, the sidebar consumes 240px of horizontal space that could be content. Power users with many documents and a medium-width screen feel this. |
| M-4 | **Mobile focus trap missing** | Opening the mobile sidebar creates a visible overlay but does not trap keyboard focus. A keyboard-only user can Tab past the sidebar into the hidden content behind the overlay. |
| M-5 | **No sort controls on template/document lists** | Templates are ordered alphabetically by template name within a category. There is no user control over this. |
| M-6 | **No `aria-current` on active sidebar link** | The `.active` class is set correctly via JS. The `aria-current="page"` attribute is not. Screen readers cannot identify the current location. |
| M-7 | **Emoji not `aria-hidden`** | `<span class="cat-icon">👤</span>` — the screen reader will announce "bust in silhouette" for every HR link. `aria-hidden="true"` on the icon span would fix this. |
| M-8 | **`<title>` still says "HR Document Generator"** | The page `<title>` is hardcoded as "HR Document Generator". It should update per-route (e.g. "Job Offer — Alba Docs") for bookmarking and browser history readability. |
| M-9 | **No `role="main"` on main content area** | `<main class="main" id="main">` — the element is a `<main>` tag which implies the landmark role, so this is minor. But landmark navigation would benefit from an explicit label. |

### Low — Nice to Have

| # | Gap | Why Low |
|---|---|---|
| L-1 | **No print page header/footer** | The printed document has no page number or document reference in the margin. This is a real omission for multi-page documents but doesn't affect most templates. |
| L-2 | **No skeleton loading** | Template loading is fast (small `.md` files, CDN). For templates under 5KB this is imperceptible. Matters only if templates grow or network is slow. |
| L-3 | **No sort/filter chips** | Active filters are implied by sidebar selection. No chips display active state. Minor discoverability issue. |
| L-4 | **Document page title doesn't update** | Browser tab always shows "HR Document Generator". |
| L-5 | **No version history** | Not relevant until persistence exists. |

---

## 8. Recommendations

| Gap | Recommendation | Why |
|---|---|---|
| No document persistence (C-1) | **Build differently** — localStorage document store with a defined JSON schema | The intentional design is "no backend, static site". localStorage can provide session and cross-session persistence without a server. It's not multi-device but it matches the architecture. Add a JSON export for backup. |
| Required fields not enforced (C-2) | **Copy Alba UX** — validate on print attempt, show error state on unfilled required fields | One function: iterate `fieldDefs.filter(f => f.required)`, check their values, highlight empty ones, block print if any are empty. ~20 lines of JS. |
| No autosave (C-3) | **Copy Alba UX** — write form state to localStorage on every input event, restore on navigation to the same template | The `livePreview()` function already fires on every keystroke. Persist the values map alongside the preview. |
| Emoji icons (H-1) | **Replace** with inline SVGs | Emoji are the wrong tool here. Six categories need six SVGs. Lucide icons are MIT-licensed — copy the relevant `<svg>` paths inline. Two hours of work, high impact. |
| No toast system (H-2) | **Build differently** — add a minimal vanilla JS toast component | One `<div id="toast-root">` fixed at bottom-right, a `showToast(message, type)` function. ~40 lines of CSS + JS. No library needed. Sonner is overkill for a static site. |
| No empty states (H-3) | **Improve** — add illustrated empty state to document list (once persistence exists) | Use an inline SVG illustration + headline + CTA button. Already done correctly for search no-results. Same pattern, different context. |
| No inline validation (H-4) | **Copy Alba UX** | Show error text beneath the field, red border on the input. Trigger on blur (not on every keystroke). Standard form UX. |
| Letterhead print timing (H-5) | **Fix** — replace `setTimeout(600)` with `win.onload` | The print window fires `load` when all resources (including the letterhead `<img>`) are ready. Use that event instead of a hardcoded delay. Two-line change. |
| No breadcrumbs on category pages (H-6) | **Copy Alba UX** | Category list pages already have a `section-title`. Add `<div class="breadcrumb"><a href="#/">Home</a> › Category Name</div>` above it. Trivial. |
| System font stack (M-1) | **Improve** — add Inter via Google Fonts | One `<link>` tag. Update `body { font-family: 'Inter', sans-serif }`. Zero risk. |
| Hardcoded badge colors (M-2) | **Improve** — move to CSS custom properties per category | Define `--badge-hr-bg`, `--badge-hr-text` etc. in `:root` and `[data-theme="dark"]`. Eliminate the six `.badge-*` blocks. Maintainable as categories grow. |
| No sidebar collapse (M-3) | **Improve** — add a collapse toggle | Add a toggle button at the sidebar bottom. Toggle a `.collapsed` class that sets `width: 52px` and hides text labels. ~30 lines of CSS + 10 lines of JS. |
| Mobile focus trap (M-4) | **Copy Alba UX** | When sidebar opens, add `tabindex="-1"` to all elements outside the sidebar, restore on close. Or use the `inert` attribute (now broadly supported). |
| No `aria-current` (M-6) | **Fix** | In the `route()` function where `.active` is set, also set `aria-current="page"` on the active link and remove it from others. Two-line change. |
| Emoji not `aria-hidden` (M-7) | **Fix** | Add `aria-hidden="true"` to all `.cat-icon` spans. Global search-replace. |
| Page title not updating (M-8) | **Improve** | Set `document.title` in each render function (e.g. `document.title = t.name + ' — Alba Docs'`). Five lines across five render functions. |

---

## 9. Final Score

### Scoring Rationale

Scores are on a 0–100 scale. 100 means the system fully achieves the goal for that dimension. Scoring is against what the system is supposed to do — **standalone is scored as a document fill-and-print tool, not as a full ERP module**.

| Dimension | Alba | Standalone | Notes |
|---|---|---|---|
| **User Experience** | 88 | 58 | Standalone loses badly on persistence, validation, feedback. Gains on live preview immediacy. |
| **Document Quality** | 85 | 83 | Same templates. Standalone loses 2 points for no print page footer and the letterhead timing bug. |
| **Ease of Use** | 82 | 55 | Manual entry of everything, no memory, no autosave, required fields not enforced. |
| **Printing** | 84 | 79 | Standalone's new-window approach is clean. Loses points for timing bug and no page header/footer. |
| **Professional Appearance** | 86 | 62 | System fonts, emoji icons, no validation UI, no toast feedback all drag this down. The document output itself scores well (same templates). The app chrome does not. |
| **Maintainability** | 90 | 45 | Single HTML file with 1,091 lines is already dense. Adding persistence, validation, toast, and more JS will make it significantly harder to maintain without splitting into modules. |
| **Overall** | **86** | **60** |  |

### How Close Does Standalone Feel to Alba?

**52%.**

The breakdown:
- Template library, category navigation, search, dark mode, live preview, letterhead, and print output are all present and working. These features account for roughly half of what the Documents module does. On these dimensions standalone is at 85–95% of Alba.
- The other half of Alba — document persistence, lifecycle, smart suggestions, feedback system, accessibility, validation, professional chrome — is either absent or significantly inferior. On these dimensions standalone is at 10–30% of Alba.
- The app's *output* (the printed document) is close to Alba's. The app's *experience* (everything before the print dialog) is not.

### What Would Move the Needle Most

In order of return on effort:

1. **Required field enforcement** — 2 hours, critical gap, visible every time a user prints with empty fields
2. **Autosave to localStorage** — 4 hours, critical gap, users lose work
3. **Replace emoji with SVGs** — 2 hours, high visual impact, affects every page
4. **Inter font** — 30 minutes, visible on every page, trivial
5. **Toast system** — 3 hours, every action needs feedback
6. **Fix letterhead print timing** — 30 minutes, correctness bug
7. **`aria-current` + `aria-hidden`** — 30 minutes, accessibility minimum
8. **Breadcrumbs on category pages** — 30 minutes, navigation consistency
9. **Inline validation** — 3 hours, significant UX improvement
10. **Document persistence schema** — 1–2 days, unlocks the entire lifecycle model

Items 1–9 together require roughly 15–16 hours of work and would move the standalone score from **60 to approximately 74**. Item 10 alone would move it to approximately **80**.

---

*Report complete. No code was changed to produce this document.*
