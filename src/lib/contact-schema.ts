import { z } from 'zod';
import { COUNTRY_CODES } from './countries';
import { CONTACT_SERVICE_SLUGS } from './contact-options';

/** Shared by the client form and the API route so validation never drifts between the two. */
export const contactSchema = z.object({
  firstName: z.string().trim().min(1).max(100),
  lastName: z.string().trim().max(100).optional().or(z.literal('')),
  email: z.string().trim().min(1).max(255).email(),
  company: z.string().trim().max(150).optional().or(z.literal('')),
  jobTitle: z.string().trim().min(1).max(150),
  country: z.string().refine((value) => COUNTRY_CODES.includes(value), { message: 'invalid_country' }),
  service: z.string().refine((value) => CONTACT_SERVICE_SLUGS.includes(value), { message: 'invalid_service' }),
  message: z.string().trim().min(1).max(3000),
  consentAccepted: z.literal(true),
  locale: z.enum(['es', 'en']),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export type ContactFieldErrors = Partial<Record<keyof ContactFormValues, string>>;

/**
 * Anti-spam envelope sent alongside the real fields — validated separately from `contactSchema`
 * (before it, in the API route) so a filled honeypot can be silently discarded with a 200
 * instead of surfacing a 400 that would reveal the trap to a bot.
 */
export interface ContactRequestBody extends ContactFormValues {
  /** Honeypot — must arrive empty. A real visitor never sees or fills this field. */
  website?: string;
  /** `Date.now()` when the form mounted — used to reject submissions that arrive too fast. */
  startedAt: number;
}
