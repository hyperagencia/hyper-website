import type { Project } from './types';

export const artStgo: Project = {
  slug: 'art-stgo',
  categories: ['web', 'ecommerce', 'nextjs', 'headless'],
  industry: 'Entretenimiento',
  featured: true,
  layout: 'half',
  gradientFrom: '#1a3460',
  gradientTo: '#0d2040',
  cover: {},
  title: { es: 'Art Stgo', en: 'Art Stgo' },
  description: [
    {
      es: 'Art Stgo es una feria de arte contemporáneo que buscaba una plataforma e-commerce para vender obras online durante todo el año, no solo durante los días del evento presencial.',
      en: 'Art Stgo is a contemporary art fair that needed an e-commerce platform to sell artwork online year-round, not only during the physical event days.',
    },
    {
      es: 'Construimos una tienda headless sobre Next.js, con un catálogo curado por galerías y un checkout pensado para piezas de alto valor.',
      en: 'We built a headless store on top of Next.js, with a catalog curated by galleries and a checkout designed for high-value pieces.',
    },
  ],
  services: [
    { es: 'Diseño web', en: 'Web design' },
    { es: 'Desarrollo e-commerce', en: 'E-commerce development' },
    { es: 'Arquitectura headless', en: 'Headless architecture' },
  ],
  gallery: [
    { type: 'image', aspect: '16:9', span: 'full' },
    { type: 'image', aspect: '1:1', span: 'half' },
    { type: 'image', aspect: '1:1', span: 'half' },
  ],
};
