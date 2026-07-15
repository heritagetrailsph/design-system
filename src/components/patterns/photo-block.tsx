import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type PhotoBlockProps = {
  src?: string
  alt?: string
  /** Fallback when image missing — brand gradient only, never fake illustration */
  gradient?: string
  aspect?: 'video' | 'photo' | 'square' | 'hero'
  radius?: 'lg' | 'xl' | 'none'
  className?: string
  children?: ReactNode
  /** Always apply bottom protection gradient for text legibility */
  protect?: boolean
  loading?: 'eager' | 'lazy'
  fetchPriority?: 'high' | 'low' | 'auto'
  sizes?: string
}

const aspects = {
  video: 'aspect-video',
  photo: 'aspect-[4/3]',
  square: 'aspect-square',
  hero: 'aspect-[16/10]',
}

const radii = {
  none: 'rounded-none',
  lg: 'rounded-[var(--radius-lg)]',
  xl: 'rounded-[var(--radius-xl)]',
}

/**
 * Imagery surface with required on-image protection gradient.
 * Text over photos must use --text-on-image (never theme-flipping sand).
 */
export function PhotoBlock({
  src,
  alt = '',
  gradient,
  aspect = 'photo',
  radius = 'xl',
  className,
  children,
  protect = true,
  loading = 'lazy',
  fetchPriority = 'auto',
  sizes,
}: PhotoBlockProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden',
        aspects[aspect],
        radii[radius],
        className
      )}
      style={!src ? { background: gradient ?? 'var(--gradient-hero)' } : undefined}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 size-full object-cover"
          loading={loading}
          fetchPriority={fetchPriority}
          sizes={sizes}
          decoding="async"
        />
      ) : null}
      {protect ? (
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-on-image"
          aria-hidden
        />
      ) : null}
      {children}
    </div>
  )
}

type PhotoCaptionProps = {
  region?: string
  title: string
  meta?: ReactNode
  className?: string
}

/** Standard bottom caption stack for PhotoBlock (always light text). */
export function PhotoCaption({ region, title, meta, className }: PhotoCaptionProps) {
  return (
    <div className={cn('absolute inset-x-0 bottom-0 p-5 sm:p-6', className)}>
      {region ? (
        <p className="mb-1.5 text-sm font-medium text-[var(--text-on-image)]/85">{region}</p>
      ) : null}
      <h3 className="text-2xl font-medium leading-tight text-[var(--text-on-image)] sm:text-[1.75rem]">
        {title}
      </h3>
      {meta ? <div className="mt-1.5">{meta}</div> : null}
    </div>
  )
}
