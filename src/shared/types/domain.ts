import { Url } from './common';

export type BlogEntry = {
  id: number
  publicationDate: string
  title: string
  description: string
  author: string
  cover: Url
};
