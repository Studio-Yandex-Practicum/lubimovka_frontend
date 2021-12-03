import { FC } from 'react';

import { BasicPlayCard } from 'components/ui/basic-play-card';

import styles from './main-shortList.module.css';

interface PlaysData {
  title: string
  city: string
  year: number
  linkView: string
  linkDownload: string
  authors: AuthorData []
}
interface AuthorData {
  id: number
  name: string
}
interface IMainShortList {
  data: {
    plays: PlaysData[]
    title: string
  }
}

export const MainShortList: FC<IMainShortList>= ({ data }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{data.title}</h2>
      <div className={styles.plays}>
        {data.plays.map((item, idx) => (
          <BasicPlayCard play={item} key={idx}/>
        ))}
      </div>
    </section>
  );
};
