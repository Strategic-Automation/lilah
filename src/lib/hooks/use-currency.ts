"use client";

import { useMemo } from "react";
import {
  type CurrencyCode,
  CURRENCIES,
  DEFAULT_CURRENCY,
  CURRENCY_COOKIE_NAME,
  formatPrice as formatPriceUtil,
} from "@/lib/currency";

function getCurrencyFromCookie(): CurrencyCode {
  if (typeof document === "undefined") return DEFAULT_CURRENCY;

  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${CURRENCY_COOKIE_NAME}=`));

  if (!match) return DEFAULT_CURRENCY;

  const value = match.split("=")[1] as CurrencyCode;
  return value in CURRENCIES ? value : DEFAULT_CURRENCY;
}

export function useCurrency() {
  const currencyCode = useMemo(() => getCurrencyFromCookie(), []);
  const config = CURRENCIES[currencyCode];

  return {
    code: currencyCode,
    symbol: config.symbol,
    locale: config.locale,
    formatPrice: (usdAmount: number) =>
      formatPriceUtil(usdAmount, currencyCode),
  };
}
