'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { Pillar } from '@/data/services';

interface PillarCardProps {
  pillar: Pillar;
}

const ACCENT_CLASSES: Record<Pillar['accent'], { card: string; title: string; description: string; tag: string }> = {
  yellow: {
    card: 'bg-[#f1e066]',
    title: 'text-black',
    description: 'text-black/60',
    tag: 'bg-black/10 text-black hover:bg-black hover:text-white',
  },
  dark: {
    card: 'bg-[#111111] border border-white/5 hover:border-[#f1e066]/20',
    title: 'text-white',
    description: 'text-white/50',
    tag: 'bg-white/10 text-white hover:bg-[#f1e066] hover:text-black',
  },
  light: {
    card: 'bg-[#e8e8e8]',
    title: 'text-black',
    description: 'text-black/60',
    tag: 'bg-black/5 text-black hover:bg-black hover:text-white',
  },
};

export function PillarCard({ pillar }: PillarCardProps) {
  const locale = useLocale() as 'es' | 'en';
  const classes = ACCENT_CLASSES[pillar.accent];

  return (
    <div className={`rounded-3xl p-10 md:p-14 flex flex-col justify-between min-h-[420px] transition-colors duration-300 ${classes.card}`}>
      <div>
        <h3 className={`font-display text-4xl md:text-5xl font-medium tracking-tight ${classes.title}`}>{pillar.title[locale]}</h3>
        <p className={`text-lg mt-6 leading-relaxed max-w-sm ${classes.description}`}>{pillar.description[locale]}</p>
      </div>

      <ul className="mt-10 flex flex-wrap gap-2">
        {pillar.services.map((service) => (
          <li key={service.slug}>
            <Link
              href={{ pathname: '/expertices/[servicio]', params: { servicio: service.slug } }}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors duration-200 ${classes.tag}`}
            >
              {service.label[locale]}
              <span aria-hidden>↗</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
