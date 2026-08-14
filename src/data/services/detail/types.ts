import type { LocalizedText, PillarId } from '../types';

export interface ServiceValueBlock {
  title: LocalizedText;
  description: LocalizedText;
  /** Cloudinary publicId — placeholder gradient (pillar accent) is used when omitted */
  image?: string;
}

export interface ServiceExtraList {
  heading: LocalizedText;
  items: LocalizedText[];
}

export interface ServiceProcessStep {
  title: LocalizedText;
  description: LocalizedText;
}

export interface ServiceDetail {
  /** must match the ServiceTag.slug that links here from PillarCard */
  slug: string;
  pillarSlug: PillarId;
  seo: {
    title: LocalizedText;
    description: LocalizedText;
  };
  hero: {
    title: LocalizedText;
    /** intro paragraph shown below the banner */
    subtitle: LocalizedText;
    /** Cloudinary publicId — placeholder gradient is used when omitted */
    coverImage?: string;
  };
  valueBlocks: ServiceValueBlock[];
  includes: LocalizedText[];
  extraLists?: ServiceExtraList[];
  process: ServiceProcessStep[];
  cta: {
    heading: LocalizedText;
    description: LocalizedText;
  };
}
