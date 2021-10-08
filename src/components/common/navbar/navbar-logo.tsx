import Link from 'next/link';
import cn from 'classnames/bind';

import Logo from 'shared/images/logo.svg';

import styles from './navbar-logo.module.css';
const cx = cn.bind(styles);

export const NavbarLogo = (): JSX.Element => {
  return (
    <Link href={'/'}>
      <a className={cx('navbarLogo')}>
        <Logo className={cx('logoImg')} />
      </a>
    </Link>
  );
};
