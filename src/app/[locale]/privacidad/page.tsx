import { buildPageMetadata } from '@/lib/seo';
import { getTranslations } from 'next-intl/server';
import { LegalPageLayout } from '@/components/legal/LegalPageLayout';
import { PRIVACY_POLICY } from '@/data/legal';

interface PrivacyPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PrivacyPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.pages.privacy' });
  return buildPageMetadata({ locale, href: '/privacidad', title: t('title'), description: t('description') });
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;
  const localeKey = locale as 'es' | 'en';
  return <LegalPageLayout page={PRIVACY_POLICY} locale={localeKey} />;
}
