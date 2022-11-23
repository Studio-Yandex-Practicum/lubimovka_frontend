import classNames from 'classnames/bind';

import type { FC } from 'react';

import styles from './performance-headline.module.css';

interface PerformanceHeadlineProps {
  title: string
  description?: string
  text?: string
  cover: Url
  className?: string
}

const cx = classNames.bind(styles);

export const PerformanceHeadline: FC<PerformanceHeadlineProps> = (props) => {
  const {
    title,
    description,
    text,
    className,
  } = props;

  return (
    <div
      className={cx(className)}
    >
      <div>
        <h1 className={cx('title')}>
          {title}
        </h1>
        {description && (
          <p className={cx('description')}>
            {description}
          </p>
        )}
      </div>
      {text && (
        <p className={cx('text')}>
          {text}
        </p>
      )}
    </div>
  );
};
