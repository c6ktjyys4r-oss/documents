# ROADMAP_NEXT.md
## Alba Docs — Permanent Implementation Roadmap

> **Never delete this file. Always update it after every completed phase.**
> Future agents: pick up from "Current Phase" and work downward.

---

## Overall Goal

Make the standalone Alba Docs application (`index.html`) feel as close as possible to Alba ERP's Documents module.

The only intentional difference: all fields are filled manually (no ERP auto-population).

Everything else — workflow, forms, navigation, document quality, preview, printing, UX — must match or exceed Alba.

---

## Current Implementation Status

| Capability | Status | Notes |
|---|---|---|
| Inter font | ✅ Done | Google Fonts CDN |
| SVG icons (Lucide inline) | ✅ Done | All emoji replaced |
| `aria-current` / `aria-hidden` | ✅ Done | Router manages nav state |
| `inert` focus trap (mobile sidebar) | ✅ Done | |
| `document.title` per route | ✅ Done | |
| Vanilla toast system | ✅ Done | success / error / info |
| Breadcrumbs | ✅ Done | Category, search, settings pages |
| Sidebar collapse (desktop) | ✅ Done | Persisted to localStorage |
| Autosave to localStorage | ✅ Done | 600 ms debounce, restore on return |
| Clear draft button + saved indicator | ✅ Done | |
| Print timing fix (win.onload) | ✅ Done | Replaced setTimeout(600) |
| My Documents view | ✅ Done | Draft / Published status, Export JSON |
| Save Draft / Publish buttons | ✅ Done | On fill form |

**Baseline score (COMPARISON_REPORT.md):** 60/100 → estimated ~76/100 after Phase 0 work.

---

## Remaining Gaps (before this roadmap)

- Layout spacing inconsistent — some sections feel cramped, others loose
- Fill form typography hierarchy weak
- No smooth transitions between states
- Loading states missing (template fetch)
- Empty states weak on several screens
- Preview page margins not A4-proportioned; scaling inconsistent
- Letterhead position in preview not pixel-matched to print
- No footer area in print shell
- Long-document page breaks need explicit CSS
- Arabic / RTL layout incomplete
- Print not verified at different zoom levels
- Template field inconsistency across categories
- Hover/focus states minimal
- No keyboard shortcut for print
- No scroll-to-top on navigation
- Code contains some duplication (field rendering, badge pattern)

---

## Phase Checklist

- [x] Phase 0 — Foundation (SVG icons, Inter, toast, autosave, My Docs, print fix)
- [ ] **Phase 1 — Professional Layout Polish** ← CURRENT
- [ ] Phase 2 — Document Experience
- [ ] Phase 3 — Preview Quality
- [ ] Phase 4 — Print Perfection
- [ ] Phase 5 — Template Consistency
- [ ] Phase 6 — Micro UX
- [ ] Phase 7 — Code Quality
- [ ] Phase 8 — Quality Assurance
- [ ] Final Phase — FINAL_IMPLEMENTATION_REPORT.md

---

## Current Phase

### Phase 1 — Professional Layout Polish

**Objective:** Make every screen feel enterprise-grade. No homemade feel.

**Why it matters:** Visual polish is the first impression. Inconsistent spacing/alignment immediately signals "not production".

**Files affected:** `index.html` (CSS + HTML only — no logic changes)

**What to improve:**
- Section vertical rhythm (consistent 24/32/48 px scale)
- Card sizing and padding uniformity
- Button sizing and weight consistency across all button variants
- Input padding and line-height (must feel same-family as Alba)
- Header height and logo alignment
- Sidebar link weight, spacing, active/hover contrast
- Typography scale (h1 → h2 → body → caption — clear step ratio)
- Fill form panel: field gaps, label weight, input height
- Preview column: label row, page wrapper padding
- My Documents: row padding, status badge sizing
- Responsive breakpoints: 768px sidebar-to-mobile transition
- Overlay/backdrop smoothness

