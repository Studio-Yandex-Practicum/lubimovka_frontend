import { FC } from 'react';

import { AnnouncedPlayCard, IAnnouncedPlayCardProps } from 'components/ui/announced-play-card';

import styles from './afishe-regular-events.module.css';

interface IRegularEventsProps {
    data: IAnnouncedPlayCardProps[];
}

export const RegularEvents: FC<IRegularEventsProps> = (props) => {
  const { data } = props;
  return (
    <section className={styles.section}>
      {data.map((event) => (
        <AnnouncedPlayCard key={event.id} date={event.date} title={event.title}
          dramatists={event.dramatists}
          directors={event.directors} buttonLink={event.buttonLink}
          className={styles.event} projectText={event.projectText} isPerformance={event.isPerformance}
          imageUrl={event.imageUrl} description={event.description}/>
      ))}
    </section>
  );
};
