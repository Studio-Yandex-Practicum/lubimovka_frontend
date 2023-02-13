export type BlogEntryPreview = {
  id: number
  title: string
  description: string
  authorFullName: string
  authorUrl?: Url
  image: Url
};

export type BlogFilters = {
  year: number[]
  month: number[]
}
