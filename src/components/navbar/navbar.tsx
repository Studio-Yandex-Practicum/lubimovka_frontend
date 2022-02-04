import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import { NavbarSection } from './section';
import { NavbarLogotype } from './logotype';
import { NavbarActions } from './actions';

import styles from './navbar.module.css';

export interface INavbarProps {
  view?: 'normal' | 'expanded',
  colors?: 'default' | 'brand',
  children?: ReactNode,
}

const cx = classNames.bind(styles);

export const Navbar = (props: INavbarProps) => {
  const {
    view = 'normal',
    colors = 'default',
    children,
  } = props;

  return (
    <div className={cx(
      view,
      { brand: colors === 'brand' }
    )}>
      {children}
    </div>
  );
};

Navbar.Section = NavbarSection;
Navbar.Logotype = NavbarLogotype;
Navbar.Actions = NavbarActions;
