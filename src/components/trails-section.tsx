import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TrailCardFeatured, TrailCardRow } from '@/components/patterns'
import { trails } from '@/data/trails'
import { useGsapReveal } from '@/hooks/use-gsap-reveal'

export function TrailsSection() {
  const ref = useGsapReveal<HTMLElement>({ stagger: 0.12 })
  const [featured, ...rest] = trails

  return (
    <section id="trails" ref={ref} className="scroll-mt-20 py-16 md:py-24">
      <div className="container-page">
        <div
          data-reveal
          className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl space-y-3">
            <h2 className="font-display text-3xl tracking-tight text-[var(--text-heading)] sm:text-4xl">
              Walk places that remember
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Real sites, concrete facts, short stories. Built 1571 · 4.2 km · 12 stops — not
              textbook paragraphs.
            </p>
          </div>
          <Button variant="outline" className="w-fit rounded-full font-semibold" asChild>
            <a href="/system#patterns">
              View patterns
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          <TrailCardFeatured data-reveal trail={featured} className="lg:col-span-3" />
          <div className="flex flex-col gap-4 lg:col-span-2">
            {rest.map((trail) => (
              <TrailCardRow key={trail.id} data-reveal trail={trail} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
