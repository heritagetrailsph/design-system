import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useGsapReveal } from '@/hooks/use-gsap-reveal'

export function CtaSection() {
  const ref = useGsapReveal<HTMLElement>({ stagger: 0.1, y: 32 })
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  return (
    <section id="cta" ref={ref} className="scroll-mt-20 py-16 md:py-24">
      <div className="container-page">
        <div
          data-reveal
          className="relative overflow-hidden rounded-[1.75rem] px-6 py-12 text-center shadow-raised sm:px-12 sm:py-16 md:py-20"
          style={{ background: 'var(--gradient-hero)' }}
        >
          <div
            className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full opacity-30 blur-3xl"
            style={{ background: 'var(--ph-sun-500)' }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-10 size-56 rounded-full opacity-20 blur-3xl"
            style={{ background: 'var(--ph-sea-500)' }}
            aria-hidden
          />

          <div className="relative mx-auto max-w-xl space-y-6">
            <h2
              data-reveal
              className="font-display text-3xl tracking-tight text-[#FCFBF8] sm:text-4xl md:text-[2.75rem]"
            >
              Your first trail is waiting
            </h2>
            <p data-reveal className="text-base leading-relaxed text-[#FCFBF8]/80 md:text-lg">
              Join the waitlist for Philippines UNESCO Trails. Be first to walk curated routes, earn
              stamps, and carry a quiet guide through the old towns.
            </p>

            {submitted ? (
              <p
                data-reveal
                className="rounded-2xl bg-white/10 px-4 py-4 text-[#FCFBF8] backdrop-blur-sm"
              >
                Mabuhay! You’re on the list — we’ll write when the trails open.
              </p>
            ) : (
              <form
                data-reveal
                onSubmit={handleSubmit}
                className="mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-end"
              >
                <div className="flex-1 space-y-1.5 text-left">
                  <Label htmlFor="email" className="sr-only">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 rounded-full border-white/20 bg-white/95 text-ink-900 placeholder:text-ink-300 focus-visible:ring-sun-300"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 shrink-0 rounded-full bg-sun-500 px-6 font-semibold text-ink-900 hover:bg-sun-300"
                >
                  Join waitlist
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
