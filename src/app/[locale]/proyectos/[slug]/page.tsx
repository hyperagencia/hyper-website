import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { X } from 'lucide-react';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ProjectGalleryBlock } from '@/components/projects/ProjectGalleryBlock';
import { PROJECTS, getProjectBySlug, getRelatedProjects } from '@/data/projects';

interface ProjectDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const t = await getTranslations('pages.projects.detail');
  const tCategories = await getTranslations('pages.projects.categories');
  const localeKey = locale as 'es' | 'en';
  const relatedProjects = getRelatedProjects(slug, 3);

  return (
    <section data-header-theme="light" className="bg-white px-6 lg:px-8">
      {/* Close button */}
      <Link
        href="/proyectos"
        aria-label={t('close')}
        className="fixed top-4 right-4 md:right-8 z-[60] flex h-10 w-10 items-center justify-center rounded-full bg-[#111111] text-white transition-transform duration-200 hover:scale-105"
      >
        <X className="h-5 w-5" />
      </Link>

      <div className="flex flex-col gap-10 lg:flex-row lg:gap-8">
        {/* Left column — sticky info */}
        <div className="pt-32 lg:w-[30%] lg:pt-[10%] lg:sticky lg:top-24 lg:self-start">
          <h1 className="text-4xl md:text-5xl font-medium text-black tracking-tight">{project.title[localeKey]}</h1>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.categories.map((category) => (
              <span
                key={category}
                className="text-black/60 text-[10px] font-medium tracking-wide uppercase bg-black/5 px-3 py-1 rounded-full border border-black/10"
              >
                {tCategories(category)}
              </span>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            {project.description.map((paragraph, i) => (
              <p key={i} className="text-base text-black/70 leading-relaxed">
                {paragraph[localeKey]}
              </p>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-xs font-medium uppercase tracking-wide text-black/40 mb-3">{t('services_heading')}</p>
            <ul className="space-y-2">
              {project.services.map((service, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-black/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#f1e066] shrink-0" />
                  {service[localeKey]}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right column — gallery grid */}
        <div className="lg:w-[70%]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 pb-24">
            {project.gallery.map((block, i) => (
              <ProjectGalleryBlock
                key={i}
                block={block}
                locale={locale}
                gradientFrom={project.gradientFrom}
                gradientTo={project.gradientTo}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Explore more projects */}
      {relatedProjects.length > 0 && (
        <div className="border-t border-black/10 py-24 md:py-32">
          <h2 className="text-3xl md:text-4xl font-medium text-black tracking-tight mb-10 md:mb-14">
            {t('explore_more_heading')}
          </h2>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-3">
            {relatedProjects.map((related) => (
              <ProjectCard key={related.slug} project={related} locale={locale} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
