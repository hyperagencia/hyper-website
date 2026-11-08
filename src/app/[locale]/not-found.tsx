import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { DotMatrix404 } from '@/components/ui/DotMatrix404';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <section
      data-header-theme="dark"
      className="min-h-screen bg-black flex flex-col items-center justify-center px-6 lg:px-8 pt-20 text-center"
    >
      <DotMatrix404 className="w-[min(70vw,30rem)] text-white/50" />
      <h1 className="mt-12 font-display font-medium tracking-tighter text-white text-3xl md:text-4xl">
        {t('title')}
      </h1>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-yellow px-6 py-3 text-sm font-medium text-black transition-transform duration-150 hover:scale-[1.03] active:scale-[0.97]"
      >
        {t('back')}
      </Link>
    </section>
  );
}
