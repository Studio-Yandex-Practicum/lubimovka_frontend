/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PerformanceReview } from './PerformanceReview';

export type PaginatedPerformanceReviewList = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Array<PerformanceReview>;
}
