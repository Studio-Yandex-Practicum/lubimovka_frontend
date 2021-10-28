import { NextPage } from 'next';
import Head from 'next/head';

import { AppLayout } from 'components/app-layout';
import { ProjectHeader } from 'components/project-header';

import headerData from './assets/mock-project-header-data.json';

const Project: NextPage = () => (
  <AppLayout>
    <Head>
      <title>{'project'}</title>
    </Head>
    <main>
      <ProjectHeader data={ headerData } />
    </main>
  </AppLayout>
);

export default Project;
