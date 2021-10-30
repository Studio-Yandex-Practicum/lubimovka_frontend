import { Url } from './common';

export type Project = {
  slug: string,
  title: string,
  description: string,
  image: Url,
}

export type PartnerType = 'general' | 'informational'

export type Partner = {
  name: string,
  logo: Url,
  type: PartnerType,
  url?: Url,
}
