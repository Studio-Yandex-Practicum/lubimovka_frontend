/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AfishaEventListOutput } from "./AfishaEventListOutput";
import { BaseEvent } from "./BaseEvent";

export type PaginatedAfishaEventListOutputList = {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: Array<AfishaEventListOutput>;
};
