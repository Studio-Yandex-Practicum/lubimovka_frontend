import { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './performance-layout-aside.module.css';

const cx = classNames.bind(styles);

export const PerformanceLayoutAside: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('aside')}>
      {children}
    </div>
  );
};
