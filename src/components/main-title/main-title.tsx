import { FC } from 'react';

import styles from './main-title.module.css';

interface IMainTitle {
  title?: string,
}

export const MainTitle: FC<IMainTitle> = ({title}) => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
    </section>
  );
};
