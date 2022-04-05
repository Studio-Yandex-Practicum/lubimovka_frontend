import { FC } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';

import { AboutUsMenuItem } from 'components/what-we-do-page/about-us-menu/item';
import { navbarNavigationItems, INavbar } from 'shared/constants/navbar-navigation-items';

import styles from './about-us-menu.module.css';

const cx = classNames.bind(styles);

export const AboutUsMenu: FC = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className={cx('menu')}>
      <ul className={cx('menuList')}>
        {navbarNavigationItems.map((list: INavbar) => (
          <AboutUsMenuItem
            key={list.id}
            href={list.href}
            current={router.asPath === list.href}
          >
            {list.text}
          </AboutUsMenuItem>
        ))}
      </ul>
    </div>
  );
};
