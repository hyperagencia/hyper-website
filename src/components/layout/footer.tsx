import { useTranslations } from 'next-intl';
import { AnimatedLink, AnimatedExternalLink } from '@/components/ui/AnimatedLink';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-[#e8e8e8] pt-16 overflow-hidden">
      {/* Main grid */}
      <div className="px-6 lg:px-8 pb-16">
        {/* Address + nav */}
        <div className="flex flex-col sm:flex-row gap-12 sm:justify-between">
          <div className="flex flex-col sm:flex-row gap-12">
            <div>
              <p className="text-black font-semibold text-sm mb-3">{t('address_label')}</p>
              <p className="text-black/60 text-sm leading-relaxed">
                {t('address_line1')},<br />
                {t('address_line2')}.
              </p>
            </div>
            <div>
              <p className="text-black font-semibold text-sm mb-3">{t('address_label_ve')}</p>
              <p className="text-black/60 text-sm leading-relaxed">
                {t('address_ve')}<br />
                {t('coming_soon')}
              </p>
            </div>
          </div>

          <nav className="flex flex-col gap-2">
            <p className="text-black font-semibold text-sm mb-1">Explora</p>
            <AnimatedLink href="/proyectos" className="text-black/70 text-sm hover:text-black transition-colors">
              {t('nav_proyectos')}
            </AnimatedLink>
            <AnimatedLink href="/expertices" className="text-black/70 text-sm hover:text-black transition-colors">
              {t('nav_servicios')}
            </AnimatedLink>
            <AnimatedLink href="/contacto" className="text-black/70 text-sm hover:text-black transition-colors">
              {t('nav_contacto')}
            </AnimatedLink>
          </nav>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-black/10 mx-6 lg:mx-8" />

      {/* Bottom bar */}
      <div className="px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <span className="text-sm text-black/50">{t('copyright')}</span>

        <div className="flex items-center gap-6">
          <AnimatedLink href="/privacidad" className="text-sm text-black/50 hover:text-black transition-colors">
            {t('privacy')}
          </AnimatedLink>
          <AnimatedLink href="/terminos" className="text-sm text-black/50 hover:text-black transition-colors">
            {t('terms')}
          </AnimatedLink>
        </div>

        <div className="flex items-center gap-6">
          <AnimatedExternalLink
            href="https://www.linkedin.com/company/hyper-branding-agency-spa"
            className="text-sm text-black/50 hover:text-black transition-colors"
          >
            LinkedIn
          </AnimatedExternalLink>
          <AnimatedExternalLink
            href="https://instagram.com/hyperagencia/"
            className="text-sm text-black/50 hover:text-black transition-colors"
          >
            Instagram
          </AnimatedExternalLink>
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
