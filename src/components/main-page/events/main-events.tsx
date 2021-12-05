import { FC } from 'react';

import { AnnouncedPlayCard } from 'components/ui/announced-play-card';

import styles from './main-events.module.css';

interface IItem {
  id: number
  date: string;
  time: string;
  title: string;
  playwrightArray: string [];
  directorArray: string [];
  eventDescription?:string;
  buttonLinks: string [];
  coverResourceUrl?: string;
}
interface IMainEventsProps {
  data: IItem[]
}

export const MainEvents: FC<IMainEventsProps> = ({ data }) => {
  return (
    <section className={styles.events}>
      <ul className={styles.content}>
        {
          data.map(item => (
            <li key={item.id} className={styles.list}>
              <AnnouncedPlayCard
                date={item.date}
                time={item.time}
                title={item.title}
                playwrightArray={item.playwrightArray}
                directorArray={item.directorArray}
                eventDescription={item.eventDescription && item.eventDescription}
                buttonLinks={item.buttonLinks}
                coverResourceUrl={item.coverResourceUrl && item.coverResourceUrl}
              />
            </li>
          ))}
      </ul>
    </section>
  );
};
