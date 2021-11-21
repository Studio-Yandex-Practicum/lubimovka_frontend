/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BlogItemList } from './BlogItemList';

export type PaginatedBlogItemListList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<BlogItemList>;
}
