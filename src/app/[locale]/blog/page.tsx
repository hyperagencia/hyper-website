import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildPageMetadata } from '@/lib/seo';

interface BlogPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.pages.blog' });
  return buildPageMetadata({ locale, href: '/blog', title: t('title'), description: t('description'), noindex: true });
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages.blog');

  return (
    <section
      data-header-theme="light"
      className="min-h-screen bg-white flex items-center justify-center px-6 lg:px-8 pt-20"
    >
      <h1 className="font-display font-medium leading-none tracking-tighter text-black text-center select-none text-[4rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8.5rem] xl:text-[10rem]">
        {t('coming_soon')}
      </h1>
    </section>
  );
}
