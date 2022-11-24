import classNames from 'classnames/bind';

import type { FC } from 'react';

import styles from './main-layout-content.module.css';

const cx = classNames.bind(styles);

export const MainLayoutContent: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('root')}>
      {children}
    </div>
  );
};
