export const fontStudyIds = [
  'quoly',
  'calle-crisologo',
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

const calleCrisologoHero = {
  heroTitle: 'Calle Crisologo by lamplight',
  heroDescription:
    'Cobblestones, capiz windows, and lamplight shape one of the Philippines\' most recognizable heritage streets.',
  heroTrailId: 'vigan',
}

export const fontStudies: Record<FontStudyId, FontStudy> = {
  quoly: {
    id: 'quoly',
    name: 'Quoly',
    className: '',
    banner: 'Marketing page layout used only to stress-test design components in context.',
    description: 'Quoly for brand headline moments. Poppins for modern, legible UI.',
    heroTitle: 'A quiet morning in the old town',
    heroDescription: 'Sample marketing copy for layout QA. Tests type scale, CTAs, and trail card bezel.',
    heroTrailId: 'intramuros',
  },
  'calle-crisologo': {
    id: 'calle-crisologo',
    name: 'Calle Crisologo (Quoly)',
    className: 'font-study-quoly',
    banner: 'Calle Crisologo title study using Quoly.',
    description:
      'Quoly gives Calle Crisologo a distinct brand-led title treatment. Poppins remains the legible UI face.',
    ...calleCrisologoHero,
  },
  barabara: {
    id: 'barabara',
    name: 'Barabara',
    className: 'font-study-barabara',
    banner: 'Barabara title study.',
    description: 'Barabara for title moments in this study. Poppins remains the legible UI face.',
    ...calleCrisologoHero,
  },
  'plus-jakarta-sans': {
    id: 'plus-jakarta-sans',
    name: 'Plus Jakarta Sans',
    className: 'font-study-plus-jakarta-sans',
    banner: 'Plus Jakarta Sans title study.',
    description:
      'Plus Jakarta Sans for title moments in this study. Poppins remains the legible UI face.',
    ...calleCrisologoHero,
  },
  'hanken-grotesk': {
    id: 'hanken-grotesk',
    name: 'Hanken Grotesk',
    className: 'font-study-hanken-grotesk',
    banner: 'Hanken Grotesk title study.',
    description:
      'Hanken Grotesk brings Filipino-designed clarity to titles while Poppins remains the UI face.',
    ...calleCrisologoHero,
  },
  'bricolage-grotesque': {
    id: 'bricolage-grotesque',
    name: 'Bricolage Grotesque',
    className: 'font-study-bricolage-grotesque',
    banner: 'Bricolage Grotesque title study.',
    description:
      'Bricolage Grotesque adds expressive cultural character while Poppins keeps the UI grounded.',
    ...calleCrisologoHero,
  },
  sora: {
    id: 'sora',
    name: 'Sora',
    className: 'font-study-sora',
    banner: 'Sora title study.',
    description: 'Sora keeps title shapes open and crisp while Poppins remains the familiar UI face.',
    ...calleCrisologoHero,
  },
}

export const navigableFontStudies = fontStudyIds
  .filter((id) => id !== 'quoly')
  .map((id) => fontStudies[id])
