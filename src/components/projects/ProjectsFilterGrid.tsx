'use client';

import { useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { getClient, type IndustryId } from '@/data/clients';
import type { Project, ProjectCategory } from '@/data/projects';

interface ProjectsFilterGridProps {
  projects: Project[];
}

export function ProjectsFilterGrid({ projects }: ProjectsFilterGridProps) {
  const tCategories = useTranslations('pages.projects.categories');
  const tIndustries = useTranslations('pages.projects.industries');
  const tFilters = useTranslations('pages.projects.filters');
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');
  const [activeIndustry, setActiveIndustry] = useState<IndustryId | 'all'>('all');

  const categories = useMemo(() => {
    const set = new Set<ProjectCategory>();
    projects.forEach((project) => project.categories.forEach((category) => set.add(category)));
    return Array.from(set);
  }, [projects]);

  const industries = useMemo(() => {
    const set = new Set<IndustryId>();
    projects.forEach((project) => {
      const industry = getClient(project.clientId)?.industry;
      if (industry) set.add(industry);
    });
    return Array.from(set);
  }, [projects]);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === 'all' || project.categories.includes(activeCategory);
    const matchesIndustry = activeIndustry === 'all' || getClient(project.clientId)?.industry === activeIndustry;
    return matchesCategory && matchesIndustry;
  });

  return (
    <div>
      {/* Filter chips */}
      <div className="mb-10 space-y-4 md:mb-14">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-black/40">{tFilters('service')}</p>
          <div className="flex flex-wrap gap-2">
            {(['all', ...categories] as const).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-xs font-medium tracking-wide transition-colors duration-200 ${
                  activeCategory === category
                    ? 'border-[#111111] bg-[#111111] text-white'
                    : 'border-black/15 text-black/60 hover:border-black/40 hover:text-black'
                }`}
              >
                {tCategories(category)}
              </button>
            ))}
          </div>
        </div>

        {industries.length > 0 && (
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-black/40">{tFilters('industry')}</p>
            <div className="flex flex-wrap gap-2">
              {(['all', ...industries] as const).map((industry) => (
                <button
                  key={industry}
                  onClick={() => setActiveIndustry(industry)}
                  className={`rounded-full border px-4 py-2 text-xs font-medium tracking-wide transition-colors duration-200 ${
                    activeIndustry === industry
                      ? 'border-[#111111] bg-[#111111] text-white'
                      : 'border-black/15 text-black/60 hover:border-black/40 hover:text-black'
                  }`}
                >
                  {tIndustries(industry)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Grid */}
      {filteredProjects.length > 0 ? (
        <motion.div
          key={`${activeCategory}-${activeIndustry}`}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.slug} variants={fadeInUp}>
              <ProjectCard project={project} locale={locale} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <p className="py-16 text-center text-black/40">{tFilters('empty')}</p>
      )}
    </div>
  );
}
