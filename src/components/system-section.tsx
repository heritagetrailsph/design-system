import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { EmptyState, MetaRow } from '@/components/patterns'
import { paletteSwatches } from '@/data/trails'
import { useGsapReveal } from '@/hooks/use-gsap-reveal'

/** In-page teaser of foundations on the composition mock — links back to the lab home. */
export function SystemSection() {
  const ref = useGsapReveal<HTMLElement>({ stagger: 0.1 })

  return (
    <section
      id="system"
      ref={ref}
      className="section-y scroll-mt-24 border-y border-border/60 bg-muted/35"
    >
      <div className="container-page">
        <div data-reveal className="mb-10 max-w-xl space-y-3 md:mb-14">
          <h2 className="font-display text-3xl tracking-tight text-[var(--text-heading)] sm:text-4xl lg:text-[2.75rem]">
            Back to the design system
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            This page is a layout mock. Full token docs, pattern recipes, and governance live on the{' '}
            <Link
              to="/"
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              design system home
            </Link>
            .
          </p>
        </div>

        <div data-reveal>
          <Tabs defaultValue="color" className="max-w-4xl">
            <TabsList className="mb-8 grid h-auto w-full max-w-md grid-cols-3 rounded-full bg-card p-1 shadow-card">
              <TabsTrigger value="color" className="rounded-full data-[state=active]:shadow-sm">
                Color
              </TabsTrigger>
              <TabsTrigger value="type" className="rounded-full data-[state=active]:shadow-sm">
                Type
              </TabsTrigger>
              <TabsTrigger value="states" className="rounded-full data-[state=active]:shadow-sm">
                States
              </TabsTrigger>
            </TabsList>

            <TabsContent value="color" className="outline-none">
              <Card className="border-border shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl">Palette preview</CardTitle>
                  <CardDescription>
                    From brand-tokens.css. Never redefine hex in components.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {paletteSwatches.map((swatch) => (
                      <div
                        key={swatch.token}
                        className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
                      >
                        <div
                          className="h-20 w-full"
                          style={{ background: `var(${swatch.token})` }}
                        />
                        <div className="space-y-0.5 p-3">
                          <p className="text-sm font-semibold text-foreground">{swatch.name}</p>
                          <p className="font-mono text-xs text-muted-foreground">{swatch.token}</p>
                          <p className="text-xs text-muted-foreground">{swatch.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="type" className="outline-none">
              <Card className="border-border shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl">Typography</CardTitle>
                  <CardDescription>
                    Quoly for brand headline moments. Poppins for modern, legible UI.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <p className="mb-2 text-sm font-medium text-muted-foreground">
                      Display · Quoly
                    </p>
                    <p className="font-display text-4xl leading-tight text-[var(--text-heading)] sm:text-5xl">
                      Calle Crisologo by lamplight
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <p className="mb-2 text-sm font-medium text-muted-foreground">Meta</p>
                    <MetaRow parts={['Built 1571', '4.2 km', '12 stops']} className="text-base" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="states" className="outline-none">
              <div className="grid gap-4 md:grid-cols-2">
                <EmptyState variant="stamps" />
                <EmptyState variant="offline" />
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild className="group/cta rounded-full font-semibold">
              <Link to="/">
                Open design system
                <span
                  className="flex size-6 items-center justify-center rounded-full bg-primary-foreground/15 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-px"
                  aria-hidden
                >
                  <ArrowUpRight className="size-3.5" />
                </span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="group/cta rounded-full font-semibold">
              <Link to="/prototype">
                Open app mock
                <span
                  className="flex size-6 items-center justify-center rounded-full bg-muted transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-px"
                  aria-hidden
                >
                  <ArrowUpRight className="size-3.5" />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
