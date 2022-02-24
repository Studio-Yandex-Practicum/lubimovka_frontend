import { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './blog-layout-main.module.css';

const cx = classNames.bind(styles);

export const BlogLayoutMain: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('root')}>
      {children}
    </div>
  );
};
