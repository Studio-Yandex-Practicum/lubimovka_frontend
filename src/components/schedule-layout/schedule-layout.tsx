import classNames from 'classnames/bind';

import type { FC } from 'react';

import styles from './schedule-layout.module.css';

const cx = classNames.bind(styles);

export const ScheduleLayout: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('root')}>
      {children}
    </div>
  );
};
