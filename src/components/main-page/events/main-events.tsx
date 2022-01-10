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
                isPerformance={item.type === 'PERFORMANCE'}
                date={item.date}
                title={item.title}
                team={item.team}
                description={item.eventDescription && item.eventDescription}
                projectText={item.projectCopy}
                buttonLink={item.buttonLink}
                imageUrl={item.coverResourceUrl && item.coverResourceUrl}
                paid={item.paid}
              />
            </li>
          ))}
      </ul>
    </section>
  );
};
