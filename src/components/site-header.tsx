import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Logo } from '@/components/brand/logo'
import { useTheme } from '@/hooks/use-theme'
import { cn } from '@/lib/utils'

const navLinks: { href: string; label: string; route?: boolean }[] = [
  { href: '#trails', label: 'Trails' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#passport', label: 'Passport' },
  { href: '/prototype', label: 'App prototype', route: true },
  { href: '/system', label: 'Design system', route: true },
]

export function SiteHeader() {
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 md:pt-4">
      <div className="container-page">
        <div
          className={cn(
            'flex h-14 items-center justify-between gap-3 rounded-full border border-border/70',
            'bg-background/75 px-3 shadow-[0_8px_32px_-12px_color-mix(in_oklab,var(--ph-indigo-900)_14%,transparent)]',
            'backdrop-blur-xl backdrop-saturate-150 md:h-16 md:px-4',
            'dark:bg-background/70 dark:shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)]'
          )}
        >
          <Logo href="#top" markSize={32} className="min-w-0 shrink-0 pl-1" />

          <nav
            className="hidden items-center gap-0.5 lg:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => {
              const isRoute = 'route' in link && link.route
              const active = isRoute && location.pathname === link.href
              const className = cn(
                'rounded-full px-3 py-1.5 text-sm font-medium no-underline transition-all duration-300',
                'ease-[cubic-bezier(0.22,1,0.36,1)]',
                active
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )

              return isRoute ? (
                <Link key={link.href} to={link.href} className={className}>
                  {link.label}
                </Link>
              ) : (
                <a key={link.href} href={link.href} className={className}>
                  {link.label}
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggle}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="size-9 rounded-full"
            >
              {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </Button>

            <Button
              asChild
              size="default"
              className="group/cta hidden h-10 rounded-full px-5 font-semibold sm:inline-flex"
            >
              <a href="#cta">
                Join waitlist
                <span
                  className={cn(
                    'ml-0.5 flex size-6 items-center justify-center rounded-full',
                    'bg-primary-foreground/15 transition-transform duration-300',
                    'ease-[cubic-bezier(0.22,1,0.36,1)]',
                    'group-hover/cta:translate-x-0.5 group-hover/cta:scale-105'
                  )}
                  aria-hidden
                >
                  <span className="text-xs">↗</span>
                </span>
              </a>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="size-9 rounded-full lg:hidden"
                  aria-label={open ? 'Close menu' : 'Open menu'}
                >
                  {open ? <X className="size-4" /> : <Menu className="size-4" />}
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[min(100%,20rem)] border-border bg-background/95 backdrop-blur-xl"
              >
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <Logo href="#top" markSize={32} />
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
                  {navLinks.map((link, i) => {
                    const isRoute = 'route' in link && link.route
                    const className = cn(
                      'rounded-2xl px-3 py-3 text-base font-medium text-foreground no-underline',
                      'transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-muted',
                      'animate-in fade-in slide-in-from-bottom-2'
                    )
                    const style = { animationDelay: `${i * 40}ms`, animationFillMode: 'both' as const }

                    return isRoute ? (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => setOpen(false)}
                        className={className}
                        style={style}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={className}
                        style={style}
                      >
                        {link.label}
                      </a>
                    )
                  })}
                  <Button
                    asChild
                    className="mt-4 h-12 rounded-full font-semibold"
                    size="lg"
                  >
                    <a href="#cta" onClick={() => setOpen(false)}>
                      Join waitlist
                    </a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
