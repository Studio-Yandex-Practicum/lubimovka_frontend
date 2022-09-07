import { Url } from './common';

export type Project = {
  slug: string,
  title: string,
  description: string,
  image: Url,
}

export type BlogEntry = {
  id: number
  publicationDate: string
  title: string
  description: string
  author: string
  cover: Url
};
