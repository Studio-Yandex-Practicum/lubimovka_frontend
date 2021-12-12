import { FC } from 'react';

import { Icon } from 'components/ui/icon';

import styles from './afishe-title.module.css';

interface IAfisheTitle {
    festival: boolean
    title: string,
    discussion: string,
    entrance: string,
    registration: string,
}

export const AfisheTitle: FC<IAfisheTitle> = ({ festival, title, discussion, entrance, registration }) => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
      {festival && (<div className={styles.discussionInfo}>
        <Icon glyph='asterisk'/>
        <p className={styles.discussion}>{discussion}</p>
      </div>)}
      <div className={styles.entranceInfo}>
        <p className={styles.info}>{entrance}</p>
        {festival && (<p className={styles.info}>{registration}</p>)}
      </div>
    </section>
  );
};
