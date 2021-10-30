import { NextPage } from 'next';
import Head from 'next/head';

import { AppLayout } from 'components/app-layout';
import { ProjectHeader } from 'components/project-header';
import { ProjectDescription } from 'components/project-description';

import projectData from './assets/mock-project-data.json';

const Project: NextPage = () => (
  <AppLayout>
    <Head>
      <title>{projectData.title}</title>
    </Head>
    <main>
      <ProjectHeader
        title={projectData.title}
        intro={projectData.intro}
        image={projectData.image}
        imageDesc={projectData.imageDesc}
      />
      <ProjectDescription>
        {projectData.description}
      </ProjectDescription>
    </main>
  </AppLayout>
);

export default Project;
