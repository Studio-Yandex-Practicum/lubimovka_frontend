import { createContext, useContext } from 'react';

import type { Project, Partner } from 'shared/types';

export type PersistentDataContextType = {
  projects?: Project[]
  partners?: Partner[]
  settings?: Settings
}

export const PersistentDataContext = createContext<PersistentDataContextType | undefined>(undefined);

export const usePersistentData = (): PersistentDataContextType => {
  const context = useContext(PersistentDataContext);

  if (context === undefined) {
    throw new Error('The usePersistentData hook must be used within a PersistentDataProvider');
  }

  return context;
};
