'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { CloudinaryVideo } from '@/components/ui/CloudinaryVideo';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  locale: string;
  /** When true, a 'full' layout project spans 2 columns at 5:2 — used by grids that alternate half/full (Home). Listing/related grids pass false for a uniform square grid. */
  allowFullSpan?: boolean;
}

export function ProjectCard({ project, locale, allowFullSpan = false }: ProjectCardProps) {
  const t = useTranslations('pages.projects.categories');
  const title = project.title[locale as 'es' | 'en'] ?? project.title.es;
  const isFull = allowFullSpan && project.layout === 'full';

  return (
    <Link
      href={{ pathname: '/proyectos/[slug]', params: { slug: project.slug } }}
      className={`relative block rounded-xl md:rounded-2xl overflow-hidden group ${
        isFull ? 'aspect-square md:col-span-2 md:aspect-[5/2]' : 'aspect-square'
      }`}
    >
      {project.cover.video ? (
        <CloudinaryVideo
          publicId={project.cover.video}
          aspect="16:9"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : project.cover.image ? (
        <CloudinaryImage
          publicId={project.cover.image}
          alt={title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : (
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
          style={{
            background: `linear-gradient(135deg, ${project.gradientFrom} 0%, ${project.gradientTo} 100%)`,
          }}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
        {project.categories.slice(0, 2).map((category) => (
          <span
            key={category}
            className="text-white/70 text-[10px] md:text-xs font-medium tracking-wide uppercase bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10"
          >
            {t(category)}
          </span>
        ))}
      </div>

      <div className="absolute bottom-5 left-5 right-5">
        <h3 className="text-white text-lg md:text-2xl lg:text-3xl font-medium leading-tight">{title}</h3>
      </div>
    </Link>
  );
}
