import { FC, useEffect } from 'react';
import cn from 'classnames/bind';

import { AnnouncedPlayCard } from 'components/ui/announced-play-card';
import { Spinner } from 'components/spinner';

import { useIntersection } from 'shared/hooks/use-intersection';
import { format } from 'shared/helpers/format-date';

import styles from './regular-events.module.css';

import { useAfisha } from '../afisha-provider';

const cx = cn.bind(styles);

export const RegularEvents: FC = () => {
  const { selectEvents, takeEvents, isLoading } = useAfisha();
  const [bottomRef, shouldTakeEvents] = useIntersection<HTMLElement>();
  const events = selectEvents();

  useEffect(() => {
    if (!shouldTakeEvents) {
      return;
    }
    takeEvents();
  }, [shouldTakeEvents, takeEvents]);

  return (
    <section className={cx('section')}>
      {events.map((e, i) => {
        const ref = i===events.length - 1 ? bottomRef : undefined;
        return (
          <AnnouncedPlayCard
            key={e.id}
            formattedDate={format('d MMMM', new Date(e.dateTime))}
            formattedTime={format('H:mm', new Date(e.dateTime))}
            title={e.eventBody.name}
            team={e.eventBody.team}
            buttonLink={e.url}
            className={styles.event}
            project={e.eventBody.projectTitle}
            isPerformance={e.type === 'PERFORMANCE'}
            imageUrl={'image' in e.eventBody ? e.eventBody.image : undefined}
            description={e.eventBody.description}
            ref={ref}
          />
        );
      })}
      {isLoading() &&<Spinner className={cx('spinner')}/>}
    </section>
  );
};
