import { NextPage } from 'next';

import ArtDirectorateSection from 'components/team-art-directorate-section';
import TeamVolunteersSection from 'components/team-volunteers-section';
import TeamSection from 'components/team-team-section';

import VolunteersData from './assets/mock-data-volunteers.json';
import TeamData from './assets/mock-data-team.json';
import trusteesData from '../trustees/assets/mock-trustees-data.json';

const Team: NextPage = () => (
  <>
    <ArtDirectorateSection cards={TeamData} />
    <TeamSection cards={trusteesData}/>
    <TeamVolunteersSection cards={VolunteersData}/>
  </>
);

export default Team;
