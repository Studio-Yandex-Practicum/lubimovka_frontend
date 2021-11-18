import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import AppLayout from 'components/app-layout';
import { ProjectLayout } from 'components/project-layout';
import { ProjectHeader } from 'components/project-header';
import { ProjectDescription } from 'components/project-description';
import { ProjectInvitation } from 'components/project-invitation';
import { PhotoGallery } from 'components/photo-gallery';
import { fetcher } from 'shared/fetcher';
import { Section } from 'components/section';
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
      <ProjectLayout>
        <ProjectHeader
          title={title}
          intro=""
          image={image}
        />
        <ProjectDescription>
          {description}
        </ProjectDescription>
        {contents && contents.map(({ content_type, content_item }) => (
          <>
            {content_type === 'imagesblock' && (
              <Section title={content_item.title}>
                <PhotoGallery>
                  {content_item.items.map(({ title, image }) => (
                    <PhotoGallery.Item
                      key={title}
                      image={image}
                    />
                  ))}
                </PhotoGallery>
              </Section>
            )}
          </>
        ))}
        <ProjectInvitation email=""/>
      </ProjectLayout>
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
