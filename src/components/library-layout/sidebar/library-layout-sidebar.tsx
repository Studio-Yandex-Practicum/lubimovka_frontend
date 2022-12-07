import classNames from 'classnames/bind';

import type { FC } from 'react';

import styles from './library-layout-sidebar.module.css';

const cx = classNames.bind(styles);

export const LibraryLayoutSidebar: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('root')}>
      {children}
    </div>
  );
};
