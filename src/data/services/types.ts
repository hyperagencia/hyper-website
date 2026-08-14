export interface LocalizedText {
  es: string;
  en: string;
}

export type PillarId = 'development' | 'branding' | 'design';

export interface ServiceTag {
  /** unique across all pillars — used as the /expertices/[servicio] route param */
  slug: string;
  label: LocalizedText;
}

export interface Pillar {
  slug: PillarId;
  /** display order — 1 = Desarrollo, 2 = Branding, 3 = Diseño */
  order: number;
  /** card color within the Coloress system */
  accent: 'yellow' | 'dark' | 'light';
  title: LocalizedText;
  description: LocalizedText;
  /** sub-services shown as tags, e.g. "Sitios Web" */
  services: ServiceTag[];
}
