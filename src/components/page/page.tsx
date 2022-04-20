import { PageBurgerButton } from './burger-button';
import { PageNavbar } from './navbar';
import { PageFooter } from './footer';
import { PageOverlayMenu } from './overlay-menu';
import { PageHeadBanner } from './head-banner';

import type { ReactNode } from 'react';

interface PageProps {
  children: ReactNode,
}

const Component = (props: PageProps) => {
  const { children } = props;

  return (
    <div>
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
