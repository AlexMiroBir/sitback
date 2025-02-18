import type { DomainsConfig } from "next-intl/routing";

export const {
  PORT = "3000",
  ES_HOST = "sitback.es",
  EN_HOST = "sitback.com",
  NODE_ENV = "development",
} = process.env as Record<string, string | undefined>;

export const EN_LOCALE = "en-GB" as const;
export const ES_LOCALE = "es-ES" as const;
export const DE_LOCALE = "de-DE" as const;

const isProd = NODE_ENV === "production";

const getDomain = (host: string): string => {
  if (isProd) return `${host}:${PORT}`; // TODO: remove PORT for real production
  return `${host}:${PORT}`;
};

export const locales = [EN_LOCALE, ES_LOCALE, DE_LOCALE] as const;

export const domains: DomainsConfig<typeof locales> = [
  {
    domain: getDomain(EN_HOST),
    defaultLocale: EN_LOCALE,
    locales: [EN_LOCALE, DE_LOCALE],
  },
  {
    domain: getDomain(ES_HOST),
    defaultLocale: ES_LOCALE,
    locales: [ES_LOCALE],
  },
] as const;

export const pathnames = {
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
} as const;

export const localePrefix = {
  mode: "as-needed",
  prefixes: {
    [EN_LOCALE]: "/en",
    [ES_LOCALE]: "/es",
    [DE_LOCALE]: "/de",
  },
} as const;
