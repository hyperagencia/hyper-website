import { getTranslations } from 'next-intl/server';
import { ProjectsFilterGrid } from '@/components/projects/ProjectsFilterGrid';
import { getSortedProjects } from '@/data/projects';

export default async function ProyectosPage() {
  const t = await getTranslations('pages.projects');

  return (
    <section data-header-theme="light" className="bg-white pt-32 pb-24 md:pt-40 md:pb-32 px-6 lg:px-8">
      <div className="mb-16 md:mb-24">
        <h1 className="font-display font-medium leading-none tracking-tighter text-black text-[3rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] max-w-4xl">
          {t('title')}
        </h1>
      </div>

      <ProjectsFilterGrid projects={getSortedProjects()} />
    </section>
  );
}
