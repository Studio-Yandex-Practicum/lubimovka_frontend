import classNames from 'classnames/bind';

import type { FC } from 'react';

import styles from './page-head-banner.module.css';

const cx = classNames.bind(styles);

export const PageHeadBanner: FC = (props) => {
  const {
    children,
  } = props;

  return (
    <div className={cx('root')}>
      {children}
    </div>
  );
};
