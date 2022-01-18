import React, { FC } from 'react';
import Link from 'next/link';
import cn from 'classnames/bind';
import { NewsItemList } from 'api-typings';

import styles from './main-news.module.css';

const cx = cn.bind(styles);

export const MainNews: FC<NewsItemList> = ({ title, description, pub_date, id }) => (
  <Link href={`/news/${id}`}>
    <a className={cx('link')}>
      <article className={cx('article')}>
        <h3 className={cx('title')}>
          {title}
        </h3>
        <p className={cx('desc')}>
          {description}
        </p>
        <time dateTime={pub_date} className={cx('date')}>
          {pub_date ? `${new Date(pub_date).toLocaleDateString('ru-Ru', { timeZone: 'Europe/Moscow', month: 'long', day:'numeric' })}
              ${new Date(pub_date).toLocaleDateString('ru-Ru', { timeZone: 'Europe/Moscow', year: 'numeric' })}`
            : 'Дата'}
        </time>
      </article>
    </a>
  </Link>
);
