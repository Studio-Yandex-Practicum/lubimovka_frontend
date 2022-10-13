import { FC, useEffect } from 'react';
import cn from 'classnames/bind';

import { EventCard } from 'components/event-card';
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
      {events.map((event, i) => {
        const ref = i === events.length - 1 ? bottomRef : undefined;

        return (
          <EventCard
            key={event.id}
            className={cx('event')}
            date={format('d MMMM', new Date(event.dateTime))}
            time={format('H:mm', new Date(event.dateTime))}
            title={event.eventBody.name}
            team={event.eventBody.team}
            projectTitle={event.eventBody.projectTitle}
            // TODO: разобраться, сча в схеме API нет поля с изображением
            // @ts-expect-error
            imageUrl={event.eventBody.image}
            description={event.eventBody.description}
            {...event.type === 'PERFORMANCE' ? {
              performanceUrl: `/performances/${event.eventBody.id}`,
            } : {}}
            actionUrl={event.actionUrl}
            actionText={event.actionText}
            ref={ref}
          />
        );
      })}
      {isLoading() && <Spinner className={cx('spinner')}/>}
    </section>
  );
};
