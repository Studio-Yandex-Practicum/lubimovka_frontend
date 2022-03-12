import { FC } from 'react';
import classNames from 'classnames/bind';

import { AnnouncedPlayCard } from 'components/ui/announced-play-card';
import { IMainAfisha } from './main-events.props';
import { formatDateTime } from 'shared/helpers/format-date-time';
import { main } from 'mocks/data/main';

import styles from './main-events.module.css';

const cx = classNames.bind(styles);
const mocks = main.afisha?.items;

export const MainEvents: FC<IMainAfisha> = () => {
  return (
    <section className={styles.events}>
      <ul className={styles.content}>
        {
          mocks?.map(item => (
            <li key={item.id} className={cx('list')}>
              <AnnouncedPlayCard
                id={item.id}
                formattedDate={formatDateTime(item.date_time, 'dMMMM')}
                formattedTime={formatDateTime(item.date_time, 'mH')}
                title={item.event_body.name}
                team={item.event_body.team}
                description={item.event_body.description}
                buttonLink={item.url}
                imageUrl={item.event_body.image}
                project="читка проекта Любимовка.Ещё"
                paid={item.paid}
              />
            </li>
          ))}
      </ul>
    </section>
  );
};
