/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Serializer for performance__events,using only for PerformanceSerializer.
 */
export type LocalEvent = {
    readonly id: number;
    date_time: string;
    paid?: boolean;
    url: string;
    place: string;
    pinned_on_main?: boolean;
};
