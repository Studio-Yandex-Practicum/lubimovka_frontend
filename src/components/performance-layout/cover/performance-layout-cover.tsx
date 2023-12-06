import classNames from 'classnames/bind';

import type { FC } from 'react';

import styles from './performance-layout-cover.module.css';

const cx = classNames.bind(styles);

export const PerformanceLayoutCover: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('root')}>
      <div className={cx('inner')}>
        {children}
      </div>
    </div>
  );
};
