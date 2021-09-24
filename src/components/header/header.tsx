import { FC } from 'react';
import NextLink from 'next/link';

import { NavigationMenu } from 'components/ui/navigation-menu';
import Logo from 'shared/images/logo.svg';
import { NAVIGATION_MENU_ITEMS, SOCIAL_MENU_ITEMS } from 'shared/constants';

import styles from './header.module.css';

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
    <header className={styles.header}>
      <NextLink href={'/'}>
        <a className={styles.logo}>
          <Logo />
        </a>
      </NextLink>
      <NavigationMenu
        items={NAVIGATION_MENU_ITEMS}
        className={styles.navigation}
        itemClassName={styles.navigationItem}
        linkClassName={styles.navigationLink}
      />
      <ul className={styles.socialList}>
        {SOCIAL_MENU_ITEMS.map((item, idx) => (
          <li key={idx}>
            <a href={'#'} className={styles.socialLink}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <button type="button" className={styles.button}>
        ПОДДЕРЖАТЬ
      </button>
    </header>
  );
};
