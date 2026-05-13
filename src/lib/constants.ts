export interface Project {
  id: string;
  titleKey: string;
  category: string;
  gradientFrom: string;
  gradientTo: string;
  layout: 'half' | 'full';
}

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'long-king',
    titleKey: 'long_king',
    category: 'Branding · Minería',
    gradientFrom: '#111111',
    gradientTo: '#1e1e1e',
    layout: 'half',
  },
  {
    id: 'kurrupt',
    titleKey: 'kurrupt',
    category: 'Branding · Moda',
    gradientFrom: '#7a0000',
    gradientTo: '#c0392b',
    layout: 'half',
  },
  {
    id: 'zhapn',
    titleKey: 'zhapn',
    category: 'Branding',
    gradientFrom: '#2a3a1a',
    gradientTo: '#1a2a10',
    layout: 'full',
  },
  {
    id: 'audi',
    titleKey: 'audi',
    category: 'Automotriz · UX/UI · Web',
    gradientFrom: '#050505',
    gradientTo: '#101010',
    layout: 'half',
  },
  {
    id: 'amava',
    titleKey: 'amava',
    category: 'Motion · Identidad',
    gradientFrom: '#1a3460',
    gradientTo: '#0d2040',
    layout: 'half',
  },
  {
    id: 'twilio',
    titleKey: 'twilio',
    category: 'Motion · Web',
    gradientFrom: '#0f1c6e',
    gradientTo: '#070e40',
    layout: 'full',
  },
];

export const CLIENT_NAMES: string[] = [
  'Antofagasta Minerals',
  'Entel',
  'Cencosud',
  'Falabella',
  'Codelco',
  'Latam Airlines',
  'BancoEstado',
  'Sodimac',
  'Ripley',
  'VTR',
];

export interface Expertice {
  id: 'branding' | 'tecnologia';
  titleKey: string;
  descriptionKey: string;
  href: string;
}

export const EXPERTICES: Expertice[] = [
  {
    id: 'branding',
    titleKey: 'branding_title',
    descriptionKey: 'branding_description',
    href: '/expertices',
  },
  {
    id: 'tecnologia',
    titleKey: 'tecnologia_title',
    descriptionKey: 'tecnologia_description',
    href: '/expertices',
  },
];
