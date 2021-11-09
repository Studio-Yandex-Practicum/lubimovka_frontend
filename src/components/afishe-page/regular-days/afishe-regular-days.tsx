import {FC} from 'react';

import {RegularDay} from '../regular-day';

import styles from './afishe-regular-days.module.css';

export const RegularDays: FC = () => {
  return (
    <section className={styles.section}>
      <RegularDay/>
      <RegularDay/>
      <RegularDay/>
    </section>
  );
};
