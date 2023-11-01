import type { Settings } from 'core/settings';
import type { TAboutUsNavigationItem } from 'shared/constants/about-us-navigation-items';

export const showTeamsSponsorsVolunteers = (item: TAboutUsNavigationItem, settings: Settings | undefined) => {
  if (item.id === 'team') {
    return settings?.showTeam;
  } else if (item.id === 'sponsors') {
    return settings?.showSponsors;
  } else if (item.id === 'volunteers') {
    return settings?.showVolunteers;
  }

  return true;
};
