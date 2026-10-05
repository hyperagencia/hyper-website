/** ISO 3166-1 alpha-2 codes. Chile first (primary market), then the rest alphabetized by name at render time via Intl.DisplayNames. */
export const COUNTRY_CODES: string[] = [
  'CL',
  'AR',
  'BO',
  'BR',
  'CO',
  'CR',
  'CU',
  'DO',
  'EC',
  'SV',
  'GT',
  'HN',
  'MX',
  'NI',
  'PA',
  'PY',
  'PE',
  'PR',
  'UY',
  'VE',
  'US',
  'CA',
  'ES',
  'PT',
  'FR',
  'DE',
  'IT',
  'GB',
  'IE',
  'NL',
  'BE',
  'CH',
  'AT',
  'SE',
  'NO',
  'DK',
  'FI',
  'PL',
  'CZ',
  'GR',
  'AU',
  'NZ',
  'JP',
  'CN',
  'KR',
  'IN',
  'SG',
  'AE',
  'IL',
  'ZA',
];

export interface CountryOption {
  code: string;
  name: string;
}

/** Builds the country list for a <select>, localized by `locale`, with Chile pinned first. */
export function getCountryOptions(locale: string): CountryOption[] {
  const displayNames = new Intl.DisplayNames([locale], { type: 'region' });
  const [first, ...rest] = COUNTRY_CODES;
  const restOptions = rest
    .map((code) => ({ code, name: displayNames.of(code) ?? code }))
    .sort((a, b) => a.name.localeCompare(b.name, locale));

  return [{ code: first, name: displayNames.of(first) ?? first }, ...restOptions];
}
