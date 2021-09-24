import { FC } from 'react';
import cn from 'classnames/bind';

import { NavigationMenuItem, INavigationMenuItemProps } from '../navigation-menu-item';

import styles from './navigation-menu.module.css';

interface INavigationMenuProps {
  items: INavigationMenuItemProps[];
  size?: INavigationMenuItemProps['size'];
  direction?: 'row' | 'column';
  className?: string;
  itemClassName?: string;
  linkClassName?: string;
}

const cx = cn.bind(styles);

export const NavigationMenu: FC<INavigationMenuProps> = (props) => {
  const {
    items,
    size = 'm',
    direction = 'row',
    className,
    itemClassName,
    linkClassName,
  } = props;

  return (
    <nav className={cx('navigationMenu', [className])}>
      <ul className={cx('list', [direction])}>
        {items.map((item, idx) => (
          <li
            key={idx}
            className={itemClassName}
          >
            <NavigationMenuItem
              {...item}
              className={linkClassName}
              size={size}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
