import Error from 'next/error';
import { SEO } from 'components/seo';
import { useRouter } from 'next/router';

import { AppLayout } from 'components/app-layout';
import { AboutUsLayout } from 'components/about-us-layout';
import ArtDirectorateSection from 'components/team-page/art-directorate/section/art-directorate-section';
import FestivalTeamSection from 'components/team-page/festival-team/festival-team-section';
import VolunteersSection from 'components/team-page/volunteers/section/volunteers-section';
import { fetcher } from 'services/fetcher';
import { serverErrorResult } from 'shared/constants/server-side-props';

import type { InferGetServerSidePropsType } from 'next';
import type { FestivalTeams, Volunteers } from 'api-typings';

const Team = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();

  if ('errorCode' in props) {
    const { errorCode } = props;

    return (
      <Error statusCode={errorCode}/>
    );
  }

  const queryYear = Number(router.query.year);
  const {
    artDirectorate,
    volunteers,
    restTeam,
  } = props;

  return (
    <AppLayout>
      <SEO title="Организаторы"/>
      <AboutUsLayout>
        <ArtDirectorateSection cards={artDirectorate}/>
        <FestivalTeamSection cards={restTeam}/>
        <div id="volunteers">
          <VolunteersSection
            cards={volunteers}
            queryYear={queryYear}
          />
        </div>
      </AboutUsLayout>
    </AppLayout>
  );
};

const fetchTeam = async () => {
  let data;

  try {
    data = await fetcher<FestivalTeams[]>('/info/about-festival/team/');
  } catch (error) {
    throw error;
  }

  return data;
};

const fetchVolunteers = async () => {
  let data;

  try {
    data = await fetcher<Array<Volunteers>>('/info/about-festival/volunteers/');
  } catch (error) {
    throw error;
  }

  return data;
};

export const getServerSideProps = async () => {
  try {
    const [team, volunteers] = await Promise.all([
      fetchTeam(),
      fetchVolunteers(),
    ]);

    const { art: artDirectorate, fest: restTeam } = team.reduce<Record<string, FestivalTeams[]>>((acc, entry) => {
      (acc[entry.team] || (acc[entry.team] = [])).push(entry);

      return acc;
    }, {});

    return {
      props: {
        artDirectorate,
        volunteers,
        restTeam,
      },
    };
  } catch (error) {
    return serverErrorResult;
  }
};

export default Team;
