import { NextPage } from 'next';

import TeamVolunteersSection from '../../components/team-volunteers-section';

import TeamData from './assets/mock-data.json';

const Team: NextPage = () => (
  <>
    {TeamData.map(data => <TeamVolunteersSection key={data.id} data={data}/>)}
  </>
);

export default Team;
