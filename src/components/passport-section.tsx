import { Award, CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Stamp } from '@/components/patterns'
import { useGsapReveal } from '@/hooks/use-gsap-reveal'

const stamps = [
  { name: 'Intramuros', earned: true },
  { name: 'Vigan', earned: true },
  { name: 'Banaue', earned: false },
  { name: 'Bohol', earned: false },
  { name: 'Reef walk', earned: false },
  { name: 'San Agustin', earned: true },
]

export function PassportSection() {
  const ref = useGsapReveal<HTMLElement>({ stagger: 0.12 })

  return (
    <section id="passport" ref={ref} className="scroll-mt-20 py-16 md:py-24">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div data-reveal className="space-y-6">
            <Badge variant="gold" className="gap-1.5">
              <Award className="size-3" />
              Heritage passport
            </Badge>
            <h2 className="font-display text-3xl tracking-tight text-[var(--text-heading)] sm:text-4xl">
              No emoji. Just gold stamps.
            </h2>
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              Celebration is quiet and earned. Finish a trail and a honey-gold stamp settles into
              your passport — the same motif you see on UNESCO badges and ratings.
            </p>
            <ul className="space-y-3 text-sm text-foreground md:text-base">
              {[
                'Stamps for completed trails only — no purchase unlocks',
                'Offline-friendly walks with story cards at each stop',
                'Dark mode that keeps gold bright and sand warm',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-sea-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button size="lg" className="rounded-full font-semibold" asChild>
              <a href="/system#patterns">Open pattern docs</a>
            </Button>
          </div>

          <div
            data-reveal
            className="relative rounded-[1.75rem] border border-border p-6 shadow-raised sm:p-8"
            style={{ background: 'var(--gradient-warm)' }}
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-sun-600">Your stamps</p>
                <p className="font-display text-xl text-[var(--text-heading)]">Ana’s passport</p>
              </div>
              <span className="rounded-full bg-card px-3 py-1 text-sm font-semibold text-sun-600 shadow-card">
                3 / 6
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {stamps.map((stamp) => (
                <Stamp key={stamp.name} name={stamp.name} earned={stamp.earned} />
              ))}
            </div>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              No stamps yet? Your first trail is waiting.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
