import { FC } from 'react';
import cn from 'classnames/bind';

import { AnnouncedPlayCard } from 'components/ui/announced-play-card';
import { formatDate, formatTime } from 'shared/helpers/formatDateServerData';
import { PaginatedAfishaEventListOutputList } from 'api-typings';

import styles from './afisha-regular-events.module.css';

const cx = cn.bind(styles);

// interface IRegularEventsProps {
//   data: (Omit<IAnnouncedPlayCardProps, 'formattedDate' | 'formattedTime'> & { date_time: string })[]
// }

export const RegularEvents: FC<PaginatedAfishaEventListOutputList> = (props) => {
  const { results } = props;

  return (
    <section className={cx('section')}>
      {results?.map((event) => (
        <AnnouncedPlayCard
          key={event.id}
          formattedDate={formatDate(event.date_time)}
          formattedTime={formatTime(event.date_time)}
          title={event.event_body.project_title}
          // team={event.event_body.team}
          buttonLink={event.url}
          className={styles.event}
          project=""
          isPerformance={event.type === 'PERFORMANCE'}
          imageUrl=""
          description={event.event_body.description}
        />
      ))}
    </section>
  );
};
