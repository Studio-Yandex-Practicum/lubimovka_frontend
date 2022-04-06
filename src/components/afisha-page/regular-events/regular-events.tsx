import { FC, useRef } from 'react';
import cn from 'classnames/bind';

import { AnnouncedPlayCard } from 'components/ui/announced-play-card';
import { visibility } from 'shared/helpers/visibility';

import styles from './regular-events.module.css';
import { useAfisha } from '../afisha-provider';
import { useScroll } from 'shared/hooks/use-scroll';
import { format } from 'shared/helpers/format-date';
import { Loader } from 'components/ui/loader';

const cx = cn.bind(styles);

export const RegularEvents: FC = () => {
  const { selectEvents, takeEvents, isLoading } = useAfisha();
  const eventsRef = useRef<HTMLElement>(null);

  useScroll(() => {
    if (visibility(eventsRef.current).bottom) {
      takeEvents();
    };
  });

  return (
    <section className={cx('section')} ref={eventsRef}>
      {selectEvents().map((event) => (
        <AnnouncedPlayCard
          key={event.id}
          formattedDate={format('d MMMM', new Date(event.dateTime))}
          formattedTime={format('H:mm', new Date(event.dateTime))}
          title={event.eventBody.name}
          team={event.eventBody.team}
          buttonLink={event.url}
          className={styles.event}
          project={event.eventBody.projectTitle}
          isPerformance={event.type === 'PERFORMANCE'}
          imageUrl={'image' in event.eventBody ? event.eventBody.image : undefined}
          description={event.eventBody.description}
        />
      ))}
      {isLoading() &&<Loader/>}
    </section>
  );
};
