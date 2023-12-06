import { FeedList as Component } from './feed-list';
import { FeedListItem } from './feed-list-item';

export const FeedList = Object.assign(Component, {
  Item: FeedListItem,
});
