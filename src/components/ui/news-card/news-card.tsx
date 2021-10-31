import React from 'react';
import Link from 'next/link';

import cn from 'classnames/bind';

import styles from './news-card.module.css';

const cx = cn.bind(styles);

export interface INewsCardProps {
  newsId: number;
  title: string;
  description: string;
  date: string;
}

export const NewsCard: React.FC<INewsCardProps> = (props) => {
  const {
    newsId,
    title,
    description,
    date,
  } = props;

  return (
    <Link href={`/news/${encodeURIComponent(newsId)}`}>
      <a className={cx('wrapper')}>
        <div className={cx('container')}>
          <h5 className={cx('title')}>{title}</h5>
          <p className={cx('description')}>{description}</p>
        </div>
        <p className={cx('date')}>{new Date(date).toLocaleDateString('ru-Ru', {month: 'long', day:'numeric', year:'numeric'}).replace(' г.', '')}</p>
      </a>
    </Link>
  );
};

export default NewsCard;
