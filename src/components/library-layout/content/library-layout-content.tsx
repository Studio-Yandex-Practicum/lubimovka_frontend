import classNames from 'classnames/bind';

import type { FC } from 'react';

import styles from './library-layout-content.module.css';

const cx = classNames.bind(styles);

export const LibraryLayoutContent: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('root')}>
      {children}
    </div>
  );
};
