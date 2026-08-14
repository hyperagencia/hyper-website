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
