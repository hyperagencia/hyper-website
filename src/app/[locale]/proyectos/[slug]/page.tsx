import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { X } from 'lucide-react';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ProjectGalleryBlock } from '@/components/projects/ProjectGalleryBlock';
import { PROJECTS, getProjectBySlug, getRelatedProjects } from '@/data/projects';
import { getClient } from '@/data/clients';
import { getCldImageUrl } from 'next-cloudinary';
import { JsonLd } from '@/components/seo/JsonLd';
import { SITE_URL, absoluteUrl, buildPageMetadata, type Locale } from '@/lib/seo';

interface ProjectDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

function truncate(text: string, max = 155) {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).replace(/\s+\S*$/, '')}…`;
}

function projectSeo(slug: string, locale: 'es' | 'en') {
  const project = getProjectBySlug(slug);
  if (!project) return null;
  const client = getClient(project.clientId);
  const clientName = client?.name ?? project.slug;
  const services = project.services.slice(0, 2).map((s) => s[locale]).join(' & ');
  const title = `${clientName} — ${services} | Hyper`;
  const description = truncate(project.description[0][locale]);
  const coverId = project.cover.image ?? project.cover.hover;
  const image = coverId
    ? getCldImageUrl({ src: coverId, width: 1200, height: 630, crop: 'fill', gravity: 'auto', format: 'jpg' })
    : undefined;
  return { project, clientName, title, description, image };
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { locale, slug } = await params;
  const seo = projectSeo(slug, locale as 'es' | 'en');
  if (!seo) return {};
  return buildPageMetadata({
    locale,
    href: { pathname: '/proyectos/[slug]', params: { slug } },
    title: seo.title,
    description: seo.description,
    image: seo.image,
  });
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const t = await getTranslations('pages.projects.detail');
  const tCategories = await getTranslations('pages.projects.categories');
  const tIndustries = await getTranslations('pages.projects.industries');
  const localeKey = locale as 'es' | 'en';
  const relatedProjects = getRelatedProjects(slug, 3);
  const client = getClient(project.clientId);

  const seo = projectSeo(slug, localeKey)!;
  const projectUrl = absoluteUrl({ pathname: '/proyectos/[slug]', params: { slug } }, locale as Locale);
  const tNav = await getTranslations('common.navigation');
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CreativeWork',
        '@id': `${projectUrl}#project`,
        name: seo.title,
        headline: project.title[localeKey],
        description: seo.description,
        url: projectUrl,
        inLanguage: locale,
        ...(seo.image && { image: seo.image }),
        creator: { '@id': `${SITE_URL}/#organization` },
        about: seo.clientName,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: tNav('inicio'), item: absoluteUrl('/', locale as Locale) },
          { '@type': 'ListItem', position: 2, name: tNav('proyectos'), item: absoluteUrl('/proyectos', locale as Locale) },
          { '@type': 'ListItem', position: 3, name: seo.clientName, item: projectUrl },
        ],
      },
    ],
  };

  return (
    <section data-header-theme="light" className="bg-white px-6 lg:px-8">
      <JsonLd data={jsonLd} />
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
          {client && (
            <p className="text-sm font-medium text-black/50">
              {client.name}
              {client.industry && <> — {tIndustries(client.industry)}</>}
            </p>
          )}
          <h1 className="mt-2 font-display text-4xl md:text-5xl font-medium text-black tracking-tight">{project.title[localeKey]}</h1>

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
                alt={`${seo.clientName} — ${project.title[localeKey]}`}
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
          <h2 className="font-display text-3xl md:text-4xl font-medium text-black tracking-tight mb-10 md:mb-14">
            {t('explore_more_heading')}
          </h2>
          <div className="grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-3">
            {relatedProjects.map((related) => (
              <ProjectCard key={related.slug} project={related} locale={locale} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
