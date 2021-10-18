import {FC} from 'react';

import {FestivalDay} from '../afishe-festival-day';

import styles from './afishe-festival-days.module.css';

export const FestivalDays: FC = () => {
  return (
    <section className={styles.section}>
      <FestivalDay/>
      <FestivalDay/>
      <FestivalDay/>
    </section>
  );
};
