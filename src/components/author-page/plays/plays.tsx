import { FC } from 'react';
import cn from 'classnames';

import { BasicPlayCard } from 'components/ui/basic-play-card';
import { Url } from 'shared/types';

import styles from './plays.module.css';

interface PlaysData {
  id?: number;
  title: string
  city: string
  year: number
  linkView: Url
  linkDownload: Url
  authors: AuthorData[]
}
interface AuthorData {
  id: number
  name: string
}
interface IAuthorPlays {
  data: {
    plays: PlaysData[]
    title: string
  }
}

export const AuthorPlays: FC<IAuthorPlays> = ({ data }) => {
  return (
    <section className={cn(styles.plays)}>
      {data.plays.map((item, idx) => (
        <BasicPlayCard play={item} key={idx}/>
      ))}
    </section>
  );
};
