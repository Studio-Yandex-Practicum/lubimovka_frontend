import { AfishaEventListOutput, AfishaInfoOutput } from 'api-typings';
import { fetcher } from 'shared/fetcher';
import { snakeToCamelObject } from 'shared/helpers/snake-to-camel';
import { AfishaEvents, AfishaInfo } from 'shared/types';

export const fetchInfo = async (): Promise<AfishaInfo> => snakeToCamelObject(await fetcher<AfishaInfoOutput>('afisha/info/')) as AfishaInfo;
export const fetchEvents = async (offset?: number) =>
  <AfishaEvents>snakeToCamelObject(await fetcher<AfishaEventListOutput>
  (`afisha/events/?limit=${process.env.AFISHA_FETCH_EVENTS_LIMIT || 10}${offset ? `&offset=${offset}` : ''}`));
