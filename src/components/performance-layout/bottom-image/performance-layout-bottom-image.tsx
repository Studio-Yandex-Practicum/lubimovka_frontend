import { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './performance-layout-bottom-image.module.css';

const cx = classNames.bind(styles);

export const PerformanceLayoutBottomImage: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('image')}>
      {children}
    </div>
  );
};
