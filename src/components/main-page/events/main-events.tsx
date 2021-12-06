import { FC } from 'react';

import { AnnouncedPlayCard } from 'components/ui/announced-play-card';
import { MainAfisha } from 'api-typings';

import styles from './main-events.module.css';

export const MainEvents: FC<MainAfisha> = ({ items }) => {

  return (
    <section className={styles.events}>
      <ul className={styles.content}>
        {
          items.map(item => (
            <li key={item.id} className={styles.list}>
              {/* <AnnouncedPlayCard
                date={item.date_time}
                time={item.date_time}
                title={item.event_body.name}
                playwrightArray={item.playwrightArray}
                directorArray={item.event_body.description}
                eventDescription={item.event_body.description}
                buttonLinks={item.buttonLinks}
                coverResourceUrl={item.coverResourceUrl && item.coverResourceUrl}
              /> */}
            </li>
          ))}
      </ul>
    </section>
  );
};
