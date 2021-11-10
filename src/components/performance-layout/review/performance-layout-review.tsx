import { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './performance-layout-review.module.css';

const cx = classNames.bind(styles);

export const PerformanceLayoutReview: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('review')}>
      {children}
    </div>
  );
};
