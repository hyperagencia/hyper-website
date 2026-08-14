import type { Pillar } from './types';
import { development } from './development';
import { branding } from './branding';
import { design } from './design';

export type { Pillar, PillarId, LocalizedText } from './types';

export const PILLARS: Pillar[] = [development, branding, design].sort((a, b) => a.order - b.order);

export function getPillarBySlug(slug: string): Pillar | undefined {
  return PILLARS.find((pillar) => pillar.slug === slug);
}
