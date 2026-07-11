import { Link } from 'react-router-dom'
import { Separator } from '@/components/ui/separator'
import { Logo } from '@/components/brand/logo'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/25 pb-12 pt-14">
      <div className="container-page">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-4">
            <Logo href="#top" markSize={40} />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Calm, reverent heritage walks across the Philippines. A knowledgeable local guide, not a theme park.
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-muted-foreground"
            aria-label="Footer"
          >
            <a href="#trails" className="transition-colors hover:text-primary">
              Trails
            </a>
            <a href="#how-it-works" className="transition-colors hover:text-primary">
              How it works
            </a>
            <a href="#passport" className="transition-colors hover:text-primary">
              Passport
            </a>
            <Link to="/system" className="transition-colors hover:text-primary">
              Design system
            </Link>
            <Link to="/prototype" className="transition-colors hover:text-primary">
              App prototype
            </Link>
            <a href="#cta" className="transition-colors hover:text-primary">
              Waitlist
            </a>
          </nav>
        </div>

        <Separator className="my-9" />

        <div className="flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Philippines UNESCO Trails. All rights reserved.</p>
          <p>Never draw or approximate a UNESCO mark - use the gold badge motif instead.</p>
        </div>
      </div>
    </footer>
  )
}
