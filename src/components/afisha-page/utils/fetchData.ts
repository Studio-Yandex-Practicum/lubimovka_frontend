import { AfishaEventListOutput, AfishaInfoOutput } from '__generated__/api-typings';
import { fetcher } from 'services/fetcher';
import { snakeToCamelObject } from 'shared/helpers/snake-to-camel';
import { AfishaEvents, AfishaInfo } from 'shared/types';

export const fetchInfo = async () => <AfishaInfo>snakeToCamelObject(await fetcher<AfishaInfoOutput>('afisha/info/'));

export const fetchEvents = async (offset: number = 0, limit: number = 10) => {
  return <AfishaEvents>snakeToCamelObject(await fetcher<AfishaEventListOutput>
  (`afisha/events/?limit=${limit}${offset ? `&offset=${offset}` : ''}`));
};
