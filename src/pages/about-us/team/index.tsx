import Error from 'next/error';
import { SEO } from 'components/seo';
import { useRouter } from 'next/router';

import { AppLayout } from 'components/app-layout';
import { AboutUsLayout } from 'components/about-us-layout';
import ArtDirectorateSection from 'components/team-page/art-directorate/section/art-directorate-section';
import FestivalTeamSection from 'components/team-page/festival-team/festival-team-section';
import VolunteersSection from 'components/team-page/volunteers/section/volunteers-section';
import { fetcher } from 'services/fetcher';

import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import type { FestivalTeams, Volunteers } from 'api-typings';

const Team = ({ errorCode, team, volunteers }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const queryYear = Number(router.query.year);

  if (errorCode) {
    return (
      <Error statusCode={errorCode}/>
    );
  }

  return (
    <AppLayout>
      <SEO title="Организаторы"/>
      <AboutUsLayout>
        <ArtDirectorateSection cards={team}/>
        <FestivalTeamSection cards={team}/>
        <div id="volunteers">
          <VolunteersSection cards={volunteers} queryYear={queryYear}/>
        </div>
      </AboutUsLayout>
    </AppLayout>
  );
};

const fetchTeam = async () => {
  let data;

  try {
    data = await fetcher<Array<FestivalTeams>>('/info/about-festival/team/');
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

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const [team, volunteers] = await Promise.all([
      fetchTeam(),
      fetchVolunteers()
    ]);

    return {
      props: {
        team,
        volunteers
      },
    };
  } catch (error) {
    return {
      props: {
        errorCode: 500,
        team: [],
        volunteers: []
      }
    };
  }
};

export default Team;
