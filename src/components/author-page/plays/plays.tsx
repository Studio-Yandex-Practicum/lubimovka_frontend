import { FC } from 'react';
import { BasicPlayCard } from 'components/ui/basic-play-card';

import cn from 'classnames';
import styles from './plays.module.css';
import {Url} from '../../../shared/types';

interface PlaysData {
  id?: number;
  name: string;
  city: string;
  year: number;
  url_reading: Url;
  url_download: Url;
  authors: Array <{
    id: number;
    name: string;
  }>;
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
      { data.plays.map((item, idx) => (
        <BasicPlayCard play={item} key={idx} />
      )) }
    </section>
  );
};
