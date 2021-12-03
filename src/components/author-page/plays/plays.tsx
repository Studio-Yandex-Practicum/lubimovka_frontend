import { FC } from 'react';
import cn from 'classnames';

import { BasicPlayCard } from 'components/ui/basic-play-card';

import styles from './plays.module.css';

interface PlaysData {
  id?: number,
  title: string,
  city: string,
  year: number,
  linkView: string,
  linkDownload: string,
  authors: AuthorData[],
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
        {data.plays.map((item, idx) => (
          <li className={cn(styles.item)} key={idx}>
            <BasicPlayCard play={item}/>
          </li>
        ))}
      </ul>
    </section>
  );
};
