import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
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
import { trails, paletteSwatches } from '@/data/trails'
import { useTheme } from '@/hooks/use-theme'
import { cn } from '@/lib/utils'

const nav = [
  { id: 'foundations', label: 'Foundations' },
  { id: 'patterns', label: 'Patterns' },
  { id: 'states', label: 'States' },
  { id: 'motion', label: 'Motion' },
  { id: 'content', label: 'Content' },
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
        <CardTitle className="font-display text-xl">{name}</CardTitle>
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

  return (
    <div className="min-h-svh bg-background">
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
        <div className="container-page flex h-14 items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <Button asChild variant="ghost" size="sm" className="rounded-full">
              <Link to="/">
                <ArrowLeft className="size-4" />
                Site
              </Link>
            </Button>
            <Separator orientation="vertical" className="hidden h-6 sm:block" />
            <LogoMark size={28} className="hidden sm:block" />
            <span className="truncate font-display text-lg text-[var(--text-heading)]">
              Design system
            </span>
            <Badge variant="secondary" className="hidden sm:inline-flex">
              v1.2
            </Badge>
          </div>
          <div className="flex items-center gap-1.5">
            <Button asChild variant="ghost" size="sm" className="hidden rounded-full sm:inline-flex">
              <Link to="/prototype">App prototype</Link>
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
          className="container-page flex gap-1 overflow-x-auto pb-2"
          aria-label="System sections"
        >
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="shrink-0 rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground no-underline transition-brand hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="container-page pb-24">
        <div className="max-w-3xl py-12">
          <h1 className="font-display text-4xl tracking-tight text-[var(--text-heading)] sm:text-5xl">
            Philippines UNESCO Trails
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Living documentation for tokens, product patterns, and voice. Single source of truth:
            parent <code className="text-sm text-primary">tokens/</code> bridged into shadcn via{' '}
            <code className="text-sm text-primary">brand-bridge.css</code>.
          </p>
        </div>

        <Section
          id="foundations"
          title="Foundations"
          description="Color, type, and semantic tones — always through tokens, never ad-hoc hex in components."
        >
          <Card className="mb-8 border-border shadow-card">
            <CardHeader>
              <CardTitle className="font-display text-xl">Logo — favicon-first mark</CardTitle>
              <CardDescription>
                The favicon is now the main brand icon across the browser tab, header, footer, and
                system page. Keep the same asset everywhere so the product reads as one system,
                not a set of separate logos. Component:{' '}
                <code className="text-primary">components/brand/logo.tsx</code>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-end gap-8 rounded-[var(--radius-lg)] border border-border bg-muted/30 p-6">
                <div className="flex flex-col items-center gap-2">
                  <LogoMark size={64} title="Philippines UNESCO Trails mark" />
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
                <div className="flex flex-col items-center gap-2 rounded-xl bg-indigo-900 p-4">
                  <LogoMark size={48} />
                  <span className="text-xs text-sand-100/70">On inverse</span>
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
                  Display · Spectral 500
                </p>
                <p className="font-display text-4xl text-[var(--text-heading)]">
                  Calle Crisologo by lamplight
                </p>
              </div>
              <Separator />
              <div>
                <p className="mb-2 text-sm font-medium text-muted-foreground">
                  Body · Figtree / 1.6
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
        </Section>

        <Section
          id="patterns"
          title="Product patterns"
          description="Philippines UNESCO Trails objects — not generic widgets. These are the recipes to ship against."
        >
          <div className="space-y-8">
            <Recipe
              name="Trail card"
              anatomy="PhotoBlock + Badge + PhotoCaption + MetaRow · variants: featured | row"
              doList={[
                'Real photography or brand gradient fallback',
                'Sentence-case trail names in Spectral',
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
                  <CardTitle className="font-display text-lg">{item.t}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.b}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <p
          className={cn(
            'py-8 text-center text-xs text-muted-foreground'
          )}
        >
          Never draw or approximate a UNESCO mark — use the gold badge motif instead.
        </p>
      </main>
    </div>
  )
}
