import classNames from 'classnames/bind';

import type { FC } from 'react';

import styles from './blog-layout-description.module.css';

const cx = classNames.bind(styles);

export const BlogLayoutDescription: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('root')}>
      {children}
    </div>
  );
};
