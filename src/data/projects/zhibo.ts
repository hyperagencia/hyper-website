import type { Project } from './types';

export const zhibo: Project = {
  slug: 'zhibo',
  clientId: 'zhibo',
  categories: ['branding', 'web'],
  featured: true,
  priority: 2,
  gradientFrom: '#2a3a1a',
  gradientTo: '#1a2a10',
  cover: {
    image: 'zhibo-cover_lxbwsr',
    hover: 'zhibo-hover_ja1f7p',
  },
  title: { es: 'Un nuevo posicionamiento', en: 'A new positioning' },
  description: [
    {
      es: 'Zhibo es un proveedor de equipos y servicios para la industria minera e industrial. Nos buscaron para construir una identidad de marca a la altura de su crecimiento y un sitio web que reflejara la escala de sus operaciones.',
      en: 'Zhibo is a supplier of equipment and services for the mining and industrial sector. They came to us to build a brand identity that matched their growth and a website that reflected the scale of their operations.',
    },
    {
      es: 'El desafío fue traducir la solidez de una operación industrial en un sistema visual claro y moderno, sin perder la confianza que ya tenían construida con sus clientes.',
      en: 'The challenge was to translate the strength of an industrial operation into a clear, modern visual system, without losing the trust already built with their clients.',
    },
  ],
  services: [
    { es: 'Estrategia de marca', en: 'Brand strategy' },
    { es: 'Identidad visual', en: 'Visual identity' },
    { es: 'Diseño web', en: 'Web design' },
  ],
  gallery: [
    { type: 'image', publicId: 'zhibo-cover_lxbwsr', aspect: '16:9', span: 'full' },
    { type: 'image', publicId: 'zhibo-hover_ja1f7p', aspect: '1:1', span: 'half' },
    { type: 'image', aspect: '1:1', span: 'half' },
  ],
};
