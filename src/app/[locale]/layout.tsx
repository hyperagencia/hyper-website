import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { JsonLd } from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/seo';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import GlassmorphismHeader from '@/components/layout/GlassmorphismHeader';
import { ProgressiveBlur } from '@/components/layout/ProgressiveBlur';
import { Footer } from '@/components/layout/footer';
import '../globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    metadataBase: new URL(SITE_URL),
    title: t('title'),
    description: t('description'),
  };
}

const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#organization`,
      name: 'Hyper',
      legalName: 'Hyper Branding Agency SpA',
      url: SITE_URL,
      logo: `${SITE_URL}/assets/logo/hyper-logo-dark.svg`,
      image: `${SITE_URL}/assets/logo/hyper-logo-dark.svg`,
      email: 'contacto@hyperagencia.com',
      foundingDate: '2013',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Av. Pdte. Kennedy 5600, Ofic 507',
        addressLocality: 'Vitacura',
        addressRegion: 'Región Metropolitana',
        addressCountry: 'CL',
      },
      areaServed: ['CL', 'Latin America'],
      sameAs: [
        'https://www.linkedin.com/company/hyper-branding-agency-spa',
        'https://instagram.com/hyperagencia/',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Hyper',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: ['es', 'en'],
    },
  ],
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Await params for Next.js 15 compatibility
  const { locale } = await params;
  
  // Verificar que el locale es válido
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // Obtener mensajes para el locale actual
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="preconnect" href="https://p.typekit.net" />
        <link rel="stylesheet" href="https://use.typekit.net/mtg6fon.css" />
      </head>
      <body className="font-sans antialiased bg-white">
        <JsonLd data={ORGANIZATION_JSON_LD} />
        <NextIntlClientProvider messages={messages}>
          <ProgressiveBlur />
          <GlassmorphismHeader />
          <main>
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
        {/* GA4 directo y GTM son excluyentes: si el contenedor GTM ya envía GA4, no definir NEXT_PUBLIC_GA_ID (se duplicarían las visitas) */}
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
        {process.env.NEXT_PUBLIC_GTM_ID && <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />}
      </body>
    </html>
  );
}