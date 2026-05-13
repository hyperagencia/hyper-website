import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Linkedin, Instagram } from 'lucide-react';

function TikTokIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
    </svg>
  );
}

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-[#e8e8e8] pt-16 overflow-hidden">
      {/* Main grid */}
      <div className="px-6 lg:px-8 pb-16 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left — newsletter CTA */}
        <div>
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-black leading-tight max-w-sm">
            {t('newsletter_cta')}
          </p>
        </div>

        {/* Right — address + nav */}
        <div className="flex flex-col sm:flex-row gap-12 md:justify-end">
          <div>
            <p className="text-black font-semibold text-sm mb-3">{t('address_label')}</p>
            <p className="text-black/60 text-sm leading-relaxed">
              {t('address_line1')},<br />
              {t('address_line2')}.
            </p>
          </div>

          <nav className="flex flex-col gap-2">
            <p className="text-black font-semibold text-sm mb-1">Explora</p>
            <Link
              href="/proyectos"
              className="text-black/70 text-sm hover:text-black transition-colors"
            >
              {t('nav_proyectos')}
            </Link>
            <Link
              href="/expertices"
              className="text-black/70 text-sm hover:text-black transition-colors"
            >
              {t('nav_servicios')}
            </Link>
            <Link
              href="/contacto"
              className="text-black/70 text-sm hover:text-black transition-colors"
            >
              {t('nav_contacto')}
            </Link>
          </nav>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-black/10 mx-6 lg:mx-8" />

      {/* Bottom bar */}
      <div className="px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <span className="text-sm text-black/50">{t('copyright')}</span>

        <div className="flex items-center gap-6">
          <Link
            href="/privacidad"
            className="text-sm text-black/50 hover:text-black transition-colors"
          >
            {t('privacy')}
          </Link>
          <Link
            href="/trabaja"
            className="text-sm text-black/50 hover:text-black transition-colors"
          >
            {t('work_with_us')}
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/50 hover:text-black transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/50 hover:text-black transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/50 hover:text-black transition-colors"
            aria-label="TikTok"
          >
            <TikTokIcon />
          </a>
        </div>
      </div>

      {/* HYPER — full-width watermark that spans the entire screen */}
      <div className="overflow-hidden leading-none">
        <p
          className="text-[30vw] font-normal text-black/[0.07] uppercase tracking-normal select-none whitespace-nowrap text-center"
          aria-hidden="true"
        >
          HYPER
        </p>
      </div>
    </footer>
  );
}
