
import { AppLayout } from 'components/app-layout';
import { PageTitle } from 'components/page-title';
import { ProjectCardList } from 'components/project-card-list';
import { ProjectsLayout } from 'components/projects-layout';
import { SEO } from 'components/seo';
import { ProjectCard } from 'components/ui/project-card';
import { getProjects } from 'services/api/projects';
import { isEven } from 'shared/helpers/is-even';

import type { InferGetServerSidePropsType } from 'next';

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
            {projects.map(({ id, title, description, image }, index) => (
              <ProjectCardList.Item key={id}>
                <ProjectCard
                  title={title}
                  description={description}
                  image={image}
                  url={`/projects/${id}`}
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
  const projects = await getProjects();

  return {
    props: {
      projects,
    }
  };
};

export default Projects;
