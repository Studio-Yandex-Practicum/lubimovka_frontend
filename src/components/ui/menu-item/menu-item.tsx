import { FC } from 'react';
import NextLink from 'next/link';
import classNames from 'classnames/bind';

import styles from './menu-item.module.css';

interface IMenuItem {
  href: string,
  title: string,
  active?: boolean,
  disabled?: boolean,
  size: 'm' | 'l',
}

const cx = classNames.bind(styles);

export const MenuItem: FC<IMenuItem> = (props) => {
  const {
    href,
    title,
    active = false,
    disabled = false,
    size = 'm',
  } = props;

  return (
    <NextLink href={href}>
      <a className={cx('menuItem', size, { active, disabled })}>
        {title}
      </a>
    </NextLink>
  );
};
