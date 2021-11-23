import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import AppLayout from 'components/app-layout';
import { ProjectsPage } from 'components/projects-page';
import { ProjectsHeader } from 'components/project-header';
import { ProjectCard } from 'components/ui/project-card';
import { Section } from 'components/section';
import { fetcher } from 'shared/fetcher';
import { PaginatedProjectListList as ProjectListModel } from 'api-typings';

const Projects = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <AppLayout>
      <ProjectsPage>
        {data && data.map(item => (
            <ProjectCard id={item.id}
              title={item.title}
              description={item.description}
              image={item.image} />
          ))}
      </ProjectsPage>
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetcher('/projects/');

  return {
    props: {
      data,
    },
  };
};

export default Projects;

