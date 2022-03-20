import { ReactNode } from 'react';

import { AfishaEventListOutput, AfishaInfoOutput, PaginatedAfishaEventListOutputList } from 'api-typings';
import { ParseDate } from '../utils/getDateInfo';

export interface IProps {
  children: ReactNode;
  info: AfishaInfoOutput;
  events: PaginatedAfishaEventListOutputList; 
}

export type Events = Record<string, AfishaEventListOutput[]>;
export type DatesInfo = Record<string, ParseDate>;

export type State = { 
  status: 'done' | 'loading' | 'error'
  currentDate: string, 
  events: Events,
  datesInfo: DatesInfo,
  info: AfishaInfoOutput
};
