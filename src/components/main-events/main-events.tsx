import { FC } from 'react';
import MainEvent from '../main-event/main-event';

import styles from './main-events.module.css';

const MainEvents: FC = () => {
  return (
    <section className={styles.section}>
      <MainEvent />
      <MainEvent />
      <MainEvent />
      <MainEvent />
      <MainEvent />
      <MainEvent />
    </section>
  );
};

export default MainEvents;
