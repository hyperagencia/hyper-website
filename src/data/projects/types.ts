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
  /** References a Client in src/data/clients — logo and industry are resolved from there */
  clientId: string;
  categories: ProjectCategory[];
  /** shows up in the Home grid */
  featured?: boolean;
  /** Menor = aparece antes en Home y /proyectos. 1–9 = insignia, 100 = default. Ver getSortedProjects(). */
  priority: number;
  gradientFrom: string;
  gradientTo: string;
  cover: {
    /** Cloudinary publicId, 4:5 */
    image?: string;
    /** Cloudinary publicId, 4:5 — alternative to image */
    video?: string;
    /** Cloudinary publicId, 4:5 — shown on hover, desktop only */
    hover?: string;
  };
  /** Project title — not the client name (e.g. "Un nuevo posicionamiento") */
  title: LocalizedText;
  description: LocalizedText[];
  services: LocalizedText[];
  gallery: GalleryBlock[];
}
