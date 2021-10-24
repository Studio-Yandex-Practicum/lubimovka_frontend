import {FC} from 'react';

import {RegularEvent} from '../afishe-regular-event';

import styles from './afishe-regular-events.module.css';

export const RegularEvents: FC = () => {
  return (
    <section className={styles.section}>
      <RegularEvent/>
      <RegularEvent/>
      <RegularEvent/>
    </section>
  );
};
