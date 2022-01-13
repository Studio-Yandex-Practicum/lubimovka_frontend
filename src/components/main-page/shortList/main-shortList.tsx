import { FC } from 'react';
import cn from 'classnames/bind';

import { MainShortList as IMainShortList } from 'api-typings';
import { main } from 'mocks/data/main';
import { BasicPlayCard } from 'components/ui/basic-play-card';

import styles from './main-shortList.module.css';

const cx = cn.bind(styles);

export const MainShortList: FC<IMainShortList>= ({ title, items }) => {
  const data = items.length ? items : main.short_list?.items;

  return (
    <section className={cx('section')}>
      <h2 className={cx('title')}>
        {title}
      </h2>
      <div className={cx('plays')}>
        {data && data.map(item => (
          <BasicPlayCard
            play={{
              id: item.id,
              title: item.name,
              city: item.city,
              year: item.year,
              linkView: item.url_reading,
              linkDownload: item.url_download,
              authors: item.authors,
            }}
            key={item.id}
          />
        ))}
      </div>
    </section>
  );
};
