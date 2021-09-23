import { FC } from 'react';
import NextLink from 'next/link';
import cn from 'classnames/bind';

import styles from './menu-item.module.css';

interface IMenuItemProps {
  href: string,
  title: string,
  active?: boolean,
  inactive?: boolean,
  size: 'm' | 'l',
}

const cx = cn.bind(styles);

export const MenuItem: FC<IMenuItemProps> = (props) => {
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
