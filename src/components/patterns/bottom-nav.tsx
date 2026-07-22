import { BookOpen, Compass, Map, User } from 'lucide-react'
import { cn } from '@/lib/utils'

export type BottomNavItem = {
  id: string
  label: string
  icon: 'map' | 'explore' | 'passport' | 'profile'
}

const iconMap = {
  map: Map,
  explore: Compass,
  passport: BookOpen,
  profile: User,
}

const defaultItems: BottomNavItem[] = [
  { id: 'explore', label: 'Explore', icon: 'explore' },
  { id: 'map', label: 'Map', icon: 'map' },
  { id: 'passport', label: 'Passport', icon: 'passport' },
  { id: 'profile', label: 'You', icon: 'profile' },
]

type BottomNavProps = {
  items?: BottomNavItem[]
  active?: string
  onChange?: (id: string) => void
  className?: string
}

/**
 * Fixed mobile tab bar — frosted surface only (map/photo overlays).
 * Min tap target 44px via tokens.
 */
export function BottomNav({
  items = defaultItems,
  active = 'explore',
  onChange,
  className,
}: BottomNavProps) {
  return (
    <nav
      aria-label="Primary"
      className={cn(
        'flex items-stretch justify-around border-t border-border px-2 pt-1 pb-[max(0.5rem,env(safe-area-inset-bottom))]',
        'bg-[var(--surface-frost)] backdrop-blur-md',
        className
      )}
    >
      {items.map((item) => {
        const Icon = iconMap[item.icon]
        const isActive = item.id === active
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onChange?.(item.id)}
            className={cn(
              'flex min-h-[var(--tap-target)] min-w-[var(--tap-target)] flex-1 flex-col items-center justify-center gap-0.5 rounded-xl text-[0.65rem] font-semibold transition-brand',
              isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            )}
            aria-current={isActive ? 'page' : undefined}
          >
            <Icon
              className="size-5"
              strokeWidth={isActive ? 2.25 : 1.75}
              fill={isActive ? 'currentColor' : 'none'}
              fillOpacity={isActive ? 0.15 : 0}
            />
            {item.label}
          </button>
        )
      })}
    </nav>
  )
}
