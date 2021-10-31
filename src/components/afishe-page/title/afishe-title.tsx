import {FC} from 'react';

import styles from './afishe-title.module.css';
import {Icon} from 'components/ui/icon';

interface IAfisheTitle {
  title: string,
  discussion: string,
  entrance: string,
  registration: string,
}

export const AfisheTitle: FC<IAfisheTitle> = ({title, discussion, entrance, registration}) => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.discussionInfo}>
        <Icon glyph='asterisk'/>
        <p className={styles.discussion}>{discussion}</p>
      </div>
      <div className={styles.entranceInfo}>
        <p className={styles.info}>{entrance}</p>
        <p className={styles.info}>{registration}</p>
      </div>
    </section>
  );
};
