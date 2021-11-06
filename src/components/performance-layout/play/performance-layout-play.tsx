import { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './performance-layout-play.module.css';

const cx = classNames.bind(styles);

export const PerformanceLayoutPlay: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('play')}>
      {children}
    </div>
  );
};
