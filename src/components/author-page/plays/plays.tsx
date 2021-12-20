import { FC } from 'react';
import cn from 'classnames';

import { BasicPlayCard } from 'components/ui/basic-play-card';

import styles from './plays.module.css';

interface PlaysData {
  id?: number,
  name: string,
  city: string,
  year: number,
  url_reading: string,
  url_download: string,
  authors: AuthorData[],
}

interface AuthorData {
  id: number,
  name: string,
}

interface IAuthorPlays {
    data: PlaysData[],
}

export const AuthorPlays: FC<IAuthorPlays> = ({ data }) => {
  return (
    <section className={cn(styles.playsContainer)}>
      <ul className={cn(styles.list)}>
        {data.map((item, idx) => (
          <li className={cn(styles.item)} key={idx}>
            <BasicPlayCard play={{
              title: item.name,
              city: item.city,
              year: item.year,
              linkView: item.url_reading,
              linkDownload: item.url_download,
              authors: item.authors
            }}/>
          </li>
        ))}
      </ul>
    </section>
  );
};
