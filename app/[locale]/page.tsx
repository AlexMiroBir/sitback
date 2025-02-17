import {Link} from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import { JSX } from 'react';
 
export default async function MainPage():Promise<JSX.Element> {
  const t = await getTranslations('MainPage');
  return (
    <>
    <div>
      <Link  href="/about">{t('about')}</Link>
    </div>
    <div>
      <Link href="/home">{t('home')}</Link>
    </div>
    </>
  );
}