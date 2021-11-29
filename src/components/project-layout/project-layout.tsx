import { ReactNode } from 'react';

import { ProjectLayoutStorey } from './storey';
import { ProjectLayoutDescription } from './description';

interface IProjectLayoutProps {
  children: ReactNode;
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
