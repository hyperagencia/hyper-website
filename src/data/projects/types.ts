export type ProjectCategory =
  | 'branding'
  | 'motion'
  | 'web'
  | 'ui-ux'
  | 'app'
  | 'react'
  | 'nextjs'
  | 'headless'
  | 'ecommerce'
  | 'custom-development'
  | 'mobile';

export interface LocalizedText {
  es: string;
  en: string;
}

export interface GalleryBlock {
  type: 'image' | 'video' | 'text';
  /** Cloudinary publicId — required for type: 'image' | 'video' */
  publicId?: string;
  /** required for type: 'image' | 'video' */
  aspect?: '1:1' | '16:9';
  /** half = 1 col in a 2-col grid, full = spans both columns. Defaults to 'half'. */
  span?: 'half' | 'full';
  /** required for type: 'text' */
  text?: LocalizedText;
}

export interface Project {
  slug: string;
  categories: ProjectCategory[];
  /** e.g. 'Minería', 'Retail' — data only, no filter UI yet */
  industry?: string;
  /** shows up in the Home grid */
  featured?: boolean;
  /** card proportion in the Home grid */
  layout: 'half' | 'full';
  gradientFrom: string;
  gradientTo: string;
  cover: {
    image?: string;
    video?: string;
  };
  title: LocalizedText;
  description: LocalizedText[];
  services: LocalizedText[];
  gallery: GalleryBlock[];
}
