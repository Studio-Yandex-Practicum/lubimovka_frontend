import {FC} from 'react';

import {FestivalEvent} from '../afishe-festival-event';

import styles from './afishe-festival-events.module.css';

export const FestivalEvents: FC = () => {
  return (
    <section className={styles.section}>
      <FestivalEvent/>
      <FestivalEvent/>
      <FestivalEvent/>
    </section>
  );
};
