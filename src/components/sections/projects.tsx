'use client';

import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';
import { getFeaturedProjects } from '@/data/projects';

export function ProjectsSection() {
  const t = useTranslations('pages.home.projects');
  const locale = useLocale();
  const featuredProjects = getFeaturedProjects();

  return (
    <section data-header-theme="light" className="bg-white py-24 md:py-32 px-6 lg:px-8">
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
          className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-black tracking-tight"
        >
          {t('heading')}
        </motion.h2>
      </motion.div>

      {/* Projects grid — uniform 4:5 cards, 3 columns on desktop */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
        className="grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-2 lg:grid-cols-3"
      >
        {featuredProjects.map((project) => (
          <motion.div key={project.slug} variants={scaleIn}>
            <ProjectCard project={project} locale={locale} />
          </motion.div>
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
