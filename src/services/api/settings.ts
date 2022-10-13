import { fetcher } from 'services/fetcher';

import type { Settings as SettingsDTO } from 'api-typings';
import type { Settings } from 'core/settings';

export function getSettings() {
  return fetcher<SettingsDTO>('/info/settings/').then(mapDTOToSettings);
}

function mapDTOToSettings(dto: SettingsDTO): Settings {
  return {
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
  };
};
