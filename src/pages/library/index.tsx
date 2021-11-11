import { NextPage } from 'next';
import Head from 'next/head';

import AppLayout from 'components/app-layout';
import LibraryPage from 'components/library-pieces-page';

const Library: NextPage = () => (
  <AppLayout>
    <Head>
      <title>Библиотека</title>
    </Head>
    <LibraryPage />
  </AppLayout>
);

export default Library;
