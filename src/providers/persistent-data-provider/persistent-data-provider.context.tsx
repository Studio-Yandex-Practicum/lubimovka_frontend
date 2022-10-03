import { createContext, useContext } from 'react';

import type { Project } from 'core/project';
import type { Partner } from 'core/partner';
import type { Settings } from 'core/settings';

export type PersistentDataContextType = {
  projects?: Project[]
  generalPartners?: Partner[]
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
