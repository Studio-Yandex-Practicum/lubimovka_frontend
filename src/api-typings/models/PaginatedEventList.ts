/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Event } from './Event';

export type PaginatedEventList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<Event>;
}