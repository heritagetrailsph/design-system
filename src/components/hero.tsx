import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { PhotoBlock, PhotoCaption } from '@/components/patterns'
import { MetaRowFromString } from '@/components/patterns/meta-row'
import { trails } from '@/data/trails'
import { useGsapHeroReveal } from '@/hooks/use-gsap-reveal'
import { cn } from '@/lib/utils'

export function Hero() {
  const ref = useGsapHeroReveal<HTMLElement>()
  const featured = trails[0]

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5] dark:opacity-35"
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

      <div className="container-page relative grid min-h-[min(100dvh,52rem)] items-center gap-10 pb-16 pt-24 md:grid-cols-2 md:gap-14 md:pb-20 md:pt-24 lg:gap-20 lg:pb-24">
        <div className="flex flex-col items-start gap-5 md:gap-6">
          <p
            data-reveal
            className="text-sm font-medium text-primary"
          >
            UNESCO Philippines · Heritage walks
          </p>

          <h1
            data-reveal
            className="font-display max-w-[14ch] text-[2.4rem] leading-[1.08] tracking-tight text-[var(--text-heading)] sm:text-5xl lg:text-[3.35rem]"
          >
            A quiet morning in the old town
          </h1>

          <p
            data-reveal
            className="max-w-[36ch] text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            Curated walks through Intramuros, Vigan, Banaue, and Bohol. Walk the stories. Collect the stamps.
          </p>

          <div data-reveal className="flex flex-wrap items-center gap-3 pt-1">
            <Button asChild size="xl" className="group/cta pressable shadow-card">
              <a href="#trails">
                Explore trails
                <span
                  className={cn(
                    'flex size-8 items-center justify-center rounded-full',
                    'bg-primary-foreground/15 transition-transform duration-300',
                    'ease-[cubic-bezier(0.22,1,0.36,1)]',
                    'group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-px group-hover/cta:scale-105'
                  )}
                  aria-hidden
                >
                  <ArrowRight className="size-3.5" />
                </span>
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="xl"
              className="pressable rounded-full border-border bg-card/70 backdrop-blur-sm"
            >
              <a href="#how-it-works">How it works</a>
            </Button>
          </div>
        </div>

        <div data-reveal className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div
            className="absolute -inset-4 rounded-[2.25rem] opacity-50 blur-2xl dark:opacity-30"
            style={{ background: 'linear-gradient(135deg, var(--ph-indigo-200), var(--ph-sun-300))' }}
            aria-hidden
          />
          <div className="bezel-shell relative">
            <article className="bezel-core">
              <PhotoBlock
                src={featured.image}
                alt={featured.imageAlt}
                gradient={featured.gradient}
                aspect="photo"
                radius="none"
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 1024px) 32rem, (min-width: 768px) 45vw, 100vw"
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
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {featured.story}
                </p>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex -space-x-2">
                    {['A', 'M', 'J'].map((initial, i) => (
                      <span
                        key={initial}
                        className="flex size-8 items-center justify-center rounded-full border-2 border-card text-xs font-semibold text-primary-foreground"
                        style={{
                          background: [
                            'var(--tone-history-solid)',
                            'var(--tone-culture-solid)',
                            'var(--tone-nature-solid)',
                          ][i],
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
                  <Button size="sm" className="pressable rounded-full font-semibold" asChild>
                    <a href="#trails">Start trail</a>
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
