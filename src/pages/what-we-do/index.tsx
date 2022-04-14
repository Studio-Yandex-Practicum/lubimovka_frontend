import Head from 'next/head';
import { NextPage, InferGetServerSidePropsType, GetServerSideProps  } from 'next';

import { Partner } from 'api-typings';
import { fetcher } from 'shared/fetcher';
import { AppLayout } from 'components/app-layout';
import { WhatWeDoHeader } from 'components/what-we-do-page/header';
import { WhatWeDoDesc } from 'components/what-we-do-page/desc';
import { WhatWeDoAuthors } from 'components/what-we-do-page/authors';
import { WhatWeDoSelection } from 'components/what-we-do-page/selection';
import { WhatWeDoPoster } from 'components/what-we-do-page/poster';
import { WhatWeDoContacts } from 'components/what-we-do-page/contacts';
import { WhatWeDoPartner } from 'components/what-we-do-page/partners';

const Page: NextPage = ({ partners }: InferGetServerSidePropsType<typeof getServerSideProps>):JSX.Element => (
  <AppLayout navbarProps={{ colors: 'brand' }}>
    <Head>
      <title>
        Что мы делаем? Любимовка
      </title>
    </Head>
    <main>
      <WhatWeDoHeader/>
      <WhatWeDoDesc/>
      <WhatWeDoAuthors/>
      <WhatWeDoSelection/>
      <WhatWeDoPoster/>
      <WhatWeDoContacts/>
      {partners && <WhatWeDoPartner {...partners}/>}
    </main>
  </AppLayout>
);

const fetchPartners = async () => {
  try {
    const festival = await fetcher<Partner>('/info/partners/?type=festival');
    const info = await fetcher<Partner>('/info/partners/?type=info');
    return {
      festival,
      info
    };
  } catch (error) {
    return;
  }
};

export const getServerSideProps: GetServerSideProps = async () => {
  const partners = await fetchPartners();

  return {
    props: {
      partners,
    },
  };
};

export default Page;
