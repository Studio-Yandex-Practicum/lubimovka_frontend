import Error from 'next/error';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { AppLayout } from 'components/app-layout';
import { ProjectsLayout } from 'components/projects-layout';
import { ProjectCardList } from 'components/project-card-list';
import { ProjectCard } from 'components/ui/project-card';
import { PageTitle } from 'components/page-title';
import { fetcher } from 'shared/fetcher';
import { PaginatedProjectListList, ProjectList } from 'api-typings';
import { isEven } from 'shared/helpers/is-even';

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
      <ProjectsLayout>
        <ProjectsLayout.Headline>
          <PageTitle>
            Проекты Любимовки
          </PageTitle>
        </ProjectsLayout.Headline>
        <ProjectsLayout.List>
          <ProjectCardList>
            {projects.map(({ id, title, intro, image }, index) => (
              <ProjectCardList.Item key={id}>
                <ProjectCard
                  id={id}
                  title={title}
                  description={intro}
                  image={image}
                  even={isEven(index)}
                />
              </ProjectCardList.Item>
            ))}
          </ProjectCardList>
        </ProjectsLayout.List>
      </ProjectsLayout>
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

