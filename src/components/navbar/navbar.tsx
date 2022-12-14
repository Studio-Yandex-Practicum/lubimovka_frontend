import classNames from 'classnames/bind';

import { NavbarSection } from './section';
import { NavbarLogotype } from './logotype';
import { NavbarActions } from './actions';

import styles from './navbar.module.css';

export interface NavbarProps {
  view?: 'regular' | 'expanded',
  colors?: 'default' | 'brand',
}

const cx = classNames.bind(styles);

export const Navbar = (props: React.PropsWithChildren<NavbarProps>) => {
  const {
    view = 'regular',
    colors = 'default',
    children,
  } = props;

  return (
    <div className={cx(
      view,
      { brand: colors === 'brand' }
    )}
    >
      {children}
    </div>
  );
};

Navbar.Section = NavbarSection;
Navbar.Logotype = NavbarLogotype;
Navbar.Actions = NavbarActions;
