import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useGsapReveal } from '@/hooks/use-gsap-reveal'

export function CtaSection() {
  const ref = useGsapReveal<HTMLElement>({ stagger: 0.1, y: 32 })
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const value = email.trim()
    if (!value) {
      setError('Enter your email to join the waitlist.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError('That email does not look valid.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <section id="cta" ref={ref} className="section-y scroll-mt-24">
      <div className="container-page">
        <div data-reveal className="bezel-shell p-1.5">
          <div
            className="relative overflow-hidden rounded-[calc(2rem-0.375rem)] px-6 py-14 text-center sm:px-12 sm:py-16 md:py-20"
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
                className="font-display text-3xl tracking-tight text-[var(--text-on-image)] sm:text-4xl md:text-[2.75rem]"
              >
                Your first trail is waiting
              </h2>
              <p
                data-reveal
                className="mx-auto max-w-[40ch] text-base leading-relaxed text-[var(--text-on-image)]/80 md:text-lg"
              >
                Be first to walk curated routes, earn stamps, and carry a quiet guide through the old towns.
              </p>

              {submitted ? (
                <p
                  data-reveal
                  role="status"
                  className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-[var(--text-on-image)] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
                >
                  Mabuhay. You are on the list. We will write when the trails open.
                </p>
              ) : (
                <form
                  data-reveal
                  onSubmit={handleSubmit}
                  className="mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-start"
                  noValidate
                >
                  <div className="flex-1 space-y-1.5 text-left">
                    <Label htmlFor="email" className="sr-only">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        if (error) setError('')
                      }}
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? 'email-error' : undefined}
                      className="h-12 rounded-full border-white/20 bg-white/95 text-ink-900 placeholder:text-ink-300 focus-visible:ring-sun-300"
                    />
                    {error ? (
                      <p id="email-error" className="px-1 text-sm text-sun-300" role="alert">
                        {error}
                      </p>
                    ) : null}
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="pressable h-12 shrink-0 rounded-full bg-sun-500 px-6 font-semibold text-ink-900 hover:bg-sun-300"
                  >
                    Join waitlist
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
