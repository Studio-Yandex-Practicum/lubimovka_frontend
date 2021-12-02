import { ReactNode } from 'react';

import { PageHeader } from './header';
import { PageOverlayMenu } from './overlay-menu';
import { PageBurgerButton } from './burger-button';
import { PageBreadcrumbs } from './breadcrumbs';
import { PageFooter } from './footer';

interface IPageProps {
  children: ReactNode,
}

export const Page = (props: IPageProps): JSX.Element => {
  const { children } = props;

  return (
    <div>
      {children}
    </div>
  );
};

Page.Header = PageHeader;
Page.OverlayMenu = PageOverlayMenu;
Page.BurgerButton = PageBurgerButton;
Page.Breadcrumbs = PageBreadcrumbs;
Page.Footer = PageFooter;
