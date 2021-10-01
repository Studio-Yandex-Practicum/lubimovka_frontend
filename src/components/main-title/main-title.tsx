import { FC } from 'react';

import styles from './main-title.module.css';

interface ImainTitle {
  title: string;
}

const MainTitle: FC<ImainTitle> = ({title}) => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
    </section>
  );
};

export default MainTitle;
