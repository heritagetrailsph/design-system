import { Link } from 'react-router-dom'
import { Separator } from '@/components/ui/separator'
import { Logo } from '@/components/brand/logo'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30 pb-10 pt-12">
      <div className="container-page">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2 space-y-4">
            <Logo href="#top" markSize={40} />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Philippines UNESCO Trails: calm, reverent, warmly inviting heritage walks with a
              knowledgeable local guide, not a theme park.
            </p>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-foreground">Explore</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#trails" className="hover:text-primary">
                  Trails
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-primary">
                  How it works
                </a>
              </li>
              <li>
                <a href="#passport" className="hover:text-primary">
                  Passport
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-foreground">System</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/system" className="hover:text-primary">
                  Design system
                </Link>
              </li>
              <li>
                <Link to="/prototype" className="hover:text-primary">
                  App prototype
                </Link>
              </li>
              <li>
                <a href="#cta" className="hover:text-primary">
                  Waitlist
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Philippines UNESCO Trails. All rights reserved.</p>
          <p>Never draw or approximate a UNESCO mark — use the gold badge motif instead.</p>
        </div>
      </div>
    </footer>
  )
}
