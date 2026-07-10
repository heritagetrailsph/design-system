import { BookOpen, Map, Stamp } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { steps } from '@/data/trails'
import { useGsapReveal } from '@/hooks/use-gsap-reveal'

const icons = {
  map: Map,
  book: BookOpen,
  stamp: Stamp,
}

export function HowItWorks() {
  const ref = useGsapReveal<HTMLElement>({ stagger: 0.14, y: 32 })

  return (
    <section id="how-it-works" ref={ref} className="scroll-mt-20 bg-muted/50 py-16 md:py-24">
      <div className="container-page">
        <div data-reveal className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <h2 className="font-display text-3xl tracking-tight text-indigo-900 sm:text-4xl dark:text-[#EDEAE3]">
            Your next trail, three quiet steps
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Proud but never boastful. Practical about travel. Reverent about history.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = icons[step.icon]
            return (
              <Card
                key={step.title}
                data-reveal
                className="border-border bg-card shadow-card transition-shadow duration-300 hover:shadow-raised"
              >
                <CardContent className="flex flex-col gap-4 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                      <Icon className="size-5" strokeWidth={1.75} />
                    </span>
                    <span className="font-display text-3xl font-medium text-sand-200 dark:text-sand-300">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-medium text-indigo-900 dark:text-[#EDEAE3]">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">
                    {step.body}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
