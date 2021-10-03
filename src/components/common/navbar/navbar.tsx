import { FC, ReactNode } from 'react';
import cn from 'classnames/bind';

import { NavbarLogo } from './navbar-logo';
import { NavbarSection, INavbarSectionProps } from './navbar-section';
import { NavbarButton, INavbarButtonProps } from './navbar-button';

import styles from './navbar.module.css';
const cx = cn.bind(styles);

interface Navbar {
  children: ReactNode;
}

interface INavbarComposition {
  Logo: FC;
  Section: FC<INavbarSectionProps>;
  Button: FC<INavbarButtonProps>;
}

const Navbar: FC & INavbarComposition = (props) => {
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
