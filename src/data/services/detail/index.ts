import type { ServiceDetail } from './types';
import { identidadVisual } from './identidad-visual';
import { estrategiaNaming } from './estrategia-naming';
import { motionBranding } from './motion-branding';
import { brandSystems } from './brand-systems';
import { uiUx } from './ui-ux';
import { webDesign } from './web-design';
import { ecommerceDesign } from './ecommerce-design';
import { sitiosWeb } from './sitios-web';
import { ecommerce } from './ecommerce';
import { webApps } from './web-apps';
import { wordpress } from './wordpress';
import { integraciones } from './integraciones';

export type { ServiceDetail, ServiceValueBlock, ServiceExtraList, ServiceProcessStep } from './types';

export const SERVICE_DETAILS: ServiceDetail[] = [
  identidadVisual,
  estrategiaNaming,
  motionBranding,
  brandSystems,
  uiUx,
  webDesign,
  ecommerceDesign,
  sitiosWeb,
  ecommerce,
  webApps,
  wordpress,
  integraciones,
];

export function getServiceDetailBySlug(slug: string): ServiceDetail | undefined {
  return SERVICE_DETAILS.find((service) => service.slug === slug);
}
