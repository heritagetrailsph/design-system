import { Link, useLocation } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { DropdownMenu } from 'radix-ui'
import {
  fontStudyRoutes,
  isLabRouteActive,
  primaryLabRoutes,
} from '@/data/lab-routes'
import { cn } from '@/lib/utils'

type LabNavProps = {
  className?: string
  /** Dense inline style for sticky headers */
  dense?: boolean
}

function routeClass(active: boolean, dense?: boolean) {
  return cn(
    'whitespace-nowrap rounded-full font-medium no-underline transition-all duration-300',
    'ease-[cubic-bezier(0.22,1,0.36,1)]',
    dense ? 'px-2.5 py-1 text-xs sm:text-sm' : 'px-3 py-1.5 text-sm',
    active
      ? 'bg-primary/10 text-primary'
      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
  )
}

export function LabNav({ className, dense }: LabNavProps) {
  const { pathname } = useLocation()
  const studiesActive = pathname.startsWith('/font-study/')
  const [designSystem, pageMock, appMock] = primaryLabRoutes

  return (
    <nav
      className={cn('flex items-center gap-0.5', className)}
      aria-label="Design system lab"
    >
      {[designSystem, pageMock].map((route) => (
        <Link
          key={route.href}
          to={route.href}
          className={routeClass(isLabRouteActive(pathname, route.href, route.exact), dense)}
        >
          {route.label}
        </Link>
      ))}

      <DropdownMenu.Root modal={false}>
        <DropdownMenu.Trigger
          className={cn(
            routeClass(studiesActive, dense),
            'flex items-center gap-1 outline-none focus-visible:ring-2 focus-visible:ring-ring',
            'data-[state=open]:bg-muted [&[data-state=open]>svg]:rotate-180'
          )}
        >
          Font studies
          <ChevronDown className="size-3.5 transition-transform duration-200" aria-hidden />
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            align="center"
            sideOffset={8}
            className={cn(
              'z-[70] min-w-52 rounded-2xl border border-border bg-popover p-1.5',
              'text-popover-foreground shadow-[var(--shadow-overlay)] outline-none',
              'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95'
            )}
          >
            <DropdownMenu.Label className="px-3 pb-1 pt-2 text-xs font-medium text-muted-foreground">
              Compare title faces
            </DropdownMenu.Label>
            {fontStudyRoutes.map((route) => {
              const active = isLabRouteActive(pathname, route.href, route.exact)

              return (
                <DropdownMenu.Item key={route.href} asChild>
                  <Link
                    to={route.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'flex cursor-default rounded-xl px-3 py-2 text-sm font-medium no-underline outline-none',
                      'data-[highlighted]:bg-muted data-[highlighted]:text-foreground',
                      active ? 'bg-primary/10 text-primary' : 'text-foreground'
                    )}
                  >
                    {route.label}
                  </Link>
                </DropdownMenu.Item>
              )
            })}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>

      <Link
        to={appMock.href}
        className={routeClass(isLabRouteActive(pathname, appMock.href, appMock.exact), dense)}
      >
        {appMock.label}
      </Link>
    </nav>
  )
}
