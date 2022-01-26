/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Play } from './Play';

export type PaginatedPlayList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<Play>;
}