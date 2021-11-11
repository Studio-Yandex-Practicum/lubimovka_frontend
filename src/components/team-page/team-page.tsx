import { FC } from 'react';

import ArtDirectorateData from './assets/mock-data-art.json';
import FestivalTeamData from './assets/mock-trustees-data.json';
import VolunteersData from './assets/mock-data-volunteers.json';
import SubmenuData from './assets/submenu-data.json';

import ArtDirectorateSection from './art-directorate/section/art-directorate-section';
import FestivalTeamSection from './festival-team/festival-team-section';
import VolunteersSection from './volunteers/section/volunteers-section';
import Submenu from './submenu/submenu';


const TeamPage: FC = () => {
  return (
    <>
      <Submenu submenu={SubmenuData}/>
      <ArtDirectorateSection cards={ArtDirectorateData} />
      <FestivalTeamSection cards={FestivalTeamData} />
      <VolunteersSection cards={VolunteersData} />
    </>
  );
};

export default TeamPage;
