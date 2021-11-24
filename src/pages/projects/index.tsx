import Error from 'next/error';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import AppLayout from 'components/app-layout';
import { ProjectsPage } from 'components/projects-page';
import { ProjectCard } from 'components/ui/project-card';
import { fetcher } from 'shared/fetcher';
import { PaginatedProjectListList, ProjectList } from 'api-typings';

interface IProjectsProps {
  errorCode?: number,
  projects: ProjectList[],
}

const Projects = ({ errorCode, projects }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (errorCode) {
    return (
      <Error statusCode={errorCode}/>
    );
  }

  return (
    <AppLayout>
      <ProjectsPage>
        {projects.map(({ id, title, description, image }) => (
          <ProjectCard
            key={id}
            id={id}
            title={title}
            description={description}
            image={image}/>
        ))}
      </ProjectsPage>
    </AppLayout>
  );
};

const fetchProjects = async () => {
  let data;

  try {
    data = await fetcher<PaginatedProjectListList>('/projects/');
  } catch (error) {
    return;
  }

  return data.results;
};

export const getServerSideProps: GetServerSideProps<IProjectsProps> = async () => {
  const projects = await fetchProjects();

  if (!projects) {
    return {
      props: {
        errorCode: 500,
        projects: [],
      }
    };
  }

  return {
    props: {
      projects,
    },
  };
};

export default Projects;

