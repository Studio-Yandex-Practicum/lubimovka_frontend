import { NextPage } from 'next';

import TeamVolunteersSection from 'components/team-volunteers-section';
import TeamSection from 'components/team-team-section';

import VolunteersData from './assets/mock-data.json';
import TeamData from './assets/mock-data-team.json';

const Team: NextPage = () => (
  <>
    <TeamSection data={TeamData}/>
    <TeamVolunteersSection data={VolunteersData}/>
  </>
);

export default Team;
