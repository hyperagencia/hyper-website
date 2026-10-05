import { LegalPageLayout } from '@/components/legal/LegalPageLayout';
import { PRIVACY_POLICY } from '@/data/legal';

interface PrivacyPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PrivacyPageProps) {
  const { locale } = await params;
  const localeKey = locale as 'es' | 'en';
  return { title: PRIVACY_POLICY.title[localeKey] };
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;
  const localeKey = locale as 'es' | 'en';
  return <LegalPageLayout page={PRIVACY_POLICY} locale={localeKey} />;
}
