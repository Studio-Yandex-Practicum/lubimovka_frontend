import { forwardRef } from 'react';
import Link from 'next/link';
import classNames from 'classnames/bind';

import { styles } from '../menu';
import { useMenu } from '../menu.context';

import type { ReactNode } from 'react';
import type { LinkProps } from 'next/link';

interface MenuItemProps extends Pick<LinkProps, 'href'> {
  current?: boolean
  mods?: Record<string, boolean>
  children: ReactNode
}

export const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>((props, ref) => {
  const {
    href,
    current = false,
    mods = {},
    children,
  } = props;
  const { type } = useMenu();
  const cx = classNames.bind(styles[type]);

  return (
    <li
      className={cx(
        'item',
        {
          current,
          ...mods
        },
      )}
      ref={ref}
    >
      <Link href={href}>
        <a className={cx('link')}>
          {children}
        </a>
      </Link>
    </li>
  );
});

MenuItem.displayName = 'MenuItem';
