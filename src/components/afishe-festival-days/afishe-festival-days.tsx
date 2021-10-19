import {FC} from 'react';

import {FestivalDay} from '../afishe-festival-day';

import styles from './afishe-festival-days.module.css';

export interface IFestivalDaysProps {
  data: [
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
  ]
}

export const FestivalDays: FC<IFestivalDaysProps> = (props) => {
  const {data} = props;
  return (
    <section className={styles.section}>
      {data.map(day => (<FestivalDay key={day.id} day={day}/>))}
    </section>
  );
};
