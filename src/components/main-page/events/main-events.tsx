import { FC } from 'react';
import classNames from 'classnames/bind';

import { AnnouncedPlayCard } from 'components/ui/announced-play-card';
import { formatDate, formatTime } from 'shared/helpers/formatDateServerData';
import { IMainAfisha } from './main-events.props';

import styles from './main-events.module.css';

const cx = classNames.bind(styles);

export const MainEvents: FC<IMainAfisha> = ({ items }) => (

  <section className={styles.events}>
    <ul className={styles.content}>
      {
        items.map(item => (
          <li key={item.id} className={cx('list')}>
            <AnnouncedPlayCard
              isPerformance={item.type === 'PERFORMANCE'}
              id={item.id}
              formattedDate={formatDate(item.date_time)}
              formattedTime={formatTime(item.date_time)}
              title={item.event_body.name}
              team={item.event_body.team}
              description={item.event_body.description}
              buttonLink={item.url}
              imageUrl={item.event_body.image}
              project={item.event_body.project_title && undefined}
              paid={item.paid}
            />
          </li>
        ))}
    </ul>
  </section>
);
