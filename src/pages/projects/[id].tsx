// @ts-nocheck

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import AppLayout from 'components/app-layout';
import { ProjectLayout } from 'components/project-layout';
import { ProjectHeader } from 'components/project-header';
import { ProjectDescription } from 'components/project-description';
import { ProjectInvitation } from 'components/project-invitation';
import { PhotoGallery } from 'components/photo-gallery';
import { BasicPlayCardList } from 'components/ui/basic-play-card-list';
import { BasicPlayCard } from 'components/ui/basic-play-card';
import { AnnouncedPlayCard } from 'components/ui/announced-play-card';
import { AnnouncedPlayCardList } from 'components/ui/announced-play-card-list';
import { Video } from 'components/video';
import { VideoList } from 'components/video-list';
import { RawText } from 'components/raw-text';
import { Section } from 'components/section';
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
    <AppLayout backButton={{ path: '/projects', text: 'проекты' }}>
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
            {content_type === 'performancesblock' && (
              <Section title={content_item.title}>
                <AnnouncedPlayCardList>
                  {content_item.items.map(({ id, name }) => (
                    <AnnouncedPlayCard
                      key={id}
                      //TODO: исправить ответ бекенда, сейчас возвращаются данные для страницы спектакля
                      date="12 декабря"
                      time="11:00"
                      title={name}
                      playwrightArray={[]}
                      directorArray={[]}
                      buttonLinks={[]}
                      coverResourceUrl=""
                    />
                  ))}
                </AnnouncedPlayCardList>
              </Section>
            )}
            {content_type === 'videosblock' && (
              <Section title={content_item.title}>
                <VideoList>
                  {content_item.items.map(({ title, url }) => (
                    <VideoList.Item key={title}>
                      <Video src={url}/>
                    </VideoList.Item>
                  ))}
                </VideoList>
              </Section>
            )}
            {content_type === 'text' && (
              <RawText>
                {content_item.text}
              </RawText>
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
    data = await fetcher<ProjectModel>(`/projects/${projectId}/`);
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
