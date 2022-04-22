import classNames from 'classnames/bind';

import type { FC } from 'react';

import styles from './homepage-layout-main.module.css';

const cx = classNames.bind(styles);

export const HomepageLayoutMain: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('root')}>
      {children}
    </div>
  );
};
