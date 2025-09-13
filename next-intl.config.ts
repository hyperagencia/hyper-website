import { getRequestConfig } from 'next-intl/server';
import { routing } from './src/i18n/routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // This can either be defined statically at the top-level if you're only supporting a single locale,
  // or read from the user's request
  let locale = await requestLocale;

  // Ensure that a supported locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});