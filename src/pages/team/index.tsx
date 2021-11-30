import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

import AppLayout from 'components/app-layout';
import TeamPage from 'components/team-page';
import { fetcher } from 'shared/fetcher';
import { FestivalTeams, Volunteers } from 'api-typings';

interface ITeamProps {
  team: Array<FestivalTeams>,
  volunteers: Array<Volunteers>
}

const Team = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { team, volunteers } = props;
  return (
    <AppLayout>
      <Head>
        <title>{'Организаторы'}</title>
      </Head>
      <main>
        <TeamPage team={team} volunteers={volunteers}/>
      </main>
    </AppLayout>
  );
};

const fetchTeam = async () => {
  let data;

  try {
    data = await fetcher<Array<FestivalTeams>>('/info/about-festival/team/');
  } catch (error) {
    return;
  }

  return data;
};

const fetchVolunteers = async () => {
  let data;

  try {
    data = await fetcher<Array<Volunteers>>('/info/about-festival/volunteers/');
  } catch (error) {
    return;
  }

  return data;
};

export const getServerSideProps: GetServerSideProps<ITeamProps> = async () => {
  const team = await fetchTeam();
  const volunteers = await fetchVolunteers();

  if (!team) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      team,
      volunteers
    },
  };
};

export default Team;
