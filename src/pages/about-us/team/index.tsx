import { useRouter } from 'next/router';

import { AboutUsLayout } from 'components/about-us-layout';
import { AppLayout } from 'components/app-layout';
import { SEO } from 'components/seo';
import ArtDirectorateSection from 'components/team-page/art-directorate/section/art-directorate-section';
import FestivalTeamSection from 'components/team-page/festival-team/festival-team-section';
import { useSettings } from 'services/api/settings-adapter';
import { fetcher } from 'services/fetcher';

import type { FestivalTeams } from '__generated__/api-typings';
import type { InferGetServerSidePropsType } from 'next';

const Team = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    artDirectorate,
    restTeam,
  } = props;
  const { settings } = useSettings();
  const permissions = settings?.permissions;

  const router = useRouter();
  if (permissions && !permissions.show_team) {
    router.replace('/about-us/404');
  }

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
