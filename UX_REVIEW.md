# UX Review — Documents vs Alba

**Date:** 2026-07-18  
**Status:** Draft — Awaiting Approval Before Implementation Begins  
**Scope:** Design study only. No code changes made. No dependency on Alba created.

---

## Part 1 — What Makes Alba's UI/UX Successful

### 1.1 Layout and Structure

Alba uses a **SidebarProvider + SidebarInset** shell that gives every page the same structural skeleton. The sidebar is 16rem wide and can collapse to an icon rail. On mobile it becomes a Sheet (drawer) triggered by SidebarTrigger. This means the user always knows where they are — the chrome never changes, only the content area does.

The main content area is not full-bleed; it has generous horizontal padding that prevents content from touching the viewport edges on wide screens. Max-width constraints on the content area keep lines readable at large sizes.

### 1.2 Navigation

Navigation is multi-level using `SidebarMenu` → `SidebarMenuSub`. Active states are communicated by `data-active="true"` which applies `background-sidebar-accent` — a subtle tinted background, not just a color change on text. The active item also gets a left border accent. These two signals together make the active location unambiguous.

Breadcrumbs appear at the top of every secondary page, using ChevronRight separators. The current page label is `font-normal text-foreground` (not bold, not muted) — this is a deliberate choice that draws no extra attention while still orienting the user.

### 1.3 Information Hierarchy

Three type size levels cover 90% of use: `text-2xl font-semibold` for card/page titles, `text-sm` for body and table content, and `text-xs` for labels and metadata. Hierarchy is communicated through size and weight, not through color — which means it transfers cleanly between light and dark mode.

Section headings within a page do not use `<h1>` decoratively — they are actual semantic headings with appropriate visual weight. This gives keyboard and screen-reader users a proper document outline.

### 1.4 Cards

Cards follow a consistent anatomy: `CardHeader` → `CardTitle` → optional `CardDescription` → `CardContent` → optional `CardFooter`. Every card has a `border` and `bg-card` — no shadows by default, which is a deliberate choice for density. Shadow is reserved for elevated surfaces (dropdowns, sheets, dialogs). This hierarchy (flat card, elevated overlay) prevents visual noise.

### 1.5 Tables

Table rows have `hover:bg-muted/50` — a very subtle hover that confirms interactivity without distraction. Text is `text-sm` throughout. Row actions (edit, delete) are right-aligned and appear on hover. The table wrapper is responsive — on small viewports it scrolls horizontally rather than collapsing columns in a way that destroys readability.

### 1.6 Forms

Forms use `react-hook-form` for state management. Every input has a `<Label>` (`text-sm font-medium`) directly above it. Required fields are marked. Validation errors appear inline beneath the field that failed. The submit button is disabled while the form is submitting — there is no opportunity to double-submit. Focus states use `focus-visible:ring-2` with an offset, making keyboard navigation obvious.

### 1.7 Empty, Loading, and Error States

These three are the most neglected in typical UIs. Alba has dedicated components for each:

- **Empty:** `empty.tsx` — placeholder with an illustration slot, a headline, and an optional CTA button. The user always understands *why* the list is empty and what to do about it.
- **Loading:** `skeleton.tsx` with `animate-pulse` preserves layout shape while data loads. A `spinner.tsx` is used for action loading (button spinners, overlay spinners). Users are never left staring at a blank space.
- **Error:** `Alert` and `Alert-Dialog` for page-level errors; inline error text beneath form fields for field-level errors; `Sonner` toasts for transient notifications (success, failure of an action).

### 1.8 Colors and Design Tokens

All color values are CSS custom properties in HSL format. Light and dark mode are both defined. The consequence: no magic numbers anywhere in component code, and dark mode is never an afterthought — it is built into the token system from the start.

Semantic colors (destructive red, muted background) are named by *intent*, not by appearance. This means `text-destructive` does not break if the brand color changes.

### 1.9 Typography

Inter is used as the sans-serif throughout. Font sizes are expressed in Tailwind's scale (`text-sm`, `text-base`, `text-xl`) — no raw pixel values. Line heights are left at Tailwind defaults (tight for headings, normal for body). This produces consistent vertical rhythm without manual adjustment.

