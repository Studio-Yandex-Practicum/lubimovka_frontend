import { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './performance-layout-gallery.module.css';

const cx = classNames.bind(styles);

export const PerformanceLayoutGallery: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('gallery')}>
      {children}
    </div>
  );
};
