import { VolunteerListItem } from './item';
import { VolunteerList as Component } from './volunteer-list';

export const VolunteerList = Object.assign(Component, {
  Item: VolunteerListItem,
});
