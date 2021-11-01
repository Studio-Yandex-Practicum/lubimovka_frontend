import { FC } from 'react';
import { BasicPlayCard } from 'components/ui/basic-play-card';

import cn from 'classnames';
import styles from './plays.module.css';

interface PlaysData {
  title: string;
  city: string;
  year: string;
  linkView: string;
  linkDownload: string;
  author: AuthorData;
}

interface AuthorData {
  id: number;
  name: string;
}

interface IAuthorPlays {
  data: {
    plays: PlaysData[];
    title: string;
  }
}

export const AuthorPlays: FC<IAuthorPlays> = ({ data }) => {
  return (
    <section className={ cn(styles.plays) }>
      {data.plays.map((item) => (
        <BasicPlayCard play={item} author={item.author} key={item.author.id}/>
      ))}
    </section>
  );
};
