import type { Project } from './types';

export const liozar: Project = {
  slug: 'liozar',
  clientId: 'liozar',
  categories: ['branding'],
  featured: false,
  priority: 100,
  gradientFrom: '#3a1a2a',
  gradientTo: '#1a0a12',
  cover: {
    image: 'liozar-cover_viubfc',
    hover: 'liozar-hover_npqure',
  },
  title: { es: 'Moda con carácter propio', en: 'Fashion with its own character' },
  description: [
    {
      es: 'Liozar es una marca de ropa que necesitaba una identidad visual propia antes de escalar. Nos buscaron para definir quiénes son como marca y traducirlo en un sistema visual reconocible en cada prenda y punto de venta.',
      en: 'Liozar is a clothing brand that needed its own visual identity before scaling. They came to us to define who they are as a brand and translate that into a visual system recognizable across every garment and point of sale.',
    },
    {
      es: 'Desarrollamos la estrategia de marca y una identidad visual con carácter propio, pensada para crecer junto a futuras colecciones sin perder consistencia.',
      en: 'We developed the brand strategy and a visual identity with its own character, built to grow alongside future collections without losing consistency.',
    },
  ],
  services: [
    { es: 'Estrategia de marca', en: 'Brand strategy' },
    { es: 'Identidad visual', en: 'Visual identity' },
  ],
  gallery: [
    { type: 'image', publicId: 'liozar-cover_viubfc', aspect: '16:9', span: 'full' },
    { type: 'image', publicId: 'liozar-hover_npqure', aspect: '1:1', span: 'half' },
    { type: 'image', publicId: 'liozar-logo_a5uue4', aspect: '1:1', span: 'half' },
  ],
};
