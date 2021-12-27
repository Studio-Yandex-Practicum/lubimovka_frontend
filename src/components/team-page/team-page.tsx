import React, { FC, useEffect } from 'react';
import classNames from 'classnames';

import ArtDirectorateSection from './art-directorate/section/art-directorate-section';
import FestivalTeamSection from './festival-team/festival-team-section';
import VolunteersSection from './volunteers/section/volunteers-section';
import { FestivalTeams, Volunteers } from 'api-typings';
import { AboutUsMenu } from 'components/what-we-do-page/about-us-menu/about-us-menu';

import styles from './team-page.module.css';

const cn = classNames;

interface TeamPageProps {
  team: Array<FestivalTeams>,
  volunteers: Array<Volunteers>
  queryYear: number
}

const TeamPage: FC<TeamPageProps> = ({ team, volunteers, queryYear }) => {
  useEffect(() => {
    if (document.location.hash !== '') {
      document.location.replace(document.location.hash);
    }
  }, []);

  return (
    <>
      <div className={cn(styles.menu)}>
        <AboutUsMenu/>
      </div>
      <ArtDirectorateSection cards={team}/>
      <FestivalTeamSection cards={team}/>
      <div id="volunteers">
        <VolunteersSection cards={volunteers} queryYear={queryYear}/>
      </div>
    </>
  );
};

export default TeamPage;
