import { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './performance-layout-video.module.css';

const cx = classNames.bind(styles);

export const PerformanceLayoutVideo: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('video')}>
      {children}
    </div>
  );
};
