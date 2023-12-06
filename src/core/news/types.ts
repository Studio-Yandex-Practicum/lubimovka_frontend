export type News = {
  id: number
  title: string
  date: DateTimeIsoString
  description: string
}

export type NewsFilters = {
  month?: string
  year?: string
}
