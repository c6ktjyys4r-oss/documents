# Printing & PDF Export Guide

This guide explains how to produce professional print-ready PDFs from any template in this library.

---

## Quick Method — Browser Print (no tools required)

1. Open the `.md` file in **Typora**, **VS Code + Markdown Preview**, or any browser that renders Markdown.
2. Fill in all `{{Placeholder}}` fields.
3. Use **File → Print** or **Cmd/Ctrl + P**.
4. Choose **Save as PDF**.
5. Set paper size to **A4**, disable headers/footers in the browser print dialog.

Each template includes an embedded `<style>` block that applies A4 page size, professional typography, and consistent table formatting automatically.

---

## Pandoc Method (recommended for batch export)

[Pandoc](https://pandoc.org) produces the highest-quality output and supports HTML and PDF.

### Install Pandoc

```bash
# macOS
brew install pandoc

# Ubuntu / Debian
apt install pandoc

# Windows
winget install JohnMacFarlane.Pandoc
```

### Export a Single Template to HTML

```bash
pandoc templates/documents/hr/JOB_OFFER.md \
  --css assets/print.css \
  --standalone \
  --output output/JOB_OFFER.html
```

Open the HTML file in any browser and print to PDF (Cmd+P → Save as PDF).

### Export Directly to PDF via WeasyPrint

```bash
# Install WeasyPrint
pip install weasyprint

pandoc templates/documents/hr/JOB_OFFER.md \
  --css assets/print.css \
  --standalone \
  --pdf-engine=weasyprint \
  --output output/JOB_OFFER.pdf
```

WeasyPrint supports `@page` rules, page numbers, and header/footer CSS, producing the highest-fidelity PDF output.

### Export All Templates at Once

```bash
# Create output directories
mkdir -p output/hr output/general output/finance output/operations output/administration

# Export all HR templates
for f in templates/documents/hr/*.md; do
  name=$(basename "$f" .md)
  pandoc "$f" --css assets/print.css --standalone \
    --pdf-engine=weasyprint -o "output/hr/${name}.pdf"
done

# Repeat for other categories:
# templates/documents/general/*.md   → output/general/
# templates/documents/finance/*.md   → output/finance/
# templates/documents/operations/*.md → output/operations/
# templates/documents/administration/*.md → output/administration/
```

### Using the Defaults File

```bash
pandoc --defaults assets/pandoc-defaults.yaml \
  -o output/JOB_OFFER.html \
  templates/documents/hr/JOB_OFFER.md
```

---

## Typora Method

1. Open the `.md` file in Typora.
2. Go to **Preferences → Appearance → Open Theme Folder**.
3. Copy `assets/print.css` into the theme folder as `document-library.css`.
4. Select the theme in Preferences.
5. Fill in all `{{Placeholder}}` fields.
6. **File → Export → PDF**.

Typora uses the embedded `<style>` block by default — no theme installation needed for basic export.

---

## Microsoft Word Method

```bash
pandoc templates/documents/hr/JOB_OFFER.md \
  --reference-doc assets/reference.docx \
  --output output/JOB_OFFER.docx
```

Then fill in the placeholders in Word and print or save as PDF.

---

## Page Settings Reference

| Setting | Value |
|---|---|
| **Paper size** | A4 (210 × 297 mm) |
| **Top margin** | 25 mm |
| **Bottom margin** | 20 mm |
| **Left / Right margin** | 20 mm |
| **Font** | Arial 11pt (body), 9pt (table cells) |
| **Heading (H1)** | 14pt, centered, navy underline |
| **Section heads (H2)** | 9pt, uppercase, light underline |

---

## Troubleshooting

| Issue | Fix |
|---|---|
| Tables split across pages | Use WeasyPrint; it honours `page-break-inside: avoid` |
| Arabic text direction incorrect | Add `dir="rtl"` attribute or use `--variable dir=rtl` with Pandoc |
| Fonts not embedding in PDF | Use WeasyPrint with system Arial/Helvetica installed |
| Page numbers not showing | Use WeasyPrint (supports CSS `@page` counters); wkhtmltopdf does not |
| Style block visible as text | Open in a proper Markdown renderer, not a plain text editor |
