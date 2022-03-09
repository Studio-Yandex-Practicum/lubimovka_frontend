import { FC } from 'react';
import classNames from 'classnames/bind';

import { AfishaEvent, EventPerformance } from 'api-typings';
import { AnnouncedPlayCard } from 'components/ui/announced-play-card';
import { formatDate, formatTime } from 'shared/helpers/formatDateServerData';

import styles from './main-events.module.css';

const cx = classNames.bind(styles);

interface IAfishaEvent extends AfishaEvent {
  event_body: EventPerformance;
}

interface IMainAfisha {
  items: Array<IAfishaEvent>
}

export const MainEvents: FC<IMainAfisha> = ({ items }) => {
  return (
    <section className={styles.events}>
      <ul className={styles.content}>
        {
          items.map(item => (
            <li key={item.id} className={cx('list')}>
              <AnnouncedPlayCard
                id={item.id}
                formattedDate={formatDate(item.date_time)}
                formattedTime={formatTime(item.date_time)}
                title={item.event_body.name}
                team={item.event_body.team}
                description={item.event_body.description}
                buttonLink={item.url}
                imageUrl={item.event_body.image}
                project={item.event_body.project_title}
                paid={item.paid}
                isPerformance={item.type === 'PERFORMANCE' ? true : false}
              />
            </li>
          ))}
      </ul>
    </section>
  );
};
