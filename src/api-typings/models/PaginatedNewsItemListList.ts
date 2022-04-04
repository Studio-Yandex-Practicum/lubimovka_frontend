/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NewsItemList } from './NewsItemList';

export type PaginatedNewsItemListList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<NewsItemList>;
};