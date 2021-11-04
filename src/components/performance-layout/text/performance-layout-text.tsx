import { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './performance-layout-text.module.css';

const cx = classNames.bind(styles);

export const PerformanceLayoutText: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('text')}>
      {children}
    </div>
  );
};
