// @ts-nocheck
import { FC } from 'react';
import cn from 'classnames/bind';

import { BasicPlayCard } from 'components/ui/basic-play-card';

import styles from './plays.module.css';

const cx = cn.bind(styles);

interface Play {
  id?: number,
  name: string,
  city: string,
  year: number,
  url_download?: string | null,
  url_reading?: string | null,
  authors: AuthorForPlay[],
}

interface AuthorForPlay {
  id: number,
  name: string,
}

interface IAuthorPlays {
    data: Play[],
}

export const AuthorPlays: FC<IAuthorPlays> = ({ data }) => {
  return (
    <section className={cx('playsContainer')}>
      <ul className={cx('list')}>
        {data.map((item, idx) => (
          <li className={cx('item')} key={idx}>
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
