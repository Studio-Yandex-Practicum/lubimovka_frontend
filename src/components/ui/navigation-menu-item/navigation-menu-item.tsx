import { FC } from 'react';
import NextLink from 'next/link';
import cn from 'classnames/bind';

import styles from './navigation-menu-item.module.css';

export interface INavigationMenuItemProps {
  href: string,
  title: string,
  active?: boolean,
  inactive?: boolean,
  size?: 'm' | 'l',
}

const cx = cn.bind(styles);

export const NavigationMenuItem: FC<INavigationMenuItemProps> = (props) => {
  const {
    href,
    title,
    active = false,
    inactive = false,
    size = 'm',
  } = props;

  return (
    <NextLink href={href}>
      <a className={cx('menuItem', size, { active, inactive })}>
        {title}
      </a>
    </NextLink>
  );
};