**Testing checklist:**
- [ ] Home page cards look uniform at 1440px, 1280px, 1024px, 768px
- [ ] Sidebar links have clear active state at every viewport
- [ ] Fill screen form panel scrolls independently without layout jump
- [ ] Buttons in doc-actions row align at the same baseline
- [ ] Preview page wraps cleanly at narrow viewports

**Completion criteria:** Every screen passes a visual scan — consistent margins, no orphaned elements, enterprise-grade weight.

---

## Planned Phases

### Phase 2 — Document Experience

**Objective:** Reduce friction in the editing workflow.

**Why it matters:** Alba users navigate categories → template → editor → preview → print in a fluid click sequence. The standalone app should match that.

**Files affected:** `index.html`

**What to improve:**
- Loading skeleton/spinner while template markdown fetches
- Smooth scroll into preview after field change
- Empty state illustrations on My Documents (already has one — refine it)
- Error state if template file fails to fetch (404)
- Navigation: clicking category card highlights correct sidebar link
- Clicking "Back" from fill mode returns to correct category list, not Home
- After Publish, offer "Print now" inline instead of requiring manual re-click
- After Save Draft, show inline confirmation without full toast overlap

**Testing checklist:**
- [ ] Template fetch delay shows spinner (simulate slow network via DevTools)
- [ ] Fetch error shows friendly message, not blank screen
- [ ] Back button from fill mode returns to correct category
- [ ] After Publish, Print button is still accessible

---

### Phase 3 — Preview Quality

**Objective:** Make the live preview look like the printed document.

**Why it matters:** If the preview doesn't match the print, users are surprised. That destroys trust.

**What to improve:**
- A4 aspect ratio (1:√2 ≈ 1:1.414) for the preview page
- Correct margin simulation (20mm equiv in px at preview scale)
- Letterhead top alignment pixel-matched between preview and print
- Footer area (page number placeholder, date) in both preview and print
- Font size scaling: preview uses 11pt equiv at preview resolution
- Arabic text: `font-family` fallback for Arabic script, `direction:rtl` for RTL fields
- Mixed-language: LTR heading + RTL body should not reflow badly
- No layout jump when letterhead image loads
- Smooth transition when fields change (debounced, not instant repaint flash)

**Testing checklist:**
- [ ] Preview page is narrower than viewport, centered, with visible shadow
- [ ] Letterhead top-aligns in preview the same way it prints
- [ ] Arabic template renders RTL in both preview and print
- [ ] No flash/jump when rapidly typing in form fields

---

### Phase 4 — Print Perfection

**Objective:** Reliable printing across all major browsers and zoom levels.

**Why it matters:** Document generation is the core product. Print failure = product failure.

**What to improve:**
- `@page` rule: A4 margins, no header/footer from browser chrome (`margin: 0` then own margins)
- Table `page-break-inside: avoid` on every table
- Signature block: always keep on same page as last content row
- Letterhead image: `max-height` cap to prevent single-page overflow
- Long text fields: word-wrap, no overflow
- Test: Chrome (print to PDF), Edge, Safari
- Test: zoom 75%, 100%, 125%, 150%
- Test: documents with 2+ pages
- `print-color-adjust: exact` on header backgrounds

**Testing checklist:**
- [ ] Chrome: print to PDF produces clean A4 pages
- [ ] Long document (Meeting Minutes with 10+ agenda items) spans pages without clipping
- [ ] Table rows never split across pages
- [ ] Letterhead appears on page 1 only

---

### Phase 5 — Template Consistency

**Objective:** Every one of the 48 templates behaves identically in form, preview, and print.

**Why it matters:** Inconsistency breaks trust. If one template behaves differently, users cannot learn the app.

**What to audit per template:**
- Field order logical?
- Field types correct (date inputs for dates, textarea for body text)?
- Placeholder text helpful?
- Groups labeled correctly?
- Print output: correct heading, correct table borders?

