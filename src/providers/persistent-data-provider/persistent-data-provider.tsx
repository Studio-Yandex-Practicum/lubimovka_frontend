import { useEffect, useState } from 'react';

import { getSettings } from 'services/api/settings';
import { getPartners } from 'services/api/partner';
import { getProjects } from 'services/api/project';
import { PersistentDataContext } from './persistent-data-provider.context';

import type { FC } from 'react';
import type { PersistentDataContextType } from './persistent-data-provider.context';

// TODO: хранить данные в LocalStorage

export const PersistentDataProvider: FC = (props) => {
  const { children } = props;
  const [state, setState] = useState<PersistentDataContextType>({});

  useEffect(() => {
    // TODO: обработать ошибку промиса
    Promise.all([
      getProjects(),
      getPartners({ onlyGeneral: true }),
      getSettings(),
    ]).then(([projects, generalPartners, settings]) => {
      setState({ projects, generalPartners, settings });
    });
  }, []);

  return (
    <PersistentDataContext.Provider value={state}>
      {children}
    </PersistentDataContext.Provider>
  );
};
