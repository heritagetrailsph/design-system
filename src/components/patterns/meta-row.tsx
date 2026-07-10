import { cn } from '@/lib/utils'

type MetaRowProps = {
  /** Prefer "Built 1571 · 4.2 km · 12 stops" style — middle dots, no commas */
  parts: string[]
  className?: string
  /** Lighter text for on-image overlays */
  onImage?: boolean
}

/** Recurring fact format: year · distance · stops */
export function MetaRow({ parts, className, onImage }: MetaRowProps) {
  return (
    <p
      className={cn(
        'text-sm',
        onImage ? 'text-[var(--text-on-image)]/80' : 'text-muted-foreground',
        className
      )}
    >
      {parts.filter(Boolean).join(' · ')}
    </p>
  )
}

/** Parse a pre-joined meta string that already uses · separators */
export function MetaRowFromString({
  meta,
  className,
  onImage,
}: {
  meta: string
  className?: string
  onImage?: boolean
}) {
  return (
    <MetaRow
      parts={meta.split('·').map((s) => s.trim())}
      className={className}
      onImage={onImage}
    />
  )
}
