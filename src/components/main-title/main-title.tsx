import { FC } from 'react';

import styles from './main-title.module.css';
import {IMainPageComponent} from '../../pages/main';

export const MainTitle: FC<IMainPageComponent> = ({data}) => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{data.title}</h1>
    </section>
  );
};
