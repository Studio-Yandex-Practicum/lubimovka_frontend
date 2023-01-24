import { VolunteerList as Component } from './volunteer-list';
import { VolunteerListItem } from './item';

export const VolunteerList = Object.assign(Component, {
  Item: VolunteerListItem,
});
