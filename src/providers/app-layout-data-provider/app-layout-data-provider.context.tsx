import { createContext, useContext } from 'react';

import { Project, Partner } from 'shared/types';

export type AppLayoutDataContext = {
  projects?: Project[],
  partners?: Partner[],
}

export const AppLayoutDataContext = createContext<AppLayoutDataContext | undefined>(undefined);

export const useAppLayoutData = (): AppLayoutDataContext => {
  const context = useContext(AppLayoutDataContext);

  if (context === undefined) {
    throw new Error('The useAppLayoutData hook must be used within a AppLayoutDataProvider');
  }

  return context;
};
