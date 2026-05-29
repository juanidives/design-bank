---
name: design-system-extractor
description: Activate this skill when the user asks to extract, analyze or create a design system from an HTML file. Also activates with: "analyze page", "extract design system", "create style guide", "process project".
updated: 2026-05-29
tags:
  - vibe-design
  - design-system
  - skill
---

# Skill: Design System Extractor

## Core principle
The design system is not documentation — it is a living site that uses the original project's visual identity to present itself. The HERO carries 70% of the total value. CSS and JS are transplanted word for word, never summarized. Every asset is extracted into organized files. Nothing is invented.

## Output structure
All files are created relative to the INPUT's folder. INPUT is never modified.
```
assets/
  css/          ← extracted CSS files
  js/           ← extracted JS files
  images/svg/   ← extracted hardcoded SVGs
design-system.html
STACK.md
```

---

## STEP 1 — READ & ANALYZE (write nothing yet)

Read the entire INPUT HTML before any action. Locate CSS in every possible place:
- Inline `<style>` blocks
- `style=""` attributes on elements
- Tailwind / utility classes (extract real values, not class names)
- CSS variables in `:root {}`
- `@property` declarations (e.g. for border-spin animations)
- External files linked via `<link>`

Internally build these inventories:
1. **Hero structure** — exact layout, columns, floating elements, badges, buttons, background effects
2. **Typography** — every font-family, size, weight, line-height found
3. **Colors** — every hex, rgba, hsl, gradient found
4. **Animations** — every `@keyframes`, `animation`, `transition` with exact values and durations
5. **JS components** — custom cursor, carousel, tabs, parallax, Three.js, GSAP, stack cards, smooth scroll
6. **Special effects** — glass panels, glow, blobs, noise overlay, gradient-blur, dot-grid, border-spin, mix-blend-mode
7. **Every SVG element** — classify each (see Step 3)
8. **Every asset referenced** — CSS, JS, fonts, images, CDNs

**After reading, report to the user:**
"Read complete. Found:
- Hero: [2-line description of layout and key elements]
- Fonts: [list]
- Colors: [count] unique values
- Animations: [list with durations]
- JS components: [list]
- Special effects: [list]
- SVGs: [count and categories]
Can I proceed?"

**Wait for confirmation before writing any file.**

---

## STEP 2 — EXTRACT INLINE CSS

Scan INPUT for every inline `<style>` block.

For each block:
- Determine what the CSS does
- Save its content to `assets/css/[descriptive-name].css`
- Name by function: `animations.css`, `components.css`, `buttons.css`, `layout.css`
- If multiple blocks serve the same concern, merge into one file
- Add DS-specific structural classes to the appropriate CSS file:

```css
/* DS-specific — do not alter project visual */
.ds-section { padding: 6rem 0; }
.ds-type-row { display: flex; align-items: baseline; gap: 2rem; padding: 1.5rem 0; border-bottom: 1px solid [project border color]; }
.ds-type-name { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: [project muted color]; width: 180px; flex-shrink: 0; }
.ds-type-spec { font-size: 0.75rem; color: [project muted color]; text-align: right; flex-shrink: 0; font-family: monospace; }
.ds-swatch { width: 100%; height: 80px; border-radius: [project radius]; }
```

---

## STEP 3 — EXTRACT INLINE JS

Scan INPUT for every inline `<script>` block containing actual JS code.

For each block:
- Determine what the JS does
- Save its content to `assets/js/[descriptive-name].js`
- Name by function: `cursor.js`, `scroll-reveal.js`, `carousel.js`, `parallax.js`, `interactions.js`
- If multiple blocks serve the same concern, merge into one file

Do NOT extract:
- `<script type="application/ld+json">` blocks
- `<script data-img-fallback-handler>` and similar firewall/polyfill scripts
- Single-line event handler scripts

**CRITICAL for complex JS (cursor snake, Three.js canvas, GSAP, Lenis):**
Copy the script COMPLETELY — line by line, without summarizing.
Only adjust what is strictly necessary for the design system context
(e.g. canvas z-index to stay behind content, removing firewall scripts).

---

## STEP 4 — CLASSIFY EVERY SVG

Scan INPUT for every inline `<svg>` element.
Classify each into exactly one of three categories:

**Category A — Lucide icon**
The SVG has `class="lucide lucide-[name]..."` or `data-lucide="[name]"`.
Replace with: `<i data-lucide="[name]" class="[original non-lucide classes]"></i>`
The Lucide JS runtime already linked will render them correctly.
Color classes (text-orange-500, fill-current, etc.) will work as expected.
Do NOT save these as files.

