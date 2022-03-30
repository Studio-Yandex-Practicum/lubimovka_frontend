import { useEffect, useState } from 'react';

import { fetcher } from 'shared/fetcher';
import { PersistentDataContext } from './persistent-data-provider.context';

import type { FC } from 'react';
import { Project, Partner } from 'shared/types';
import { PaginatedProjectListList, Partner as ApiPartner } from 'api-typings';

export const PersistentDataProvider: FC = (props) => {
  const { children } = props;
  const [projects, setProjects] = useState<Project[] | undefined>();
  const [partners, setPartners] = useState<Partner[] | undefined>();

  const fetchPartners = async () => {
    let response: ApiPartner[];

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
  }, []);

  return (
    <PersistentDataContext.Provider
      value={{
        projects,
        partners,
      }}
    >
      {children}
    </PersistentDataContext.Provider>
  );
};
