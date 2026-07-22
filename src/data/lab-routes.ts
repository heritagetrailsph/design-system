import { navigableFontStudies } from '@/data/font-studies'

export type LabRoute = {
  href: string
  label: string
  exact?: boolean
}

export const primaryLabRoutes: LabRoute[] = [
  { href: '/', label: 'Design system', exact: true },
  { href: '/mock', label: 'Page mock' },
  { href: '/prototype', label: 'App mock' },
]

export const fontStudyRoutes: LabRoute[] = navigableFontStudies.map((study) => ({
  href: `/font-study/${study.id}`,
  label: study.name,
}))

export function isLabRouteActive(pathname: string, href: string, exact?: boolean) {
  if (exact || href === '/') return pathname === href
  return pathname === href || pathname.startsWith(`${href}/`)
}
