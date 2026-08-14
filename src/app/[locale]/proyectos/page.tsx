import { getTranslations } from 'next-intl/server';
import { ProjectsFilterGrid } from '@/components/projects/ProjectsFilterGrid';
import { PROJECTS } from '@/data/projects';

export default async function ProyectosPage() {
  const t = await getTranslations('pages.projects');

  return (
    <section data-header-theme="light" className="bg-white pt-32 pb-24 md:pt-40 md:pb-32 px-6 lg:px-8">
      <div className="mb-10 md:mb-14">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black tracking-tight">{t('title')}</h1>
        <p className="mt-4 text-base md:text-lg text-black/60 max-w-xl">{t('subtitle')}</p>
      </div>

      <ProjectsFilterGrid projects={PROJECTS} />
    </section>
  );
}
