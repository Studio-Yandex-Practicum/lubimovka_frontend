import classNames from 'classnames/bind';

import type { FC } from 'react';

import styles from './blog-layout-title.module.css';

const cx = classNames.bind(styles);

export const BlogLayoutTitle: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('root')}>
      {children}
    </div>
  );
};
