import { FC, useCallback, useEffect, useRef, useState } from 'react';
import cn from 'classnames/bind';

import { AnnouncedPlayCard } from 'components/ui/announced-play-card';
// import { formatDate, formatTime } from 'shared/helpers/formatDateServerData';
import { PaginatedAfishaEventListOutputList } from 'api-typings';
import { visibility } from 'shared/helpers/visibility';
import { getFetcherEventsRegular } from '../utils/fetchData';

import styles from './regular-events.module.css';

const cx = cn.bind(styles);

let isLoading = false;
const fetchEvents = getFetcherEventsRegular();

export const RegularEvents: FC<PaginatedAfishaEventListOutputList> = (props) => {
  const { results, count } = props;

  const [events, setEvents] = useState(results);
  const eventsRef = useRef<HTMLElement>(null);

  const handlerScroll = useCallback(() => {
    if (!events || events.length >= Number(count)) {
      return;
    }
    if (isLoading || !visibility(eventsRef.current).bottom) {
      return;
    }
    isLoading = true;
    fetchEvents().then(r => {
      setEvents([...(events || []), ...(r.results || []) ]);
      isLoading = false;
    });
  }, [count, events]);

  useEffect(() => {
    window.addEventListener('scroll', handlerScroll);
    return () => {
      window.removeEventListener('scroll', handlerScroll);
    };
  }), [];

  return (
    <section className={cx('section')} ref={eventsRef}>
      {events?.map((event) => (
        <AnnouncedPlayCard
          key={event.id}
          formattedDate={''}
          formattedTime={''}
          title={event.event_body.project_title}
          team={event.event_body.team}
          buttonLink={event.url}
          className={styles.event}
          project="Читка проекта"
          isPerformance={event.type === 'PERFORMANCE'}
          imageUrl={'image' in event.event_body ? event.event_body.image : undefined}
          description={event.event_body.description}
        />
      ))}
    </section>
  );
};
