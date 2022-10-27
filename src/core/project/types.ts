import type { Url } from 'shared/types';
import type { BaseContent } from 'api-typings';

export type Project = {
  id: string
  title: string
  description: string
  image: Url
}

export type ProjectDetailed = {
  title: string
  intro: string
  description: string
  image: string
  contents: BaseContent[]
};
