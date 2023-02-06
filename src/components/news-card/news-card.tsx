import classNames from 'classnames/bind';
import Link from 'next/link';

import type { LinkProps } from 'next/link';
import type { FC } from 'react';

import styles from './news-card.module.css';

interface NewsCardProps {
  view?: 'refular' | 'compact'
  title: string
  description: string
  date?: string
  href: LinkProps['href']
  className?: string
}

const cx = classNames.bind(styles);

export const NewsCard: FC<NewsCardProps> = (props) => {
  const {
    view = 'regular',
    title,
    description,
    date,
    href,
    className
  } = props;

  return (
    <div
      className={cx(
        view,
        className,
      )}
    >
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
      {date && (
        <time
          className={cx('date')}
          dateTime={date}
        >
          {date}
        </time>
      )}
    </div>
  );
};

export default NewsCard;
