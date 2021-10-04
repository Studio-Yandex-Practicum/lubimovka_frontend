import { cloneElement, ReactNode } from 'react';
import cn from 'classnames/bind';

import styles from './navbar-section.module.css';
const cx = cn.bind(styles);

export interface INavbarSectionProps {
  width?: 'auto' | 'max';
  Container?: 'nav' | 'div';
  showSeparator?: boolean;
  children: ReactNode;
}

export const NavbarSection = (props: INavbarSectionProps): JSX.Element => {
  const {
    width = 'auto',
    Container = 'div',
    showSeparator = false,
    children
  } = props;

  return cloneElement(
    <Container />,
    {
      className: cx('navbarSection', [width], { separator: showSeparator }),
    },
    children
  );
};
