import {FC, useMemo} from 'react';
import classNames from 'classnames/bind';

import {EventCard} from 'components/event-card';

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

const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

const dateIndex = (date: string, index: number) => Number(date.split('-')[index]);

const getMonth = (date: string) => months[dateIndex(date, 1) - 1];
const getDay = (date: string) => dateIndex(date, 2);

const getStatus = (day: string): boolean => {
  const date = new Date();
  return dateIndex(day, 2) === date.getDate() || dateIndex(day, 2) - date.getDate() === 1 && date.getHours() >= 12;
};

const getInfo = (date: string) => getStatus(date) ? 'открыта регистрация' : `Регистрация откроется ${getDay(date) - 1} ${getMonth(date)} в 12:00`;

export const FestivalDay: FC<IFestivalDayProps> = (props) => {
  const {date, plays} = props;

  const month = useMemo(() => getMonth(date), [date]);
  const day = useMemo(() => getDay(date), [date]);

  const info = useMemo(() => getInfo(date), [date]);

  const isOpened = useMemo(() => getStatus(date), [date]);

  const registration = useMemo(() => cx({
    opened: isOpened,
    closed: !isOpened
  }), []);

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <p className={styles.date}><span className={styles.span}>{day}</span>&nbsp;{month}</p>
        <p className={registration}>{info}</p>
      </div>
      {plays.map(play => (
        <EventCard key={play.id} time={play.time} location={play.location} title={play.title} image={play.image}
          description={play.description} director={play.director} playwright={play.playwright}
          registrationUrl={`${isOpened ? play.registrationUrl : ''}`}/>))}
    </section>
  );
};
