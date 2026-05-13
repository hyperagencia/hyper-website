import { HeroSection } from '@/components/sections/hero';
import { VideoHeroSection } from '@/components/sections/VideoHero';
import { AboutSection } from '@/components/sections/about';
import { ProjectsSection } from '@/components/sections/projects';
import { ClientsMarquee } from '@/components/sections/ClientsMarquee';
import { ExperticesSection } from '@/components/sections/ExperticesSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VideoHeroSection />
      <AboutSection />
      <ProjectsSection />
      <ClientsMarquee />
      <ExperticesSection />
    </>
  );
}