**Category B — Custom SVG using currentColor**
The SVG uses `fill="currentColor"`, `stroke="currentColor"`,
or relies on Tailwind color classes inherited via CSS.
These MUST remain inline — extracting to `<img>` breaks color inheritance.
Do NOT save these as files.
Minify to a single line.

**Category C — Custom SVG with hardcoded colors only**
The SVG uses only hardcoded hex/rgba values and does not rely on
CSS color inheritance in any state (including hover).
Save to `assets/images/svg/[descriptive-name].svg`
Replace with: `<img src="assets/images/svg/[name].svg" class="[original classes]" alt="[description]"/>`

Rules:
- When in doubt between B and C, always keep inline (choose B)
- Never use `<img>` for SVGs that change color on hover or via parent classes
- If the same SVG appears multiple times, classify once and apply consistently

---

## STEP 5 — WRITE design-system.html FROM SCRATCH

Write a new `design-system.html` in the same folder as INPUT.
This is NOT a copy or edit of INPUT. Write it clean, from scratch, section by section.
The design system uses the project's own visual identity — never a generic neutral layout.

### `<head>` structure
```html
<head>
  <!-- fonts -->
  <link .../>
  <!-- css — [what this file contains] -->
  <link rel="stylesheet" href="assets/css/animations.css"/>
  <!-- head-only js — [what this script does] -->
  <script src="assets/resource_xxx.js"></script>
</head>
```

Copy ALL assets from the original `<head>`:
- Fonts (Google Fonts, CDN)
- External CSS files (preserved paths)
- Runtime scripts (Tailwind, Lucide, Iconify, GSAP, Three.js — must stay in head)
- Link to extracted CSS files

### Navigation
Use the original project navbar as the base.
Change only the links to point to design system sections:
`#hero` `#typography` `#colors` `#components` `#layout` `#motion` `#icons`
Preserve all navbar visual effects (glass, blur, border-gradient, sticky behavior).

### `<body>` structure
```html
<body>
  <!-- hero -->
  ...hero content...
  <!-- typography -->
  ...typography section...
  <!-- js — [what this file does] -->
  <script src="assets/js/cursor.js"></script>
  <script src="assets/js/interactions.js"></script>
</body>
```

### SVG rendering rules
- Category A (Lucide): `<i data-lucide="[name]" class="[classes]"></i>`
- Category B (currentColor): keep full SVG inline, minified to one line
- Category C (hardcoded): `<img src="assets/images/svg/[name].svg" .../>`

### Compactness rules
- No blank lines or unnecessary whitespace
- No empty or redundant attributes
- No unused asset references
- Inline SVGs (Category B) minified to a single line each
- No firewall scripts, scroll-fix polyfills, or analytics from INPUT

---

## STEP 5A — HERO SECTION (highest priority — 70% of the work)

The Hero is the most critical section. Treat it with absolute priority.

**What to do:**
Rebuild the Hero from scratch with text adapted for the design system.
This is a reinterpretation with the same visual language — not a copy.

Text adaptation examples:
- "Web3 Finance Mastery Lab" → "Design System Pattern Library"
- "42 Projects Shipped" → "14 Components" / "05 Color Tokens"
- "Start free trial" → "Explore Components" / "View Tokens"
- Badge "UI/UX · Interaction" → "v1.0 · 2026"

**What to preserve intact (do not modify):**
- Exact layout: grid, columns, proportions (e.g. `lg:col-span-7` + `lg:col-span-5`)
- All floating and decorative elements (floating cards, badges, tickets, portrait cards)
- Original images with the same `src="assets/..."` paths
- Background effects (parallax, Three.js canvas, blobs, noise overlay, UnicornStudio)
- Entry animations with exact delays (`fadeSlideIn`, `columnReveal`, `text-reveal-content`)
- Custom cursor — transplant the full JS, word by word
- Dynamic stats adapted to design system metrics
- All hover states and transitions

**Floating elements — special rule:**
Floating cards, tickets, portrait cards, overlapping badges:
→ Adapt content to reflect the design system (color tokens, components, typography)
→ Keep rotation, position, z-index, animations exactly as in the original

---

## STEP 5B — TYPOGRAPHY SECTION

Always use a 3-column table/grid format:
- Left column: style name (mono, muted) — e.g. "Heading 1", "Body Large", "Micro"
- Center column: REAL visual example using the exact original classes
- Right column: technical spec — e.g. "96px / 0.85 · Manrope 500 · tracking-tighter"

Document ALL styles found — minimum 8, no maximum.
Include: gradient text, mono labels, micro text, stat values, italic quotes — everything.
Use original page text as examples (do not invent generic text).

---

## STEP 5C — COLORS & SURFACES SECTION

