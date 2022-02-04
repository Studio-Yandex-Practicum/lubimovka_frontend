import { FC } from 'react';
import cn from 'classnames/bind';

import { AnnouncedPlayCard, IAnnouncedPlayCardProps } from 'components/ui/announced-play-card';

import styles from './afisha-regular-events.module.css';

const cx = cn.bind(styles);

interface IRegularEventsProps {
    data: IAnnouncedPlayCardProps[];
}

export const RegularEvents: FC<IRegularEventsProps> = (props) => {
  const { data } = props;
  return (
    <section className={cx('section')}>
      {data.map((event) => (
        <AnnouncedPlayCard
          key={event.id}
          date={event.date}
          title={event.title}
          dramatists={event.dramatists}
          directors={event.directors}
          buttonLink={event.buttonLink}
          className={styles.event}
          projectText={event.projectText}
          isPerformance={event.isPerformance}
          imageUrl={event.imageUrl}
          description={event.description}
        />
      ))}
    </section>
  );
};
