import { FC } from 'react';
import cn from 'classnames';

import { BasicPlayCard } from 'components/ui/basic-play-card';

import styles from './plays.module.css';

interface PlaysData {
  title: string,
  city: string,
  year: string,
  linkView: string,
  linkDownload: string,
  author: AuthorData,
}

interface AuthorData {
  id: number,
  name: string,
}

interface IAuthorPlays {
  data: {
    plays: PlaysData[],
    title: string,
  }
}

export const AuthorPlays: FC<IAuthorPlays> = ({ data }) => {
  return (
    <section className={cn(styles.playsContainer)}>
      <ul className={cn(styles.list)}>
        {data.plays.map((item) => (
          <li key={item.author.id} className={cn(styles.item)}>
            <BasicPlayCard play={item} author={item.author}/>
          </li>
        ))}
      </ul>
    </section>
  );
};
