import { createContext, useContext } from 'react';

import { Project, Partner } from 'shared/types';

export type PersistentDataContext = {
  projects?: Project[],
  partners?: Partner[],
}

export const PersistentDataContext = createContext<PersistentDataContext | undefined>(undefined);

export const usePersistentData = (): PersistentDataContext => {
  const context = useContext(PersistentDataContext);

  if (context === undefined) {
    throw new Error('The usePersistentData hook must be used within a PersistentDataProvider');
  }

  return context;
};
