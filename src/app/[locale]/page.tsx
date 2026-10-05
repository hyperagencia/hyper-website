import { HeroSection } from '@/components/sections/hero';
import { VideoHeroSection } from '@/components/sections/VideoHero';
import { AboutSection } from '@/components/sections/about';
import { ProjectsSection } from '@/components/sections/projects';
import { ClientsGrid } from '@/components/sections/ClientsGrid';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VideoHeroSection />
      <AboutSection />
      <ProjectsSection />
      <ClientsGrid namespace="pages.home.clients" />
    </>
  );
}
