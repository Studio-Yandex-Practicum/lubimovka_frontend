import { ReactNode } from 'react';
import Link from 'next/link';
import cn from 'classnames/bind';

import { Url } from 'shared/types';

import styles from './navbar-support-link.module.css';
const cx = cn.bind(styles);

export interface INavbarSupportLinkProps {
  href: Url;
  children: ReactNode;
}

export const NavbarSupportLink = (props: INavbarSupportLinkProps): JSX.Element => {
  const { href, children } = props;

  return (
    <Link href={href}>
      <a className={cx('navbarSupportLink')}>
        {children}
      </a>
    </Link>
  );
};
