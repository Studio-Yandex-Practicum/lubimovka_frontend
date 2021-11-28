import { FC } from 'react';
import { useRouter } from 'next/dist/client/router';
import classNames from 'classnames';

import { Menu } from 'components/ui/menu';
import ArtDirectorateSection from './art-directorate/section/art-directorate-section';
import FestivalTeamSection from './festival-team/festival-team-section';
import VolunteersSection from './volunteers/section/volunteers-section';

import ArtFestTeamsData from './assets/mock-data-art.json';
import VolunteersData from './assets/mock-data-volunteers.json';
import styles from './team-page.module.css';

const cn = classNames;

const demoItems = [
  {
    text: 'Что мы делаем',
    href: '/what-we-do',
  },
  {
    text: 'Организаторы',
    href: '/team',
  },
  {
    text: 'Попечители',
    href: '/trustees',
  },
  {
    text: 'Идеология',
    href: '/ideology',
  }
];

const TeamPage: FC = () => {
  const router = useRouter();

  return (
    <>
      <Menu type={'general-submenu'} className={cn(styles.submenu)}>
        {demoItems.map(item => (
          <Menu.Item
            key={item.text}
            href={item.href}
            mods={{ [styles.active]: router.pathname === item.href }}
          >
            {item.text}
          </Menu.Item>
        ))}
      </Menu>
      <ArtDirectorateSection cards={ArtFestTeamsData}/>
      <FestivalTeamSection cards={ArtFestTeamsData}/>
      <VolunteersSection cards={VolunteersData}/>
    </>
  );
};

export default TeamPage;
