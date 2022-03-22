import { FC } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';

import { AboutUsMenuLayout } from 'components/what-we-do-page/about-us-menu-layout';
import { navbarNavigationItems, INavbar } from 'shared/constants/navbar-navigation-items';

import styles from './about-us-menu.module.css';

const cx = classNames.bind(styles);

export const AboutUsMenu: FC = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className={cx('menu')}>
      <AboutUsMenuLayout>
        {navbarNavigationItems.map((list: INavbar) => (
          <AboutUsMenuLayout.Item
            key={list.id}
            href={list.href}
            current={router.asPath === list.href}
          >
            {list.text}
          </AboutUsMenuLayout.Item>
        ))}
      </AboutUsMenuLayout>
    </div>
  );
};
