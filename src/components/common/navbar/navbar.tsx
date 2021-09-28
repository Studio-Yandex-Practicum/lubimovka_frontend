import { FC } from 'react';
import NextLink from 'next/link';
import cn from 'classnames/bind';

import { NavigationMenu } from 'components/ui/navigation-menu';
import { Button } from 'components/ui/button';
import Logo from 'shared/images/logo.svg';
import { NAVIGATION_MENU_ITEMS, SOCIAL_LIST_ITEMS } from 'shared/constants';

import styles from './navbar.module.css';

const cx = cn.bind(styles);

export type TSocialItem = {
  title: string;
  href: string;
};

export const Navbar: FC = () => {
  return (
    <header className={cx('navbar')}>
      <NextLink href={'/'}>
        <a className={cx('logoLink')}>
          <Logo className={cx('logo')} />
        </a>
      </NextLink>
      <NavigationMenu
        items={NAVIGATION_MENU_ITEMS}
        size="auto"
        className={cx('navigation')}
        itemClassName={cx('navigationItem')}
        linkClassName={cx('navigationLink')}
      />
      <ul className={cx('socialList')}>
        {SOCIAL_LIST_ITEMS.map((item, idx) => (
          <li key={idx}>
            <a href={item.href} className={cx('socialLink')}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
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
