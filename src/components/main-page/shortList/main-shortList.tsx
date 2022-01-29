import { FC } from 'react';
import classNames from 'classnames/bind';

import { Play } from 'api-typings';
import { BasicPlayCard } from 'components/ui/basic-play-card';

import styles from './main-shortList.module.css';

const cx = classNames.bind(styles);

interface IPlay extends Play {
    url_download: string;
    url_reading: string;
}

interface IMainShortList {
    title: string;
    items: Array<IPlay>;
}

export const MainShortList: FC<IMainShortList>= ({ title, items }) => (
  <section className={cx('section')}>
    <h2 className={cx('title')}>
      {title}
    </h2>
    <div className={cx('plays')}>
      {items.map(item => (
        <BasicPlayCard
          play={{
            id: item.id,
            title: item.name,
            city: item.city,
            year: item.year,
            linkView: '#',
            linkDownload: '#',
            authors: item.authors,
          }}
          key={item.id}
        />
      ))}
    </div>
  </section>
);
