import classNames from 'classnames/bind';

import styles from './performance-layout-reviews.module.css';

import type { FC } from 'react';

const cx = classNames.bind(styles);

export const PerformanceLayoutReviews: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('root')}>
      {children}
    </div>
  );
};
