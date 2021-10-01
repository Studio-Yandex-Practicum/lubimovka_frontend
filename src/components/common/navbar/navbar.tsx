import { FC } from 'react';
import NextLink from 'next/link';
import cn from 'classnames/bind';

import { Menu } from 'components/ui/menu';
import { Button } from 'components/ui/button';
import Logo from 'shared/images/logo.svg';
import { HEADER_MAIN_NAVIGATION_ITEMS, HEADER_SOCIAL_ITEMS } from 'shared/constants';

import styles from './navbar.module.css';
const cx = cn.bind(styles);

export type TSocialItem = {
  title: string;
  href: string;
};

export type TMainNavigationItem = {
  title: string;
  href: string;
  active?: boolean;
}

export const Navbar: FC = () => {
  return (
    <header className={cx('navbar')}>
      <NextLink href={'/'}>
        <a className={cx('logoLink')}>
          <Logo className={cx('logo')} />
        </a>
      </NextLink>
      <nav className={cx('navigation')}>
        <Menu view="mainNavigation">
          {HEADER_MAIN_NAVIGATION_ITEMS.map(({ title, href }, idx) => (
            <Menu.Item
              key={idx}
              href={href}
              type='navLink'
            >
              {title}
            </Menu.Item>
          ))}
        </Menu>
      </nav>
      <Menu view="socialLinks">
        {HEADER_SOCIAL_ITEMS.map(({ title, href }, idx) => (
          <Menu.Item
            key={idx}
            href={href}
            type='link'
            target='_blank'
          >
            {title}
          </Menu.Item>
        ))}
      </Menu>
      <Button
        className={cx('button')}
        label="Поддержать"
        view="transparent"
        icon="plus"
        iconPlace="left"
        href="/donation"
        isLink
      />
    </header>
  );
};
