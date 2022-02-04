import { FC, useMemo } from 'react';
import cn from 'classnames/bind';

import { EventCard } from 'components/event-card';

import styles from './afisha-festival-day.module.css';

const cx = cn.bind(styles);
const getDate = (date: string) => new Date(date);
const getEventDate = (date: string) => getDate(date)
  .toLocaleDateString('ru-RU', { month: 'long', day: 'numeric' }).split(' ');
const getMonth = (date: string) => getEventDate(date)[1];
const getDay = (date: string) => Number(getEventDate(date)[0]);

const getStatus = (event: string): boolean => {
  const today = new Date();
  return getDate(event).getMonth() === today.getMonth()
    && getDay(event) === today.getDate()
    || getDay(event) - today.getDate() === 1
    && today.getHours() >= 12;
};

const getInfo = (date: string) => {
  return getStatus(date) ? 'открыта регистрация' : `Регистрация откроется ${getDay(date) - 1} ${getMonth(date)} в 12:00`;
};

export interface IFestivalDayProps {
  id: number,
  date: string,
  plays: {
    id: number,
    time: string,
    location: string,
    title: string,
    description: string,
    image?: string,
    director?: string,
    playwright?: string,
    registrationUrl?: string
  }[]
}

export const FestivalDay: FC<IFestivalDayProps> = (props) => {
  const { date, plays } = props;

  const month = useMemo(() => getMonth(date), [date]);
  const day = useMemo(() => getDay(date), [date]);
  const info = useMemo(() => getInfo(date), [date]);
  const isOpened = useMemo(() => getStatus(date), [date]);

  const registration = useMemo(() => cx({
    opened: isOpened,
    closed: !isOpened,
  }), [isOpened]);

  return (
    <section className={cx('section')}>
      <div className={cx('wrapper')}>
        <p className={cx('date')}>
          <span className={cx('span')}>
            {day}
          </span>&nbsp;{month}
        </p>
        <p className={registration}>
          {info}
        </p>
      </div>
      {plays.map(play =>
        <EventCard
          key={play.id}
          className={cx('event')}
          time={play.time}
          location={play.location}
          title={play.title}
          image={play.image}
          description={play.description}
          director={play.director}
          playwright={play.playwright}
          registrationUrl={`${isOpened ? play.registrationUrl : ''}`}
        />
      )}
    </section>
  );
};
