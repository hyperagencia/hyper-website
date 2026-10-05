'use client';

import { useTranslations } from 'next-intl';
import { CLIENT_LOGOS } from '@/data/clients';

interface ClientsGridProps {
  /** next-intl namespace exposing a `statement` key, e.g. "pages.home.clients" */
  namespace: string;
}

export function ClientsGrid({ namespace }: ClientsGridProps) {
  const t = useTranslations(namespace);

  return (
    <section data-header-theme="light" className="bg-white px-6 lg:px-8 pt-32 md:pt-48 pb-24 md:pb-32">
      <p className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-black tracking-tight leading-snug max-w-3xl mb-14 md:mb-20">
        {t('statement')}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 md:gap-6">
        {CLIENT_LOGOS.map((client) => (
          <div
            key={client.name}
            className="aspect-[4/3] rounded-2xl bg-[#f0f0f0] flex items-center justify-center p-8 md:p-14"
          >
            <img src={client.src} alt={client.name} className="max-w-full max-h-full object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}
