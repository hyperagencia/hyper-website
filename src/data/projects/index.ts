import type { Project } from './types';
import { probel } from './probel';
import { zhibo } from './zhibo';
import { artStgo } from './art-stgo';

export type { Project, ProjectCategory, GalleryBlock, LocalizedText } from './types';

export const PROJECTS: Project[] = [probel, zhibo, artStgo];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((project) => project.featured);
}

export function getRelatedProjects(slug: string, count = 3): Project[] {
  return PROJECTS.filter((project) => project.slug !== slug).slice(0, count);
}
