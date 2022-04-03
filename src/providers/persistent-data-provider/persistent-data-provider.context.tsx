import { createContext, useContext } from 'react';

import type { Project, Partner, Url } from 'shared/types';

export type Settings = {
  emailAddresses: {
    forDirectorsAndActors: string
    forDirectors: string
    forAuthors: string
    forVolunteers: string
    charity: string
    playAcceptance: string
  },
  pressCenter: {
    contactPerson: string
    contactPersonPhoto: Url
    contactEmail: string
    facebookGalleryUrl: string
  },
  canProposePlay: boolean
}

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
