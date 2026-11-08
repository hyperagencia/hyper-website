import { buildPageMetadata } from '@/lib/seo';
import { getTranslations } from 'next-intl/server';
import { HeroSection } from '@/components/sections/hero';
import { VideoHeroSection } from '@/components/sections/VideoHero';
import { AboutSection } from '@/components/sections/about';
import { ProjectsSection } from '@/components/sections/projects';
import { ExperticesSection } from '@/components/sections/ExperticesSection';
import { ClientsGrid } from '@/components/sections/ClientsGrid';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.pages.home' });
  return buildPageMetadata({ locale, href: '/', title: t('title'), description: t('description') });
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VideoHeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperticesSection />
      <ClientsGrid namespace="pages.home.clients" />
    </>
  );
}
