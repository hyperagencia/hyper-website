import type { Pillar } from './types';

export const design: Pillar = {
  slug: 'design',
  order: 3,
  accent: 'light',
  title: { es: 'Diseño', en: 'Design' },
  description: {
    es: 'Diseñamos interfaces y experiencias con intención en cada decisión. Todo lo que hacemos cumple su función y se produce con la máxima calidad.',
    en: 'We design interfaces and experiences with intention in every decision. Everything we make serves a purpose and is produced to the highest quality.',
  },
  services: [
    { slug: 'ui-ux', label: { es: 'UI / UX Design', en: 'UI / UX Design' } },
    { slug: 'web-design', label: { es: 'Web Design', en: 'Web Design' } },
    { slug: 'ecommerce-design', label: { es: 'E-Commerce Design', en: 'E-Commerce Design' } },
  ],
};
