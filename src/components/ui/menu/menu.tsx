import { forwardRef, ReactNode } from 'react';
import classNames from 'classnames/bind';

import { MenuProvider } from './menu.context';

import type { MenuType } from './menu.context';

import { styles } from './menu.styles';

interface MenuProps {
  type: MenuType,
  className?: string,
  children: ReactNode,
}

export const Component = forwardRef<HTMLUListElement, MenuProps>((props, ref) => {
  const {
    type,
    className,
    children,
  } = props;

  const cx = classNames.bind(styles[type]);

  return (
    <ul
      className={cx(
        'menu',
        className
      )}
      ref={ref}
    >
      <MenuProvider value={{ type }}>
        {children}
      </MenuProvider>
    </ul>
  );
});

Component.displayName = 'Menu';
