export type CurrencyCode = "USD" | "GBP" | "EUR";

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  locale: string;
  rateFromUSD: number;
}

// Approximate marketing exchange rates — last updated March 2026
export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  USD: { code: "USD", symbol: "$", locale: "en-US", rateFromUSD: 1 },
  GBP: { code: "GBP", symbol: "£", locale: "en-GB", rateFromUSD: 0.79 },
  EUR: { code: "EUR", symbol: "€", locale: "de-DE", rateFromUSD: 0.92 },
};

export const DEFAULT_CURRENCY: CurrencyCode = "USD";
export const CURRENCY_COOKIE_NAME = "currency";

// ISO 3166-1 alpha-2 → currency mapping
const COUNTRY_TO_CURRENCY: Record<string, CurrencyCode> = {
  // USD
  US: "USD",

  // GBP
  GB: "GBP",

  // EUR — EU member states using the euro
  AT: "EUR", // Austria
  BE: "EUR", // Belgium
  CY: "EUR", // Cyprus
  DE: "EUR", // Germany
  EE: "EUR", // Estonia
  ES: "EUR", // Spain
  FI: "EUR", // Finland
  FR: "EUR", // France
  GR: "EUR", // Greece
  HR: "EUR", // Croatia
  IE: "EUR", // Ireland
  IT: "EUR", // Italy
  LT: "EUR", // Lithuania
  LU: "EUR", // Luxembourg
  LV: "EUR", // Latvia
  MT: "EUR", // Malta
  NL: "EUR", // Netherlands
  PT: "EUR", // Portugal
  SI: "EUR", // Slovenia
  SK: "EUR", // Slovakia

  // Non-EU eurozone / euro-pegged
  AD: "EUR", // Andorra
  MC: "EUR", // Monaco
  SM: "EUR", // San Marino
  VA: "EUR", // Vatican City
  ME: "EUR", // Montenegro
  XK: "EUR", // Kosovo
};

export function getCurrencyForCountry(
  countryCode: string | null | undefined
): CurrencyCode {
  if (!countryCode) return DEFAULT_CURRENCY;
  return COUNTRY_TO_CURRENCY[countryCode.toUpperCase()] ?? DEFAULT_CURRENCY;
}

export function formatPrice(
  usdAmount: number,
  currencyCode: CurrencyCode
): string {
  const config = CURRENCIES[currencyCode];

  if (usdAmount === 0) return `${config.symbol}0`;

  const converted = usdAmount * config.rateFromUSD;
  // Round to nearest .99 for marketing appeal
  const rounded = Math.floor(converted) + 0.99;

  return new Intl.NumberFormat(config.locale, {
    style: "currency",
    currency: config.code,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(rounded);
}
