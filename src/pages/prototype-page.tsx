import { Link } from 'react-router-dom'
import {
  Bookmark,
  Footprints,
  Moon,
  Smartphone,
  Stamp,
  Sun,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { LogoMark } from '@/components/brand/logo'
import { LabNav } from '@/components/lab-nav'
import { MockBanner } from '@/components/mock-banner'
import { PhoneFrame, MobileApp } from '@/components/prototype'
import { useTheme } from '@/hooks/use-theme'

const flows = [
  {
    icon: Footprints,
    title: 'Browse and open a trail',
    body: 'Filter chips, search, featured photo, and list rows wired to trail detail.',
  },
  {
    icon: Bookmark,
    title: 'Save and start trail',
    body: 'Bookmark toggles a toast. Start trail completes the walk and awards a gold stamp.',
  },
  {
    icon: Stamp,
    title: 'Passport celebrate',
    body: 'Progress bar, earned seals, and 420ms scale-settle on the new stamp.',
  },
]

/**
 * App composition mock.
 * Interactive phone flow for pattern validation — not a shipping product.
 */
export function PrototypePage() {
  const { theme, toggle } = useTheme()

  return (
    <div className="min-h-svh bg-background">
      <MockBanner label="Mobile app flow mock for pattern and state testing. Session state is ephemeral." />
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
        <div className="container-page flex h-14 items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <LogoMark size={28} className="hidden sm:block" />
            <span className="truncate text-lg text-[var(--text-heading)]">
              App mock
            </span>
            <Badge variant="secondary" className="hidden shrink-0 sm:inline-flex">
              Mock
            </Badge>
            <Separator orientation="vertical" className="hidden h-6 sm:block" />
            <LabNav dense className="hidden md:flex" />
          </div>
          <div className="flex items-center gap-1.5">
            <Button asChild variant="ghost" size="sm" className="rounded-full sm:hidden">
              <Link to="/">System</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggle}
              aria-label="Toggle theme"
              className="rounded-xl"
            >
              {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </Button>
          </div>
        </div>
      </header>

      <main className="container-page py-10 md:py-14">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,24.5rem)] lg:items-start lg:gap-16">
          <div className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted-foreground shadow-sm">
                <Smartphone className="size-3.5 text-primary" />
                Pattern lab · app mock
              </div>
              <h1 className="font-display text-3xl leading-tight text-[var(--text-heading)] sm:text-4xl md:text-[2.75rem]">
                Mobile flow for component QA
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Interactive mock built from the same tokens and patterns documented in the{' '}
                <Link
                  to="/"
                  className="font-semibold text-primary underline-offset-4 hover:underline"
                >
                  design system
                </Link>
                . Trail cards, photo protection, bottom nav, stamps, and voice-led empties under real taps.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {flows.map((f) => (
                <Card key={f.title} className="border-border shadow-card">
                  <CardHeader className="pb-2">
                    <div className="mb-2 flex size-9 items-center justify-center rounded-xl bg-secondary text-primary">
                      <f.icon className="size-4" strokeWidth={1.75} />
                    </div>
                    <CardTitle className="text-lg">{f.title}</CardTitle>
                    <CardDescription className="leading-relaxed">{f.body}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Card className="border-dashed border-border bg-muted/30 shadow-none">
              <CardContent className="space-y-2 p-5 text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">Suggested test path</p>
                <ol className="list-decimal space-y-1.5 pl-4 leading-relaxed">
                  <li>
                    Open{' '}
                    <strong className="font-semibold text-foreground">Banaue</strong> or{' '}
                    <strong className="font-semibold text-foreground">Bohol</strong> from Explore
                    (locked stamps).
                  </li>
                  <li>Toggle the bookmark, switch Stops / History / Tips.</li>
                  <li>
                    Tap <strong className="font-semibold text-foreground">Start trail</strong> to earn
                    a stamp and land on Passport.
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>

          <div className="mx-auto w-full max-w-[390px] lg:mx-0 lg:max-w-none lg:sticky lg:top-24">
            <PhoneFrame caption="Scroll and tap inside the device. State is mock-only for this session.">
              <MobileApp />
            </PhoneFrame>
          </div>
        </div>
      </main>
    </div>
  )
}
