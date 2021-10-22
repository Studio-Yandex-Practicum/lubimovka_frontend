import { FC } from 'react';
import {MainEvent as Event} from './event/main-event';

import styles from './main-events.module.css';

export const MainEvents: FC = () => {
  return (
    <section className={styles.section}>
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
      <Event />
    </section>
  );
};
