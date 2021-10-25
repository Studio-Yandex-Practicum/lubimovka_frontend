import { NextPage } from 'next';

import ArtDirectorateSection from 'components/team-art-directorate-section';
import TeamVolunteersSection from 'components/team-volunteers-section';
import TeamSection from 'components/team-team-section';

import ArtDirectorateData from './assets/mock-data-art.json';
import VolunteersData from './assets/mock-data.json';
import TeamData from './assets/mock-data-team.json';

const Team: NextPage = () => (
  <>
    <ArtDirectorateSection data={ArtDirectorateData} />
    <TeamSection data={TeamData}/>
    <TeamVolunteersSection data={VolunteersData}/>
  </>
);

export default Team;
