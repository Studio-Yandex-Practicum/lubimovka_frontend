import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import AppLayout from 'components/app-layout';
import { ProjectsPage } from 'components/projects-page';
import { ProjectCard } from 'components/ui/project-card';
import { fetcher } from 'shared/fetcher';

const Projects = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <AppLayout>
      <ProjectsPage>
        {data && data.map((item: { id: number; title: string; description: string; image: string; }) => (
          <ProjectCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            image={item.image}/>
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

