import { FC } from 'react';

import { BasicPlayCard } from 'components/ui/basic-play-card';
import { MainShortList } from 'api-typings';

// import styles from './main-shortList.module.css';

import { main } from 'mocks/data/main';

export const MainShortList: FC<MainShortList>= ({ data }) => {
  const {
    title
  } = data;
  const items = main;
  console.log(items);

  return (
    1
    // <section className={styles.section}>
    //   <h2 className={styles.title}>{data.title}</h2>
    //   <div className={styles.plays}>
    //     {data.plays.map((item, idx) => (
    //       <BasicPlayCard play={item} key={idx}/>
    //     ))}
    //   </div>
    // </section>
  );
};
