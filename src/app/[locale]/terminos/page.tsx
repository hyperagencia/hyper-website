import { buildPageMetadata } from '@/lib/seo';
import { getTranslations } from 'next-intl/server';
import { LegalPageLayout } from '@/components/legal/LegalPageLayout';
import { TERMS_AND_CONDITIONS } from '@/data/legal';

interface TermsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: TermsPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.pages.terms' });
  return buildPageMetadata({ locale, href: '/terminos', title: t('title'), description: t('description') });
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { locale } = await params;
  const localeKey = locale as 'es' | 'en';
  return <LegalPageLayout page={TERMS_AND_CONDITIONS} locale={localeKey} />;
}
