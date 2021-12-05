import { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './performance-layout-headline.module.css';

const cx = classNames.bind(styles);

export const PerformanceLayoutHeadline: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('headline')}>
      {children}
    </div>
  );
};
