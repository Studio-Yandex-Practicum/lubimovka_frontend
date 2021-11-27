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
                //необходимо передавать в isPerformance, значение, зависимое от item.type с бэка. Если item.type === 'Спектакль', то значение true
                isPerformance={item.type === 'Спектакль'}
                id={item.id}
                date={item.date}
                title={item.title}
                playwrightArray={item.playwrightArray}
                directorArray={item.directorArray}
                eventDescription={item.eventDescription && item.eventDescription}
                projectCopy={item.projectCopy}
                buttonLink={item.buttonLink}
                coverResourceUrl={item.coverResourceUrl && item.coverResourceUrl}
                paid={item.paid}
              />
            </li>
          ))}
      </ul>
    </section>
  );
};
