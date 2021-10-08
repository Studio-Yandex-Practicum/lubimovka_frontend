import { NextPage } from 'next';

import TeamSection from '../../components/team-section';

import TeamData from './assets/mock-data.json';

const Team: NextPage = () => (
  <>
    {TeamData.map(data => <TeamSection key={data.id} data={data}/>)}
  </>
);

export default Team;
