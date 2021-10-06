import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './navbar-section.module.css';
const cx = classNames.bind(styles);

export interface INavbarSectionProps {
  width?: 'auto' | 'max';
  container?: 'nav' | 'div';
  showSeparator?: boolean;
  children: ReactNode;
}

export const NavbarSection = (props: INavbarSectionProps): JSX.Element => {
  const {
    width = 'auto',
    container: Container = 'div',
    showSeparator = false,
    children
  } = props;

  return (
    <Container
      className={cx(
        'navbarSection',
        [width],
        {
          separator: showSeparator
        }
      )}>
      {children}
    </Container>
  );
};
