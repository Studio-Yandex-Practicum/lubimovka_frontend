import { NextPage } from 'next';
import Head from 'next/head';

import TextSection from 'components/ideology-section';
import AppLayout from 'components/app-layout';

import textData from './assets/mock-data.json';

const Ideology: NextPage = () => (
  <AppLayout>
    <Head>
      <title>Идеология</title>
    </Head>
    <>
      {textData.map((el) => (
        <TextSection key={el.id} data={el} />
      ))}
    </>
  </AppLayout>
);

export default Ideology;
