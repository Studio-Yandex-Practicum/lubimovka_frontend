import React, { FC } from 'react';
import classNames from 'classnames';

import ArtDirectorateSection from './art-directorate/section/art-directorate-section';
import FestivalTeamSection from './festival-team/festival-team-section';
import VolunteersSection from './volunteers/section/volunteers-section';
import { FestivalTeams, Volunteers } from 'api-typings';
import { AboutUsMenu } from 'components/what-we-do-page/about-us-menu/about-us-menu';

import ArtFestTeamsData from './assets/mock-data-art.json';
import VolunteersData from './assets/mock-data-volunteers.json';
import styles from './team-page.module.css';

const cn = classNames;

interface TeamPageProps {
  team: FestivalTeams,
  volunteers: Volunteers | undefined
}

const TeamPage: FC<TeamPageProps> = ({ team, volunteers }) => {
  // временно, так как с сервера приходят некорректные изображения
  let data=[];
  data.push(team, volunteers);

  return (
    <>
      <div className={cn(styles.menu)}>
        <AboutUsMenu/>
      </div>
      <ArtDirectorateSection cards={ArtFestTeamsData}/>
      <FestivalTeamSection cards={ArtFestTeamsData}/>
      <VolunteersSection cards={VolunteersData}/>
    </>
  );
};

export default TeamPage;
