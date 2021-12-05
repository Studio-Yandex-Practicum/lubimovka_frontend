import { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './navbar-logotype.module.css';

const cx = classNames.bind(styles);

export const NavbarLogotype: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('logotype')}>
      {children}
    </div>
  );
};
