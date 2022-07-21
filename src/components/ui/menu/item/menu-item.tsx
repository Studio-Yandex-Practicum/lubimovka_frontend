import { forwardRef } from 'react';
import Link from 'next/link';
import classNames from 'classnames/bind';

import { styles } from '../menu';
import { useMenu } from '../menu.context';

import type { ReactNode } from 'react';
import type { LinkProps } from 'next/link';

interface MenuItemProps {
  mods?: Record<string, boolean>
  current?: boolean
  children: ReactNode
}

interface MenuItemLinkProps extends MenuItemProps, Pick<LinkProps, 'href'> {}

interface MenuItemButtonProps extends MenuItemProps {
  onClick: () => void
}

export const MenuItem = forwardRef<HTMLLIElement, MenuItemLinkProps | MenuItemButtonProps>((props, ref) => {
  const {
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
      {'href' in props ? (
        <Link href={props.href}>
          <a className={cx('link')}>
            {children}
          </a>
        </Link>
      ) : (
        <button
          className={cx('link')}
          type="button"
          onClick={props.onClick}
        >
          {children}
        </button>
      )}
    </li>
  );
});

MenuItem.displayName = 'MenuItem';
