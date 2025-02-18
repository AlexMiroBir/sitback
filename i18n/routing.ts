import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import { domains, EN_LOCALE, localePrefix, locales, pathnames } from "./config";

export const routing = defineRouting({
  locales,
  domains,
  defaultLocale: EN_LOCALE,
  pathnames,
  localeDetection: false,
  localeCookie: false,
  localePrefix,
});

export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
