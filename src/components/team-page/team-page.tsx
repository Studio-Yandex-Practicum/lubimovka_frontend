import { FC } from 'react';

import ArtDirectorateData from './assets/mock-data-art.json';
import FestivalTeamData from './assets/mock-trustees-data.json';
import VolunteersData from './assets/mock-data-volunteers.json';

import ArtDirectorateSection from './art-directorate/section/art-directorate-section';
import FestivalTeamSection from './festival-team/festival-team-section';
import VolunteersSection from './volunteers/section/volunteers-section';


const TeamPage: FC = () => {
  return (
    <>
      <ArtDirectorateSection cards={ArtDirectorateData} />
      <FestivalTeamSection cards={FestivalTeamData} />
      <VolunteersSection cards={VolunteersData} />
    </>
  );
};

export default TeamPage;
