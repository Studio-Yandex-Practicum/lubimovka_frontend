import { FC, useMemo } from 'react';
import classNames from 'classnames/bind';

import { EventCard } from 'components/event-card';

import styles from './afishe-festival-day.module.css';

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

const cx = classNames.bind(styles);

const getDate = (date: string) => new Date(date);
const getEventDate = (date: string) => getDate(date).toLocaleDateString('ru-RU', { month: 'long', day: 'numeric' }).split(' ');
const getMonth = (date: string) => getEventDate(date)[1];
const getDay = (date: string) => Number(getEventDate(date)[0]);

const getStatus = (event: string): boolean => {
  const today = new Date();
  return getDate(event).getMonth() === today.getMonth() &&
    getDay(event) === today.getDate() || getDay(event) - today.getDate() === 1 &&
    today.getHours() >= 12;
};

const getInfo = (date: string) => getStatus(date) ? 'открыта регистрация' : `Регистрация откроется ${getDay(date) - 1} ${getMonth(date)} в 12:00`;

export const FestivalDay: FC<IFestivalDayProps> = (props) => {
  const { date, plays } = props;

  const month = useMemo(() => getMonth(date), [date]);
  const day = useMemo(() => getDay(date), [date]);

  const info = useMemo(() => getInfo(date), [date]);

  const isOpened = useMemo(() => getStatus(date), [date]);

  const registration = useMemo(() => cx({
    opened: isOpened,
    closed: !isOpened
  }), [isOpened]);

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <p className={styles.date}><span className={styles.span}>{day}</span>&nbsp;{month}</p>
        <p className={registration}>{info}</p>
      </div>
      {plays.map(play => (
        <EventCard className={styles.event} key={play.id} time={play.time} location={play.location} title={play.title} image={play.image}
          description={play.description} director={play.director} playwright={play.playwright}
          registrationUrl={`${isOpened ? play.registrationUrl : ''}`}/>)
      )}
    </section>
  );
};
