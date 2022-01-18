/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PerformanceMediaReview } from './PerformanceMediaReview';

export type PaginatedPerformanceMediaReviewList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<PerformanceMediaReview>;
}
