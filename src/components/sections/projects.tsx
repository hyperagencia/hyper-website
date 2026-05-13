'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';
import { FEATURED_PROJECTS } from '@/lib/constants';

export function ProjectsSection() {
  const t = useTranslations('pages.home.projects');

  return (
    <section className="bg-white py-24 md:py-32 px-6 lg:px-8">
      {/* Section heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
        className="mb-10 md:mb-14"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl md:text-5xl lg:text-6xl font-medium text-black tracking-tight"
        >
          {t('heading')}
        </motion.h2>
      </motion.div>

      {/* Projects grid — half items fill one column, full items span both */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3"
      >
        {FEATURED_PROJECTS.map((project) => (
          <motion.article
            key={project.id}
            variants={scaleIn}
            className={`relative rounded-xl md:rounded-2xl overflow-hidden cursor-pointer group aspect-square ${
              project.layout === 'full'
                ? 'md:col-span-2 md:aspect-[5/2]'
                : 'md:col-span-1'
            }`}
          >
            {/* Gradient placeholder — replace with next/image when photos are available */}
            <div
              className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${project.gradientFrom} 0%, ${project.gradientTo} 100%)`,
              }}
            />

            {/* Vignette bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Category — top left */}
            <div className="absolute top-4 left-4 flex gap-2">
              {project.category.split(' · ').map((cat) => (
                <span
                  key={cat}
                  className="text-white/70 text-[10px] md:text-xs font-medium tracking-wide uppercase bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10"
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* Project name — bottom left */}
            <div className="absolute bottom-5 left-5 right-5">
              <h3 className="text-white text-lg md:text-2xl lg:text-3xl font-medium leading-tight">
                {t(`items.${project.titleKey}`)}
              </h3>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-10 flex justify-center"
      >
        <Link href="/proyectos">
          <Button variant="outline" size="lg" className="rounded-full">
            {t('cta')}
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
