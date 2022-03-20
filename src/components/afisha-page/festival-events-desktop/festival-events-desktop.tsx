import { FC, useCallback, useEffect, useRef, useState } from 'react';
import cn from 'classnames/bind';

import { FestivalEvent } from '../festival-event';
import { Events, useFestival } from '../festival-provider';
import { visibility } from 'shared/helpers/visibility';

import styles from './festival-events-desktop.module.css';

const cx = cn.bind(styles);

const renderEvents = (events: Events) => {
  const res: JSX.Element[] = [];
  for (const key in events) {
    events[key].forEach((e, index) => {
      res.push(<FestivalEvent key={e.id} isFirst={index===0} {...e}/>);
    });
  }
  return res;
};

export const FestivalEventsDesktop: FC = () => {
  const festival = useFestival();
  const { getEvents, getState, isLoading } = festival;
  const [events, setEvents] = useState<Events>(getState().events);
  const eventsRef = useRef<HTMLElement>(null);

  const handlerScroll = useCallback(() => {
    if (isLoading() || !visibility(eventsRef.current).bottom) {
      return;
    }
    getEvents().then(r => { 
      setEvents({ ...events, ...(r || {}) });
    });
  }, [events, getEvents, isLoading]);

  useEffect(() => {
    window.addEventListener('scroll', handlerScroll);
    return () => {
      window.removeEventListener('scroll', handlerScroll);
    };
  }), [];

  return (
    <section className={cx('section')} ref={eventsRef}>
      {renderEvents(events)}
    </section>
  );
};
