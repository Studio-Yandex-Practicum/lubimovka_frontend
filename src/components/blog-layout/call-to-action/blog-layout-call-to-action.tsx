import { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './blog-layout-call-to-action.module.css';

const cx = classNames.bind(styles);

export const BlogLayoutCallToAction: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('root')}>
      {children}
    </div>
  );
};
