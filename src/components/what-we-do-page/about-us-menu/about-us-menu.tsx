import { FC, useEffect, useRef, UIEvent } from 'react';
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
      (menu.current as HTMLDivElement).scrollLeft = Number(localStorage.getItem('positionScroll'));
    }
  }, []);

  const handlerScroll = (e: UIEvent<HTMLDivElement>) => {
    localStorage.setItem('positionScroll', String((e.target as HTMLDivElement).scrollLeft));
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
