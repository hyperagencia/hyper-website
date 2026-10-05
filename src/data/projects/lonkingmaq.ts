import type { Project } from './types';

export const lonkingmaq: Project = {
  slug: 'lonkingmaq',
  clientId: 'lonkingmaq',
  categories: ['branding', 'web'],
  featured: true,
  priority: 1,
  gradientFrom: '#3a2a10',
  gradientTo: '#1a1206',
  cover: {
    image: 'lonkingmaq-cover_tvfast',
    hover: 'lonkingmaq-hover_q5kdsk',
  },
  title: { es: 'Maquinaria con identidad propia', en: 'Machinery with its own identity' },
  description: [
    {
      es: 'Lonking Maq distribuye maquinaria pesada para minería e industria en Chile. Nos buscaron para construir una marca sólida y un sitio web capaz de comunicar su catálogo completo a clientes técnicos.',
      en: 'Lonking Maq distributes heavy machinery for mining and industry in Chile. They came to us to build a solid brand and a website able to communicate their full catalog to technical clients.',
    },
    {
      es: 'Desarrollamos una identidad visual robusta y un sitio orientado a generar contacto comercial, pensado para un cliente que evalúa maquinaria antes de comprar.',
      en: 'We developed a robust visual identity and a website oriented to generate business inquiries, designed for a client who evaluates machinery before buying.',
    },
  ],
  services: [
    { es: 'Estrategia de marca', en: 'Brand strategy' },
    { es: 'Identidad visual', en: 'Visual identity' },
    { es: 'Diseño web', en: 'Web design' },
  ],
  gallery: [
    { type: 'image', publicId: 'lonkingmaq-cover_tvfast', aspect: '16:9', span: 'full' },
    { type: 'image', publicId: 'lonkingmaq-hover_q5kdsk', aspect: '1:1', span: 'half' },
    { type: 'image', publicId: 'lonkingmaq-logo_hqun4t', aspect: '1:1', span: 'half' },
  ],
};
