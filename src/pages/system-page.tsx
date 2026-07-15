import { useEffect, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Check, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  BottomNav,
  EmptyState,
  ErrorState,
  MetaRow,
  PhotoBlock,
  PhotoCaption,
  Stamp,
  TrailCardFeatured,
  TrailCardRow,
} from '@/components/patterns'
import { Logo, LogoMark } from '@/components/brand/logo'
import { LabNav } from '@/components/lab-nav'
import { trails, paletteSwatches } from '@/data/trails'
import { useTheme } from '@/hooks/use-theme'
import { cn } from '@/lib/utils'

const nav = [
  { id: 'foundations', label: 'Foundations' },
  { id: 'components', label: 'Components' },
  { id: 'patterns', label: 'Patterns' },
  { id: 'states', label: 'States' },
  { id: 'accessibility', label: 'Accessibility' },
  { id: 'motion', label: 'Motion' },
  { id: 'content', label: 'Content' },
  { id: 'governance', label: 'Governance' },
]

function Section({
  id,
  title,
  description,
  children,
}: {
  id: string
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24 space-y-6 border-b border-border py-12 last:border-0">
      <div className="max-w-2xl space-y-2">
        <h2 className="font-display text-2xl text-[var(--text-heading)] sm:text-3xl">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      {children}
    </section>
  )
}

