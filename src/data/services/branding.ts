import type { Pillar } from './types';

export const branding: Pillar = {
  slug: 'branding',
  order: 2,
  accent: 'dark',
  title: { es: 'Branding', en: 'Branding' },
  description: {
    es: 'Construimos marcas que viven en pantallas, espacios y tiempo. Desde la estrategia hasta el movimiento, cada sistema de identidad que creamos está hecho para perdurar.',
    en: 'We build brands that live on screens, in spaces and over time. From strategy to motion, every identity system we create is built to last.',
  },
  services: [
    { slug: 'identidad-visual', label: { es: 'Identidad Visual', en: 'Visual Identity' } },
    { slug: 'estrategia-naming', label: { es: 'Estrategia & Naming', en: 'Strategy & Naming' } },
    { slug: 'motion-branding', label: { es: 'Motion Branding', en: 'Motion Branding' } },
    { slug: 'brand-systems', label: { es: 'Brand Systems', en: 'Brand Systems' } },
  ],
};
