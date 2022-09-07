import { useEffect, useState } from 'react';

import { fetcher } from 'services/fetcher';
import { getSettings } from 'services/api/settings';
import { PersistentDataContext } from './persistent-data-provider.context';

import type { FC } from 'react';
import type { PersistentDataContextType } from './persistent-data-provider.context';
import {
  PaginatedProjectListList,
  PartnerListOutput as Partner,
} from 'api-typings';

export const PersistentDataProvider: FC = (props) => {
  const { children } = props;

  const [projects, setProjects] = useState<PersistentDataContextType['projects']>();
  const [partners, setPartners] = useState<PersistentDataContextType['partners']>();
  const [settings, setSettings] = useState<PersistentDataContextType['settings']>();

  const fetchPartners = async () => {
    let response: Partner[];

    try {
      response = await fetcher('/info/partners/?in_footer_partner=true');
    } catch (error) {
      return;
    }

    setPartners(response.map(({ name, type, url, image }) => ({
      name,
      type,
      url,
      logo: image,
    })));
  };

  const fetchProjects = async () => {
    let response: PaginatedProjectListList;

    try {
      response = await fetcher('/projects/');
    } catch (error) {
      return;
    }

    setProjects(response.results?.map(({ id, title, intro, image }) => ({
      slug: id.toString(),
      title,
      description: intro,
      image,
    })));
  };

  useEffect(() => {
    fetchProjects();
    fetchPartners();
    // TODO: обработать ошибку промиса
    getSettings().then(setSettings);
  }, []);

  return (
    <PersistentDataContext.Provider
      value={{
        projects,
        partners,
        settings,
      }}
    >
      {children}
    </PersistentDataContext.Provider>
  );
};
