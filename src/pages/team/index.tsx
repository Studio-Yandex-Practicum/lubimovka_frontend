import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import Error from 'next/error';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { AppLayout } from 'components/app-layout';
import TeamPage from 'components/team-page';
import { fetcher } from 'shared/fetcher';
import { FestivalTeams, Volunteers } from 'api-typings';

interface ITeamProps {
  errorCode?: number,
  team: Array<FestivalTeams>,
  volunteers: Array<Volunteers>
}

const Team = ({ errorCode, team, volunteers }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string | null>('');

  useEffect(() => {
    const { searchParams } = new URL(document.URL);

    const handleRouteChange = () => {
      setSearchQuery(searchParams.get('q'));
    };

    handleRouteChange();

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };

  }, [router]);

  if (errorCode) {
    return (
      <Error statusCode={errorCode}/>
    );
  }

  return (
    <AppLayout>
      <Head>
        <title>{'Организаторы'}</title>
      </Head>
      <main>
        <TeamPage team={team} volunteers={volunteers} searchQuery={searchQuery}/>
      </main>
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

export const getServerSideProps: GetServerSideProps<ITeamProps> = async () => {
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
