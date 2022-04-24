import classNames from 'classnames/bind';

import type { FC } from 'react';

import styles from './homepage-layout-feed.module.css';

const cx = classNames.bind(styles);

export const HomepageLayoutFeed: FC = (props) => {
  const { children } = props;

  return (
    <aside className={cx('root')}>
      <div className={cx('inner')}>
        {children}
      </div>
    </aside>
  );
};