For each color/surface, show:
- Real visual swatch (div with exact color/gradient/glass)
- Semantic name: "Page Background", "Glass Panel", "Primary Blue", "Accent Red"
- Exact technical value: `#050a14`, `rgba(255,255,255,0.03) + blur(16px)`, `#007bff → #00bfff`

Required categories:
- Backgrounds and surfaces
- Primary and accent colors
- Text colors (with opacities: white/100, white/70, white/40)
- Borders and dividers
- Gradients used
- Special effects (glass, glow, blob colors)

Swatches must use `.glass-panel`, `.glow-card` or the project's container style.

---

## STEP 5D — UI COMPONENTS SECTION

For each component, show a WORKING preview — not a description.
Use the exact HTML and CSS from the original.

Minimum list to document:
- All buttons with states (hover, active) — including complex ones with glow, spin border, conic-gradient
- Cards with functional hover states (3D transform, glow, scale)
- Navbar with blur and border-gradient
- Badges, pills, tags with animations
- Forms and inputs with focus states
- Icons (Lucide + Iconify) with sizes and colors
- Special project components (stack carousel, accordion, interactive tabs)

Adapt content but preserve exact HTML/CSS/JS of each component.
Add HTML comments documenting the usage pattern of each component.

---

## STEP 5E — LAYOUT & GRID SECTION

Show the grid patterns used with visual wireframes:
- Main container (max-width, padding)
- Primary grids (exact proportions: `flex-1` + `flex-[1.6]`, `col-span-7` + `col-span-5`)
- Recurring spacing values
- Breakpoints and responsive behavior

---

## STEP 5F — MOTION & INTERACTION SECTION

Document and demonstrate ALL animations found.

**For CSS animations:** show live cards with the animation running:
```html
<div class="animate-glow">Glow Pulse — 2s ease-in-out infinite</div>
```

**For complex JS (cursor snake, parallax, Three.js, GSAP):**
Transplant the COMPLETE script. Do not summarize. Do not describe. Copy.
Only adjust what is necessary for the design system context.
Include a `<pre>` block with the CSS animation code for reference.

---

## STEP 5G — ICONS SECTION

- Icon system(s) identified (Lucide, Iconify/Solar, Simple Icons, inline SVG)
- Size variants with preview (12px, 16px, 20px, 24px)
- Color variants (white, accent, muted) with preview
- Most used icons in the project with names

---

## STEP 5H — SPECIAL CASE: React / Vite Bundled HTML

If the INPUT contains a React/Vite bundle (`__modules`, `data-offline-sandbox`, empty `<div id="root">`):

1. Extract CSS and JS strings from the `__modules` object using a Python or Node.js script
2. Reconstruct the static HTML by reverse-engineering the JSX component tree
3. Convert React logic (useEffect, useRef) to Vanilla JS (document.querySelector, addEventListener)
4. Proceed with all steps above using the reconstructed static HTML as the source
5. The final design-system.html must be a standalone static file — not a React app

---

## QUALITY BAR

Before saving, verify:
- [ ] Every section from the original is present and visually faithful
- [ ] No inline `<style>` or `<script>` blocks remain (all extracted to files)
- [ ] All Lucide icons use `<i data-lucide>` — never `<img>` or inline SVG
- [ ] No currentColor SVG was moved to an `<img>` tag
- [ ] All extracted asset paths resolve correctly
- [ ] All imports in `<head>` and before `</body>` have descriptive comments
- [ ] No comments inside body other than section labels and asset imports
- [ ] All visible text translated to Brazilian Portuguese (PT-BR)
- [ ] Hero rebuilt with full fidelity — layout, effects, animations, adapted texts
- [ ] JS for cursor/parallax/carousel copied word by word
- [ ] Components show working previews, not descriptions
- [ ] Typography in 3-column table with real specs
- [ ] Color swatches use exact values (hex, rgba, gradient)
- [ ] HTML comments document usage pattern of each section
- [ ] File is meaningfully smaller and cleaner than INPUT

---

## STEP 6 — WRITE STACK.md

After saving design-system.html, create a `STACK.md` in the same folder.
List every technology, library, and tool found in INPUT.
One line per item: name + what it does in this project.
No categories, no headers, no padding. Just the list.

Format:
- **Tailwind CSS** — utility-first CSS framework used for all layout and styling
- **Lucide** — icon library used throughout the interface

Only include what is actually present in the source.
Do not invent or assume technologies not found in INPUT.

---

## COMPLETION REPORT

Confirm to the user:
✅ Sections documented: [list]
✅ Components with working preview: [count]
✅ JS scripts transplanted: [list]
✅ CSS files extracted: [list]
✅ SVGs classified: [count A / count B / count C]
⚠️ Limitations: [what could not be captured and why]

Then ask: "Would you like me to create a Knowledge Item with the patterns found in this project?"
