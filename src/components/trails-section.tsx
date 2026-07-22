import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TrailCardFeatured, TrailCardRow } from '@/components/patterns'
import { trails } from '@/data/trails'
import { useGsapReveal } from '@/hooks/use-gsap-reveal'

export function TrailsSection() {
  const ref = useGsapReveal<HTMLElement>({ stagger: 0.12 })
  const [featured, ...rest] = trails

  return (
    <section id="trails" ref={ref} className="section-y scroll-mt-24">
      <div className="container-page">
        <div
          data-reveal
          className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl space-y-3">
            <h2 className="font-display text-3xl tracking-tight text-[var(--text-heading)] sm:text-4xl lg:text-[2.75rem]">
              Walk places that remember
            </h2>
            <p className="max-w-[48ch] text-base leading-relaxed text-muted-foreground md:text-lg">
              Real sites, concrete facts, short stories. Built 1571 · 4.2 km · 12 stops - not textbook paragraphs.
            </p>
          </div>
          <Button
            variant="outline"
            className="group/cta w-fit rounded-full font-semibold"
            asChild
          >
            <a href="/#patterns">
              View patterns
              <span
                className="flex size-6 items-center justify-center rounded-full bg-muted transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-px"
                aria-hidden
              >
                <ArrowUpRight className="size-3.5" />
              </span>
            </a>
          </Button>
        </div>

        <div className="grid gap-5 lg:grid-cols-5 lg:gap-6">
          <div data-reveal className="bezel-shell lg:col-span-3">
            <div className="bezel-core">
              <TrailCardFeatured
                trail={featured}
                className="rounded-none border-0 shadow-none ring-0"
              />
            </div>
          </div>
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
