# Philippines UNESCO Trails — Design System Lab

Living **design system** for Philippines UNESCO Trails: tokens, shadcn primitives, product patterns, motion, content voice, and governance.

Marketing layouts and the mobile app shell are **composition mocks** only. They exist to stress-test design components in context — **not** a production product website.

## Stack

| Layer | Choice |
|-------|--------|
| App | Vite · React 19 · TypeScript |
| UI | Tailwind CSS v4 · shadcn/ui · Lucide |
| Motion | GSAP (ScrollTrigger) + brand motion tokens |
| Routing | React Router |
| Brand | Project-local CSS tokens in `src/styles/brand-tokens.css` |

## Token pipeline

```
src/styles/brand-tokens.css   # source of truth for --ph-* tokens
    → src/styles/brand-bridge.css   # semantic mapping to shadcn
    → Tailwind @theme (src/index.css)
    → components
```

Do **not** redefine `--ph-*` hex values inside components. Change them in `brand-tokens.css`, then consume them through the semantic bridge.

## Getting started

```bash
# from website/
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`). The home route is the design system.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local dev server with HMR |
| `npm run build` | Typecheck (`tsc -b`) + production build → `dist/` |
| `npm run preview` | Serve the production build |
| `npm run lint` | Oxlint |

## Routes

| Path | Surface | Role |
|------|---------|------|
| `/` | Design system | **Primary.** Foundations, components, patterns, states, motion, content, governance |
| `/system` | Redirect | Alias → `/` |
| `/mock` | Page mock | Full marketing-scale layout for composition QA |
| `/prototype` | App mock | Interactive phone flow for pattern + state QA |

### App mock flow (pattern testing)

1. Browse / filter / search trails on **Explore**
2. Open a trail → tabs (Stops · History · Tips), save, **Start trail**
3. Earn a gold stamp → **Passport** with settle animation

Prefer starting **Banaue** or **Bohol** to unlock a locked stamp.

## Project structure

```
src/
├── pages/
│   ├── system-page.tsx    # Design system (home)
│   ├── home-page.tsx      # Page composition mock
│   └── prototype-page.tsx # App composition mock
├── components/
│   ├── brand/             # Logo mark + wordmark
│   ├── patterns/          # Product patterns (cards, stamps, bottom nav…)
│   ├── prototype/         # Phone frame + interactive app shell (mock)
│   ├── ui/                # shadcn primitives
│   ├── lab-nav.tsx        # Lab surface navigation
│   ├── mock-banner.tsx    # Persistent "mock surface" notice
│   └── *.tsx              # Section blocks used by the page mock
├── data/trails.ts         # Sample trail content + palette swatches
├── hooks/
├── lib/
└── styles/
    ├── brand-tokens.css
    └── brand-bridge.css
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
```

## Design notes

- **Primary surface:** design system documentation
- **Mocks:** `/mock` and `/prototype` validate components; they are not product launch surfaces
- **Typography:** Spectral (display / heritage) + Figtree (UI)
- **On-image text:** always `--text-on-image` with protection gradient
- **Celebration:** gold stamps only — no confetti / emoji
- **Voice:** knowledgeable local guide, not a theme park

## License

Private / unpublished unless otherwise stated. Trail photos: see `public/images/trails/ATTRIBUTION.md`.
