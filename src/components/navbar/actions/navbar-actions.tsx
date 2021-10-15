import { FC } from 'react';
import classNames from 'classnames/bind';

import style from './navbar-actions.module.css';

const cx = classNames.bind(style);

export const NavbarActions: FC = (props) => {
  const {
    children,
  } = props;

  return (
    <div className={cx('actions')}>
      {children}
    </div>
  );
};
