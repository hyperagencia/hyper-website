import type { Project } from './types';

export const artStgo: Project = {
  slug: 'art-stgo',
  clientId: 'art-stgo',
  categories: ['branding', 'app', 'ui-ux', 'web'],
  featured: true,
  priority: 4,
  gradientFrom: '#1a3460',
  gradientTo: '#0d2040',
  cover: {
    image: 'art-stgo-cover_gauje7',
    hover: 'art-stgo-hover_czkfmr',
  },
  title: { es: 'Una feria pensada para artistas', en: 'A fair built for artists' },
  description: [
    {
      es: 'Art Stgo es una feria de arte contemporáneo que reúne artistas independientes y buscaba una marca y una plataforma digital pensadas para ellos: simples de usar, claras para el público y capaces de sostener la feria durante todo el año, no solo los días del evento.',
      en: 'Art Stgo is a contemporary art fair that brings together independent artists, and needed a brand and a digital platform built for them: simple to use, clear for visitors, and able to sustain the fair year-round, not just on event days.',
    },
    {
      es: 'Construimos la identidad visual, una app para que los artistas gestionen sus obras y perfiles, y un sitio web con foco en UI/UX para que el público descubra y explore la feria desde cualquier dispositivo.',
      en: 'We built the visual identity, an app for artists to manage their pieces and profiles, and a website with a strong UI/UX focus so visitors can discover and explore the fair from any device.',
    },
  ],
  services: [
    { es: 'Identidad visual', en: 'Visual identity' },
    { es: 'Diseño de app', en: 'App design' },
    { es: 'UI & UX Design', en: 'UI & UX Design' },
    { es: 'Diseño web', en: 'Web design' },
  ],
  gallery: [
    { type: 'image', publicId: 'art-stgo-cover_gauje7', aspect: '16:9', span: 'full' },
    { type: 'image', publicId: 'art-stgo-hover_czkfmr', aspect: '1:1', span: 'half' },
    { type: 'image', publicId: 'art-stgo-logo_ytrrdb', aspect: '1:1', span: 'half' },
  ],
};
