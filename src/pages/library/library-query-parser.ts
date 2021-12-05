import { State } from 'components/library-filter/library-filter-reducer';

function queryParser(querys: State): string {
  const parsedQuery: string[] = [];

  for (const [key, value] of Object.entries(querys)) {
    value.forEach((el) => parsedQuery.push(`${key}=${el}`));
  }

  return `?${parsedQuery.join('&')}`;
}

export default queryParser;

