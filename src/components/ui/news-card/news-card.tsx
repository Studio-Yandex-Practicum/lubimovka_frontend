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
  isMainPage: boolean;
}

export const NewsCard: React.FC<INewsCardProps> = (props) => {
  const {
    newsId,
    title,
    description,
    date,
    isMainPage
  } = props;

  return (
    <Link href={`/news/${encodeURIComponent(newsId)}`}>
      <a className={cx('wrapper', {mainPageWrapper: isMainPage})}>
        <div className={cx('container')}>
          <h5 className={cx('title', {mainPageTitle: isMainPage})}>{title}</h5>
          <p className={cx('description', {mainPageDescription: isMainPage})}>{description}</p>
        </div>
        <p className={cx('date', {mainPageDate: isMainPage})}>{new Date(date).toLocaleDateString('ru-Ru', {month: 'long', day:'numeric', year:'numeric'}).replace(' г.', '')}</p>
      </a>
    </Link>
  );
};

export default NewsCard;
