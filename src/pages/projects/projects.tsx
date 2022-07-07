import { InferGetServerSidePropsType } from 'next';

import { AppLayout } from 'components/app-layout';
import { ProjectsLayout } from 'components/projects-layout';
import { ProjectCardList } from 'components/project-card-list';
import { ProjectCard } from 'components/ui/project-card';
import { PageTitle } from 'components/page-title';
import { SEO } from 'components/seo';
import { fetcher } from 'services/fetcher';
import { isEven } from 'shared/helpers/is-even';

import type { PaginatedProjectListList } from 'api-typings';
import { InternalServerError } from 'shared/helpers/internal-server-error';

const Projects = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { projects } = props;

  return (
    <AppLayout>
      <SEO title="Проекты"/>
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

export const getServerSideProps = async () => {
  let projects;

  try {
    // параметр ?limit=9999 это костыль, предложенный бекендерами, чтобы получать сразу все проекты без учета пагинации вместо того, чтобы выпиливать пагинацию с бекенда
    // TODO: разобраться, почему при генерации типов поля необязательные, убрать Required
    ({ results: projects } = await fetcher<Required<PaginatedProjectListList>>('/projects/?limit=9999'));
  } catch {
    throw new InternalServerError();
  }

  return {
    props: {
      projects,
    },
  };
};

export default Projects;
