import { Url } from './common';

export type BlogData = {
  id: number,
  title: string,
  description: string,
  image: Url,
  author_url: Url,
  author_url_title: string,
  pub_date: string,
  contents: Content[],
  team: Team[],
  other_blogs: BlogItem[],
}

export type NewsData = Omit<BlogData, 'author_url' | 'author_url_title' | 'team' | 'other_blogs'> & { other_news: NewsItem[]}

export type Content = TextContent<'text' | 'title' | 'quote' | 'preamble'> | ImageContent | PlaysContent | PersonsContent

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

export type ObjectItems = Image | Play | Person | Team | BlogItem;

export type Image = {
  title: string,
  image: Url,
}

export type Play = {
  id: number,
  name: string,
  authors: PlayAuthor[],
  city: string,
  year: number,
  url_download: string,
  url_reading: string,
}

export type PlayAuthor = {
  name: string,
  id: number
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
  roles: PersonRole[],
}

export type PersonRole = {
  name: string,
  slug: string,
}

export type Team = {
  name: string,
  slug: string,
  persons: TeamPerson[]
}

export type TeamPerson = {
  id: number,
  full_name: string
}

export type BlogItem = {
  id: number,
  pub_date?: string,
  title: string,
  description: string,
  author_url: string,
  author_url_title: string,
  image?: Url,
}

export type NewsItem = {
  id: number,
  title: string,
  description: string,
  pub_date: string
}

