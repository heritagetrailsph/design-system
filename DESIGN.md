# DESIGN.md

Brand system for **PH UNESCO Heritage and Nature Trails** ("Treading Routes, Discovering
Roots"), extracted from `branding/brand_guidelines_-_ph_unesco_heritage_and_nature_trails.pdf`
and `branding/color.pdf`. This is the source of truth for logo usage, color, and typography
across `apps/web`, `apps/cms`, `apps/mobile`, and marketing/social assets. Source files (PDFs,
raw logo exports, font archives) live in `branding/` — read this file first, open the PDFs only
for edge cases not covered here.

## Logo

### Concept

Three elements fused into a map pin: **pin** (destinations/journeys) + **winding forest path**
(nature trails) + **Philippine sun and stars** (national identity) = the primary mark.

Reading the mark clockwise from the sun: **Rising Sun**, **Horizon**, **Luzon** (dot), **Marine**
(blue sweep), **Gastronomy** (red point/tip), **Mindanao** (dot), **Nature** (green sweep),
**Visayas** (dot), **Path**, back to **Pin**. Per-element meaning:

- **Green** — nature and conservation
- **Blue** — Philippine marine ecosystems
- **Red** — Filipino gastronomy, part of the travel experience
- **Three dots** — Luzon, Visayas, Mindanao, connected by the flowing path = unity of the
  country's heritage trails
- **Sun and stars** — the Philippine flag's rising sun

### Lockups and files

All exports live under `branding/logo/`, each combination provided as `svg` (prefer for web/CMS)
and `png`, in `rgb` (screen) and `cmyk` (print) color spaces.

| Lockup | Path | Use |
|---|---|---|
| Horizontal (icon + wordmark side by side) | `branding/logo/horizontal/{svg,png}/{rgb,cmyk}/` | Default lockup — nav bars, letterhead, wide headers |
| Vertical (icon above wordmark) | `branding/logo/vertical/{svg,png}/{rgb,cmyk}/` | Square/tall placements — app splash, social profile |
| Icon only | `branding/logo/full-color/icon-full-color/{svg,png}/{rgb,cmyk}/` | Favicon, app icon, avatar, small UI chrome |
| Wordmark only | `branding/logo/wordmark/{svg,png}/{rgb,cmyk}/` (full-color variant also under `branding/logo/full-color/wordmark-full-color/`) | Where the pin mark is already established elsewhere on the page |
| Full-color vertical | `branding/logo/full-color/vertical-full-color/{svg,png}/{rgb,cmyk}/` | Same as vertical, full-color-only export |

Each family also ships single-color variants named `*-{full-color,blue,red,green,yellow,white,
black,grayscale}-{rgb,cmyk}.{svg,png}` — pick the variant whose background rule (below) applies
instead of recoloring the full-color asset yourself.

### Background / color-on-color mono logo

Four pre-built brand-colored background cards for social/print use, gradient fills each on one
of the four core colorways:

- Green (`#52A52F` → `#ECCD00` gradient direction) with white icon
- Yellow/gold (`#E87D1D` → `#ECCD00`) with white icon
- Blue (`#607DC6` → `#3B2786`) with white icon
- Red/magenta (`#E60638` → `#A41034`) with white icon

### Do

- Use the full-color logo on white or other high-contrast, low-noise backgrounds.
- Use the all-white logo variant on color or dark/busy backgrounds.
- Use the brand font family (Poppins / Quoly, see Typography) for any accompanying wordmark
  text — never substitute a system font.
- Keep the icon's internal proportions (pin outline, sun rays, connecting path) untouched;
  scale uniformly only.

### Don't

- Don't place the full-color logo on a low-contrast or visually busy background (e.g. a photo)
  — switch to the white or mono variant instead.
- Don't apply heavy effects (drop shadows, glows, outlines, gradients not in the approved set)
  to the logo.
- Don't distort, skew, or unevenly scale the mark or wordmark.
- Don't recolor the wordmark text outside the brand palette.

### Mono / single-color reproduction

When only one ink color is available: use light-on-dark or dark-on-light, keep the
mark/wordmark outline clearly distinguishable from the background, and default to black or
white when no other brand color fits.

## Color

### Core brand palette (from `branding/color.pdf`)

Ten colors total — neutrals, the four core hues, and two accent tints. Hex is canonical; CMYK
values below are as generated (some show unusual negative percentages — verify against a color
tool before sending to a print vendor rather than trusting them verbatim).

| Swatch | Hex | RGB | Role |
|---|---|---|---|
| White | `#FFFFFF` | 255, 255, 255 | Neutral / background |
| Near-black | `#1A1A1A` | 26, 26, 26 | Neutral / text |
| Green | `#41B40B` | 65, 180, 11 | Nature / conservation |
| Olive-green | `#87AE0B` | 135, 174, 11 | Nature, secondary |
| Yellow | `#F9ED32` | 249, 237, 50 | Sun / accent |
| Blue (light) | `#607DC6` | 96, 125, 198 | Marine, gradient start |
| Blue (deep) | `#3B2786` | 59, 39, 134 | Marine, gradient end |
| Red (bright) | `#E60638` | 230, 6, 56 | Gastronomy, gradient start |
| Red (deep) | `#A41034` | 164, 16, 52 | Gastronomy, gradient end |
| Pale yellow | `#FCFF80` | 252, 255, 128 | Accent tint |

### Logo gradient pairs (from the brand guidelines deck)

Used specifically for the four core-color logo lockups and background cards — treat as
two-stop linear gradients, not flat fills:

- Gold: `#E87D1D` → `#ECCD00`
- Green: `#ECCD00` → `#52A52F`
- Blue: `#607DC6` → `#3B2786`
- Red: `#E60638` → `#A41034`

Note `#ECCD00` and `#52A52F` appear only in this gradient spec, not in `color.pdf`'s ten-swatch
palette — treat `color.pdf` as the canonical flat-color palette and this list as gradient stops
specific to logo/background art.

### Rules

- The palette is intentionally small. Don't introduce new brand colors ad hoc — reuse these.
- Prefer the four core hues (green, blue, red, gold/yellow) for category or section coding
  (e.g. nature vs. heritage vs. gastronomy content), consistent with what each color means in
  the logo.
- Text/background combinations must meet contrast requirements (WCAG AA) — see the
  logo Do/Don't rule against low-contrast placements; the same applies to UI color pairing.

### Known gap vs. current code

`packages/config/tailwind-preset.js` currently defines a placeholder `heritage.*` palette
(`bark #3f2e21`, `gold #c79a3f`, `leaf #3f6b4a`, `sky #2f5f78`) that does **not** match this
brand palette. When implementing real UI (replacing `PlaceholderPage`/`PlaceholderScreen` per
`CLAUDE.md`), update that preset — and the Flutter theme equivalent in
`flutter_packages/heritage_ui` — to the hex values above before shipping any screen that uses
brand color, rather than styling against the placeholder tokens.

## Typography

Two typefaces, both referenced in `branding/brand_guidelines_-_ph_unesco_heritage_and_nature_trails.pdf`
under "Typography" and shipped as archives in `branding/fonts/`:

| Typeface | Role | Source file | Notes |
|---|---|---|---|
| **Quoly** | Display / logotype accent — rounded, bold, used for headline treatments like "Brand Guidelines" and section headers in brand collateral | `branding/fonts/quoly-font.zip` | Decorative weight; use sparingly for headlines, not body copy |
| **Poppins** | Primary UI/body typeface — geometric sans, full weight range implied by the guideline's Aa sample | `branding/fonts/poppins.rar` | Default for product UI, body text, forms; already the de facto safe choice for web (available on Google Fonts) |

Both archives need extraction and licensing/file-format check (e.g. `.ttf`/`.otf`/`.woff2`)
before wiring into `apps/web` / `apps/cms` font loading (Next.js `next/font/local` or
`next/font/google` for Poppins) or the Flutter `pubspec.yaml` font block — neither app currently
declares either family, so this is greenfield integration work, not a rename.

Quoly is self-hosted in this repo (`website/public/fonts/quoly/Quoly.woff2`, `@font-face` in
`website/src/index.css`) and wired as `--font-display`, restricted by convention to real
headline moments — component/heading defaults resolve `var(--font-display)` which chains to
Poppins as fallback. Poppins ships via `@fontsource/poppins` (400/500/600/700).

### Font study lab (exploratory, not adopted brand)

`website` includes a title-face comparison lab for evaluating Quoly alternatives before
committing further UI to it — this is a design exploration tool, not a brand decision. Visit
`/mock` (or the design system's "Font studies" nav dropdown) and switch between:

| Study | Font | Source | Treatment |
|---|---|---|---|
| Quoly | `Quoly` | self-hosted, `branding/fonts/quoly-font.zip` | current brand default; regular weight, tight leading |
| Barabara | `Barabara` | self-hosted (`Barabara-Regular.ttf`) — public Philippine tourism display face by Michelle Co/BBDO Guerrero | uppercase, tight tracking |
| Plus Jakarta Sans | `Plus Jakarta Sans Variable` | `@fontsource-variable/plus-jakarta-sans` | bold, tight tracking |
| Hanken Grotesk | `Hanken Grotesk Variable` | `@fontsource-variable/hanken-grotesk` | bold, Filipino-designed |
| Bricolage Grotesque | `Bricolage Grotesque Variable` | `@fontsource-variable/bricolage-grotesque` | condensed, expressive |
| Sora | `Sora Variable` | `@fontsource-variable/sora` | bold, open/crisp |
| Figtree | `Figtree Variable` | `@fontsource-variable/figtree` | bold, friendly geometric |

Every study keeps Poppins as the body/UI face and only swaps `--font-display` (see
`.font-study-*` utilities in `src/index.css`, driven by `src/data/font-studies.ts` and routed
via `src/data/lab-routes.ts`). Quoly remains the only study treated as real brand typography per
the brand guidelines deck — the rest exist to stress-test whether a more legible/available
alternative should replace or supplement it; don't read any non-Quoly study as an approved
brand typeface.

## Social media kit

Pre-sized assets in `branding/social_media_kit/`:

- `profile_picture_-_100__scale.png`, `profile_picture_-_200__scale.png` — avatar/profile image
- `cover_center_aligned_-_{100,200}_.png`
- `cover_left_aligned_-_{100,200}__scale.png`
- `cover_upper_right_aligned_-_{100,200}__scale.png`

Three cover-art layouts (center, left, upper-right logo alignment) at 1x/2x scale — pick by
where the platform crops/overlays profile info (e.g. Facebook cover vs. LinkedIn banner).

## Reference mockups (non-normative)

The guidelines deck includes illustrative mockups of the logo in a Facebook cover and a web/app
hero screen ("Explore the Philippines", nav: Discover Trails / Eco-Products / Digital Passports
/ About). These are concept illustrations from the branding deck, not implemented screens —
`apps/web` and `apps/cms` are still on `PlaceholderPage` per `CLAUDE.md`. Don't treat the copy or
layout in these mockups as finalized product content; treat only the logo placement and color
usage they demonstrate as binding.

## `website` app routing (design system lab)

The `website` package is the design-system lab itself, not the product site — its routes:

| Route | Content |
|---|---|
| `/` | `SystemPage` — the live design system doc (primary surface; `/system` redirects here) |
| `/mock` | `HomePage` — marketing page-composition mock, stress-tests components in a real layout |
| `/font-study/{id}` | Same `HomePage` mock with `--font-display` swapped per the font study lab above |
| `/prototype` | `PrototypePage` — interactive mobile app-shell pattern mock |

When merging this design system into another website/repo, port `src/styles/brand-tokens.css`
(+ `brand-bridge.css`) and the font `@font-face`/`@fontsource` imports as the token layer; treat
`/mock` and `/font-study/*` as scratch/QA routes to leave behind, not product pages to carry
over.
