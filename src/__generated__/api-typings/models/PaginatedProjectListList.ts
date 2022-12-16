/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectList } from './ProjectList';

export type PaginatedProjectListList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<ProjectList>;
};
