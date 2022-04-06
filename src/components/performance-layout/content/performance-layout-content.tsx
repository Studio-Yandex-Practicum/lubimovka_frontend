import classNames from 'classnames/bind';

import type { FC } from 'react';

import styles from './performance-layout-content.module.css';

const cx = classNames.bind(styles);

export const PerformanceLayoutContent: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('root')}>
      {children}
    </div>
  );
};
