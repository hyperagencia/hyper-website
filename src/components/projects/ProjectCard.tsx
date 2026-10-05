'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { CloudinaryVideo } from '@/components/ui/CloudinaryVideo';
import { getClient } from '@/data/clients';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  locale: string;
}

export function ProjectCard({ project, locale }: ProjectCardProps) {
  const t = useTranslations('pages.projects.industries');
  const localeKey = locale as 'es' | 'en';
  const title = project.title[localeKey] ?? project.title.es;
  const client = getClient(project.clientId);
  const clientName = client?.name ?? '';
  const clientInitial = clientName.charAt(0).toUpperCase();

  return (
    <Link href={{ pathname: '/proyectos/[slug]', params: { slug: project.slug } }} className="group block">
      <div
        className="relative aspect-[4/5] overflow-hidden rounded-[15px] transition-transform duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] motion-reduce:transition-none md:group-hover:scale-[0.97]"
      >
        {/* Cover layer */}
        <div className="absolute inset-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] motion-reduce:transition-none md:group-hover:scale-[1.04]">
          {project.cover.video ? (
            <CloudinaryVideo
              publicId={project.cover.video}
              aspect="4:5"
              className="h-full w-full object-cover"
            />
          ) : project.cover.image ? (
            <CloudinaryImage
              publicId={project.cover.image}
              alt={title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${project.gradientFrom} 0%, ${project.gradientTo} 100%)` }}
            >
              <span className="font-display text-white/20 text-6xl font-medium">{clientInitial}</span>
            </div>
          )}
        </div>

        {/* Hover cover layer — desktop only */}
        {project.cover.hover && (
          <div className="absolute inset-0 hidden opacity-0 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] md:block md:group-hover:opacity-100">
            <CloudinaryImage
              publicId={project.cover.hover}
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        )}

        {/* Legibility gradient for the client badge */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

        {/* Client badge */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
          <div className="h-12 w-12 md:h-14 md:w-14 shrink-0 overflow-hidden rounded-[10px] bg-brand-dark">
            {client?.logo ? (
              <CloudinaryImage
                publicId={client.logo}
                alt={clientName}
                width={112}
                height={112}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <span className="font-display text-white text-lg font-medium">{clientInitial}</span>
              </div>
            )}
          </div>
          <div className="min-w-0">
            <p className="truncate font-medium text-white leading-tight">{clientName}</p>
            {client?.industry && (
              <p className="truncate text-sm text-white/80 leading-tight">{t(client.industry)}</p>
            )}
          </div>
        </div>
      </div>

      <h3 className="mt-3 font-display text-xl md:text-2xl font-medium text-black tracking-tight">{title}</h3>
    </Link>
  );
}
