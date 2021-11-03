import { FC } from 'react';
import { BasicPlayCard } from 'components/ui/basic-play-card';

import styles from './main-shortList.module.css';
interface PlaysData {
  title: string
  city: string
  year: string
  linkView: string,
  linkDownload: string
  author: AuthorData
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
        {data.plays.map((item) => (
          <BasicPlayCard play={item} author={item.author} key={item.author.id}/>
        ))}
      </div>
    </section>
  );
};
