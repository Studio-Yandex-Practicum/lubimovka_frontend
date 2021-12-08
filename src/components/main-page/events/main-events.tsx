import { FC } from 'react';

import { AnnouncedPlayCard } from 'components/ui/announced-play-card';

import styles from './main-events.module.css';

interface IItem {
  id: number;
  type: string;
  date: string;
  title: string;
  playwrightArray: string [];
  directorArray: string [];
  eventDescription?: string;
  buttonLink: string;
  coverResourceUrl?: string;
  projectCopy: string;
  paid?: boolean;
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
                isPerformance={item.type === 'PERFORMANCE'}
                id={item.id}
                date={item.date}
                title={item.title}
                dramatists={item.playwrightArray}
                directors={item.directorArray}
                description={item.eventDescription && item.eventDescription}
                projectText={item.projectCopy}
                buttonLink={item.buttonLink}
                imageUrl={item.coverResourceUrl && item.coverResourceUrl}
                paid={item.paid}
              />
            </li>
          ))}
      </ul>
    </section>
  );
};
