import { AfishaInfoOutput, PaginatedAfishaEventListOutputList } from 'api-typings';
import { fetcher } from 'shared/fetcher';

export const fetchInfo = async () => await fetcher<AfishaInfoOutput>('afisha/info/');
export const fetchEventsFestival = async (date: string) => await fetcher<PaginatedAfishaEventListOutputList>(`afisha/events/?dates=${date}`);
export const fetchEventsRegular = async (offset?: number) => 
  await fetcher<PaginatedAfishaEventListOutputList>(`afisha/events/?limit=10${offset ? `&offset=${offset}` : ''}`);
export function getFetcherEventsRegular() {
  let offset = 0;
  return () => {
    offset += 10;
    return fetchEventsRegular(offset);
  };
}
