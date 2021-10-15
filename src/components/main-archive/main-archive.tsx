import { FC } from 'react';

import styles from './main-archive.module.css';

export const MainArchive: FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Компонент MainArchive</h2>
      <iframe id="ytplayer" width="540" height="258" src="https://www.youtube.com/embed/iAJTBxq2WZs" frameBorder="0" allowFullScreen /> 
    </section>
  );
};
