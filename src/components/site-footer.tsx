import { Link } from 'react-router-dom'
import { Separator } from '@/components/ui/separator'
import { Logo } from '@/components/brand/logo'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/25 pb-12 pt-14">
      <div className="container-page">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-4">
            <Logo href="/" markSize={40} tagline="Design system lab" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Living design system for PH UNESCO Heritage and Nature Trails. Page and app
              surfaces here are mocks for testing tokens, patterns, and voice —
              not a production product site.
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-muted-foreground"
            aria-label="Footer"
          >
            <Link to="/" className="transition-colors hover:text-primary">
              Design system
            </Link>
            <Link to="/mock" className="transition-colors hover:text-primary">
              Page mock
            </Link>
            <Link to="/prototype" className="transition-colors hover:text-primary">
              App mock
            </Link>
            <a href="/#patterns" className="transition-colors hover:text-primary">
              Patterns
            </a>
            <a href="/#foundations" className="transition-colors hover:text-primary">
              Foundations
            </a>
          </nav>
        </div>

        <Separator className="my-9" />

        <div className="flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            Design system lab · mock content only · © {new Date().getFullYear()}
          </p>
          <p>Never draw or approximate a UNESCO mark - use the gold badge motif instead.</p>
        </div>
      </div>
    </footer>
  )
}
