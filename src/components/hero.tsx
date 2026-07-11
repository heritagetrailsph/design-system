import { ArrowRight, MapPin, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { PhotoBlock, PhotoCaption } from '@/components/patterns'
import { MetaRowFromString } from '@/components/patterns/meta-row'
import { trails } from '@/data/trails'
import { useGsapHeroReveal } from '@/hooks/use-gsap-reveal'

export function Hero() {
  const ref = useGsapHeroReveal<HTMLElement>()
  const featured = trails[0]

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.55] dark:opacity-40"
        style={{ background: 'var(--gradient-warm)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-24 right-0 h-[28rem] w-[28rem] rounded-full opacity-30 blur-3xl dark:opacity-20"
        style={{ background: 'radial-gradient(circle, var(--ph-sun-300), transparent 70%)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-16 h-[24rem] w-[24rem] rounded-full opacity-25 blur-3xl dark:opacity-15"
        style={{ background: 'radial-gradient(circle, var(--ph-indigo-200), transparent 70%)' }}
        aria-hidden
      />

      <div className="container-page relative grid items-center gap-12 py-16 md:grid-cols-2 md:gap-16 md:py-24 lg:py-28">
        <div className="flex flex-col items-start gap-6">
          <Badge data-reveal variant="gold" className="gap-1.5 px-3 py-1 text-[0.7rem]">
            <Sparkles className="size-3" />
            UNESCO Philippines · Heritage walks
          </Badge>

          <h1
            data-reveal
            className="font-display text-[2.5rem] leading-[1.1] tracking-tight text-[var(--text-heading)] text-balance sm:text-5xl lg:text-[3.5rem]"
          >
            A quiet morning in the old town
          </h1>

          <p
            data-reveal
            className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            Curated Philippine heritage trails — Intramuros, Vigan, Banaue, Bohol, and beyond.
            Walk the stories. Collect the stamps. Travel with reverence.
          </p>

          <div data-reveal className="flex flex-wrap items-center gap-3 pt-1">
            <Button asChild size="xl" className="shadow-card">
              <a href="#trails">
                Explore trails
                <ArrowRight className="size-4" data-icon="inline-end" />
              </a>
            </Button>
            <Button asChild variant="outline" size="xl" className="rounded-full border-border bg-card/60">
              <a href="#how-it-works">How it works</a>
            </Button>
          </div>

          <div
            data-reveal
            className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5 text-primary" />
              40+ curated stops
            </span>
            <span>Sentence-case, stamp-first UI</span>
            <span>Designed for golden hour</span>
          </div>
        </div>

        <div data-reveal className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div
            className="absolute -inset-3 rounded-[2rem] opacity-60 blur-2xl dark:opacity-40"
            style={{ background: 'linear-gradient(135deg, var(--ph-indigo-200), var(--ph-sun-300))' }}
            aria-hidden
          />
          <article className="relative overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-raised">
            <PhotoBlock
              src={featured.image}
              alt={featured.imageAlt}
              gradient={featured.gradient}
              aspect="photo"
              radius="none"
            >
              <div className="absolute left-4 top-4">
                <Badge variant="gold" className="shadow-sm">
                  UNESCO
                </Badge>
              </div>
              <PhotoCaption
                region={featured.region}
                title={featured.name}
                meta={<MetaRowFromString meta={featured.meta} onImage />}
              />
            </PhotoBlock>
            <div className="space-y-3 p-5 sm:p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">{featured.story}</p>
              <div className="flex items-center justify-between gap-3">
                <div className="flex -space-x-2">
                  {['A', 'M', 'J'].map((initial, i) => (
                    <span
                      key={initial}
                      className="flex size-8 items-center justify-center rounded-full border-2 border-card text-xs font-semibold text-primary-foreground"
                      style={{
                        background: ['#1958AB', '#D9272E', '#559447'][i],
                        zIndex: 3 - i,
                      }}
                    >
                      {initial}
                    </span>
                  ))}
                  <span className="flex size-8 items-center justify-center rounded-full border-2 border-card bg-muted text-[0.65rem] font-semibold text-muted-foreground">
                    +2k
                  </span>
                </div>
                <Button size="sm" className="rounded-full font-semibold">
                  Start trail
                </Button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
