import { Url } from './common';

export type Project = {
  slug: string,
  title: string,
  description: string,
  image: Url,
}

export type PartnerType = 'general' | 'festival' | 'info'

export type Partner = {
  name: string,
  logo: Url,
  type: PartnerType,
  url?: Url,
}

export type BlogEntry = {
  id: number
  publicationDate: string
  title: string
  description: string
  author: string
  cover: Url
};
