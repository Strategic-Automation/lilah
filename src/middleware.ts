import { NextRequest, NextResponse } from "next/server";
import {
  getCurrencyForCountry,
  CURRENCY_COOKIE_NAME,
} from "@/lib/currency";

export function middleware(request: NextRequest) {
  // If cookie already set, don't override (allows future manual override)
  if (request.cookies.get(CURRENCY_COOKIE_NAME)) {
    return NextResponse.next();
  }

  // Read the Vercel geolocation header (set automatically at the edge)
  const country = request.headers.get("x-vercel-ip-country");
  const currency = getCurrencyForCountry(country);

  const response = NextResponse.next();
  response.cookies.set(CURRENCY_COOKIE_NAME, currency, {
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    sameSite: "lax",
  });

  return response;
}

// Only run on the homepage — skip static assets, images, API routes
export const config = {
  matcher: ["/"],
};
