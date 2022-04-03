import { FC } from 'react';
import cn from 'classnames/bind';

import { BasicPlayCard } from 'components/ui/basic-play-card';
import { Play } from 'api-typings';

import styles from './plays.module.css';

const cx = cn.bind(styles);

interface IAuthorPlays {
  plays: Play[],
}

export const AuthorPlays: FC<IAuthorPlays> = ({ plays }) => {
  return (
    <div className={cx('playsContainer')}>
      <ul className={cx('list')}>
        {plays.map((item, index) => (
          <li className={cx('item')} key={index}>
            <BasicPlayCard play={{
              title: item.name,
              city: item.city,
              year: item.year,
              readingUrl: item.url_reading,
              downloadUrl: item.url_download,
              authors: item.authors
            }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