### 1.10 Icons

Lucide React. Every icon is the same weight (stroke-width 2), same visual size (1rem in menus, slightly larger in hero contexts). Icons never appear as decoration — each one is paired with text or carries a tooltip. This keeps the icon vocabulary meaningful.

### 1.11 Responsiveness

A single `use-mobile` hook (threshold: 768px) drives layout changes. Sidebar → Drawer, multi-column grids → single column, table row actions → always visible (not hover-only). The breakpoint is coarse — there is no complex multi-breakpoint layout. This is intentional: complexity at breakpoints is where maintenance debt accumulates.

### 1.12 Component Consistency

All components live in `src/components/ui` and follow identical file conventions: named export, `cn()` utility for merging Tailwind classes, `React.forwardRef` for ref forwarding, Radix UI primitives for accessibility. New pages cannot accidentally use a one-off button style because the palette of composable atoms is finite and well-named.

### Summary: The Three Things That Make Alba Feel Polished

1. **Consistent chrome.** The sidebar, header, and breadcrumbs are identical on every page. The user's spatial model never breaks.
2. **States are never missing.** Every list has an empty state. Every async action has a loading state. Every error has a message. The user is never confused about what is happening.
3. **Token-based design.** Color, radius, shadow, and spacing are controlled from a single source of truth. Everything looks like it belongs together because it literally shares the same definitions.

---

## Part 2 — What Documents Is Currently Missing

### 2.1 Current State Summary

Documents is a single-file vanilla HTML/CSS/JS SPA (`index.html`). It is currently a **read-only template browser** — users can browse 43 templates across 6 categories, view a rendered markdown preview, copy the markdown to clipboard, or download the file. There is no document creation, no editing, no saving, and no document lifecycle.

The functional aspiration (per the spec) is a **document creation and management system** where users can create documents manually, edit them, manage drafts, publish, archive, organise by category, and search. The gap between what exists and what is needed is wide.

### 2.2 Functional Gaps

| Feature | Status | Notes |
|---|---|---|
| Browse templates | ✅ Exists | 43 templates, 6 categories, working |
| Search templates | ✅ Exists | Client-side filter on name and category |
| Dark mode | ✅ Exists | localStorage persistence, prefers-color-scheme detection |
| Template markdown preview | ✅ Exists | Via marked.js CDN |
| Copy template to clipboard | ✅ Exists | With temporary "Copied!" confirmation |
| Download template as .md | ✅ Exists | |
| Print template | ✅ Exists | Print CSS hides chrome |
| **Create a document** | ❌ Missing | Core feature — not started |
| **Edit a document** | ❌ Missing | Core feature — not started |
| **Save drafts** | ❌ Missing | No persistence layer at all |
| **Publish documents** | ❌ Missing | No lifecycle states |
| **Archive documents** | ❌ Missing | |
| **Document index / list view** | ❌ Missing | DOCUMENT_INDEX.md is empty |
| **Per-document detail page** | ❌ Missing | Only template detail pages exist |
| **Smart data entry / suggestions** | ❌ Missing | No form, no suggestions |
| **Category management** | ❌ Missing | Categories are hardcoded |
| **Tagging** | ❌ Missing | |
| **Version history** | ❌ Missing | |
| **User accounts** | ❌ Missing | No auth |

### 2.3 UX Gaps vs Alba

#### Navigation

- **No breadcrumbs on detail pages.** Clicking a template takes the user to a detail view with no visual indication of where they came from. Back is via browser button.
- **Sidebar has no collapse.** Alba's sidebar can collapse to an icon rail, freeing space for the content area on medium-width screens.
- **No "back" affordance** on any secondary view.

#### Icons

- **Emoji icons** for sidebar categories (⚙️ 🏛️ 📄 🔧). These are inconsistent in size across operating systems, inaccessible for screen readers, and cannot be styled. Alba uses Lucide React — a single icon weight, full colour control, and proper `aria-hidden` handling.

#### Cards and Lists

