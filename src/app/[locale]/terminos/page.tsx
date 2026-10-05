import { LegalPageLayout } from '@/components/legal/LegalPageLayout';
import { TERMS_AND_CONDITIONS } from '@/data/legal';

interface TermsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: TermsPageProps) {
  const { locale } = await params;
  const localeKey = locale as 'es' | 'en';
  return { title: TERMS_AND_CONDITIONS.title[localeKey] };
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { locale } = await params;
  const localeKey = locale as 'es' | 'en';
  return <LegalPageLayout page={TERMS_AND_CONDITIONS} locale={localeKey} />;
}
