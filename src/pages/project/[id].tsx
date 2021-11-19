import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import AppLayout from 'components/app-layout';
import { ProjectLayout } from 'components/project-layout';
import { ProjectHeader } from 'components/project-header';
import { ProjectDescription } from 'components/project-description';
import { ProjectInvitation } from 'components/project-invitation';
import { PhotoGallery } from 'components/photo-gallery';
import { BasicPlayCardList } from 'components/ui/basic-play-card';
import { BasicPlayCard } from 'components/ui/basic-play-card';
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
            {content_type === 'playsblock' && (
              <Section title={content_item.title}>
                <BasicPlayCardList>
                  {content_item.items.map(({ id, name, city, year, url_download, url_reading }) => (
                    <BasicPlayCard
                      key={id}
                      play={{
                        title: name,
                        city,
                        year,
                        linkView: url_reading,
                        linkDownload: url_download,
                      }}
                      author={{
                        // TODO: добавить реальные данные в ответ бекенда
                        id: 0,
                        name: 'Константин Константинопольский',
                      }}
                    />
                  ))}
                </BasicPlayCardList>
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
