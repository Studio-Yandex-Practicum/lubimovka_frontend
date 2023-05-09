import { SEO } from 'components/seo';

import { AppLayout } from 'components/app-layout';
import { AboutUsLayout } from 'components/about-us-layout';
import ArtDirectorateSection from 'components/team-page/art-directorate/section/art-directorate-section';
import FestivalTeamSection from 'components/team-page/festival-team/festival-team-section';
import { fetcher } from 'services/fetcher';

import type { InferGetServerSidePropsType } from 'next';
import type { FestivalTeams } from 'api-typings';

const Team = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    artDirectorate,
    restTeam,
  } = props;

  return (
    <AppLayout>
      <SEO title="Организаторы"/>
      <AboutUsLayout>
        <ArtDirectorateSection cards={artDirectorate}/>
        <FestivalTeamSection cards={restTeam}/>
      </AboutUsLayout>
    </AppLayout>
  );
};

export const getServerSideProps = async () => {
  const team = await fetcher<FestivalTeams[]>('/info/about-festival/team/');

  const { art: artDirectorate, fest: restTeam } = team.reduce<Record<string, FestivalTeams[]>>((acc, entry) => {
    (acc[entry.team] || (acc[entry.team] = [])).push(entry);

    return acc;
  }, {});

  return {
    props: {
      artDirectorate,
      restTeam,
    },
  };
};

export default Team;
