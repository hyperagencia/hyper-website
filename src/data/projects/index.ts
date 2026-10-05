import type { Project } from './types';
import { probel } from './probel';
import { zhibo } from './zhibo';
import { artStgo } from './art-stgo';
import { lonkingmaq } from './lonkingmaq';
import { generalFocus } from './general-focus';
import { liozar } from './liozar';

export type { Project, ProjectCategory, GalleryBlock, LocalizedText } from './types';

export const PROJECTS: Project[] = [lonkingmaq, zhibo, probel, artStgo, generalFocus, liozar];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

/** Sorted by `priority` ascending (lower = shown first). Stable sort — ties keep PROJECTS declaration order. */
export function getSortedProjects(): Project[] {
  return [...PROJECTS].sort((a, b) => a.priority - b.priority);
}

export function getFeaturedProjects(): Project[] {
  return getSortedProjects().filter((project) => project.featured);
}

export function getRelatedProjects(slug: string, count = 3): Project[] {
  return getSortedProjects()
    .filter((project) => project.slug !== slug)
    .slice(0, count);
}
