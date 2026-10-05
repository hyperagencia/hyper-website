import type { Project } from './types';

export const probel: Project = {
  slug: 'probel',
  clientId: 'probel',
  categories: ['branding', 'motion', 'web'],
  featured: true,
  priority: 3,
  gradientFrom: '#7a0000',
  gradientTo: '#c0392b',
  cover: {
    video: 'Brand-Identity-Motion_cqsw1q',
    hover: 'probel-hover_ky8qv2',
  },
  title: { es: 'Una identidad renovada', en: 'A renewed identity' },
  description: [
    {
      es: 'Probel es una marca de distribución retail con más de dos décadas de trayectoria en Chile. Nos buscaron para renovar por completo su identidad visual y llevarla a un lenguaje más contemporáneo, sin perder la confianza que construyeron con sus clientes.',
      en: 'Probel is a retail distribution brand with more than two decades of history in Chile. They came to us to fully renew their visual identity and bring it into a more contemporary language, without losing the trust they built with their customers.',
    },
    {
      es: 'Desarrollamos un nuevo sistema de identidad, motion graphics para sus canales digitales y un sitio web enfocado en conversión. El resultado es una marca coherente en cada punto de contacto, desde el empaque hasta la pantalla.',
      en: 'We developed a new identity system, motion graphics for their digital channels, and a conversion-focused website. The result is a coherent brand across every touchpoint, from packaging to screen.',
    },
  ],
  services: [
    { es: 'Estrategia de marca', en: 'Brand strategy' },
    { es: 'Identidad visual', en: 'Visual identity' },
    { es: 'Motion graphics', en: 'Motion graphics' },
    { es: 'Diseño web', en: 'Web design' },
  ],
  gallery: [
    {
      type: 'video',
      publicId: 'Brand-Identity-Motion_cqsw1q',
      aspect: '16:9',
      span: 'full',
    },
    {
      type: 'image',
      publicId: 'cartel_probel_1_lkj35s',
      aspect: '1:1',
      span: 'half',
    },
    {
      type: 'text',
      span: 'half',
      text: {
        es: 'Cada pieza del sistema de identidad fue pensada para funcionar tanto en punto de venta físico como en canales digitales, manteniendo consistencia visual en cualquier formato.',
        en: 'Every piece of the identity system was designed to work both in physical retail and digital channels, keeping visual consistency across any format.',
      },
    },
  ],
};
