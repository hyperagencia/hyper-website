import { useTranslations } from 'next-intl';
import { CLIENT_NAMES } from '@/lib/constants';

export function ClientsMarquee() {
  const t = useTranslations('pages.home.clients');
  const allClients = [...CLIENT_NAMES, ...CLIENT_NAMES];

  return (
    <section className="bg-white py-16 border-y border-[#e8e8e8] overflow-hidden">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-black/40 mb-10 font-medium">
        {t('heading')}
      </p>

      <div className="overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {allClients.map((name, i) => (
            <span
              key={i}
              className="inline-flex items-center shrink-0 mx-8 md:mx-14 text-base md:text-lg font-semibold text-black/25 uppercase tracking-widest"
            >
              {name}
              <span className="ml-8 md:ml-14 w-1.5 h-1.5 rounded-full bg-[#f1e066] shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
