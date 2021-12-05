import { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './page-header.module.css';

const cx = classNames.bind(styles);

export const PageHeader: FC = (props) => {
  const { children } = props;

  return (
    <header className={cx('header')}>
      {children}
    </header>
  );
};
