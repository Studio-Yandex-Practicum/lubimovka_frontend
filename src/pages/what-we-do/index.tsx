import Head from 'next/head';
import { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next';

import { Partner } from 'api-typings';

import { fetcher } from 'shared/fetcher';
import { AppLayout } from 'components/app-layout';
import { WhatWeDoHeader } from 'components/what-we-do-page/header';
import { WhatWeDoDesc } from 'components/what-we-do-page/desc';
import { WhatWeDoAuthors } from 'components/what-we-do-page/authors';
import { WhatWeDoSelection } from 'components/what-we-do-page/selection';
import { WhatWeDoContacts } from 'components/what-we-do-page/contacts';
// import { WhatWeDoPartners } from 'components/what-we-do-page/partners';

const Page: NextPage = ({partners}: InferGetStaticPropsType<typeof getStaticProps>):JSX.Element => (
  <AppLayout>
    <Head>
      <title>{'Что мы делаем? Любимовка'}</title>
    </Head>
    <main>
      <WhatWeDoHeader/>
      <WhatWeDoDesc/>
      <WhatWeDoAuthors/>
      <WhatWeDoSelection/>
      <WhatWeDoContacts/>
      {/* <WhatWeDoPartners/> */}
    </main>
  </AppLayout>
);

const fetchPartners = async () => {
  try {
    const general = await fetcher<Partner>('/v1/info/partners/?type=general');
    const festival = await fetcher<Partner>('/v1/info/partners/?type=festival');
    const info = await fetcher<Partner>('/v1/info/partners/?type=info');
    return {
      general,
      festival,
      info
    };
  } catch (error) {
    return;
  }
};

export const getStaticProps: GetStaticProps = async () => {
  const partners = await fetchPartners();

  if (!partners) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      partners,
    },
  };
};

export default Page;
