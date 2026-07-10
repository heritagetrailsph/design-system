import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Moon, Sun } from 'lucide-react'
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

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-[4.25rem]">
        <Logo href="#top" markSize={36} className="min-w-0" />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) =>
            'route' in link && link.route ? (
              <Link
                key={link.href}
                to={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground no-underline transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground no-underline transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="rounded-xl"
          >
            {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>

          <Button asChild size="default" className="hidden rounded-full font-semibold sm:inline-flex">
            <a href="#cta">Start exploring</a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-xl md:hidden" aria-label="Open menu">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,20rem)] border-border bg-background">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <Logo href="#top" markSize={32} />
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile">
                {navLinks.map((link) =>
                  'route' in link && link.route ? (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'rounded-xl px-3 py-3 text-base font-medium text-foreground no-underline transition-colors hover:bg-muted'
                      )}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'rounded-xl px-3 py-3 text-base font-medium text-foreground no-underline transition-colors hover:bg-muted'
                      )}
                    >
                      {link.label}
                    </a>
                  )
                )}
                <Button asChild className="mt-4 rounded-full font-semibold" size="lg">
                  <a href="#cta" onClick={() => setOpen(false)}>
                    Start exploring
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
