import { NextPage } from 'next';
import Head from 'next/head';

import { AppLayout } from 'components/app-layout';
import { ProjectHeader } from 'components/project-header';
import { ProjectAbout } from 'components/project-about';

import headerData from './assets/mock-project-header-data.json';
import aboutData from './assets/mock-project-about-data.json';

const Project: NextPage = () => (
  <AppLayout>
    <Head>
      <title>{'project'}</title>
    </Head>
    <main>
      <ProjectHeader data={ headerData } />
      <ProjectAbout data={ aboutData } />
    </main>
  </AppLayout>
);

export default Project;
