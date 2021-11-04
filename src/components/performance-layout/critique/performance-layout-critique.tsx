import { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './performance-layout-critique.module.css';

const cx = classNames.bind(styles);

export const PerformanceLayoutCritique: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('critique')}>
      {children}
    </div>
  );
};
