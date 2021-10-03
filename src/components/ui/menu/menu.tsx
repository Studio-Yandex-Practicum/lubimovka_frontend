import { FC, Children, cloneElement, ReactNode, isValidElement } from 'react';
import classNames from 'classnames/bind';

import { MenuItem, TMenuItemProps } from './menu-item';

import styles from './menu.module.css';
const cx = classNames.bind(styles);

export type TSocialItem = {
  title: string;
  href: string;
};

export type TMainNavigationItem = {
  title: string;
  href: string;
  active?: boolean;
}

export interface IMenuProps {
  className?: string;
  view: 'mainNavigation' | 'pageNavigation' | 'sectionNavigation' | 'footerNavigation' | 'tabs' | 'socialLinks';
  children: ReactNode;
}

interface IMenuComposition {
  Item: FC<TMenuItemProps>
}

const Menu: FC<IMenuProps> & IMenuComposition = (props) => {
  const { className, view, children } = props;

  return (
    <ul className={cx('menu', [className], [view])}>
      {Children.map(children, (child) => (
        <li className={cx('menuListItem')}>
          {isValidElement(child)
            ? cloneElement(child, { view })
            : child}
        </li>))}
    </ul>);
};

Menu.Item = MenuItem;

export { Menu };
