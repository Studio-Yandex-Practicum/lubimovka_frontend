import classNames from 'classnames/bind';

import type { FC } from 'react';

import styles from './performance-layout-reviews.module.css';

const cx = classNames.bind(styles);

export const PerformanceLayoutReviews: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('root')}>
      {children}
    </div>
  );
};
