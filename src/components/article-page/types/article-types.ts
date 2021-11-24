//временное хранилище типов для страницы, пока на 100% не будет известен api,
// потом будут генерироваться автоматически или переедут в /shared/types

import { Url } from '../../../shared/types';

export type BlogData = {
  id: number,
  title: string,
  description: string,
  preamble?: string,
  image: Url,
  author_url: Url,
  author_url_title: string,
  contents: Content[],
  persons: Creator[],
  blogs: BlogItem[],
  created: string,
  modified: string,
}

export type NewsData = Omit<BlogData, 'author_url' | 'author_url_title' | 'persons' | 'blogs'> & { news: NewsItem[]}

export type Content = TextContent<'text' | 'title' | 'quote'> | ImageContent | PlaysContent | PersonsContent

export type TextContent<T extends string> = T extends T ? {
  content_type: T,
  content_item: Record<T, string>;
} : never

export type ImageContent = {
  content_type: 'imagesblock',
  content_item: ComplexItem<Image>;
}

export type PlaysContent = {
  content_type: 'playsblock',
  content_item: ComplexItem<Play>;
}

export type PersonsContent = {
  content_type: 'personsblock',
  content_item: ComplexItem<Person>;
}

export type ComplexItem<T extends ObjectItems> = {
  title: string,
  items: T[],
}

export type ObjectItems = Image | Play | Person | Creator | BlogItem;

export type Image = {
  title: string,
  image: Url,
}

export type Play = {
  id: number,
  created: string,
  modified: string,
  name: string,
  city: string,
  year: number,
  url_download: Url,
  url_reading: Url,
  is_draft: boolean,
  program: number,
  festival: number,
}

export type Person = {
  id: number,
  created: string,
  modified: string,
  first_name: string,
  last_name: string,
  middle_name: string,
  city: string,
  email: string,
  image: Url,
}

export type Creator = {
  id: number,
  full_name: string,
  role: string,
}

export type BlogItem = {
  id: number,
  title: string,
  description: string,
  author_url_title: string,
  image: Url,
}

export type NewsItem = {
  id: number,
  title: string,
  description: string,
  pub_date: string
}


