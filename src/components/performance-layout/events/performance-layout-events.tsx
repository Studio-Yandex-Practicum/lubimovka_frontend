import classNames from 'classnames/bind';

import type { FC } from 'react';

import styles from './performance-layout-events.module.css';

const cx = classNames.bind(styles);

export const PerformanceLayoutEvents: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('root')}>
      {children}
    </div>
  );
};
