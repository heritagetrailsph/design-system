import { useCallback, useEffect, useRef, useState } from 'react'
import { BottomNav } from '@/components/patterns'
import type { Trail } from '@/data/trails'
import { AppToast, type AppToastData } from '@/components/prototype/app-toast'
import { ExploreScreen } from '@/components/prototype/screens/explore-screen'
import { TrailDetailScreen } from '@/components/prototype/screens/trail-detail-screen'
import { PassportScreen } from '@/components/prototype/screens/passport-screen'
import { PlaceholderScreen } from '@/components/prototype/screens/placeholder-screen'
import { cn } from '@/lib/utils'

type TabId = 'explore' | 'map' | 'passport' | 'profile'

/**
 * Fully interactive Philippines UNESCO Trails mobile shell.
 * Explore → trail detail → start trail (earn stamp) → passport.
 */
export function MobileApp({ className }: { className?: string }) {
  const [tab, setTab] = useState<TabId>('explore')
  const [trail, setTrail] = useState<Trail | null>(null)
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set())
  const [earnedTrailIds, setEarnedTrailIds] = useState<string[]>([])
  const [celebrateId, setCelebrateId] = useState<string | null>(null)
  const [toast, setToast] = useState<AppToastData | null>(null)
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const showToast = useCallback((next: AppToastData) => {
    setToast(next)
    if (toastTimer.current) clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(null), 3200)
  }, [])

  useEffect(() => {
    return () => {
      if (toastTimer.current) clearTimeout(toastTimer.current)
    }
  }, [])

  // Reset scroll when view changes
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 })
  }, [tab, trail?.id])

  const openTrail = (t: Trail) => {
    setTrail(t)
  }

  const toggleSave = () => {
    if (!trail) return
    setSavedIds((prev) => {
      const next = new Set(prev)
      const removing = next.has(trail.id)
      if (removing) next.delete(trail.id)
      else next.add(trail.id)
      showToast({
        tone: 'neutral',
        message: removing ? 'Removed from saved' : 'Trail saved',
      })
      return next
    })
  }

  const startTrail = () => {
    if (!trail) return
    const id = trail.id
    const already = earnedTrailIds.includes(id)
    if (!already) {
      setEarnedTrailIds((prev) => [...prev, id])
    }
    setTrail(null)
    setTab('passport')
    setCelebrateId(null)
    requestAnimationFrame(() => setCelebrateId(id))
    showToast({
      tone: 'gold',
      message: already
        ? `Welcome back to ${trail.name.split(' ').slice(-1)[0]}`
        : `You've earned the ${stampLabel(id)} stamp`,
    })
  }

  const onTabChange = (id: string) => {
    setTrail(null)
    setTab(id as TabId)
  }

  return (
    <div
      className={cn(
        'relative flex h-full flex-col overflow-hidden bg-[var(--surface-page)]',
        className
      )}
      data-prototype="mobile-app"
    >
      <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
        {trail ? (
          <TrailDetailScreen
            trail={trail}
            saved={savedIds.has(trail.id)}
            onBack={() => setTrail(null)}
            onToggleSave={toggleSave}
            onStart={startTrail}
          />
        ) : tab === 'explore' ? (
          <ExploreScreen onOpenTrail={openTrail} />
        ) : tab === 'passport' ? (
          <PassportScreen earnedTrailIds={earnedTrailIds} celebrateId={celebrateId} />
        ) : tab === 'map' ? (
          <PlaceholderScreen tab="map" onAction={() => setTab('explore')} />
        ) : (
          <PlaceholderScreen tab="profile" onAction={() => setTab('passport')} />
        )}
      </div>

      {!trail ? (
        <BottomNav
          active={tab}
          onChange={onTabChange}
          className="shrink-0 border-border/80"
        />
      ) : null}

      <AppToast toast={toast} />
    </div>
  )
}

function stampLabel(trailId: string): string {
  const labels: Record<string, string> = {
    intramuros: 'Intramuros',
    vigan: 'Vigan',
    banaue: 'Banaue',
    bohol: 'Bohol',
  }
  return labels[trailId] ?? trailId
}
