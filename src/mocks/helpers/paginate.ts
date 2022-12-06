import { objectToQueryString } from '@funboxteam/diamonds';

export function paginate<T>(items: T[], limit: number, offset: number) {
  const begin = offset > 0 ? offset - 1 : 0;
  const end = begin + limit;

  return {
    count: items.length,
    next: end < items.length - 1 ? objectToQueryString({ offset: offset + (2 * limit), limit }) : null,
    previous: null,
    results: items.slice(begin, end),
  };
}
