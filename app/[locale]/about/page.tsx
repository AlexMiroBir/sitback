import { getTranslations } from 'next-intl/server';
import { JSX } from 'react';


export default async function AboutPage():Promise<JSX.Element> {
    const t = await getTranslations('AboutPage');

  return (
    <h1>{t('content')}</h1>
  )
}

