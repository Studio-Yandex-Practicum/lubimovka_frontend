import { ReactNode } from 'react';

import { PageHeader } from './header';
import { PageOverlay } from './overlay';

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
Page.Overlay = PageOverlay;
