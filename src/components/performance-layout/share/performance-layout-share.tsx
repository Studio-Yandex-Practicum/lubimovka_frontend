import { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './performance-layout-share.module.css';

const cx = classNames.bind(styles);

export const PerformanceLayoutShare: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('share')}>
      {children}
    </div>
  );
};
