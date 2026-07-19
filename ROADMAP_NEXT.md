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

| Capability | Status | Commit |
|---|---|---|
| Inter font (Google Fonts) | ✅ Done | 086e70e |
| SVG icons (Lucide inline) | ✅ Done | 086e70e |
| `aria-current` / `aria-hidden` | ✅ Done | 086e70e |
| `inert` focus trap (mobile sidebar) | ✅ Done | 086e70e |
| `document.title` per route | ✅ Done | 086e70e |
| Vanilla toast system | ✅ Done | 086e70e |
| Breadcrumbs | ✅ Done | 086e70e |
| Sidebar collapse (desktop) | ✅ Done | 086e70e |
| Autosave to localStorage | ✅ Done | 086e70e |
| Print timing fix (win.onload) | ✅ Done | 086e70e |
| My Documents view | ✅ Done | 086e70e |
| Save Draft / Publish buttons | ✅ Done | 086e70e |
| **Phase 1 — Layout Polish** | ✅ Done | a50ce53 |
| **Phase 2 — Document Experience** | ✅ Done | a50ce53 |
| **Phase 3 — Preview Quality** | ✅ Done | a50ce53 |
| **Phase 4 — Print Perfection** | ✅ Done | a50ce53 |
| **Phase 5 — Template Consistency** | ✅ Done | a50ce53 |
| **Phase 6 — Micro UX** | ✅ Done | a50ce53 |
| **Phase 7 — Code Quality** | ✅ Done | a50ce53 |
| **Phase 8 — QA** | ✅ Done | a50ce53 |
| FINAL_IMPLEMENTATION_REPORT.md | ✅ Done | (this push) |

---

## Phase Checklist

- [x] Phase 0 — Foundation (SVG icons, Inter, toast, autosave, My Docs, print fix)
- [x] Phase 1 — Professional Layout Polish
- [x] Phase 2 — Document Experience
- [x] Phase 3 — Preview Quality
- [x] Phase 4 — Print Perfection
- [x] Phase 5 — Template Consistency
- [x] Phase 6 — Micro UX
- [x] Phase 7 — Code Quality
- [x] Phase 8 — Quality Assurance
- [x] Final Phase — FINAL_IMPLEMENTATION_REPORT.md

**All phases complete. Roadmap closed.**

---

## Current Phase

**None — all phases complete.** See FINAL_IMPLEMENTATION_REPORT.md.

---

## Completed Phases

### Phase 0 — Foundation
Commit `086e70e`. Replaced all emoji icons with inline Lucide SVGs. Added Inter font via Google Fonts. Implemented vanilla JS toast system. Added autosave (600 ms debounce), draft restore, My Documents view, Save Draft / Publish buttons, sidebar collapse, breadcrumbs, win.onload print timing fix, aria-current, aria-hidden, inert focus trap.

### Phase 1 — Professional Layout Polish
Commit `a50ce53`. Complete CSS design token overhaul. Consistent type scale. Card padding 22px. Template item padding 13px 18px. Standardized button system with :active press. Fill form sticky header. Preview wrapper A4 gray. Main padding 32px 40px desktop.

### Phase 2 — Document Experience
Commit `a50ce53`. Loading spinner while template fetches. Friendly error state on fetch failure. Fill screen router highlights correct sidebar category. Letterhead form note adapts to upload state.

### Phase 3 — Preview Quality
Commit `a50ce53`. doc-preview A4-proportioned (max-width 660px). Letterhead max-height 80px preview / 38mm print. Placeholder highlight softened. Preview wrapper min-height 400px.

### Phase 4 — Print Perfection
Commit `a50ce53`. @page A4 portrait with correct margins. thead repeats on every page. tr page-break-inside: avoid. h1-h4 page-break-after: avoid. word-wrap / overflow-wrap on all text. Letterhead max-height 38mm in print shell.

### Phase 5 — Template Consistency
Commit `a50ce53`. DATE_RE heuristic → date inputs for date keys. NUMBER_RE heuristic → number inputs for amount/salary/total. snake_case support in toLabel(). Heuristics applied even when YAML front-matter partially present.

### Phase 6 — Micro UX
Commit `a50ce53`. :focus-visible amber ring everywhere. Select custom chevron via background-image. .btn:active translateY(1px). Ctrl/Cmd+P keyboard shortcut for document print. CTA arrow opacity transition on list items. Sidebar collapse tooltips.

### Phase 7 — Code Quality
Commit `a50ce53`. substituteFields() helper eliminates duplication between livePreview and printDocument. collectFields() centralizes DOM field reading. escapeHtml() applied to all dynamic innerHTML. 'use strict'. JSDoc on key functions. DB.exportJson() try-catch. uploadLetterhead() file size guard.

### Phase 8 — Quality Assurance
Commit `a50ce53`. Fill mode highlights correct sidebar category. Keyboard navigation on template list items (tabindex, Enter/Space). Stale editing_doc_id guard. Delete toast includes document name. marked pinned to @15.0.4. livePreview wrapped in try-catch.

---

## Deferred Ideas (Post-Roadmap)

- Multi-device sync (requires backend — out of scope for static app)
- PDF generation via jsPDF (reduce dependency on browser print dialog)
- Template favorites / recently viewed
- Document version history
- Bulk export of multiple documents as a ZIP
- Company profile settings (address, phone, CR number) for auto-fill hints
- Arabic letterhead support (right-side logo position)
- Template search inside fill mode (jump to field by name)
- Print preview in-page (iframe) instead of new window

---

## Technical Debt

- `parseYamlSubset()` is hand-rolled — fragile for deeply nested YAML. Acceptable for current templates; replace if templates grow.
- `marked` loaded from CDN; pinned to `@15.0.4` but version should be reviewed periodically.
- `localStorage` usage not fully guarded for `QuotaExceededError` — only the letterhead upload currently checks size. Large autosave data (many templates) could silently fail.
- No Content Security Policy header — static hosting should add one.
- `inert` attribute not supported in Firefox < 112 — no polyfill. Acceptable for modern browsers.

---

## Known Issues (resolved vs. outstanding)

| Issue | Status |
|---|---|
| Print timing `setTimeout(600)` | ✅ Fixed — `win.onload` |
| Emoji icons | ✅ Fixed — Lucide SVGs |
| No loading state on template fetch | ✅ Fixed — spinner |
| No error state on fetch failure | ✅ Fixed — error card |
| Browser default focus ring | ✅ Fixed — amber `:focus-visible` |
| No keyboard nav on template list | ✅ Fixed — tabindex + keydown |
| livePreview crash after navigation | ✅ Fixed — try-catch |
| Safari print margin quirk | ⚠️ Not verified — needs manual Safari test |
| Very large letterhead (>2MB in preview) | ⚠️ Slow; 5MB upload cap added, but no compression |

---

## Next Recommended Task

All roadmap phases are complete. If continuing:

1. **Manual Safari print test** — verify @page margins render correctly
2. **Arabic RTL templates** — add `direction: rtl` to specific template's form and preview
3. **In-page print preview** — replace `window.open()` with iframe-based preview for better UX
