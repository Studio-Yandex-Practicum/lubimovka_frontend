import { FC, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';

import { Menu } from 'components/ui/menu';
import { navbarNavigationItems, INavbar } from 'shared/constants/navbar-navigation-items';

import styles from './about-us-menu.module.css';

const cx = classNames.bind(styles);

export const AboutUsMenu: FC = (): JSX.Element => {
  const router = useRouter();
  const menu = useRef(null);

  useEffect(() => {
    if (menu.current) {
      menu.current.scrollLeft = localStorage.getItem('positionScroll');
    }
  }, []);

  const handlerScroll = (e: React.UIEvent<HTMLDivElement>) => {
    localStorage.setItem('positionScroll', e.target.scrollLeft);
  };

  return (
    <div className={cx('menu')} ref={menu} onScroll={handlerScroll}>
      <Menu type={'general-submenu'}>
        {navbarNavigationItems.map((list: INavbar) => (
          <Menu.Item
            key={list.id}
            href={list.href}
            current={router.asPath === list.href}
          >
            {list.text}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};
