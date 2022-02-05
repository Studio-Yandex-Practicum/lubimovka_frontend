import { FC } from 'react';
import classNames from 'classnames/bind';

import { AnnouncedPlayCard } from 'components/ui/announced-play-card';
import { IMainAfisha } from './main-events.props';
import { formatDate, formatTime } from 'shared/helpers/formatDateServerData';
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
                formattedDate={formatDate(item.date_time)}
                formattedTime={formatTime(item.date_time)}
                title={item.event_body.name}
                team={item.event_body.team}
                description={item.event_body.description}
                buttonLink={item.url}
                imageUrl={item.event_body.image}
                project="читка проекта Любимовка.Ещё"
                paid={item.paid}
                className={styles.event}
              />
            </li>
          ))}
      </ul>
    </section>
  );
};
