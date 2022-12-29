export const isNonEmpty = <T extends object | any[] | null | undefined>(value: T): value is NonNullable<T> => (
  typeof value !== 'undefined' && value !== null && (Object.keys(value) || value).length > 0
);
