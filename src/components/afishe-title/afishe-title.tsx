import {FC} from 'react';

import styles from './afishe-title.module.css';

interface IAfisheTitle {
  title: string,
}

export const AfisheTitle: FC<IAfisheTitle> = ({title}) => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
    </section>
  );
};
