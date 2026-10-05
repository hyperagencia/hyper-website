export type IndustryId = 'mining-industrial' | 'retail' | 'entertainment' | 'culture' | 'fashion' | 'health' | 'beauty';

export interface Client {
  id: string;
  /** Displayed as-is — client names are not translated */
  name: string;
  /** Cloudinary publicId, 1:1 — omit while the client's logo hasn't been uploaded yet */
  logo?: string;
  industry: IndustryId;
}

export const CLIENTS: Record<string, Client> = {
  lonkingmaq: {
    id: 'lonkingmaq',
    name: 'Lonking Maq',
    logo: 'lonkingmaq-logo_hqun4t',
    industry: 'mining-industrial',
  },
  zhibo: {
    id: 'zhibo',
    name: 'Zhibo',
    logo: 'zhibo-logo_wlotb7',
    industry: 'mining-industrial',
  },
  probel: {
    id: 'probel',
    name: 'Probel',
    logo: 'probel-logo_plk01i',
    industry: 'beauty',
  },
  'art-stgo': {
    id: 'art-stgo',
    name: 'Art Stgo',
    logo: 'art-stgo-logo_ytrrdb',
    industry: 'culture',
  },
  liozar: {
    id: 'liozar',
    name: 'Liozar',
    logo: 'liozar-logo_a5uue4',
    industry: 'fashion',
  },
  'general-focus': {
    id: 'general-focus',
    name: 'General Focus',
    logo: 'general-focus-logo_ynbahr',
    industry: 'health',
  },
};

export function getClient(id: string): Client | undefined {
  return CLIENTS[id];
}

export interface ClientLogo {
  name: string;
  /** Path under public/assets/clients/ */
  src: string;
}

/** Grid of client logos shown on Home and /agencia (ClientsGrid) — separate from CLIENTS (project case studies) */
export const CLIENT_LOGOS: ClientLogo[] = [
  { name: 'SFCA', src: '/assets/clients/sfca_client2.svg' },
  { name: 'Art Stgo', src: '/assets/clients/logo-art-stgo-dark.svg' },
  { name: 'Lonking Maq', src: '/assets/clients/logo-lonkingmaq-dark.svg' },
  { name: 'General Focus', src: '/assets/clients/generalfocus-logo-dark.svg' },
  { name: 'Walmart Chile', src: '/assets/clients/walmart_chile_client.svg' },
  { name: 'Yes', src: '/assets/clients/yes_client3.svg' },
  { name: 'Audi', src: '/assets/clients/audi_client.svg' },
  { name: 'Emaar', src: '/assets/clients/emaar_client.svg' },
  { name: 'VTR', src: '/assets/clients/vtr_client.svg' },
  { name: 'Zhibo', src: '/assets/clients/zhibo_client.svg' },
];