- **No hover elevation.** Template cards have no hover state beyond a cursor change. Alba's interactive surfaces respond to hover with a background shift.
- **No pagination or virtual scroll.** All templates render into the DOM at once. With 43 templates this is acceptable; with hundreds of documents it will not be.
- **No sort controls.** Templates can only be filtered by category or searched — there is no way to sort by date, name, or type.

#### States

- **No skeleton loading.** Because everything is static and client-side, there is currently no async load. But once documents are loaded from a persistence layer, loading states will be required. There is no skeleton component.
- **Empty state is search-only.** There is one empty state: "No templates match X" for search. There is no empty state for a document list that has no documents yet, and no guidance on what to do.
- **No toast / feedback system.** The only user feedback is the Copy button changing its text label for 1.8 seconds. There is no global feedback channel. Errors have no presentation path.

#### Forms and Data Entry

- **No form exists.** Document creation requires a form. None is present.
- **No smart data entry.** The spec requires autocomplete from previously entered values — there is no form to attach it to.
- **No validation feedback.** Without a form, there is no validation.

#### Typography and Spacing

- **System font stack** (`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto`). Alba uses Inter explicitly. The system stack renders inconsistently across Windows (Segoe), macOS (San Francisco), and Android (Roboto) — not catastrophic, but noticeable.
- **`max-width: 900px` on main content** is correct and matching Alba's density.
- **No defined type scale.** Font sizes are set in individual CSS rules rather than via a token. Five different `font-size` values appear across the CSS without a shared label.

#### Color and Tokens

- **Colors are partially tokenised.** `--navy`, `--amber`, `--bg`, `--border` are defined as CSS variables. But badge colors are hardcoded per-category in raw hex/rgb inside `.badge-hr`, `.badge-finance`, etc. This will multiply with every new category.
- **Amber `#d4a000` as primary accent** is a distinctive and intentional choice. It should be kept — it gives Documents a visual identity separate from Alba (which uses neutral greys as primary).

#### Responsiveness

- **Mobile sidebar works.** Toggle + overlay + `left: -100%` animation. This is functionally correct.
- **No consideration for tablet layout.** At 768–1024px the sidebar is fixed-width and the content area is constrained — this works but was not designed.
- **Template preview does not adapt.** On small screens the markdown preview can contain wide tables that overflow the container without a horizontal scroll wrapper.

#### Accessibility

- **No `aria-current` on active sidebar links.** The `.active` class is set via JS but there is no `aria-current="page"` attribute.
- **Emoji in sidebar links** are inside `<span class="cat-icon">` with no `aria-hidden`. Screen readers will read "gear wheel" for ⚙️.
- **No `role="main"`** on the main content area.
- **Keyboard navigation of the sidebar** works via native link focus, but the sidebar overlay (mobile) traps no focus — a dialog opened without a focus trap is an accessibility failure.

---

## Part 3 — Prioritized Improvements

### Critical — Without These, the Core Product Does Not Exist

| # | Improvement | Reason |
|---|---|---|
| C-1 | **Persistence layer** — localStorage or IndexedDB for saving documents | Nothing users create can be saved today. All other document management features depend on this. |
| C-2 | **Document creation form** — a form that takes a template and lets the user fill in placeholder values | This is the primary user action. Without it, Documents is a read-only template browser, not a document system. |
| C-3 | **Document list view** — a page listing all created documents with status, date, and category | Documents need to be findable after creation. |
| C-4 | **Document detail / edit view** — view and edit a saved document, update fields, change status | Core edit loop. |
| C-5 | **Draft / Publish / Archive lifecycle** — explicit status field, status badge, transitions | Matches the spec. A document that cannot be published or archived has no managed lifecycle. |

### High — These Significantly Affect Usability

