import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Stamp } from '@/components/patterns'
import { useGsapReveal } from '@/hooks/use-gsap-reveal'
import { cn } from '@/lib/utils'

const stamps = [
  { name: 'Intramuros', earned: true },
  { name: 'Vigan', earned: true },
  { name: 'Banaue', earned: false },
  { name: 'Bohol', earned: false },
  { name: 'Reef walk', earned: false },
  { name: 'San Agustin', earned: true },
]

const benefits = [
  'Stamps for completed trails only - no purchase unlocks',
  'Offline-friendly walks with story cards at each stop',
  'Dark mode that keeps gold bright and sand warm',
]

export function PassportSection() {
  const ref = useGsapReveal<HTMLElement>({ stagger: 0.12 })

  return (
    <section id="passport" ref={ref} className="section-y scroll-mt-24">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div data-reveal className="space-y-6">
            <h2 className="font-display max-w-[16ch] text-3xl tracking-tight text-[var(--text-heading)] sm:text-4xl lg:text-[2.75rem]">
              No emoji. Just gold stamps.
            </h2>
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              Celebration is quiet and earned. Finish a trail and a honey-gold stamp settles into
              your passport, the same motif you see on UNESCO badges and ratings.
            </p>
            <ul className="space-y-3.5 text-sm text-foreground md:text-base">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className={cn(
                      'mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full',
                      'bg-sea-100 text-sea-700 dark:bg-sea-100 dark:text-sea-700'
                    )}
                  >
                    <Check className="size-3" strokeWidth={2.5} />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <Button size="lg" className="pressable rounded-full font-semibold" asChild>
              <a href="/system#patterns">Open pattern docs</a>
            </Button>
          </div>

          <div data-reveal className="bezel-shell">
            <div
              className="bezel-core p-6 sm:p-8"
              style={{ background: 'var(--gradient-warm)' }}
            >
              <div className="mb-7 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-sun-600">Your stamps</p>
                  <p className="font-display text-xl tracking-tight text-[var(--text-heading)]">
                    Ana&rsquo;s passport
                  </p>
                </div>
                <span className="rounded-full bg-card px-3.5 py-1.5 text-sm font-semibold tabular-nums text-sun-600 shadow-card">
                  3 / 6
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {stamps.map((stamp) => (
                  <Stamp key={stamp.name} name={stamp.name} earned={stamp.earned} />
                ))}
              </div>

              <p className="mt-7 text-center text-sm text-muted-foreground">
                No stamps yet? Your first trail is waiting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
