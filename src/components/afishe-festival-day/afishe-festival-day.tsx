import {FC} from 'react';

import styles from './afishe-festival-day.module.css';
import {EventCard} from '../event-card';

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

export const FestivalDay: FC<IFestivalDayProps> = (props) => {
  const {day} = props;
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <p className={styles.date}><span className={styles.span}>{day.date}</span>&nbsp;{day.month}</p>
        <p className={styles.registration}>открыта регистрация</p>
      </div>
      {day.plays.map(play => (
        <EventCard key={play.id} time={play.time} location={play.location} title={play.title} image={play.image}
          description={play.description} director={play.director} playwright={play.playwright}
          registrationUrl={play.registrationUrl}/>))}
    </section>
  );
};
