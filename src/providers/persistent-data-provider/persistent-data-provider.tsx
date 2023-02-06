import { useEffect, useState } from 'react';

import { getPartners } from 'services/api/partners';
import { getProjects } from 'services/api/projects';
import { getSettings } from 'services/api/settings';

import { PersistentDataContext } from './persistent-data-provider.context';

import type { PersistentDataContextType } from './persistent-data-provider.context';
import type { FC } from 'react';

// TODO: хранить данные в LocalStorage

export const PersistentDataProvider: FC = (props) => {
  const { children } = props;
  const [state, setState] = useState<PersistentDataContextType>({});

  useEffect(() => {
    Promise.all([
      getProjects(),
      getPartners({ onlyGeneral: true }),
      getSettings(),
    ]).then(([projects, generalPartners, settings]) => {
      setState({ projects, generalPartners, settings });
    // eslint-disable-next-line no-console
    }).catch(console.error);
  }, []);

  return (
    <PersistentDataContext.Provider value={state}>
      {children}
    </PersistentDataContext.Provider>
  );
};
