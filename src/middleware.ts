/* eslint-disable consistent-return */
// import { defaultLocale, localePrefix, locales } from "./messages/config";
import { type NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

import { auth } from "./auth";
// import { authOptions } from "./app/api/auth/[...nextauth]/route";
import { AppConfig } from "./utils/AppConfig";

const intlMiddleware = createMiddleware({
  locales: AppConfig.locales,
  localePrefix: AppConfig.localePrefix,
  defaultLocale: AppConfig.defaultLocale,
});

// export default NextAuth(authConfig).auth;

// export const config = {
//   // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
//   matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
// };

const publicPages = [
  "/",
  "/sign-in",
  "/sign-up",
  "/forgot-password",
  "/reset-password",
  "/unauthorized",
  "/contact",
  "/about",
  "/help",
  "/privacy-policy",
  "/terms-of-service",
  "/cookie-policy",
  "/end-user-license-agreement",
  "/subscriptions",
  // "/profile",
];

const authMiddleware = auth((req) => {
  const session = req.auth;

  if (session) {
    return intlMiddleware(req);
  }

  return NextResponse.redirect(new URL("/sign-in", req.nextUrl));
});

export default function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(
    `^(/(${["en", "fr"].join("|")}))?(${publicPages.flatMap((p) => (p === "/" ? ["", "/"] : p)).join("|")})/?$`,
    "i"
  );
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicPage) {
    return intlMiddleware(req);
  }
  return (authMiddleware as any)(req);
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
