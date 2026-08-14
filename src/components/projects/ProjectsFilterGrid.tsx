'use client';

import { useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import type { Project, ProjectCategory } from '@/data/projects';

interface ProjectsFilterGridProps {
  projects: Project[];
}

export function ProjectsFilterGrid({ projects }: ProjectsFilterGridProps) {
  const t = useTranslations('pages.projects.categories');
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');

  const categories = useMemo(() => {
    const set = new Set<ProjectCategory>();
    projects.forEach((project) => project.categories.forEach((category) => set.add(category)));
    return Array.from(set);
  }, [projects]);

  const filteredProjects =
    activeCategory === 'all' ? projects : projects.filter((project) => project.categories.includes(activeCategory));

  return (
    <div>
      {/* Filter chips */}
      <div className="mb-10 flex flex-wrap gap-2 md:mb-14">
        {(['all', ...categories] as const).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wide transition-colors duration-200 ${
              activeCategory === category
                ? 'border-[#111111] bg-[#111111] text-white'
                : 'border-black/15 text-black/60 hover:border-black/40 hover:text-black'
            }`}
          >
            {t(category)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        key={activeCategory}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 md:gap-3"
      >
        {filteredProjects.map((project) => (
          <motion.div key={project.slug} variants={fadeInUp}>
            <ProjectCard project={project} locale={locale} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
