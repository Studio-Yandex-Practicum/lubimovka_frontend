import { FC, useEffect } from 'react';
import cn from 'classnames/bind';

import { useIntersection } from 'shared/hooks/use-intersection';
import { Spinner } from 'components/spinner';

import styles from './festival-events-desktop.module.css';

import { FestivalEvent } from '../festival-event';
import { useAfisha } from '../afisha-provider';

const cx = cn.bind(styles);

export const FestivalEventsDesktop: FC = () => {
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
          <FestivalEvent
            key={e.id}
            isFirst={i === 0 || events[--i].dateTime.slice(0,10) !== e.dateTime.slice(0,10)}
            ref={ref}
            {...e}
          />
        );
      })}
      {isLoading() &&<Spinner className={cx('spinner')}/>}
    </section>
  );
};