| # | Improvement | Reason |
|---|---|---|
| H-1 | **Replace emoji category icons with SVG icons** (Lucide or inline SVGs) | Consistency, styling control, accessibility |
| H-2 | **Breadcrumbs on all secondary pages** | Users lose spatial orientation on detail pages |
| H-3 | **Toast / notification system** | Actions (save, copy, error) need a feedback channel |
| H-4 | **Empty states with CTAs** — for empty document list, empty category, empty search | Without these, a new user sees a blank page with no guidance |
| H-5 | **Smart data entry in the form** — autocomplete suggestions drawn only from Documents data | This is explicitly called out in the spec as a key UX principle |
| H-6 | **Search across documents** — extend existing search to cover created documents, not just templates | Users need to find their own work |
| H-7 | **Skeleton loading states** — for when documents are fetched asynchronously | Required once persistence is async |
| H-8 | **`aria-current="page"`** and `aria-hidden` on decorative icons | Minimum accessibility compliance |

### Medium — These Improve Polish and Scalability

| # | Improvement | Reason |
|---|---|---|
| M-1 | **Sidebar collapse** to icon rail | Frees content area at medium widths; matches Alba pattern |
| M-2 | **Sort controls** on document list | Name A–Z, date newest, status |
| M-3 | **Filter chips** showing active category/status filter | Currently active filters are implied by sidebar selection; not explicit |
| M-4 | **Pagination or infinite scroll** on document list | Future-proofing; 43 templates is fine, 400 documents is not |
| M-5 | **Card hover states** — subtle background shift on interactive cards | Confirms interactivity, matches Alba's `hover:bg-muted/50` |
| M-6 | **Inter font** via system font stack or self-hosted | Removes rendering inconsistency across OS |
| M-7 | **Type scale tokens** — named size variables instead of raw px values | Prevents font size drift as the codebase grows |
| M-8 | **Mobile table scroll wrapper** on template preview | Prevents horizontal overflow breaking layout |
| M-9 | **Keyboard navigation of mobile sidebar** with focus trap | Accessibility |
| M-10 | **Print improvements** — print-optimized document view (not template preview) | Users will want to print completed documents |

### Low — Nice to Have, Not Blocking

| # | Improvement | Reason |
|---|---|---|
| L-1 | **Version history** per document | Every major edit could be snapshotted |
| L-2 | **Category management UI** — add/rename/reorder categories | Currently hardcoded |
| L-3 | **Tag system** — free-form tags on documents | Cross-category discovery |
| L-4 | **Bulk actions** — archive multiple, export multiple | Efficiency for power users |
| L-5 | **Export to PDF** — in-browser print-to-PDF with correct page settings | Documented in PRINTING.md but not surfaced in the UI |
| L-6 | **Template versioning** — track when templates are updated | Nice for compliance-sensitive organisations |

---

## Part 4 — Mock Workflow: Manual Document Creation

This is the intended flow for creating a document from a template. It should require no backend, no automation, and no connection to Alba.

```
1. USER arrives at Documents home page
   → Sees: My Documents list (empty state if no documents yet)
   → Sees: "New Document" primary button

2. USER clicks "New Document"
   → Modal or page: "Choose a template"
   → Same template browser as today (category sidebar + grid)
   → OR user selects "Start from scratch" (blank document)

3. USER selects a template (e.g. Job Offer)
   → System opens Document Creation Form
   → Form header: template name, category badge
   → Fields:
       ┌─ Document title (required)                ← user-named, not template name
       ├─ Category (pre-filled from template)      ← editable
       ├─ Tags (optional)                          ← free text
       └─ Template placeholder fields:
           Each {{PLACEHOLDER}} from the template becomes a labelled input
           Smart suggestions appear below each field as the user types,
           drawn from previously entered values in this Documents project

4. USER fills in fields
   → "Save Draft" button — always visible, saves to localStorage
   → "Preview" button — renders the filled document in a modal/panel
   → Autosave every 30 seconds with a "Saved" indicator

5. USER reviews preview
   → Sees the completed document with placeholders replaced
   → Can go back to form to edit
   → "Publish" button — moves document to Published status

6. USER publishes document
   → Document appears in "My Documents" list with status "Published"
   → Toast: "Document published"

7. FROM the document list, USER can:
   → Open → view/edit → re-publish (creates new draft)
   → Archive → moves to Archived (hidden from default list)
   → Download → .md or print-to-PDF
   → Duplicate → creates a new draft pre-filled with same values
```

