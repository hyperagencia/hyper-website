import { PILLARS } from '@/data/services';
import type { LocalizedText } from '@/data/services';

export interface ContactServiceOption {
  slug: string;
  label: LocalizedText;
}

export interface ContactServiceGroup {
  label: LocalizedText;
  options: ContactServiceOption[];
}

const OTHER_REASONS: ContactServiceOption[] = [
  { slug: 'trabaja', label: { es: 'Trabaja con nosotros', en: 'Work with us' } },
  { slug: 'prensa', label: { es: 'Prensa', en: 'Press' } },
  { slug: 'otro', label: { es: 'Otro', en: 'Other' } },
];

export const CONTACT_SERVICE_GROUPS: ContactServiceGroup[] = [
  ...PILLARS.map((pillar) => ({ label: pillar.title, options: pillar.services })),
  { label: { es: 'Otros', en: 'Other' }, options: OTHER_REASONS },
];

export const CONTACT_SERVICE_SLUGS: string[] = CONTACT_SERVICE_GROUPS.flatMap((group) =>
  group.options.map((option) => option.slug)
);
