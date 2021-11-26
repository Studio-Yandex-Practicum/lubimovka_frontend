import { NextPage } from 'next';
import Head from 'next/head';

import AppLayout from 'components/app-layout';
import TeamPage from 'components/team-page';

const Team: NextPage = () => (
  <AppLayout>
    <Head>
      <title>{'Организаторы'}</title>
    </Head>
    <main>
      <TeamPage/>
    </main>
  </AppLayout>
);

export default Team;