### Key UX Principles for This Flow

- **Never lose work.** Drafts autosave. The user should never click "back" and lose a half-filled form.
- **Suggestions assist, never override.** Autocomplete appears as a dismissible dropdown. The user is always in control of what they type.
- **Preview before committing.** The user can see the filled document before clicking Publish.
- **Progressive disclosure.** The template picker is a familiar surface. The form is not a new paradigm — it just asks for the values the template needs.

---

## Part 5 — Implementation Roadmap

Work is grouped into phases. Each phase produces a working, shippable increment.

### Phase 0 — Foundation (Pre-work, no user-visible change)
*Decisions that must be made before writing any new UI.*

- [ ] Choose a persistence strategy: localStorage (zero-server) vs. a lightweight backend (SQLite via a small API). localStorage is simpler but per-browser; a backend enables multi-device access.
- [ ] Decide whether to stay on vanilla HTML/JS or introduce a framework (React/Preact/Vue). The current codebase is manageable as vanilla JS for a template browser; a document creation system with forms, state, and suggestions will be significantly harder to maintain without a framework.
- [ ] Decide on an icon library: Lucide (SVG inline), Heroicons, or custom SVGs.
- [ ] Define the document data schema (at minimum: id, title, templateId, category, tags, status, createdAt, updatedAt, fieldValues).

### Phase 1 — Critical Core (C-1 through C-5)
*The product does not exist without these.*

- [ ] C-1: Implement persistence layer (localStorage document store, CRUD operations)
- [ ] C-2: Document creation form — template picker → field form → save draft
- [ ] C-3: Document list view — "My Documents" page with status badges, date, category
- [ ] C-4: Document detail / edit view
- [ ] C-5: Status transitions (Draft → Published → Archived)

Deliverable: A user can create a document from a template, fill in fields, save a draft, publish it, and find it in their document list.

### Phase 2 — High Priority UX (H-1 through H-8)
*Significant usability improvement once the core works.*

- [ ] H-1: Replace emoji icons with SVGs
- [ ] H-2: Breadcrumbs on template detail and document detail pages
- [ ] H-3: Toast/notification system (copy, save, error)
- [ ] H-4: Empty states with CTAs on all list views
- [ ] H-5: Smart data entry — autocomplete suggestions from Documents data
- [ ] H-6: Unified search covering templates and documents
- [ ] H-7: Skeleton loading for async operations
- [ ] H-8: Accessibility pass (aria-current, aria-hidden, focus traps)

Deliverable: The core product is complete and polished. New users understand what to do. Actions give feedback. Nothing feels unfinished.

### Phase 3 — Medium Polish (M-1 through M-10)
*Scalability and finishing details.*

- [ ] M-1–M-5: Sidebar collapse, sort controls, filter chips, pagination, hover states
- [ ] M-6–M-7: Typography — Inter font, named type scale tokens
- [ ] M-8–M-10: Mobile table overflow, keyboard focus trap, print improvements

Deliverable: The product handles scale, works well on mobile, and is visibly consistent across all surfaces.

### Phase 4 — Low Priority Enhancements (L-1 through L-6)
*Power-user features and future-proofing.*

- [ ] Version history, category management, tags, bulk actions, PDF export, template versioning

---

## Design Principles to Maintain

The following are specific to Documents and must not be violated in the redesign:

1. **Amber accent (#d4a000) is the Documents identity.** It distinguishes the product visually from Alba's neutral-grey primary. Keep it.
2. **Navy header (#1a1a2e) is correct.** It gives Documents authority and seriousness appropriate for a document management product. Keep it.
3. **Per-category badge colours** (blue for HR, green for Finance, etc.) are the right idea — they create instant visual scent as the user scans a list. The implementation (hardcoded hex) should be refactored to tokens, but the pattern should be preserved.
4. **Single-file architecture served as a static site.** If a framework is introduced, the build output must remain a static site deployable with no server (matching the current `render.yaml`). A Node backend would require a separate service.
5. **No connection to Alba.** Not in Phase 1, not ever implicitly.

---

*Review complete. Redesign work begins only after this document is approved.*
