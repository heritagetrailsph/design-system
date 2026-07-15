export const fontStudyIds = [
  'quoly',
  'barabara',
  'plus-jakarta-sans',
  'hanken-grotesk',
  'bricolage-grotesque',
  'sora',
] as const

export type FontStudyId = (typeof fontStudyIds)[number]

type FontStudy = {
  id: FontStudyId
  name: string
  className: string
  banner: string
  description: string
  heroTitle: string
  heroDescription: string
  heroTrailId: string
}

const intramurosHero = {
  heroTitle: 'A quiet morning in the old town',
  heroDescription: 'Sample marketing copy for layout QA. Tests type scale, CTAs, and trail card bezel.',
  heroTrailId: 'intramuros',
}

export const fontStudies: Record<FontStudyId, FontStudy> = {
  quoly: {
    id: 'quoly',
    name: 'Quoly',
    className: 'font-study-quoly',
    banner: 'Marketing page layout used only to stress-test design components in context.',
    description: 'Quoly for brand headline moments. Poppins for modern, legible UI.',
    ...intramurosHero,
  },
  barabara: {
    id: 'barabara',
    name: 'Barabara',
    className: 'font-study-barabara',
    banner: 'Barabara title study.',
    description: 'Barabara for title moments in this study. Poppins remains the legible UI face.',
    ...intramurosHero,
  },
  'plus-jakarta-sans': {
    id: 'plus-jakarta-sans',
    name: 'Plus Jakarta Sans',
    className: 'font-study-plus-jakarta-sans',
    banner: 'Plus Jakarta Sans title study.',
    description:
      'Plus Jakarta Sans for title moments in this study. Poppins remains the legible UI face.',
    ...intramurosHero,
  },
  'hanken-grotesk': {
    id: 'hanken-grotesk',
    name: 'Hanken Grotesk',
    className: 'font-study-hanken-grotesk',
    banner: 'Hanken Grotesk title study.',
    description:
      'Hanken Grotesk brings Filipino-designed clarity to titles while Poppins remains the UI face.',
    ...intramurosHero,
  },
  'bricolage-grotesque': {
    id: 'bricolage-grotesque',
    name: 'Bricolage Grotesque',
    className: 'font-study-bricolage-grotesque',
    banner: 'Bricolage Grotesque title study.',
    description:
      'Bricolage Grotesque adds expressive cultural character while Poppins keeps the UI grounded.',
    ...intramurosHero,
  },
  sora: {
    id: 'sora',
    name: 'Sora',
    className: 'font-study-sora',
    banner: 'Sora title study.',
    description: 'Sora keeps title shapes open and crisp while Poppins remains the familiar UI face.',
    ...intramurosHero,
  },
}

export const navigableFontStudies = fontStudyIds.map((id) => fontStudies[id])
