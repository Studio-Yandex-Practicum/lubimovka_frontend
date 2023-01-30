import classNames from 'classnames/bind';
import { forwardRef } from 'react';

import { MenuProvider } from './menu.context';
import { styles } from './menu.styles';

import type { MenuType } from './menu.context';
import type { ReactNode } from 'react';

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
