import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
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
import { LabNav } from '@/components/lab-nav'
import { fontStudyRoutes, primaryLabRoutes } from '@/data/lab-routes'
import { useTheme } from '@/hooks/use-theme'
import { cn } from '@/lib/utils'

type SiteHeaderProps = {
  /** Optional bar above the chrome (e.g. mock-surface notice) */
  banner?: ReactNode
}

export function SiteHeader({ banner }: SiteHeaderProps) {
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {banner}
      <div className="container-page pt-3 md:pt-4">
        <div
          className={cn(
            'flex h-14 items-center justify-between gap-3 rounded-full border border-border/70',
            'bg-background/75 px-3 shadow-[0_8px_32px_-12px_color-mix(in_oklab,var(--ph-indigo-900)_14%,transparent)]',
            'backdrop-blur-xl backdrop-saturate-150 md:h-16 md:px-4',
            'dark:bg-background/70 dark:shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)]'
          )}
        >
          <Logo
            href="/"
            markSize={32}
            className="max-w-[calc(100%-5.5rem)] min-w-0 shrink pl-1 lg:max-w-none lg:shrink-0"
            tagline="Design system lab"
          />

          <LabNav className="hidden xl:flex" />

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

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="size-9 rounded-full xl:hidden"
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
                    <Logo href="/" markSize={32} tagline="Design system lab" />
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
                  {primaryLabRoutes.map((link, i) => {
                    const className = cn(
                      'rounded-2xl px-3 py-3 text-base font-medium text-foreground no-underline',
                      'transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-muted',
                      'animate-in fade-in slide-in-from-bottom-2'
                    )
                    const style = {
                      animationDelay: `${i * 40}ms`,
                      animationFillMode: 'both' as const,
                    }

                    return (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => setOpen(false)}
                        className={className}
                        style={style}
                      >
                        {link.label}
                      </Link>
                    )
                  })}
                  <p className="mb-1 mt-6 px-3 text-xs font-medium text-muted-foreground">
                    Font studies
                  </p>
                  {fontStudyRoutes.map((link, i) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'rounded-2xl px-3 py-3 text-base font-medium text-foreground no-underline',
                        'transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-muted',
                        'animate-in fade-in slide-in-from-bottom-2'
                      )}
                      style={{
                        animationDelay: `${(primaryLabRoutes.length + i) * 40}ms`,
                        animationFillMode: 'both',
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
