import { getTranslations } from 'next-intl/server';
import { JSX } from 'react';


export default async function  HomePage():Promise<JSX.Element> {
  const t = await getTranslations('HomePage');

  return (
    <h1>{t('content')}</h1>
  )
}

