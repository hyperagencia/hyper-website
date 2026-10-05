import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { PROJECTS } from '@/data/projects';
import { SERVICE_DETAILS } from '@/data/services/detail';
import { absoluteUrl } from '@/lib/seo';

type Href = Parameters<typeof absoluteUrl>[0];

const STATIC_ROUTES: { href: Href; priority: number }[] = [
  { href: '/', priority: 1 },
  { href: '/agencia', priority: 0.8 },
  { href: '/proyectos', priority: 0.9 },
  { href: '/expertices', priority: 0.9 },
  { href: '/contacto', priority: 0.8 },
  { href: '/privacidad', priority: 0.2 },
  { href: '/terminos', priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { href: Href; priority: number }[] = [
    ...STATIC_ROUTES,
    ...SERVICE_DETAILS.map((s) => ({
      href: { pathname: '/expertices/[servicio]', params: { servicio: s.slug } } as Href,
      priority: 0.8,
    })),
    ...PROJECTS.map((p) => ({
      href: { pathname: '/proyectos/[slug]', params: { slug: p.slug } } as Href,
      priority: 0.7,
    })),
  ];

  return routes.flatMap(({ href, priority }) => {
    const languages = Object.fromEntries(routing.locales.map((l) => [l, absoluteUrl(href, l)]));
    return routing.locales.map((locale) => ({
      url: absoluteUrl(href, locale),
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority,
      alternates: { languages },
    }));
  });
}
