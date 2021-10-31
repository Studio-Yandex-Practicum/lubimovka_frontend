import { createContext, useContext } from 'react';

import { Project, Partner } from 'shared/types';

export type AppSettingsContext = {
  projects: Project[],
  generalPartners: Partner[],
}

const AppContext = createContext<AppSettingsContext | undefined>(undefined);

export const AppSettingsProvider = AppContext.Provider;

export const useAppSettings = (): AppSettingsContext => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error('The useAppSettings hook must be used within a AppSettingsProvider');
  }

  return context;
};
