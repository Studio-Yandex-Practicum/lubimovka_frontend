import { FC } from 'react';
import classNames from 'classnames/bind';

import { AnnouncedPlayCard } from 'components/ui/announced-play-card';
<<<<<<< HEAD
import { IMainAfisha } from './main-events.props';
import { main } from 'mocks/data/main';
=======
import { formatDate, formatTime } from 'shared/helpers/formatDateServerData';
>>>>>>> aeb78002 (refactor: изменение в свойствах компонента AnnouncedPlayCard, форматирование даты теперь за пределами компонента; связанные изменения в других компонентах)

import styles from './main-events.module.css';

interface IItem {
  id: number;
  type: string;
  date: string;
  title: string;
  team: TeamEntry [];
  eventDescription?: string;
  buttonLink: string;
  coverResourceUrl?: string;
  projectCopy: string;
  paid?: boolean;
}

interface IMainEventsProps {
  data: IItem[]
}

type TeamEntry = {
  name: string;
  persons: string [];
}

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
                id={item.id}
                formattedDate={formatDate(item.date)}
                formattedTime={formatTime(item.date)}
                title={item.title}
                team={item.team}
                description={item.eventDescription && item.eventDescription}
                project={item.projectCopy}
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
