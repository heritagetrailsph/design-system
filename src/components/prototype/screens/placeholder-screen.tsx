import { EmptyState } from '@/components/patterns'

type PlaceholderScreenProps = {
  tab: 'map' | 'profile'
  onAction: () => void
}

export function PlaceholderScreen({ tab, onAction }: PlaceholderScreenProps) {
  if (tab === 'map') {
    return (
      <div className="flex min-h-full flex-col items-center justify-center px-5 py-10">
        <EmptyState
          variant="generic"
          title="Map is on the way"
          body="Intentionally light for this prototype — explore trails from the list, then stamp your passport."
          actionLabel="Browse trails"
          onAction={onAction}
          className="w-full border-0 bg-transparent"
        />
      </div>
    )
  }

  return (
    <div className="flex min-h-full flex-col px-4 pb-6 pt-2">
      <header className="mb-6 flex items-center gap-3">
        <span className="flex size-14 items-center justify-center rounded-2xl bg-primary text-lg font-semibold text-primary-foreground">
          A
        </span>
        <div>
          <h1 className="font-display text-xl text-[var(--text-heading)]">Ana Reyes</h1>
          <p className="text-sm text-muted-foreground">Manila · Heritage walker</p>
        </div>
      </header>

      <EmptyState
        variant="generic"
        title="Profile comes later"
        body="Saved trails and preferences will live here. For now, earn stamps on the Passport tab."
        actionLabel="Open passport"
        onAction={onAction}
        className="border-0 bg-transparent"
      />
    </div>
  )
}
