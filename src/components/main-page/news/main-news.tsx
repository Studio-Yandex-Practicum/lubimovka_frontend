import React, { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames/bind';

import { NewsItemList } from 'api-typings';
import { formatDate } from 'shared/helpers/formatDateServerData';

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
          {formatDate(pub_date)} {new Date(pub_date).toLocaleDateString('ru-Ru', { timeZone: 'Europe/Moscow', year: 'numeric' })}
        </time>
      </article>
    </a>
  </Link>
);
