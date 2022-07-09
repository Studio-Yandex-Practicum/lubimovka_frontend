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
        const ref = i === events.length - 1 ? bottomRef : undefined;

        // TODO: Тут происходит что-то не вполне понятное. Вместо того, чтобы сгруппировать события по датам и отрендерить
        // очевидным образом, мы зачем-то родили обертку для каждой карточки, которая инкапсулирует в себе логику показа заголовка секции.
        // При этом теперь каждая карточка обернута в <section>, не оч понятно, зачем

        return (
          <FestivalEvent
            key={e.id}
            isFirst={i === 0 || events[--i].dateTime.slice(0,10) !== e.dateTime.slice(0,10)}
            ref={ref}
            {...e}
          />
        );
      })}
      {isLoading() && <Spinner className={cx('spinner')}/>}
    </section>
  );
};
