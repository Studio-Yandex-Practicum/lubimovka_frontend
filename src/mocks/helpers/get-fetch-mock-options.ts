import { stringify, ParsedQuery } from 'shared/helpers/query-string';

export const withFetchMockQueryParams = (url:string, query: ParsedQuery): string => {
  const mockParams = Object.keys(query)
    .filter((key) => /^mock_/i.test(key))
    .reduce<ParsedQuery>((acc, key) => {
      acc[key] = query[key];
      return acc;
    }, {})
  ;

  return `${url}${stringify(mockParams)}`;
};
