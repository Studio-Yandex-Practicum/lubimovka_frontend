import { FC, useEffect, useRef, UIEvent } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';

import { AboutUsMenuLayout } from 'components/what-we-do-page/about-us-menu-layout';
import { navbarNavigationItems, INavbar } from 'shared/constants/navbar-navigation-items';

import styles from './about-us-menu.module.css';

const cx = classNames.bind(styles);

export const AboutUsMenu: FC = (): JSX.Element => {
  const router = useRouter();
  const menu = useRef(null);

  useEffect(() => {
    if (menu.current) {
      (menu.current as HTMLDivElement).scrollLeft = Number(localStorage.getItem('positionScroll'));
    }
  }, []);

  const handlerScroll = (e: UIEvent<HTMLDivElement>) => {
    localStorage.setItem('positionScroll', String((e.target as HTMLDivElement).scrollLeft));
  };

  return (
    <div className={cx('menu')} ref={menu} onScroll={handlerScroll}>
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
