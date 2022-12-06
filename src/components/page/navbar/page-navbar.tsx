import { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './page-navbar.module.css';

const cx = classNames.bind(styles);

export const PageNavbar: FC = (props) => {
  const {
    children,
  } = props;

  return (
    <header className={cx('root')}>
      {children}
    </header>
  );
};
