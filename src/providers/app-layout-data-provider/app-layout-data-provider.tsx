import { FC, useEffect, useState } from 'react';

import { fetcher } from 'shared/fetcher';
import { AppLayoutDataContext } from './app-layout-data-provider.context';
import { Project, Partner } from 'shared/types';
import { PaginatedProjectListList, Partner as ApiPartner } from 'api-typings';

export const AppLayoutDataProvider: FC = (props) => {
  const { children } = props;
  const [projects, setProjects] = useState<Project[] | undefined>();
  const [partners, setPartners] = useState<Partner[] | undefined>();

  const fetchPartners = async () => {
    let response: ApiPartner[];

    try {
      response = await fetcher('/info/partners/?type=general');
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

    setProjects(response.results?.map(({ id, title, description, image }) => ({
      slug: id.toString(),
      title,
      description,
      image,
    })));
  };

  useEffect(() => {
    fetchProjects();
    fetchPartners();
  }, []);

  return (
    <AppLayoutDataContext.Provider value={{
      projects,
      partners,
    }}>
      {children}
    </AppLayoutDataContext.Provider>
  );
};
