import { useEffect, useState } from 'react';

import { fetcher } from 'services/fetcher';
import { getSettings } from 'services/api/settings';
import { getPartners } from 'services/api/partner';
import { PersistentDataContext } from './persistent-data-provider.context';

import type { FC } from 'react';
import type { PersistentDataContextType } from './persistent-data-provider.context';
import type  { PaginatedProjectListList, ProjectList as ProjectDTO } from 'api-typings';
import type { Project } from 'shared/types';

// TODO: хранить данные в LocalStorage

export const PersistentDataProvider: FC = (props) => {
  const { children } = props;
  const [state, setState] = useState<PersistentDataContextType>({});

  const fetchProjects = async () => {
    try {
      return (await fetcher<PaginatedProjectListList>('/projects/')).results?.map(mapDTOtoProject);
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    // TODO: обработать ошибку промиса
    Promise.all([
      fetchProjects(),
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

function mapDTOtoProject(dto: ProjectDTO): Project {
  return {
    slug: dto.id.toString(),
    title: dto.title,
    description: dto.intro,
    image: dto.image,
  };
};
