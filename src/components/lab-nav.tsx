import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

export const labRoutes: { href: string; label: string; exact?: boolean }[] = [
  { href: '/', label: 'Design system', exact: true },
  { href: '/mock', label: 'Page mock' },
  { href: '/prototype', label: 'App mock' },
]

type LabNavProps = {
  className?: string
  /** Dense inline style for sticky headers */
  dense?: boolean
}

export function isLabRouteActive(pathname: string, href: string, exact?: boolean) {
  if (exact || href === '/') return pathname === href
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function LabNav({ className, dense }: LabNavProps) {
  const { pathname } = useLocation()

  return (
    <nav
      className={cn('flex items-center gap-0.5', className)}
      aria-label="Design system lab"
    >
      {labRoutes.map((route) => {
        const active = isLabRouteActive(pathname, route.href, route.exact)
        return (
          <Link
            key={route.href}
            to={route.href}
            className={cn(
              'rounded-full font-medium no-underline transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
              dense ? 'px-2.5 py-1 text-xs sm:text-sm' : 'px-3 py-1.5 text-sm',
              active
                ? 'bg-primary/10 text-primary'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            )}
          >
            {route.label}
          </Link>
        )
      })}
    </nav>
  )
}
