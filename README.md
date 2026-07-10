# Heritage Trails PH — Website

Marketing site, living design-system docs, and an interactive mobile app prototype for **Heritage Trails PH** — calm, UNESCO-adjacent heritage walks across the Philippines.

## Stack

| Layer | Choice |
|-------|--------|
| App | Vite · React 19 · TypeScript |
| UI | Tailwind CSS v4 · shadcn/ui · Lucide |
| Motion | GSAP (ScrollTrigger) + brand motion tokens |
| Routing | React Router |
| Brand | Shared CSS tokens from parent `../tokens/` |

## Requirements

- **Node.js** 20+ (recommended)
- Parent design-system tokens at `../tokens/` (this package imports them via `src/styles/brand-bridge.css`)

```
ph-h/
├── tokens/          # source of truth for --ph-* tokens
└── website/         # this project
```

Do **not** redefine `--ph-*` hex values inside the website. Change tokens in the parent design system, then consume them through the bridge.

## Getting started

```bash
# from website/
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local dev server with HMR |
| `npm run build` | Typecheck (`tsc -b`) + production build → `dist/` |
| `npm run preview` | Serve the production build |
| `npm run lint` | Oxlint |

## Routes

| Path | Page |
|------|------|
| `/` | Marketing single-page (hero, trails, how it works, passport, CTA) |
| `/system` | Living design system — foundations, patterns, states, motion, content |
| `/prototype` | Interactive mobile mockup in a phone frame (full click-through) |

### Mobile prototype flow

1. Browse / filter / search trails on **Explore**
2. Open a trail → tabs (Stops · History · Tips), save, **Start trail**
3. Earn a gold stamp → **Passport** with settle animation

Prefer starting **Banaue** or **Bohol** to unlock a locked stamp.

## Project structure

```
src/
├── pages/                 # Route pages
│   ├── home-page.tsx
│   ├── system-page.tsx
│   └── prototype-page.tsx
├── components/
│   ├── brand/             # Logo mark + wordmark
│   ├── patterns/          # Product patterns (cards, stamps, bottom nav…)
│   ├── prototype/         # Phone frame + interactive app shell
│   ├── ui/                # shadcn primitives
│   └── *.tsx              # Marketing sections
├── data/trails.ts         # Trail content + palette swatches
├── hooks/                 # Theme, GSAP reveal
├── lib/                   # cn(), motion helpers
└── styles/brand-bridge.css
```

### Product patterns

```
src/components/patterns/
  trail-card.tsx   Featured + row cards
  photo-block.tsx  Image + on-image protection gradient
  stamp.tsx        Passport seal + 420ms scale-settle
  meta-row.tsx     Built 1571 · 4.2 km · 12 stops
  bottom-nav.tsx   Frosted mobile tabs
  empty-state.tsx  Voice-led empties
  error-state.tsx  Practical errors

src/components/prototype/
  phone-frame.tsx  Device chrome (~390px canvas)
  mobile-app.tsx   Explore → detail → passport shell
  screens/         Interactive screens using patterns above
```

## Token pipeline

```
../tokens/*.css
    → src/styles/brand-bridge.css   (semantic mapping to shadcn)
    → Tailwind @theme               (src/index.css)
    → components
```

Motion helpers live in `src/lib/motion.ts` and read CSS motion tokens.

## Design notes

- **Typography:** Spectral (display / heritage) + Figtree (UI)
- **On-image text:** always `--text-on-image` with protection gradient — never theme-flipping sand
- **Celebration:** gold stamps only — no confetti / emoji
- **Voice:** knowledgeable local guide, not a theme park

## License

Private / unpublished unless otherwise stated. Trail photos: see `public/images/trails/ATTRIBUTION.md`.
