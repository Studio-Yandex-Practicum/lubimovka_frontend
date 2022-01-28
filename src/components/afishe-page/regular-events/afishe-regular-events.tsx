import { FC } from 'react';

import { AnnouncedPlayCard } from 'components/ui/announced-play-card';
import { formatDate, formatTime } from 'shared/helpers/formatDateServerData';
import { Nullable } from 'shared/types';

import styles from './afishe-regular-events.module.css';

interface IItem {
  id: number;
  type: string;
  date: string;
  title: string;
  team: TeamEntry[];
  eventDescription?: string;
  buttonLink: string;
  coverResourceUrl?: string;
  project: Nullable<string>;
  paid?: boolean;
}
interface IRegularEventsProps {
  data: IItem[]
}

type TeamEntry = {
  name: string;
  persons: string [];
}

export const RegularEvents: FC<IRegularEventsProps> = (props) => {
  const { data } = props;
  return (
    <section className={styles.section}>
      {data.map((event) => (
        <AnnouncedPlayCard
          key={event.id}
          formattedDate={formatDate(event.date)}
          formattedTime={formatTime(event.date)}
          title={event.title}
          team={event.team}
          buttonLink={event.buttonLink}
          className={styles.event}
          project={event.project}
          isPerformance={event.type === 'PERFORMANCE'}
          imageUrl={event.coverResourceUrl}
          description={event.eventDescription}
          paid={event.paid}
        />
      ))}
    </section>
  );
};
