import classNames from 'classnames/bind';

import { PageBurgerButton } from './burger-button';
import { PageNavbar } from './navbar';
import { PageFooter } from './footer';
import { PageOverlayMenu } from './overlay-menu';
import { PageHeadBanner } from './head-banner';

import type { FC } from 'react';

import styles from './page.module.css';

const cx = classNames.bind(styles);

const Component: FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('root')}>
      {children}
    </div>
  );
};

Component.displayName = 'Page';

export default Object.assign(Component, {
  BurgerButton: PageBurgerButton,
  Navbar: PageNavbar,
  Footer: PageFooter,
  OverlayMenu: PageOverlayMenu,
  HeadBanner: PageHeadBanner,
});
