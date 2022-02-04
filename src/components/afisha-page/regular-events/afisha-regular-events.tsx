import { FC } from 'react';
import cn from 'classnames/bind';

import { AnnouncedPlayCard, IAnnouncedPlayCardProps } from 'components/ui/announced-play-card';
import { formatDate, formatTime } from 'shared/helpers/formatDateServerData';

import styles from './afisha-regular-events.module.css';

const cx = cn.bind(styles);

interface IRegularEventsProps {
  data: (Omit<IAnnouncedPlayCardProps, 'formattedDate' | 'formattedTime'> & { date_time: string })[]
}

export const RegularEvents: FC<IRegularEventsProps> = (props) => {
  const { data } = props;

  return (
    <section className={cx('section')}>
      {data.map((event) => (
        <AnnouncedPlayCard
          key={event.id}
          formattedDate={formatDate(event.date_time)}
          formattedTime={formatTime(event.date_time)}
          title={event.title}
          team={event.team}
          buttonLink={event.buttonLink}
          className={styles.event}
          project={event.project}
          isPerformance={event.isPerformance}
          imageUrl={event.imageUrl}
          description={event.description}
        />
      ))}
    </section>
  );
};
