import type { Project } from './types';

export const generalFocus: Project = {
  slug: 'general-focus',
  clientId: 'general-focus',
  categories: ['branding', 'web'],
  featured: true,
  priority: 5,
  gradientFrom: '#0f2a3a',
  gradientTo: '#081722',
  cover: {
    image: 'general-focus-cover_kggxfk',
    hover: 'general-focus-hover_aolrud',
  },
  title: { es: 'Precisión que se ve', en: 'Precision you can see' },
  description: [
    {
      es: 'General Focus desarrolla productos oftalmológicos para clínicas y profesionales de la salud visual. Nos buscaron para construir una marca que transmitiera la misma precisión y confianza de sus productos, en cada punto de contacto con el rubro clínico.',
      en: 'General Focus develops ophthalmology products for clinics and eye care professionals. They came to us to build a brand that conveyed the same precision and trust as their products, across every touchpoint with the clinical world.',
    },
    {
      es: 'Desarrollamos un nuevo sistema de identidad y un sitio web pensado para su canal profesional: claro, técnico cuando corresponde, y fácil de navegar para oftalmólogos y clínicas que evalúan sus productos.',
      en: 'We developed a new identity system and a website designed for their professional channel: clear, technical where it matters, and easy to navigate for ophthalmologists and clinics evaluating their products.',
    },
  ],
  services: [
    { es: 'Estrategia de marca', en: 'Brand strategy' },
    { es: 'Identidad visual', en: 'Visual identity' },
    { es: 'Diseño web', en: 'Web design' },
  ],
  gallery: [
    { type: 'image', publicId: 'general-focus-cover_kggxfk', aspect: '16:9', span: 'full' },
    { type: 'image', publicId: 'general-focus-hover_aolrud', aspect: '1:1', span: 'half' },
    { type: 'image', publicId: 'general-focus-logo_ynbahr', aspect: '1:1', span: 'half' },
  ],
};
