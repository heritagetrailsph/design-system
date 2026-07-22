import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getMotionTokens, prefersReducedMotion } from '@/lib/motion'

gsap.registerPlugin(ScrollTrigger)

type RevealOptions = {
  stagger?: number
  y?: number
  duration?: number
  start?: string
  self?: boolean
}

/**
 * Quiet content reveal — fade + rise from motion tokens.
 * Add data-reveal on children to stagger within the section ref.
 */
export function useGsapReveal<T extends HTMLElement = HTMLElement>(
  options: RevealOptions = {}
) {
  const { start = 'top 88%', self = false } = options
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const m = getMotionTokens()
    const stagger = options.stagger ?? m.staggerBase
    const y = options.y ?? m.riseLg
    const duration = options.duration ?? m.durationReveal

    if (prefersReducedMotion()) {
      gsap.set(el.querySelectorAll('[data-reveal]'), { clearProps: 'all', opacity: 1, y: 0 })
      gsap.set(el, { clearProps: 'all', opacity: 1, y: 0 })
      return
    }

    const targets = self
      ? [el]
      : Array.from(el.querySelectorAll<HTMLElement>('[data-reveal]'))

    if (!targets.length) return

    gsap.set(targets, { opacity: 0, y })

    const tween = gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration,
      stagger: self ? 0 : stagger,
      ease: m.easeOut,
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: 'play none none none',
      },
    })

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [options.stagger, options.y, options.duration, start, self])

  return ref
}

/** Hero: immediate load reveal (no scroll wait). */
export function useGsapHeroReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const m = getMotionTokens()
    const targets = el.querySelectorAll<HTMLElement>('[data-reveal]')

    if (prefersReducedMotion()) {
      gsap.set(targets, { clearProps: 'all', opacity: 1, y: 0, scale: 1 })
      return
    }

    gsap.set(targets, { opacity: 0, y: m.riseHero })

    const ctx = gsap.context(() => {
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: m.durationHero,
        stagger: m.staggerBase,
        ease: m.easeOut,
        delay: 0.12,
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return ref
}
