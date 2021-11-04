import { NextPage } from 'next';
import Head from 'next/head';

import AppLayout from 'components/app-layout';
import { ProjectPage } from 'components/project-page';
import { ProjecPageSection } from 'components/project-page/projec-page-section';
import { ProjectHeader } from 'components/project-header';
import { ProjectDescription } from 'components/project-description';
/* import { PhotoGallery } from 'components/photo-gallery'; */
import { AnnouncedPlayCard } from 'components/ui/announced-play-card';
import { BasicPlayCard } from 'components/ui/basic-play-card';
import { PersonCardList } from 'components/ui/person-card';
import { PersonCard } from 'components/ui/person-card';

import projectData from './assets/mock-project-data.json';
import { VideoGallery } from 'components/video-gallery';
import { VideoGalleryItem } from 'components/video-gallery/video-gallery-item';
import { AnnouncedPlayCardList } from 'components/ui/announced-play-card/announced-play-card-list';
import { BasicPlayCardList } from 'components/ui/basic-play-card/list';
import { ProjectCooperation } from 'components/project-cooperation';
/* import { PhotoGalleryItem } from 'components/photo-gallery/item'; */

const Project: NextPage = () => {
  return (
    <AppLayout>
      <Head>
        <title>{projectData.titledata.title}</title>
      </Head>
      <ProjectPage>
        <ProjectHeader
          title={projectData.titledata.title}
          intro={projectData.titledata.intro}
          image={projectData.titledata.image}
          imageDesc={projectData.titledata.imageDesc}
        />
        <ProjectDescription>
          {projectData.titledata.description}
        </ProjectDescription>
        <ProjecPageSection type="video" title="Заголовок блока с видео">
          <VideoGallery>
            <VideoGalleryItem>{}</VideoGalleryItem>
          </VideoGallery>
        </ProjecPageSection>
        <ProjecPageSection type="photo" title="Заголовок блока с фотографиями">
          {/* <PhotoGallery>
            {projectData.images.map((photo, idx) => (
              <PhotoGalleryItem
                image={''}
                key={idx}
              ></PhotoGalleryItem>
            ))}
          </PhotoGallery> */}
        </ProjecPageSection>
        <ProjecPageSection
          type="performances"
          title="Заголовок блока с двумя спектаклями"
        >
          <AnnouncedPlayCardList>
            {projectData.cardsArr.slice(0, 2).map((card, index) => (
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
            {projectData.basicPlayCard.map((i, index) => (
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
            {projectData.personCard.map((i, index) => (
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
          title={projectData.projectDescription.title}
          description={projectData.projectDescription.description}
          button={true}
        />
        <ProjecPageSection type="cooperation">
          <ProjectCooperation email={projectData.email}></ProjectCooperation>
        </ProjecPageSection>
      </ProjectPage>
    </AppLayout>
  );
};

export default Project;
