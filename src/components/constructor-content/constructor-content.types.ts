import type { ConstructorBlockType } from './constructor-content.const';
import type {
  ContentUnitRichText,
  EventsBlock,
  ImagesBlock,
  Link,
  PersonsBlock,
  PlaysBlock,
  VideosBlock,
} from '__generated__/api-typings';

export type ConstructorBlock = {
  content_type: ConstructorBlockType.Images
  content_item: ImagesBlock
} | {
  content_type: ConstructorBlockType.Persons
  content_item: PersonsBlock
} | {
  content_type: ConstructorBlockType.Plays
  content_item: PlaysBlock
} | {
  content_type: ConstructorBlockType.Events
  content_item: EventsBlock
} | {
  content_type: ConstructorBlockType.Videos
  content_item: VideosBlock
} | {
  content_type: ConstructorBlockType.HtmlMarkup
  content_item: ContentUnitRichText
} | {
  content_type: ConstructorBlockType.Link
  content_item: Link
}
