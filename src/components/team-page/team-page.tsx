import { FC } from 'react';

import ArtFestTeamsData from './assets/mock-data-art.json';
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
      <ArtDirectorateSection cards={ArtFestTeamsData}/>
      <FestivalTeamSection cards={ArtFestTeamsData}/>
      <VolunteersSection cards={VolunteersData}/>
    </>
  );
};

export default TeamPage;
