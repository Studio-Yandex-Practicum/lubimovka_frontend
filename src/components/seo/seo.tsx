import Head from 'next/head';

import settings from 'settings';

import type { FC } from 'react';
import type { Url } from 'shared/types';

interface SEOProps {
  title: string
  description?: string
  image?: Url
}

export const SEO: FC<SEOProps> = (props) => {
  const { defaultMeta } = settings;
  const {
    title,
    description = defaultMeta.description,
    image = defaultMeta.image,
  } = props;

  return (
    <Head>
      {/* https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs */}
      <link rel="icon" href="/favicon.ico" sizes="any"/>
      <link rel="icon" href="/icon.svg" type="image/svg+xml"/>
      <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
      <link rel="manifest" href="/manifest.webmanifest"/>
      <title>
        {`${title} - ${settings.defaultMeta.title}`}
      </title>
      <meta name="description" content={description}/>
      <meta name="image" content={image}/>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      <meta property="og:image" content={image}/>
      <meta property="og:image:width" content="1024"/>
      <meta property="og:image:height" content="512"/>
    </Head>
  );
};
