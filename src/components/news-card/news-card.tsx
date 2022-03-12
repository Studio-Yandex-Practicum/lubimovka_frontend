import { FC } from 'react';
import Link, { LinkProps } from 'next/link';
import classNames from 'classnames/bind';

import styles from './news-card.module.css';

interface NewsCardProps {
  title: string;
  description: string;
  date?: string;
  href: LinkProps['href']
  className?: string;
}

const cx = classNames.bind(styles);

export const NewsCard: FC<NewsCardProps> = (props) => {
  const {
    title,
    description,
    date,
    href,
    className
  } = props;

  return (
    <div className={cx('root', className)}>
      {date && (
        <time
          className={cx('date')}
          dateTime={date}
        >
          {date}
        </time>
      )}
      <h5 className={cx('title')}>
        <Link href={href}>
          <a className={cx('link')}>
            {title}
          </a>
        </Link>
      </h5>
      <p className={cx('description')}>
        {description}
      </p>
    </div>
  );
};

export default NewsCard;
