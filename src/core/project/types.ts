import type { BaseContent } from '__generated__/api-typings';

export type Project = {
  id: string
  title: string
  description: string
  image: Url
}

export type ProjectDetailed = {
  title: string
  intro: string
  descriptionCaption: string
  description: string
  image: string
  contents: BaseContent[]
};
