import useSWR from 'swr';

import { fetcher } from 'services/fetch';

import type { Settings as SettingsDTO } from '__generated__/api-typings';
import type { Settings } from 'core/settings';

const RESOURCE_URL = '/info/settings/';

export function fetchSettings() {
  return fetcher<SettingsDTO>(RESOURCE_URL).then(mapDTOToSettings);
}

const mapDTOToSettings = (dto: SettingsDTO): Settings => ({
  emailAddresses: {
    forDirectorsAndActors: dto.reading_email,
    forDirectors: dto.reading_email,
    sponsorship: dto.trustee_email,
    forVolunteers: dto.volunteer_email,
    playAcceptance: dto.submit_play_email,
    forBlogAuthors: dto.blog_author_email,
    forPlayAuthors: dto.play_author_email,
    requestDonationReport: dto.trustee_email,
  },
  pressCenter: {
    contactPerson: dto.for_press.pr_director.pr_director_name,
    contactPersonPhoto: dto.for_press.pr_director.pr_director_photo_link,
    contactEmail: dto.for_press.pr_director.pr_director_email,
    facebookGalleryUrl: dto.for_press.photo_gallery_facebook_link,
  },
  canProposePlay: dto.plays_reception_is_open,
  privacyPolicyUrl: dto.url_to_privacy_policy,
  projects: dto.projects.map((project) => ({
    id: project.id.toString(),
    title: project.title,
  })),
  permissions: {
    team: dto.show_team,
    sponsors: dto.show_sponsors,
    mission: true,
    'about-us': true,
  }
});

export const useSettings = () => {
  const { data, error } = useSWR(RESOURCE_URL, fetchSettings);

  return {
    settings: data,
    error,
  };
};
