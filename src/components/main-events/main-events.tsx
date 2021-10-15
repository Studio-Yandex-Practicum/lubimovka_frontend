import { FC } from 'react';

import styles from './main-events.module.css';

import { AnnouncedPlayCard } from 'components/ui/announced-play-card';

interface Item {
  id: number
  date: string;
  time: string;
  title: string;
  playwrightArray: string [];
  directorArray: string [];
  buttonLinks: string [];
  coverResourceUrl?: string;
}
interface IMainEventsProps {
  data: Array<Item>
}

export const MainEvents: FC<IMainEventsProps> = ({ data }) => {
  return (
    <section className={styles.section}>
      {
        data.map(item => {
          return <AnnouncedPlayCard 
            key={ item.id } 
            date={ item.date }
            time={ item.time }
            title={ item.title }
            playwrightArray={ item.playwrightArray }
            directorArray={ item.directorArray }
            buttonLinks={ item.buttonLinks }
            coverResourceUrl={ item.coverResourceUrl && item.coverResourceUrl }
          />;
        })
      }
    </section>
  );
};
