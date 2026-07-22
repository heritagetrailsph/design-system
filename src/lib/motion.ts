/**
 * PH UNESCO Heritage and Nature Trails — motion presets.
 * Reads CSS custom properties from tokens/motion.css when available;
 * falls back to brand defaults (quiet, unhurried).
 */

function readCssTime(varName: string, fallbackMs: number): number {
  if (typeof window === 'undefined') return fallbackMs / 1000
  const raw = getComputedStyle(document.documentElement).getPropertyValue(varName).trim()
  if (!raw) return fallbackMs / 1000
  if (raw.endsWith('ms')) return parseFloat(raw) / 1000
  if (raw.endsWith('s')) return parseFloat(raw)
  const n = parseFloat(raw)
  return Number.isFinite(n) ? n / 1000 : fallbackMs / 1000
}

function readCssPx(varName: string, fallback: number): number {
  if (typeof window === 'undefined') return fallback
  const raw = getComputedStyle(document.documentElement).getPropertyValue(varName).trim()
  if (!raw) return fallback
  const n = parseFloat(raw)
  return Number.isFinite(n) ? n : fallback
}

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** GSAP-friendly brand motion tokens (seconds / px). */
export function getMotionTokens() {
  return {
    durationFast: readCssTime('--duration-fast', 160),
    durationBase: readCssTime('--duration-base', 260),
    durationSlow: readCssTime('--duration-slow', 420),
    durationReveal: readCssTime('--duration-reveal', 700),
    durationHero: readCssTime('--duration-hero', 850),
    riseSm: readCssPx('--rise-sm', 8),
    riseMd: readCssPx('--rise-md', 16),
    riseLg: readCssPx('--rise-lg', 28),
    riseHero: readCssPx('--rise-hero', 32),
    staggerTight: 0.06,
    staggerBase: 0.1,
    staggerLoose: 0.14,
    /** GSAP ease approximating --ease-out cubic-bezier(0.22, 1, 0.36, 1) */
    easeOut: 'power2.out' as const,
    pressScale: 0.98,
  }
}

export type MotionTokens = ReturnType<typeof getMotionTokens>
