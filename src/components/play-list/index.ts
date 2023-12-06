import { PlayList as Component } from './play-list';
import { PlayListItem } from './play-list-item';

export const PlayList = Object.assign(Component, {
  Item: PlayListItem,
});
