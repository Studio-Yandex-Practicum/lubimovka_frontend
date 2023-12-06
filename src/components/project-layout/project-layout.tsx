
import { ProjectLayoutDescription } from './description';
import { ProjectLayoutStorey } from './storey';

import type { ReactNode } from 'react';

interface IProjectLayoutProps {
  children: ReactNode
}

export const ProjectLayout = (props: IProjectLayoutProps): JSX.Element => {
  const { children } = props;

  return (
    <main>
      {children}
    </main>
  );
};

ProjectLayout.Storey = ProjectLayoutStorey;
ProjectLayout.Description = ProjectLayoutDescription;
