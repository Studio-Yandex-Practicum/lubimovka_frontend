import { forwardRef, ReactNode } from 'react';
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
import footerProjectListStyles from './type/footer-project-list.module.css';
import aboutUsNavigationStyles from './type/about-us-navigation.module.css';

export const styles = {
  'main-navigation': mainNavigationStyles,
  'overlay-navigation': overlayNavigationStyles,
  'overlay-actions': overlayActionsStyles,
  'overlay-social-links': overlaySocialLinksStyles,
  'social-links': socialLinksStyles,
  history: historyStyles,
  'footer-navigation': footerNavigationStyles,
  'footer-project-list': footerProjectListStyles,
  'about-us-navigation': aboutUsNavigationStyles,
};

export type MenuType = keyof typeof styles;

interface MenuProps {
  type: MenuType,
  className?: string,
  children: ReactNode,
}

const Component = forwardRef<HTMLUListElement, MenuProps>((props, ref) => {
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

export const Menu = Object.assign(Component, {
  Item: MenuItem,
});
