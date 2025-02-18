import Link from "next/link";


import { getTranslations } from 'next-intl/server';
import { JSX } from 'react';

 
export default async function NotFound():Promise<JSX.Element> {

  const t = await getTranslations('NotFoundPage');

  return(
    <>
     <h1>404</h1>
     <h2>{t('content')}</h2>
      <Link href="/">{t('goBack')}</Link>
    </>
  )
  }