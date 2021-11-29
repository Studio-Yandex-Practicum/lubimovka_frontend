// @ts-nocheck

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import AppLayout from 'components/app-layout';
import { ProjectLayout } from 'components/project-layout';
import { Breadcrumb } from 'components/breadcrumb';
import { ProjectHeadline } from 'components/project-headline';
import { ProjectInvitation } from 'components/project-invitation';
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
      <ProjectLayout>
        <AppLayout.Breadcrumbs>
          <Breadcrumb
            text="Проекты"
            path="/projects"
          />
        </AppLayout.Breadcrumbs>
        <ProjectHeadline
          title={title}
          //TODO: добавить поле в ответ бекенда
          intro=""
          image={image}
        />
        <ProjectLayout.Description>
          {description}
        </ProjectLayout.Description>
        {contents && contents.map(({ content_type, content_item }) => (
          <>
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
<<<<<<< HEAD
                        // author={{
                        //   // TODO: добавить реальные данные в ответ бекенда
                        //   id: 0,
                        //   name: 'Константин Константинопольский',
                        // }}
=======
>>>>>>> b2013f7ff07ba4e36a31a2142f6a74039cf46bc9
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
                      date="12 декабря"
                      time="11:00"
                      title={name}
                      playwrightArray={['Ольга Казакова', 'Антон Чехов']}
                      directorArray={['Катя Ганюшина']}
                      buttonLinks={['https://lubimovka.timepad.ru/event/1746579/', 'https://lubimovka.timepad.ru/event/1746502/']}
                      coverResourceUrl="https://img05.rl0.ru/afisha/1808x1016q65i/s2.afisha.ru/mediastorage/5e/c5/541412eb0ea14286bad43d20c55e.jpg"
                    />
                  ))}
                </PerformanceSection>
              </ProjectLayout.Storey>
            )}
            {content_type === 'videosblock' && (
              <ProjectLayout.Storey type="videos">
                <Section title={content_item.title}>
                  <VideoList>
                    {content_item.items.map(({ title, url }) => (
                      <VideoList.Item key={title}>
                        <Video src={url}/>
                      </VideoList.Item>
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
                    {content_item.items.map(({ id, first_name, last_name, image }) => (
                      <PersonCard
                        key={id}
                        name={`${first_name} ${last_name}`}
                        image={image}
                        participant={false}
                      />
                    ))}
                  </PersonCardList>
                </Section>
              </ProjectLayout.Storey>
            )}
          </>
        ))}
        <ProjectLayout.Storey type="invitation">
          <ProjectInvitation email="trololo@ololo.com"/>
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
      ...project
    },
  };
};

export default Project;
