import type { Metadata } from 'next';
import { getPathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hyperagencia.com').replace(/\/$/, '');

export type Locale = (typeof routing.locales)[number];

const OG_LOCALES: Record<Locale, string> = { es: 'es_CL', en: 'en_US' };

type Href = Parameters<typeof getPathname>[0]['href'];

/** Absolute URL for an internal href in a given locale (español sin prefijo, inglés con /en). */
export function absoluteUrl(href: Href, locale: Locale): string {
  const path = getPathname({ locale, href });
  return `${SITE_URL}${path === '/' ? '' : path}` || SITE_URL;
}

interface PageMetadataInput {
  locale: string;
  href: Href;
  title: string;
  description: string;
  /** Absolute URL. Si se omite, Next usa el opengraph-image del segmento. */
  image?: string;
  noindex?: boolean;
}

export function buildPageMetadata({ locale, href, title, description, image, noindex }: PageMetadataInput): Metadata {
  const current = locale as Locale;
  const url = absoluteUrl(href, current);
  const languages: Record<string, string> = Object.fromEntries(
    routing.locales.map((l) => [l, absoluteUrl(href, l)]),
  );
  languages['x-default'] = absoluteUrl(href, routing.defaultLocale);

  return {
    title,
    description,
    alternates: { canonical: url, languages },
    openGraph: {
      type: 'website',
      siteName: 'Hyper',
      locale: OG_LOCALES[current],
      url,
      title,
      description,
      ...(image && { images: [{ url: image, width: 1200, height: 630, alt: title }] }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(image && { images: [image] }),
    },
    ...(noindex && { robots: { index: false, follow: true } }),
  };
}
