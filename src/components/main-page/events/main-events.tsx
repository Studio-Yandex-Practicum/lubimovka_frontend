import { FC } from 'react';
import classNames from 'classnames/bind';

import { AnnouncedPlayCard } from 'components/ui/announced-play-card';
import { IMainAfisha } from './main-events.props';
import { main } from 'mocks/data/main';

import styles from './main-events.module.css';

const cx = classNames.bind(styles);

export const MainEvents: FC<IMainAfisha> = () => {
  const mocks = main.afisha?.items;

  return ( 
    <section className={styles.events}>
      <ul className={styles.content}>
        {
          mocks?.map(item => (
            <li key={item.id} className={cx('list')}>
              <AnnouncedPlayCard
                id={item.id}
                date={item.date_time}
                title={item.event_body.name}
                dramatists ={item.event_body.team.Драматург}
                directors={item.event_body.team.Режиссёр}
                description={item.event_body.description}
                buttonLink={item.url}
                imageUrl={item.event_body.image}
                projectText="читка проекта Любимовка.Ещё"
                paid={item.paid}
              />
            </li>
          ))}
      </ul>
    </section>
  );
};
