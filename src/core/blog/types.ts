export type BlogEntry = {
  id: number
  publicationDate: string
  title: string
  description: string
  author: string
  cover: Url
};

export type BlogFilters = {
  year: number[]
  month: number[]
}
