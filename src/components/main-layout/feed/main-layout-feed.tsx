import classNames from 'classnames/bind';

import type { FC } from 'react';

import styles from './main-layout-feed.module.css';

const cx = classNames.bind(styles);

export const MainLayoutFeed: FC = (props) => {
  const { children } = props;

  return (
    <aside className={cx('root')}>
      <div className={cx('inner')}>
        {children}
      </div>
    </aside>
  );
};
