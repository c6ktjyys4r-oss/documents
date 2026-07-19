# Alba Docs — Roadmap

## Status: All planned phases complete. Pre-flight verified. ✅

---

## Completed Roadmap (in order)

### Original Phases 1–8
Covered: project scaffold, template engine, YAML front-matter, form rendering,
live preview, My Documents store, autosave/draft restore, print shell, dark mode,
letterhead, search, mobile layout, settings page.

All 8 phases shipped as commit `a50ce53`. Estimated parity: ~88%.

---

### New Phase 1 — Template Consistency (complete)
- Fixed autosave indicator SVG-stripping bug: the timestamp span is now a separate
  `<span id="saved-indicator-text">` so the checkmark SVG is never overwritten.
- Fixed draft-restore indicator with the same span-based approach.
- Fixed export double-toast: `DB.exportJson()` returns `true/false`; the success
  toast is only shown on success.
- Added `inputmode="decimal"` to currency inputs for better mobile numpad.
- Added `inputmode="tel"` to phone inputs (already `type="tel"`, now explicit mode).

### New Phase 2 — Preview & Print Accuracy (complete)
- Standardised `docShell()` `@page` margins to `25mm 20mm 20mm 20mm`, matching
  the intent documented in every template's embedded `<style>` block.
- Added `dir` / `lang` parameters to `docShell(bodyHtml, title, dir)` — RTL
  templates now produce `<html lang="ar" dir="rtl">` in the print window.
- `printDocument()` reads `form.direction` from the template front-matter and
  passes it to `docShell()`.
- Applied `dir` attribute to `#doc-preview` so RTL templates render correctly in
  the live preview column as well as in print.
- Adjusted `.doc-preview` padding from `32px 36px 40px` to `48px 38px 42px` to
  better approximate A4 @page margins at screen resolution (96 dpi, 1 mm ≈ 3.78 px).

### New Phase 3 — Code Cleanup (complete)
- Extracted `buildFormHtml(fieldDefs, templateId)` helper from `renderFillMode()`.
- Extracted `buildLogoNote(lhSet)` helper from `renderFillMode()`.
- Extracted `buildLhWarning()` helper from `renderFillMode()`.
- Added explanatory comment to `getBody()` clarifying why template `<style>` blocks
  are stripped (the app uses `docShell()` CSS for print and `.doc-preview` CSS for
  the live preview; templates embed styles only for direct file viewing).

### New Phase 4 — Complete QA (complete)
End-to-end QA pass across all workflows:

| Workflow | Status | Notes |
|---|---|---|
| Create new document | ✅ | Breadcrumb, title, form, preview all render |
| Field types (text, number, date, currency, email, phone, select, textarea) | ✅ | All render correctly with correct `type`/`inputmode` |
| Required-field star | ✅ | Aligned with label; title attribute "Required field" |
| Live preview | ✅ | Updates on every input/change; uses cached template |
| Autosave indicator | ✅ | SVG preserved; timestamp span updated correctly |
| Save draft | ✅ | Creates or updates existing doc via `editing_doc_id` |
| Publish | ✅ | Sets `status: published`; toast confirms |
| Clear draft | ✅ | Clears draft + `editing_doc_id`; re-renders clean form |
| Restore draft on reload | ✅ | Fields and timestamp restored on `renderFillMode` |
| Open saved document | ✅ | Saves fields as draft, sets `editing_doc_id`, navigates |
| Delete document | ✅ | Removes from store; shows info toast; re-renders list |
| Export JSON | ✅ | Downloads file; success toast only on success (bug fixed) |
| Print / Save PDF | ✅ | Opens pop-up with `docShell()`; passes `dir` for RTL |
| RTL template print | ✅ | `<html lang="ar" dir="rtl">` set in print window |
| RTL template preview | ✅ | `dir` attribute applied to `#doc-preview` |
| Search | ✅ | Filters templates by name; empty state shown |
| My Documents empty state | ✅ | Shown when no saved docs |
| Letterhead upload | ✅ | Stored in `localStorage`; shown in preview and print |
| Letterhead warning | ✅ | Amber banner when template uses `{{Logo}}` but no LH set |
| Dark mode | ✅ | Toggle persists in `localStorage` |
| Mobile layout | ✅ | Form + preview stack at 980 px; single-column |
| `editing_doc_id` stale guard | ✅ | Cleared when template changes |
| `loadTemplate()` cache | ✅ | First call fetches; subsequent calls return cached value |

No additional runtime bugs found. Estimated parity with Alba ERP: **~92–93%**.

---

### Pre-flight Verification (complete — commit `a1021a6`)

Full pre-flight checks run before user testing:

| Check | Result | Notes |
|---|---|---|
| API server startup | ✅ PASS | Starts cleanly, listens on port 8080 |
| `/api/healthz` | ✅ PASS | `{"status":"ok"}` HTTP 200 |
| TypeScript typecheck | ✅ PASS | Zero errors in api-server |
| Database schema vs code | ✅ PASS | Schema intentionally empty; no routes use the DB |
| Pending migrations | ✅ PASS | None; no tables defined |
| Postgres connection | ✅ PASS | DB accessible; 0 tables (correct) |
| JS syntax (SPA) | ✅ PASS | `node --check` on 1263-line inline script |
| CDN assets (marked@15.0.4) | ✅ PASS | HTTP 200 |
| CDN assets (Inter font CSS) | ✅ PASS | HTTP 200 |
| All 56 templates — front-matter | ✅ PASS | 100% have YAML front-matter |
| All 56 templates — non-empty body | ✅ PASS | 100% have document content |
| Framework templates (0 placeholders) | ✅ FIXED | Now show "Read-only template" + guidance note instead of "0 fields" |
| `render.yaml` | ✅ PASS | Correctly configured: static site with `/* → /index.html` SPA rewrite |
| Server logs | ✅ PASS | Only expected GET / → 404; all health checks 200 |
| api-server imports @workspace/db | ✅ PASS | Source does NOT import db — no crash risk |

**Issue found and fixed:** 16 framework templates (ADR, Audit Report, Meeting Notes,
Research, Specification, Sprint Report, Change Request, Decision Log) showed "0 fields"
and an empty form panel. Fixed to show "Read-only template — use Print / Save PDF" with
a clear guidance note in the form body. Clear button is hidden for these templates.

---

## Deferred / Future Ideas

- Full field validation on Publish (highlight empty required fields).
- Import JSON to restore a document export.
- Multi-page print preview (paginated view within the browser, not just pop-up).
- Template search within the fill form (for long option lists).
- Offline support (service worker caching of templates).
- Per-document version history.
