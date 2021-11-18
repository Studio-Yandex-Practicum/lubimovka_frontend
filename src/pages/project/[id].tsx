import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import AppLayout from 'components/app-layout';
import { ProjectPage } from 'components/project-page';
import { ProjectHeader } from 'components/project-header';
import { ProjectDescription } from 'components/project-description';
import { fetcher } from 'shared/fetcher';
import { Project as ProjectModel } from 'api-typings';

const Project = (props: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
  const {
    title,
    description,
    image,
    contents,
  } = props;

  return (
    <AppLayout>
      <ProjectPage>
        <ProjectHeader
          title={title}
          intro=""
          image={image}
        />
        <ProjectDescription>
          {description}
        </ProjectDescription>
        {contents && contents.map(block => {
          // TODO: реализовать рендеринг блоков контента
        })}
      </ProjectPage>
    </AppLayout>
  );
};

const fetchProject = async (projectId: string) => {
  let data;

  try {
    data = await fetcher<ProjectModel>(`/project/${projectId}/`);
  } catch (error) {
    // TODO: обработать ошибку, добавим после реализации страницы ошибки

    return;
  }

  return data;
};

export const getServerSideProps: GetServerSideProps<ProjectModel, Record<'id', string>> = async ({ params }) => {
  const { id: projectId } = params!;

  const project = await fetchProject(projectId);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...project
    },
  };
};

export default Project;
