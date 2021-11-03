import { NextPage } from 'next';
import Head from 'next/head';

import AppLayout from 'components/app-layout';
import { ProjectHeader } from 'components/project-header';
import { ProjectDescription } from 'components/project-description';
import { Photos } from 'components/photos';
import { AnnouncedPlayCard } from 'components/ui/announced-play-card';
import { Section } from 'components/section';
import { BasicPlayCard } from 'components/ui/basic-play-card';
import { PersonCardList } from 'components/ui/person-card';
import { PersonCard } from 'components/ui/person-card';

import projectData from './assets/mock-project-data.json';

const Project: NextPage = () => {
  const cardsNum3 = [1, 2, 3];
  const cardsNum2 = [1, 2, 3];

  return (
    <AppLayout>
      <Head>
        <title>{projectData.titledata.title}</title>
      </Head>
      <main>
        <ProjectHeader
          title={projectData.titledata.title}
          intro={projectData.titledata.intro}
          image={projectData.titledata.image}
          imageDesc={projectData.titledata.imageDesc}
        />
        <ProjectDescription>
          {projectData.titledata.description}
        </ProjectDescription>
        <Section
          type="plays"
          title="Заголовок блока с фотографиями"
          titleTag="h2"
        >
          <div>
            <h2>Заголовок блока с видео</h2>
            <iframe
              width="716"
              height="403"
              src="https://www.youtube.com/embed/NkvP2jR8xlw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>{projectData.videoDescription}</p>
          </div>
        </Section>
        <Section
          type="plays"
          title="Заголовок блока с фотографиями"
          titleTag="h2"
        >
          <Photos images={projectData.images}></Photos>
        </Section>

        <Section
          type="plays"
          title="Заголовок блока c тремя и более спектаклями"
          titleTag="h2"
        >
          {cardsNum3.map((i, index) => (
            <div key={index}>
              <AnnouncedPlayCard
                date={projectData.cards.date}
                time={projectData.cards.time}
                title={projectData.cards.title}
                playwrightArray={projectData.cards.playwrightArray}
                directorArray={projectData.cards.directorArray}
                buttonLinks={projectData.cards.buttonLinks}
                coverResourceUrl={projectData.cards.coverResourceUrl}
              ></AnnouncedPlayCard>
            </div>
          ))}
        </Section>
        <Section
          type="plays"
          title="Заголовок блока с двумя спектаклями"
          titleTag="h2"
        >
          {cardsNum2.map((i, index) => (
            <div key={index}>
              <AnnouncedPlayCard
                date={projectData.cards.date}
                time={projectData.cards.time}
                title={projectData.cards.title}
                playwrightArray={projectData.cards.playwrightArray}
                directorArray={projectData.cards.directorArray}
                buttonLinks={projectData.cards.buttonLinks}
                coverResourceUrl={projectData.cards.coverResourceUrl}
              ></AnnouncedPlayCard>
            </div>
          ))}
        </Section>
        <Section
          type="plays"
          title="Заголовок блока с одним спектаклем"
          titleTag="h2"
        >
          <AnnouncedPlayCard
            date={projectData.cards.date}
            time={projectData.cards.time}
            title={projectData.cards.title}
            playwrightArray={projectData.cards.playwrightArray}
            directorArray={projectData.cards.directorArray}
            buttonLinks={projectData.cards.buttonLinks}
            coverResourceUrl={projectData.cards.coverResourceUrl}
          ></AnnouncedPlayCard>
        </Section>
        <Section
          type="plays"
          title="Заголовок блока с одним спектаклем"
          titleTag="h2"
        >
          {cardsNum3.map((i, index) => (
            <div key={index}>
              <BasicPlayCard
                play={projectData.basicPlayCard.play}
                author={projectData.basicPlayCard.author}
                buttonVisibility={projectData.basicPlayCard.buttonVisibility}
              ></BasicPlayCard>
            </div>
          ))}
        </Section>
        <Section
          type="plays"
          title="Заголовок блока с одним спектаклем"
          titleTag="h2"
        >
          {cardsNum2.map((i, index) => (
            <div key={index}>
              <BasicPlayCard
                play={projectData.basicPlayCard.play}
                author={projectData.basicPlayCard.author}
                buttonVisibility={projectData.basicPlayCard.buttonVisibility}
              ></BasicPlayCard>
            </div>
          ))}
        </Section>
        <Section
          type="plays"
          title="Заголовок блока с одним спектаклем"
          titleTag="h2"
        >
          <BasicPlayCard
            play={projectData.basicPlayCard.play}
            author={projectData.basicPlayCard.author}
            buttonVisibility={projectData.basicPlayCard.buttonVisibility}
          ></BasicPlayCard>
        </Section>
        <Section type="plays" title="Заголовок блока с персонами" titleTag="h2">
          <PersonCardList>
            {cardsNum3.map((i, index) => (
              <div key={index}>
                <PersonCard
                  name={projectData.personCard.name}
                  link={projectData.personCard.link}
                  about={projectData.personCard.about}
                  participant={projectData.personCard.participant}
                ></PersonCard>
              </div>
            ))}
          </PersonCardList>
        </Section>
      </main>
    </AppLayout>
  );
};

export default Project;
