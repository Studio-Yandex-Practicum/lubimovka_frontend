import { FC } from 'react';
import classNames from 'classnames/bind';

import { MainShortList as IMainShortList, Play } from 'api-typings';
import { BasicPlayCard } from 'components/ui/basic-play-card';

import styles from './main-shortList.module.css';

const cx = classNames.bind(styles);

export const MainShortList: FC<IMainShortList>= ({ title, items }) => (
  <section className={cx('section')}>
    <h2 className={cx('title')}>
      {title}
    </h2>
    <div className={cx('plays')}>
      {items.map((item: Play) => (
        <BasicPlayCard
          play={{
            id: item.id,
            title: item.name,
            city: item.city,
            year: item.year,
            linkView: item.url_download,
            linkDownload: '#',
            authors: item.authors,
          }}
          key={item.id}
        />
      ))}
    </div>
  </section>
);
