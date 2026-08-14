import type { Project } from './types';

export const zhibo: Project = {
  slug: 'zhibo',
  categories: ['branding', 'app', 'mobile', 'react'],
  industry: 'Entretenimiento',
  featured: true,
  layout: 'half',
  gradientFrom: '#2a3a1a',
  gradientTo: '#1a2a10',
  cover: {},
  title: { es: 'Zhibo', en: 'Zhibo' },
  description: [
    {
      es: 'Zhibo es una plataforma de streaming enfocada en creadores de contenido latinoamericanos. Diseñamos su identidad de marca y construimos la app móvil que conecta a creadores con sus audiencias en tiempo real.',
      en: 'Zhibo is a streaming platform focused on Latin American content creators. We designed their brand identity and built the mobile app that connects creators with their audiences in real time.',
    },
    {
      es: 'El desafío principal fue crear un sistema visual vibrante pero flexible, capaz de adaptarse a miles de streams distintos sin perder identidad de marca.',
      en: 'The main challenge was creating a vibrant yet flexible visual system, able to adapt to thousands of different streams without losing brand identity.',
    },
  ],
  services: [
    { es: 'Identidad de marca', en: 'Brand identity' },
    { es: 'UI & UX Design', en: 'UI & UX Design' },
    { es: 'Desarrollo de app móvil', en: 'Mobile app development' },
  ],
  gallery: [
    { type: 'image', aspect: '16:9', span: 'full' },
    { type: 'image', aspect: '1:1', span: 'half' },
    { type: 'image', aspect: '1:1', span: 'half' },
  ],
};
