// @ts-nocheck

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Fragment } from 'react';

import { AppLayout } from 'components/app-layout';
import { PageBreadcrumbs } from 'components/page';
import { ProjectLayout } from 'components/project-layout';
import { Breadcrumb } from 'components/breadcrumb';
import { ProjectHeadline } from 'components/project-headline';
import { PhotoGallery } from 'components/photo-gallery';
import { BasicPlayCardList } from 'components/ui/basic-play-card-list';
import { BasicPlayCard } from 'components/ui/basic-play-card';
import { AnnouncedPlayCard } from 'components/ui/announced-play-card';
import { PerformanceSection } from 'components/performance-section';
import { Video } from 'components/video';
import { VideoList } from 'components/video-list';
import { RawText } from 'components/raw-text';
import { Section } from 'components/section';
import { PersonCard } from 'components/ui/person-card';
import { PersonCardList } from 'components/person-card-list';
import { CallToEmail } from 'components/call-to-email';
import { fetcher } from 'shared/fetcher';
import { Project as ProjectModel } from 'api-typings';
import { formatDate, formatTime } from 'shared/helpers/formatDateServerData';

const convertRolesToString = (roles: PersonRole[]) => roles.map(role => role.name).join(', ');

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
        <PageBreadcrumbs>
          <Breadcrumb
            text="Проекты"
            path="/projects"
          />
        </PageBreadcrumbs>
        <ProjectHeadline
          title={title}
          intro={description}
          image={image}
        />
        <ProjectLayout.Description>
          {description}
        </ProjectLayout.Description>
        {contents && contents.map(({ content_type, content_item }, index) => (
          <Fragment key={index}>
            {content_type === 'imagesblock' && (
              <ProjectLayout.Storey type="photos">
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
              </ProjectLayout.Storey>
            )}
            {content_type === 'playsblock' && (
              <ProjectLayout.Storey type="plays">
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
                          authors:[{
                            // TODO: добавить реальные данные в ответ бекенда
                            id: 0,
                            name: 'Константин Константинопольский',
                          }]
                        }}
                      />
                    ))}
                  </BasicPlayCardList>
                </Section>
              </ProjectLayout.Storey>
            )}
            {content_type === 'performancesblock' && (
              <ProjectLayout.Storey type="performances">
                <PerformanceSection title={content_item.title}>
                  {content_item.items.map(({ id, name }) => (
                    <AnnouncedPlayCard
                      key={id}
                      //TODO: исправить ответ бекенда, сейчас возвращаются данные для страницы спектакля
                      isPerformance={true}
                      id={id}
                      formattedDate={formatDate('2021-11-13T17:00:00.000Z')}
                      formattedTime={formatTime('2021-11-13T17:00:00.000Z')}
                      title={name}
                      team={[
                        {
                          name: 'Драматурги',
                          persons: ['Ольга Казакова', 'Антон Чехов']
                        },
                        {
                          name: 'Режиссёр',
                          persons: ['Катя Ганюшина']
                        },
                      ]}
                      buttonLink={'https://lubimovka.timepad.ru/event/1746579/'}
                      imageUrl="/images/projects/performance_mama.jpg"
                      project="читка проекта Любимовка.Eщё"
                      paid={true}
                    />
                  ))}
                </PerformanceSection>
              </ProjectLayout.Storey>
            )}
            {content_type === 'videosblock' && (
              <ProjectLayout.Storey type="videos">
                <Section title={content_item.title}>
                  <VideoList>
                    {content_item.items.map(({ url }) => (
                      <Video
                        key={url}
                        src={url}
                      />
                    ))}
                  </VideoList>
                </Section>
              </ProjectLayout.Storey>
            )}
            {content_type === 'text' && (
              <ProjectLayout.Storey type="text">
                <RawText>
                  {content_item.text}
                </RawText>
              </ProjectLayout.Storey>
            )}
            {content_type === 'personsblock' && (
              <ProjectLayout.Storey type="persons">
                <Section title={content_item.title}>
                  <PersonCardList>
                    {content_item.items.map(({ id, first_name, last_name, image, roles }) => (
                      <PersonCard
                        key={id}
                        name={`${first_name} ${last_name}`}
                        image={image}
                        participant={true}
                        about={convertRolesToString(roles)}
                      />
                    ))}
                  </PersonCardList>
                </Section>
              </ProjectLayout.Storey>
            )}
          </Fragment>
        ))}
        <ProjectLayout.Storey type="invitation">
          <CallToEmail
            type="project"
            title="Проект открыт к сотрудничеству"
            description="Мы находимся в постоянном поиске режиссёров и актеров, заинтересованных в постановке читок."
            callToActionText="Пишите на"
            email="hello@lubimovka.ru"
          />
        </ProjectLayout.Storey>
      </ProjectLayout>
    </AppLayout>
  );
};

const fetchProject = async (projectId: string) => {
  let data;

  try {
    data = await fetcher<ProjectModel>(`/projects/${projectId}/`);
  } catch (error) {
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
      ...project,
    },
  };
};

export default Project;
