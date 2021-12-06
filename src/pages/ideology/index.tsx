import { NextPage } from 'next';
import Head from 'next/head';

import { AppLayout } from 'components/app-layout';
import IdeologyPage from 'components/ideology-page';

import textData from './assets/mock-data.json';

const Ideology: NextPage = () => (
  <AppLayout>
    <Head>
      <title>Идеология</title>
    </Head>
    <IdeologyPage data={textData}/>
  </AppLayout>
);

export default Ideology;
