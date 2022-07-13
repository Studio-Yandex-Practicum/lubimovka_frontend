import { useEffect, useState } from 'react';

import { fetcher } from 'services/fetcher';
import { PersistentDataContext } from './persistent-data-provider.context';

import type { FC } from 'react';
import type { PersistentDataContextType } from './persistent-data-provider.context';
import {
  PaginatedProjectListList,
  Partner as PartnerResponse,
  Settings as SettingsResponse,
} from 'api-typings';

export const PersistentDataProvider: FC = (props) => {
  const { children } = props;

  const [projects, setProjects] = useState<PersistentDataContextType['projects']>();
  const [partners, setPartners] = useState<PersistentDataContextType['partners']>();
  const [settings, setSettings] = useState<PersistentDataContextType['settings']>();

  const fetchPartners = async () => {
    let response: PartnerResponse[];

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

  const fetchSettings = async () => {
    let response: SettingsResponse;

    try {
      response = await fetcher('/info/settings/');
    } catch {
      return;
    }

    setSettings({
      emailAddresses: {
        forDirectorsAndActors: response.email_on_project_page,
        forDirectors: response.email_on_what_we_do_page,
        charity: response.email_on_trustees_page,
        forVolunteers: response.email_on_about_festival_page,
        playAcceptance: response.email_on_acceptance_of_plays_page,
        forAuthors: response.email_on_author_page,
      },
      pressCenter: {
        contactPerson: response.for_press.pr_director.pr_director_name,
        contactPersonPhoto: response.for_press.pr_director.pr_director_photo_link,
        contactEmail: response.for_press.pr_director.pr_director_email,
        facebookGalleryUrl: response.for_press.photo_gallery_facebook_link,
      },
      canProposePlay: response.plays_reception_is_open,
      privacyPolicyUrl: response.url_to_privacy_policy,
    });
  };

  useEffect(() => {
    fetchProjects();
    fetchPartners();
    fetchSettings();
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
