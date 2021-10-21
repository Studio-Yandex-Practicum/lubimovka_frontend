import {FC, useEffect, useState} from 'react';
import classNames from 'classnames/bind';

import {EventCard} from '../event-card';

import styles from './afishe-festival-day.module.css';

export interface IFestivalDayProps {
  day: {
    id: number,
    date: number,
    month: string,
    plays: [
      {
        id: number,
        time: string,
        location: string,
        title: string,
        image?: string,
        description: string,
        director?: string,
        playwright?: string,
        registrationUrl?: string
      }
    ]
  }
}

const cx = classNames.bind(styles);

export const FestivalDay: FC<IFestivalDayProps> = (props) => {
  const {day} = props;

  const [registerInfo, setRegisterInfo] = useState(`Регистрация откроется ${day.date} ${day.month} в 12:00`);

  const checkTime = (day: number) => {
    const date = new Date();
    return day === date.getDate() || day - date.getDate() === 1 && date.getHours() >= 12;
  };

  const isRegistrationOpened = checkTime(day.date);

  useEffect(() => {
    if (isRegistrationOpened) {
      setRegisterInfo('открыта регистрация');
    }
  }, []);

  const registration = cx({
    opened: isRegistrationOpened,
    closed: !isRegistrationOpened
  });

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <p className={styles.date}><span className={styles.span}>{day.date}</span>&nbsp;{day.month}</p>
        <p className={registration}>{registerInfo}</p>
      </div>
      {day.plays.map(play => (
        <EventCard key={play.id} time={play.time} location={play.location} title={play.title} image={play.image}
          description={play.description} director={play.director} playwright={play.playwright}
          registrationUrl={`${isRegistrationOpened ? play.registrationUrl : ''}`}/>))}
    </section>
  );
};
