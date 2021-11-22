import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import { NavbarSection } from './section';
import { NavbarLogotype } from './logotype';
import { NavbarActions } from './actions';

import styles from './navbar.module.css';

interface INavbarProps {
  children: ReactNode,
}

const cx = classNames.bind(styles);

export const Navbar = (props: INavbarProps): JSX.Element => {
  const { children } = props;

  return (
    <div className={cx('navbar')}>
      {children}
    </div>
  );
};

Navbar.Section = NavbarSection;
Navbar.Logotype = NavbarLogotype;
Navbar.Actions = NavbarActions;
