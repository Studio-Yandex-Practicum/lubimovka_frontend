import React, { FC } from 'react';
import Link from 'next/link';
import cn from 'classnames/bind';

import styles from './main-news.module.css';

const cx = cn.bind(styles);

export const MainNews: FC = () => {
  return (
    <Link href='#'>
      <a className={cx('link')}>
        <article className={cx('article')}>
          <h3 className={cx('title')}>
            Дизайн Любимовки-2021
          </h3>
          <p className={cx('desc')}>
            Присылайте ваши варианты текстовых описаний.
          </p>
          <p className={cx('date')}>
            05 октября 2020
          </p>
        </article>
      </a>
    </Link>
  );
};
