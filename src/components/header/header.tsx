import { FC } from 'react';
import NextLink from 'next/link';
import cn from 'classnames/bind';

import { NavigationMenu } from 'components/ui/navigation-menu';
import Logo from 'shared/images/logo.svg';
import { NAVIGATION_MENU_ITEMS, SOCIAL_MENU_ITEMS } from 'shared/constants';

import styles from './header.module.css';

const cx = cn.bind(styles);

export type NavigationMenuItem = {
  title: string;
  path: string;
}

export type SocialItem = {
  title: string;
  href: string;
}

export const Header: FC = () => {

  return (
    <header className={cx('header')}>
      <NextLink href={'/'}>
        <a className={cx('logoLink')}>
          <Logo className={cx('logo')}/>
        </a>
      </NextLink>
      <NavigationMenu
        items={NAVIGATION_MENU_ITEMS}
        size='auto'
        className={cx('navigation')}
        itemClassName={cx('navigationItem')}
        linkClassName={cx('navigationLink')}
      />
      <ul className={cx('socialList')}>
        {SOCIAL_MENU_ITEMS.map((item, idx) => (
          <li key={idx}>
            <a href={'#'} className={cx('socialLink')}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <button type="button" className={cx('button')}>
        + ПОДДЕРЖАТЬ
      </button>
    </header>
  );
};