function Recipe({
  name,
  anatomy,
  doList,
  dontList,
  children,
}: {
  name: string
  anatomy: string
  doList: string[]
  dontList: string[]
  children: ReactNode
}) {
  return (
    <Card className="overflow-hidden border-border shadow-card">
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription>{anatomy}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="rounded-[var(--radius-lg)] border border-border bg-muted/30 p-4 sm:p-6">
          {children}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold text-sea-700">Do</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {doList.map((d) => (
                <li key={d}>· {d}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold text-[var(--tone-danger-fg)]">Don’t</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {dontList.map((d) => (
                <li key={d}>· {d}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function SystemPage() {
  const { theme, toggle } = useTheme()
  const [navActive, setNavActive] = useState('explore')
  const [stampCelebrate, setStampCelebrate] = useState(false)
  const [activeSection, setActiveSection] = useState(nav[0].id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.25, 0.5] }
    )

    nav.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-svh bg-background">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
        <div className="container-page flex h-14 items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <LogoMark size={28} className="hidden sm:block" />
            <span className="truncate text-lg text-[var(--text-heading)]">
              Design system
            </span>
            <Badge variant="secondary" className="hidden sm:inline-flex">
              Source of truth
            </Badge>
            <Separator orientation="vertical" className="hidden h-6 lg:block" />
            <LabNav dense className="hidden xl:flex" />
          </div>
          <div className="flex items-center gap-1.5">
            <Button asChild variant="outline" size="sm" className="hidden rounded-full sm:inline-flex">
              <Link to="/mock">Page mock</Link>
            </Button>
            <Button asChild variant="ghost" size="sm" className="hidden rounded-full md:inline-flex">
              <Link to="/prototype">App mock</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggle}
              aria-label="Toggle theme"
              className="rounded-xl"
            >
              {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </Button>
          </div>
        </div>
        <nav
          className="scrollbar-none container-page flex gap-1 overflow-x-auto pb-2"
          aria-label="System sections"
        >
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={activeSection === item.id ? 'location' : undefined}
              className={cn(
                'shrink-0 rounded-full px-3 py-1.5 text-sm font-medium no-underline transition-brand',
                activeSection === item.id
                  ? 'bg-secondary text-secondary-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="main" className="container-page pb-24">
        <div className="max-w-3xl py-12">
          <p className="mb-3 text-sm font-semibold text-primary">
            Design system lab · primary surface
          </p>
          <h1 className="font-display text-4xl tracking-tight text-[var(--text-heading)] sm:text-5xl">
            PH UNESCO Heritage and Nature Trails
          </h1>
          <p className="mt-2 text-sm font-medium tracking-wide text-muted-foreground">
            &ldquo;Treading Routes, Discovering Roots&rdquo;
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Living documentation for tokens, components, product patterns, and voice. Page and app
            routes under this lab are composition mocks for testing these pieces in context — not a
            production website. Single source of truth:{' '}
            <code className="text-sm text-primary">brand-tokens.css</code> mapped into shadcn via{' '}
            <code className="text-sm text-primary">brand-bridge.css</code>.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="rounded-full font-semibold">
              <Link to="/mock">Open page mock</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full font-semibold">
              <Link to="/prototype">Open app mock</Link>
            </Button>
          </div>
        </div>

        <Section
          id="foundations"
          title="Foundations"
          description="Color, type, and semantic tones — always through tokens, never ad-hoc hex in components."
        >
          <Card className="mb-8 border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-xl">Logo — pin, path, and rising sun</CardTitle>
              <CardDescription>
                Real exports from <code className="text-primary">branding/logo/</code> (svg/rgb
                preferred for web). The favicon is the icon-only mark, reused across the browser
                tab, header, and footer so the product reads as one system. Component:{' '}
                <code className="text-primary">components/brand/logo.tsx</code>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { src: '/brand/horizontal-full-color.svg', label: 'Horizontal — default lockup' },
                  { src: '/brand/vertical-full-color.svg', label: 'Vertical' },
                  { src: '/brand/icon-full-color.svg', label: 'Icon only' },
                  { src: '/brand/wordmark-full-color.svg', label: 'Wordmark only' },
                ].map((lockup) => (
                  <div
                    key={lockup.src}
                    className="flex flex-col gap-2 overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
                  >
                    <div className="flex h-24 items-center justify-center bg-white p-4">
                      <img src={lockup.src} alt="" aria-hidden className="h-full w-full object-contain" />
                    </div>
                    <p className="px-3 pb-3 text-xs text-muted-foreground">{lockup.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-end gap-8 rounded-[var(--radius-lg)] border border-border bg-muted/30 p-6">
                <div className="flex flex-col items-center gap-2">
                  <LogoMark size={64} title="PH UNESCO Heritage and Nature Trails mark" />
                  <span className="text-xs text-muted-foreground">Mark 64</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <LogoMark size={40} />
                  <span className="text-xs text-muted-foreground">Mark 40</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <LogoMark size={28} />
                  <span className="text-xs text-muted-foreground">Mark 28</span>
                </div>
                <div className="flex flex-col gap-2">
                  <Logo href="" markSize={40} />
                  <span className="text-xs text-muted-foreground">Full lockup</span>
                </div>
                <div
                  className="flex flex-col items-center gap-2 rounded-xl p-4"
                  style={{ background: 'var(--gradient-brand-blue)' }}
                >
                  <img src="/brand/horizontal-white.svg" alt="" aria-hidden className="h-8" />
                  <span className="text-xs text-white/80">White variant, on dark/color</span>
                </div>
              </div>

              <div>
                <p className="mb-2 text-sm font-medium text-muted-foreground">
                  Logo gradient background cards — from the brand guidelines deck
                </p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    { name: 'Gold', gradient: 'var(--gradient-brand-gold)' },
                    { name: 'Green', gradient: 'var(--gradient-brand-green)' },
                    { name: 'Blue', gradient: 'var(--gradient-brand-blue)' },
                    { name: 'Red', gradient: 'var(--gradient-brand-red)' },
                  ].map((card) => (
                    <div
                      key={card.name}
                      className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl p-4"
                      style={{ background: card.gradient }}
                    >
                      <img
                        src="/brand/icon-full-color.svg"
                        alt=""
                        aria-hidden
                        className="h-10 w-10 [filter:brightness(0)_invert(1)]"
                      />
                      <span className="text-xs font-medium text-white/90">{card.name}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Icon forced white via CSS filter for this preview — the current export set ships
                  dedicated white variants for the horizontal/vertical/wordmark families, but not
                  icon-only.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold text-sea-700">Do</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li>· Full-color logo on white or other high-contrast, low-noise backgrounds</li>
                    <li>· All-white variant on color or dark/busy backgrounds</li>
                    <li>· Poppins/Quoly for any accompanying wordmark text — never a system font</li>
                    <li>· Scale the mark uniformly; keep pin, sun rays, and path proportions intact</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-[var(--tone-danger-fg)]">Don&rsquo;t</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li>· Full-color logo on a low-contrast or busy background (e.g. a photo)</li>
                    <li>· Drop shadows, glows, outlines, or off-palette gradients on the logo</li>
                    <li>· Distort, skew, or unevenly scale the mark or wordmark</li>
                    <li>· Recolor the wordmark outside the brand palette</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="color">
            <TabsList className="mb-6 rounded-full bg-card p-1 shadow-card">
              <TabsTrigger value="color" className="rounded-full">
                Color
              </TabsTrigger>
              <TabsTrigger value="type" className="rounded-full">
                Type
              </TabsTrigger>
              <TabsTrigger value="tones" className="rounded-full">
                Tones
              </TabsTrigger>
            </TabsList>
            <TabsContent value="color">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {paletteSwatches.map((swatch) => (
                  <div
                    key={swatch.token}
                    className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
                  >
                    <div className="h-20 w-full" style={{ background: `var(${swatch.token})` }} />
                    <div className="space-y-0.5 p-3">
                      <p className="text-sm font-semibold">{swatch.name}</p>
                      <p className="font-mono text-xs text-muted-foreground">{swatch.token}</p>
                      <p className="text-xs text-muted-foreground">{swatch.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="type" className="space-y-6">
              <div>
                <p className="mb-2 text-sm font-medium text-muted-foreground">
                  Display · Quoly — decorative, sparingly, headlines only
                </p>
                <p className="font-display text-4xl text-[var(--text-heading)]">
                  The Walled City of Intramuros
                </p>
              </div>
              <Separator />
              <div>
                <p className="mb-2 text-sm font-medium text-muted-foreground">
                  Body · Poppins / 1.6
                </p>
                <p className="max-w-prose text-base leading-relaxed">
                  The walls of Intramuros were raised in 1571 — and survived four centuries of
                  earthquakes, fires, and war. Use{' '}
                  <em>bahay na bato</em> — ancestral stone house — with a brief gloss.
                </p>
              </div>
              <Separator />
              <div>
                <p className="mb-2 text-sm font-medium text-muted-foreground">Meta · middle dots</p>
                <MetaRow parts={['Built 1571', '4.2 km', '12 stops']} />
              </div>
            </TabsContent>
            <TabsContent value="tones">
              <div className="flex flex-wrap gap-2">
                <Badge variant="gold">UNESCO · gold</Badge>
                <Badge variant="indigo">History · indigo</Badge>
                <Badge variant="sea">Nature · sea</Badge>
                <Badge variant="terracotta">Culture · terracotta</Badge>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Prefer <code className="text-primary">--tone-*</code> semantic aliases in product
                code over raw <code className="text-primary">--ph-terracotta-*</code>.
              </p>
            </TabsContent>
          </Tabs>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <Card className="border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-xl">Spacing</CardTitle>
                <CardDescription>Four-pixel base grid. Prefer named tokens over arbitrary gaps.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[4, 8, 12, 16, 24, 32].map((value) => (
                  <div key={value} className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="w-10 font-mono">{value}px</span>
                    <span className="h-2 rounded-full bg-primary" style={{ width: value * 2 }} />
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-xl">Radius</CardTitle>
                <CardDescription>Small controls, medium cards, soft feature surfaces, and pills.</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-3 text-center text-xs text-muted-foreground">
                {[
                  ['sm', 'var(--radius-sm)'],
                  ['md', 'var(--radius-md)'],
                  ['lg', 'var(--radius-lg)'],
                  ['xl', 'var(--radius-xl)'],
                ].map(([label, radius]) => (
                  <div key={label} className="border border-border bg-muted/40 p-4" style={{ borderRadius: radius }}>
                    <code>--radius-{label}</code>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-xl">Elevation</CardTitle>
                <CardDescription>Elevation communicates hierarchy, never decoration alone.</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-3 gap-3 text-center text-xs text-muted-foreground">
                <div className="rounded-xl border border-border bg-card p-4">Base</div>
                <div className="rounded-xl bg-card p-4 shadow-card">Card</div>
                <div className="rounded-xl bg-card p-4 shadow-raised">Raised</div>
              </CardContent>
            </Card>
          </div>
        </Section>

        <Section
          id="components"
          title="Core components"
          description="Primitive states must remain recognizable, accessible, and consistent before product styling is added."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-xl">Buttons</CardTitle>
                <CardDescription>One primary action per view. Labels stay short and never wrap.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap items-center gap-3">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="destructive">Destructive</Button>
                <Button disabled>Disabled</Button>
                <Button disabled aria-busy="true">
                  Working…
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-xl">Form fields</CardTitle>
                <CardDescription>Labels remain visible. Errors sit below the field and are programmatically linked.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="system-email">Email</Label>
                  <Input id="system-email" type="email" placeholder="ana@example.com" />
                  <p className="text-xs text-muted-foreground">We only send trail updates.</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="system-error">Passport number</Label>
                  <Input id="system-error" defaultValue="PH-12" aria-invalid aria-describedby="system-error-copy" />
                  <p id="system-error-copy" className="text-xs text-destructive">Use eight characters.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>

        <Section
          id="patterns"
          title="Product patterns"
          description="Domain objects for the brand — not generic widgets. Recipes exercised by the page and app mocks."
        >
          <div className="space-y-8">
            <Recipe
              name="Trail card"
              anatomy="PhotoBlock + Badge + PhotoCaption + MetaRow · variants: featured | row"
              doList={[
                'Real photography or brand gradient fallback',
                'Sentence-case trail names in Quoly',
                'Concrete meta: Built 1571 · 4.2 km · 12 stops',
              ]}
              dontList={[
                'Illustrations pretending to be photos',
                'Colored left borders on cards',
                'Title Case or ALL CAPS titles',
              ]}
            >
              <div className="grid gap-4 lg:grid-cols-5">
                <TrailCardFeatured trail={trails[0]} className="lg:col-span-3" />
                <div className="flex flex-col gap-3 lg:col-span-2">
                  {trails.slice(1, 3).map((t) => (
                    <TrailCardRow key={t.id} trail={t} />
                  ))}
                </div>
              </div>
            </Recipe>

            <Recipe
              name="Photo block"
              anatomy="Image | gradient · protection scrim · on-image caption (always light)"
              doList={[
                'Always apply protection gradient when text overlays',
                'Use --text-on-image (never theme-flipping sand)',
                'Golden-hour, real sites',
              ]}
              dontList={[
                'Text capsules/scrim pills over photos',
                'Dark mode flipping caption to dark ink',
                'Stock tourist-selfie clichés',
              ]}
            >
              <PhotoBlock
                src={trails[1].image}
                alt={trails[1].imageAlt}
                aspect="video"
                radius="xl"
                className="max-w-xl"
              >
                <PhotoCaption
                  region={trails[1].region}
                  title={trails[1].name}
                  meta={<MetaRow parts={['1.8 km', '7 stops', 'Evening walk']} onImage />}
                />
              </PhotoBlock>
            </Recipe>

            <Recipe
              name="Stamp"
              anatomy="Seal (gold gradient) + name · earned | locked · optional celebrate settle"
              doList={[
                'Gold only for celebration — no emoji',
                'aria-label: “Earned stamp: Vigan”',
                '420ms scale-settle on earn (motion tokens)',
              ]}
              dontList={['Emoji confetti', 'Purchase-to-unlock stamps', 'Harsh bounce easing']}
            >
              <div className="flex flex-col items-start gap-4">
                <div className="grid w-full max-w-md grid-cols-3 gap-3">
                  <Stamp name="Intramuros" earned celebrate={stampCelebrate} />
                  <Stamp name="Vigan" earned />
                  <Stamp name="Banaue" />
                </div>
                <Button
                  size="sm"
                  className="rounded-full"
                  onClick={() => {
                    setStampCelebrate(false)
                    requestAnimationFrame(() => setStampCelebrate(true))
                  }}
                >
                  Preview earn settle
                </Button>
              </div>
            </Recipe>

            <Recipe
              name="Meta row"
              anatomy="parts[] joined with · (unicode middle dot)"
              doList={['Concrete numbers and years', 'Middle dot separator', 'Muted body color']}
              dontList={['Commas or pipes', 'Vague “a few hours”', 'Uppercase meta']}
            >
              <MetaRow parts={['Built 1571', '4.2 km', '12 stops']} className="text-base" />
            </Recipe>

            <Recipe
              name="Bottom nav"
              anatomy="Frosted bar · 4 tabs · 44px min targets · filled icon when active"
              doList={[
                'Frost only on map/photo overlays',
                'Sentence-case labels',
                'Respect safe-area inset',
              ]}
              dontList={['Glass on ordinary cards', 'More than 5 tabs', 'Emoji tab icons']}
            >
              <div className="mx-auto w-full max-w-[390px] overflow-hidden rounded-[var(--radius-xl)] border border-border shadow-raised">
                <div className="bg-muted/50 px-4 py-8 text-center text-sm text-muted-foreground">
                  App canvas · 390px
                </div>
                <BottomNav active={navActive} onChange={setNavActive} />
              </div>
            </Recipe>
          </div>
        </Section>

        <Section
          id="states"
          title="Empty & error states"
          description="Voice is a differentiator — show it. Practical, warm, never shaming."
        >
          <div className="grid gap-6 md:grid-cols-2">
            <EmptyState variant="stamps" onAction={() => undefined} />
            <EmptyState variant="offline" onAction={() => undefined} />
            <EmptyState variant="trails" onAction={() => undefined} />
            <ErrorState onRetry={() => undefined} />
          </div>
          <Card className="border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-xl">State coverage</CardTitle>
              <CardDescription>Every data-driven surface ships with the complete state cycle.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {['Loading or skeleton', 'Empty or filtered', 'Error with recovery', 'Success or completion'].map((label) => (
                <div key={label} className="flex items-center gap-2 rounded-xl bg-muted/50 p-3 text-sm">
                  <Check className="size-4 shrink-0 text-primary" />
                  {label}
                </div>
              ))}
            </CardContent>
          </Card>
        </Section>

        <Section
          id="accessibility"
          title="Accessibility & responsive behavior"
          description="Accessibility is part of each component contract, not a final QA pass."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-xl">Interaction requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                {[
                  'Interactive cards support Enter, Space, and a visible focus ring.',
                  'Touch targets are at least 44 × 44px.',
                  'Live regions are enabled only for asynchronous updates.',
                  'Meaning never depends on color alone.',
                  'Reduced motion removes travel and scale effects.',
                ].map((item) => (
                  <p key={item} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{item}</p>
                ))}
              </CardContent>
            </Card>
            <Card className="border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-xl">Reference widths</CardTitle>
                <CardDescription>Validate content, navigation, imagery, and tap targets at every width.</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  ['320', 'Narrow'],
                  ['390', 'App'],
                  ['768', 'Tablet'],
                  ['1440', 'Desktop'],
                ].map(([width, label]) => (
                  <div key={width} className="rounded-xl border border-border bg-muted/30 p-3 text-center">
                    <p className="font-mono text-sm font-semibold text-foreground">{width}px</p>
                    <p className="text-xs text-muted-foreground">{label}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </Section>

        <Section
          id="motion"
          title="Motion"
          description="Quiet and unhurried. Tokens in tokens/motion.css · GSAP via lib/motion.ts."
        >
          <div className="overflow-x-auto rounded-[var(--radius-lg)] border border-border">
            <table className="w-full min-w-[32rem] text-left text-sm">
              <thead className="bg-muted/50 text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 font-semibold">Moment</th>
                  <th className="px-4 py-3 font-semibold">Spec</th>
                  <th className="px-4 py-3 font-semibold">Token</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ['Content reveal', 'Fade + rise, ease-out', '--duration-reveal · --rise-lg'],
                  ['Hero load', 'Staggered fade + rise', '--duration-hero · --rise-hero'],
                  ['Stamp earn', 'Scale 1.08 → 1 settle', '--duration-slow'],
                  ['Press', 'Scale 0.98', '--press-scale'],
                  ['UI chrome', '160–260ms color/shadow', '--duration-fast · --duration-base'],
                ].map(([moment, spec, token]) => (
                  <tr key={moment}>
                    <td className="px-4 py-3 font-medium">{moment}</td>
                    <td className="px-4 py-3 text-muted-foreground">{spec}</td>
                    <td className="px-4 py-3 font-mono text-xs text-primary">{token}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground">
            No bounces, no infinite loops. Respects{' '}
            <code className="text-primary">prefers-reduced-motion</code>.
          </p>
        </Section>

        <Section
          id="content"
          title="Content fundamentals"
          description="A knowledgeable local guide — not a theme park."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                t: 'Casing',
                b: 'Sentence case everywhere. No uppercase eyebrows on marketing or app chrome.',
              },
              {
                t: 'Facts',
                b: 'Built 1571 · 4.2 km · 12 stops — concrete, middle dots, short stories.',
              },
              {
                t: 'Filipino flavor',
                b: 'Real place names; glosses like bahay na bato — ancestral stone house. Mabuhay only for onboarding/celebration.',
              },
              {
                t: 'Empty copy',
                b: '“No stamps yet. Your first trail is waiting.” — never scolding.',
              },
              {
                t: 'Errors',
                b: '“Couldn’t load this trail. Check connection and try again.”',
              },
              {
                t: 'Celebration',
                b: 'Gold stamp motif only. No emoji in UI.',
              },
            ].map((item) => (
              <Card key={item.t} className="border-border shadow-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{item.t}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.b}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="governance"
          title="Brand & cultural governance"
          description="Trust depends on accurate designation, respectful representation, and documented asset rights."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['UNESCO references', 'Use the UNESCO label only for verified designated sites. Never imply official affiliation or recreate the UNESCO emblem.'],
              ['Place & community names', 'Use locally accepted names, preserve diacritics, and confirm Indigenous community terminology with primary sources.'],
              ['Photography', 'Record source, creator, license, alt text, and permitted crops for every production image.'],
              ['Translation', 'Prefer human-reviewed Filipino and regional-language copy for heritage narratives and safety information.'],
              ['Historical claims', 'Attach a source and review date to dates, designations, and cultural claims before publishing.'],
              ['Ownership', 'Assign a maintainer and changelog entry for every token or component contract change.'],
            ].map(([title, body]) => (
              <Card key={title} className="border-border shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent><p className="text-sm leading-relaxed text-muted-foreground">{body}</p></CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <section className="border-t border-border py-12">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-display text-2xl text-[var(--text-heading)] sm:text-3xl">
              Composition mocks
            </h2>
            <p className="text-muted-foreground">
              Full-page and mobile layouts exist only to validate tokens and patterns under real
              hierarchy, density, and interaction. They are not product surfaces.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-full font-semibold">
                <Link to="/mock">Page mock</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full font-semibold">
                <Link to="/prototype">App mock</Link>
              </Button>
            </div>
          </div>
        </section>

        <p className="py-8 text-center text-xs text-muted-foreground">
          Never draw or approximate a UNESCO mark - use the gold badge motif instead.
        </p>
      </main>
    </div>
  )
}
