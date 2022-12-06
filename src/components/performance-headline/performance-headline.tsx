import classNames from 'classnames/bind';
import Image from 'next/image';

import type { FC, ReactNode } from 'react';
import type { Url } from 'shared/types';

import styles from './performance-headline.module.css';

interface PerformanceHeadlineProps {
  title: string
  description?: string
  text?: string
  cover: Url
  actions: ReactNode | ReactNode[]
  className?: string
}

const cx = classNames.bind(styles);

export const PerformanceHeadline: FC<PerformanceHeadlineProps> = (props) => {
  const {
    title,
    description,
    cover,
    text,
    actions,
    className,
  } = props;

  return (
    <div
      className={cx(
        'root',
        className
      )}
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
        <div className={cx('actions')}>
          {actions}
        </div>
      </div>
      <div>
        <div className={cx('image')}>
          <Image
            src={cover}
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        {text && (
          <p className={cx('text')}>
            {text}
          </p>
        )}
      </div>
    </div>
  );
};
