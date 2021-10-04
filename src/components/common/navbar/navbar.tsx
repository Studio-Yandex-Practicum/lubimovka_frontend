import { ReactNode } from 'react';
import cn from 'classnames/bind';

import { NavbarLogo } from './navbar-logo';
import { NavbarSection } from './navbar-section';
import { NavbarButton} from './navbar-button';

import styles from './navbar.module.css';
const cx = cn.bind(styles);

interface INavbarProps {
  children: ReactNode;
}

const Navbar = (props: INavbarProps): JSX.Element => {
  const { children } = props;

  return (
    <header className={cx('navbar')}>
      {children}
    </header>
  );
};

Navbar.Logo = NavbarLogo;
Navbar.Section = NavbarSection;
Navbar.Button = NavbarButton;

export { Navbar };
