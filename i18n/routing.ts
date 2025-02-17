import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

const {
  PORT = "3000",
  ES_HOST = "sitback.es",
  EN_HOST = "sitback.com",
} = process.env as Record<string, string | undefined>;

const EN_LOCALE = "en-GB";
const ES_LOCALE = "es-ES";
const DE_LOCALE = "de-DE";

export const routing = defineRouting({
  locales: [EN_LOCALE, ES_LOCALE, DE_LOCALE],

  domains: [
    {
      domain: `${EN_HOST}:${PORT}`,
      defaultLocale: EN_LOCALE,
      locales: [EN_LOCALE, DE_LOCALE],
    },
    {
      domain: `${ES_HOST}:${PORT}`,
      defaultLocale: ES_LOCALE,
      locales: [ES_LOCALE],
    },
  ],

  defaultLocale: EN_LOCALE,

  pathnames: {
    "/about": {
      [EN_LOCALE]: "/about",
      [ES_LOCALE]: "/sobre",
      [DE_LOCALE]: "/um",
    },
    "/home": {
      [EN_LOCALE]: "/home",
      [ES_LOCALE]: "/inicio",
      [DE_LOCALE]: "/heim",
    },
  },

  localeDetection: false,
  localeCookie: false,
  localePrefix: {
    mode: "as-needed",
    prefixes: {
      [EN_LOCALE]: "/en",
      [ES_LOCALE]: "/es",
      [DE_LOCALE]: "/de",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
