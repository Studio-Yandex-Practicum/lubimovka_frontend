import {FC, useMemo} from 'react';
import classNames from 'classnames/bind';

import {EventCard} from 'components/event-card';

import styles from './afishe-festival-day.module.css';

export interface IFestivalDayProps {
  id: number,
  date: number,
  month: string,
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

const isRegOpened = (day: number): boolean => {
  const date = new Date();
  return day === date.getDate() || day - date.getDate() === 1 && date.getHours() >= 12;
};

const getInfo = (day: {
  date: number,
  month: string,
}) => isRegOpened(day.date) ? 'открыта регистрация' : `Регистрация откроется ${day.date} ${day.month} в 12:00`;

export const FestivalDay: FC<IFestivalDayProps> = (props) => {
  const {date, month, plays} = props;

  const info = useMemo(() => getInfo(props), [date, month]);

  const isOpened = useMemo(() => isRegOpened(date), [date]);

  const registration = useMemo(() => cx({
    opened: isOpened,
    closed: !isOpened
  }), []);

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <p className={styles.date}><span className={styles.span}>{date}</span>&nbsp;{month}</p>
        <p className={registration}>{info}</p>
      </div>
      {plays.map(play => (
        <EventCard key={play.id} time={play.time} location={play.location} title={play.title} image={play.image}
          description={play.description} director={play.director} playwright={play.playwright}
          registrationUrl={`${isOpened ? play.registrationUrl : ''}`}/>))}
    </section>
  );
};
