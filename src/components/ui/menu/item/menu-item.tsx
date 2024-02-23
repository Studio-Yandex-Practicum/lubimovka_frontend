import classNames from 'classnames/bind';
import Link from 'next/link';
import { forwardRef } from 'react';

import { useMenu } from '../menu.context';
import { styles } from '../menu.styles';

import type { LinkProps } from 'next/link';
import type { ReactNode } from 'react';

interface MenuItemProps {
  target?: string
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
    target = '_self',
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
          <a
            draggable={false}
            className={cx('link')}
            target={target}
          >
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
