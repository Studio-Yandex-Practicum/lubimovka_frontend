import { NextPage } from 'next';
import Head from 'next/head';

import AppLayout from 'components/app-layout';
import AuthorsPage from 'components/library-authors-page';

const Authors: NextPage = () => (
  <AppLayout>
    <Head>
      <title>Авторы</title>
    </Head>
    <AuthorsPage />
  </AppLayout>
);

export default Authors;
