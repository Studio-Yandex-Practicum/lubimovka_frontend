/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BlogItemListOutput } from './BlogItemListOutput';

export type PaginatedBlogItemListOutputList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<BlogItemListOutput>;
};