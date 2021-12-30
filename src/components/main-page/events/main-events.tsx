/* eslint-disable import/no-unresolved */
import { FC } from 'react';

import { AnnouncedPlayCard } from 'components/ui/announced-play-card';
import { IMainAfisha } from './main-events.props';

import styles from './main-events.module.css';

export const MainEvents: FC<IMainAfisha> = ({ items }) => {
  // console.log(items);

  return (
    <section className={styles.events}>
      <ul className={styles.content}>
        {
          items.map(item => (
            <li key={item.id} className={styles.list}>
              <AnnouncedPlayCard
                id={item.id}
                date={item.date_time}
                title={item.event_body.name}
                dramatists ={item.event_body.team.Драматург}
                directors={item.event_body.team.Режиссёр}
                description={item.event_body.description}
                buttonLink={item.url}
                imageUrl={item.event_body.image}
                projectText={/* item.event_body.project_title === null ? null : item.event_body.project_title */ 'Ругается eslint'}
                paid={item.paid}
              />
            </li>
          ))}
      </ul>
    </section>
  );
};
