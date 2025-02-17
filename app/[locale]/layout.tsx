import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {Locale, routing} from '@/i18n/routing';
import { JSX } from 'react';
 
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}):Promise<JSX.Element> {
  const {locale} = await params;

  if (!locale || !routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}