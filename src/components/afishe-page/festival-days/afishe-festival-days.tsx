import {FC} from 'react';

import {FestivalDay, IFestivalDayProps} from 'components/afishe-page/festival-day';

import styles from './afishe-festival-days.module.css';

interface IFestivalDaysProps {
  data: IFestivalDayProps[];
}

export const FestivalDays: FC<IFestivalDaysProps> = (props) => {
  const {data} = props;
  return (
    <section className={styles.section}>
      {data.map(day => (<FestivalDay key={day.id} {...day}/>))}
    </section>
  );
};