**Testing checklist:**
- [ ] All 48 templates render without JS error
- [ ] All 48 templates print without missing fields
- [ ] All date fields use `type="date"` input
- [ ] All body/notes fields use textarea

---

### Phase 6 — Micro UX

**Objective:** Premium feel in every interaction.

**What to improve:**
- Focus rings: replace browser default with amber-colored ring consistent with design
- Hover transitions: 150ms ease on all interactive elements (already have `--transition` var — verify it's applied everywhere)
- Button press: subtle `transform: translateY(1px)` on `:active`
- Keyboard shortcut: `Ctrl+P` / `Cmd+P` on fill screen should call `printDocument()` instead of browser default print
- Sidebar link: smooth left-border color transition
- Preview: scroll-into-view when content overflows panel
- Toast: position aware of mobile viewport (bottom safe-area)
- Form: Tab order correct (label → input → next label)

**Testing checklist:**
- [ ] Focus ring visible in amber on every interactive element when tabbing
- [ ] `Ctrl+P` triggers document print (not browser print-page)
- [ ] All hover transitions feel smooth at 60fps

---

### Phase 7 — Code Quality

**Objective:** Improve maintainability without changing any behavior.

**What to refactor:**
- Extract `pushToGitHub()` → not applicable (no server-side code)
- Extract repeated `escapeRegex()` calls → already extracted
- Merge duplicate `livePreview` / `printDocument` body-substitution logic into single `substituteFields(body, keys)` helper
- Rename `getBody()` → `stripFrontMatterAndStyle()` for clarity
- Add JSDoc comments to: `parseFrontMatter`, `getFieldDefs`, `catIconSvg`, `DB`
- Remove `_templateCache` exposure — make it scoped to `loadTemplate` closure
- Merge `collectFields` + `saveDraft` (both iterate fieldDefs)

**Testing checklist:**
- [ ] All 48 templates still load correctly after refactor
- [ ] Print still works after field-substitution consolidation
- [ ] Autosave still fires correctly

---

### Phase 8 — Quality Assurance

**Objective:** Complete functional audit. Every button, every template, every flow.

**Test matrix:**
- Home page → category cards → category list → fill screen → print
- Autosave → refresh → return → fields restored
- Save Draft → My Documents → Open → fields restored
- Publish → My Documents → status badge = Published
- Delete document from My Documents
- Export JSON from My Documents
- Letterhead upload → appears in preview → appears in print
- Letterhead remove → preview shows placeholder
- Dark mode → every screen
- Mobile viewport (375px): sidebar open/close, fill form usable
- Search: finds templates, no-results state, clear search
- Sidebar collapse: desktop only, text hides, icons remain

**Completion criteria:** Zero functional defects found in the test matrix.

---

## Deferred Ideas (Post-Roadmap)

- Multi-device sync (requires backend — out of scope for static app)
- PDF generation via `jsPDF` (reduce dependency on browser print dialog)
- Template favorites
- Recently viewed templates
- Document version history
- Bulk export of multiple documents
- Company profile settings (address, phone, CR number auto-fill)
- Arabic letterhead support (right-side logo position)

---

## Technical Debt

- `parseYamlSubset()` is a hand-rolled YAML parser — fragile for complex frontmatter. Acceptable for current template complexity; replace if templates grow.
- `marked.min.js` loaded from CDN — should be versioned/pinned (`@15.0.0` etc.) to avoid surprise upgrades.
- `localStorage` usage not guarded for `QuotaExceededError` (large letterhead images can hit the 5MB limit on some browsers).
- No Content Security Policy header — static hosting should add one.

---

## Known Issues

- Safari print: `@page` margin with `0` base sometimes ignored; workaround needed (Phase 4)
- Very large letterhead images (>2MB) may cause slow preview render
- `inert` attribute not supported in Firefox < 112 — no polyfill present (acceptable for modern browsers)
- Sidebar collapse mode hides category counts and labels — tooltip on hover not yet implemented

---

## Next Recommended Task

→ **Phase 1: Professional Layout Polish** — begin now.
