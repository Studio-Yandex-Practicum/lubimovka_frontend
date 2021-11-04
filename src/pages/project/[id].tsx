import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { fetcher } from 'shared/fetcher';
import React from 'react';

import AppLayout from 'components/app-layout';
import { ProjectPage } from 'components/project-page';
import { ProjecPageSection } from 'components/project-page/projec-page-section';
import { ProjectHeader } from 'components/project-header';
import { ProjectDescription } from 'components/project-description';
import { PhotoGallery } from 'components/photo-gallery';
import { AnnouncedPlayCard } from 'components/ui/announced-play-card';
import { BasicPlayCard } from 'components/ui/basic-play-card';
import { PersonCardList } from 'components/ui/person-card';
import { PersonCard } from 'components/ui/person-card';
import { VideoGallery } from 'components/video-gallery';
import { VideoGalleryItem } from 'components/video-gallery/video-gallery-item';
import { AnnouncedPlayCardList } from 'components/ui/announced-play-card/announced-play-card-list';
import { BasicPlayCardList } from 'components/ui/basic-play-card/list';
import { ProjectCooperation } from 'components/project-cooperation';
import { PhotoGalleryItem } from 'components/photo-gallery/item';
import { Url } from 'shared/types';

type ProjectResponse = {
  titledata: {
    title: string;
    intro: string;
    image: Url;
    imageDesc: string;
    description: string;
  };
  images: {
    image: Url;
  }[];
  cardsArr: {
    date: string;
    time: string;
    title: string;
    playwrightArray: string[];
    directorArray: string[];
    eventDescription?: string;
    buttonLinks: string[];
    coverResourceUrl?: string;
    className?: string;
  }[];
  basicPlayCard: {
    play: {
      title: string;
      city: string;
      year: string;
      linkView: Url;
      linkDownload: Url;
    };
    author: {
      id: number;
      name: string;
    };
    buttonVisibility?: boolean;
  }[];
  personCard: {
    participant: boolean;
    name: string;
    link: string;
    about?: string;
    response?: string;
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  }[];
  email: string;
  projectDescription: {
    title: string;
    description: string;
  };
  video: {
    image: Url;
    videoDescription: string;
  }[];
};

const Project = ({
  data,
}: InferGetServerSidePropsType<
  typeof getServerSideProps
>): JSX.Element | null => {
  if (!data) return null;

  const [videoArray, setVideoArray] = React.useState<
    Array<{
      image: Url;
      videoDescription: string;
    }>
  >([]);
  React.useEffect(() => {
    setVideoArray(data.video);
  }, []);

  return (
    <AppLayout>
      <Head>
        <title>{data.titledata.title}</title>
      </Head>
      <ProjectPage>
        <ProjectHeader
          title={data.titledata.title}
          intro={data.titledata.intro}
          image={data.titledata.image}
          imageDesc={data.titledata.imageDesc}
        />
        <ProjectDescription>{data.titledata.description}</ProjectDescription>
        <ProjecPageSection type="video" title="Заголовок блока с видео">
          <VideoGallery videoArr={videoArray.length > 1 ? true : false}>
            {videoArray.map((item, index) => (
              <VideoGalleryItem
                key={index}
                url={item.image}
                description={item.videoDescription}
                videoArr={videoArray.length > 1 ? true : false}
              >
                {}
              </VideoGalleryItem>
            ))}
          </VideoGallery>
        </ProjecPageSection>
        <ProjecPageSection type="photo" title="Заголовок блока с фотографиями">
          <PhotoGallery>
            {data.images.map((photo, idx) => (
              <PhotoGalleryItem
                image={photo.image}
                key={idx}
              ></PhotoGalleryItem>
            ))}
          </PhotoGallery>
        </ProjecPageSection>
        <ProjecPageSection
          type="performances"
          title="Заголовок блока с двумя спектаклями"
        >
          <AnnouncedPlayCardList>
            {data.cardsArr.slice(0, 2).map((card, index) => (
              <AnnouncedPlayCard
                key={index}
                date={card.date}
                time={card.time}
                title={card.title}
                playwrightArray={card.playwrightArray}
                directorArray={card.directorArray}
                buttonLinks={card.buttonLinks}
                coverResourceUrl={card.coverResourceUrl}
              ></AnnouncedPlayCard>
            ))}
          </AnnouncedPlayCardList>
        </ProjecPageSection>
        <ProjecPageSection type="plays" title="Заголовок блока с пьесами">
          <BasicPlayCardList>
            {data.basicPlayCard.map((i, index) => (
              <BasicPlayCard
                key={index}
                play={i.play}
                author={i.author}
                buttonVisibility={i.buttonVisibility}
              ></BasicPlayCard>
            ))}
          </BasicPlayCardList>
        </ProjecPageSection>
        <ProjecPageSection type="person" title="Заголовок блока с персонами">
          <PersonCardList>
            {data.personCard.map((i, index) => (
              <PersonCard
                key={index}
                name={i.name}
                link={i.link}
                about={i.about}
                participant={i.participant}
              ></PersonCard>
            ))}
          </PersonCardList>
        </ProjecPageSection>
        <ProjecPageSection
          type="through-block"
          title={data.projectDescription.title}
          description={data.projectDescription.description}
          button={true}
        />
        <ProjecPageSection type="cooperation">
          <ProjectCooperation email={data.email}></ProjectCooperation>
        </ProjecPageSection>
      </ProjectPage>
    </AppLayout>
  );
};

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  if (!params) return { props: {} };

  const { id } = params;
  const data = await fetcher<ProjectResponse>(`/project/${id}`);

  return {
    props: {
      data,
    },
  };
};

export default Project;
