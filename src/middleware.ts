import { locales, localePrefix } from "./navigation";
import createIntlMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const [, locale, ...segments] = request.nextUrl.pathname.split("/");
  const intlMiddleware = createIntlMiddleware({
    locales,
    localePrefix: "as-needed",
    defaultLocale: "en",
  });

  const response = intlMiddleware(request);

  // Add pathname to headers for layout detection
  if (response) {
    response.headers.set("x-pathname", request.nextUrl.pathname);
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|css|robots.txt|favicon.ico|favicon.png|apple-touch-icon.png|manifest|img).*)",
  ],
};
