/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthorList } from './AuthorList';

export type PaginatedAuthorListList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<AuthorList>;
};
