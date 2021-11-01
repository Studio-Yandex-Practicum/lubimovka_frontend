import Head from 'next/head';
import { NextPage } from 'next';

import { AppLayout } from 'components/app-layout';
import { WhatWeDo } from 'components/what-we-do-page';

const Page: NextPage = () => (
  <AppLayout>
    <Head>
      <title>{'what-we-do'}</title>
    </Head>
    <WhatWeDo />
  </AppLayout>
);

export default Page;
