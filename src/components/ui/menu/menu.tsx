import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import { MenuProvider } from './menu.context';
import { MenuItem } from './item';

import mainNavigationStyles from './type/main-navigation.module.css';
import overlayNavigationStyles from './type/overlay-navigation.module.css';
import overlayActionsStyles from './type/overlay-actions.module.css';
import overlaySocialLinksStyles from './type/overlay-social-links.module.css';
import socialLinksStyles from './type/social-links.module.css';
import footerNavigationStyles from './type/footer-navigation.module.css';
import historyStyles from './type/history.module.css';
import generalSubmenuStyles from './type/general-submenu.module.css';
import footerProjectListStyles from './type/footer-project-list.module.css';

export const styles = {
  'main-navigation': mainNavigationStyles,
  'overlay-navigation': overlayNavigationStyles,
  'overlay-actions': overlayActionsStyles,
  'overlay-social-links': overlaySocialLinksStyles,
  'social-links': socialLinksStyles,
  history: historyStyles,
  'general-submenu': generalSubmenuStyles,
  'footer-navigation': footerNavigationStyles,
  'footer-project-list': footerProjectListStyles,
};

export type MenuType = keyof typeof styles;

interface IMenuProps {
  type: MenuType,
  className?: string,
  children: ReactNode,
}

export const Menu = (props: IMenuProps): JSX.Element => {
  const {
    type,
    className,
    children,
  } = props;

  const cx = classNames.bind(styles[type]);

  return (
    <ul className={cx('menu', className)}>
      <MenuProvider value={{ type }}>
        {children}
      </MenuProvider>
    </ul>
  );
};

Menu.Item = MenuItem;
