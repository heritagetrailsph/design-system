import { BookOpen, Map, Stamp } from 'lucide-react'
import { steps } from '@/data/trails'
import { useGsapReveal } from '@/hooks/use-gsap-reveal'
import { cn } from '@/lib/utils'

const icons = {
  map: Map,
  book: BookOpen,
  stamp: Stamp,
}

export function HowItWorks() {
  const ref = useGsapReveal<HTMLElement>({ stagger: 0.12, y: 28 })

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="section-y scroll-mt-24 border-y border-border/60 bg-muted/40"
    >
      <div className="container-page">
        <div data-reveal className="mb-12 max-w-xl space-y-3 md:mb-16">
          <h2 className="font-display text-3xl tracking-tight text-[var(--text-heading)] sm:text-4xl lg:text-[2.75rem]">
            Your next trail, three quiet steps
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            Proud but never boastful. Practical about travel. Reverent about history.
          </p>
        </div>

        {/* Editorial staggered steps — not three equal cards */}
        <ol className="grid list-none gap-5 md:grid-cols-3 md:gap-6 md:pt-2">
          {steps.map((step, i) => {
            const Icon = icons[step.icon]

            return (
              <li
                key={step.title}
                data-reveal
                className={cn(
                  'group relative flex flex-col gap-5 rounded-[1.5rem] p-6 sm:p-7',
                  'bg-card/80 shadow-[0_1px_0_color-mix(in_oklab,white_50%,transparent)_inset]',
                  'ring-1 ring-border/80 transition-all duration-500',
                  'ease-[cubic-bezier(0.22,1,0.36,1)]',
                  'hover:-translate-y-1 hover:shadow-raised',
                  i === 1 && 'md:translate-y-8',
                  i === 2 && 'md:translate-y-3'
                )}
              >
                <span
                  className={cn(
                    'flex size-11 items-center justify-center rounded-2xl',
                    'bg-secondary text-primary transition-transform duration-300',
                    'group-hover:scale-105'
                  )}
                >
                  <Icon className="size-5" strokeWidth={1.5} />
                </span>
                <div className="space-y-2.5">
                  <h3 className="font-display text-xl font-medium tracking-tight text-[var(--text-heading)] md:text-[1.35rem]">
                    {step.title}
                  </h3>
                  <p className="max-w-[32ch] text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">
                    {step.body}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
