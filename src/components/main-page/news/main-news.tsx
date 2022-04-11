import React, { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames/bind';

import { NewsItemList } from 'api-typings';
import { format } from 'shared/helpers/format-date';

import styles from './main-news.module.css';

const cx = classNames.bind(styles);

interface INewsItemList extends NewsItemList {
  id: number;
  title: string;
  description: string;
  pub_date: string;
}

export const MainNews: FC<INewsItemList> = ({ title, description, pub_date, id }) => (
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
          {format('d MMMM yyy', new Date())}
        </time>
      </article>
    </a>
  </Link>
);
