export type DTOPagination = {
  count?: number
  next?: string | null
  previous?: string | null
}

export type Paginate<T, PropertyName extends string = 'results'> = {
  [P in PropertyName]: T
} & {
  pagination: DTOPagination
}
