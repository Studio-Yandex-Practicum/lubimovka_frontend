/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Serializer for performance__events,using only for PerformanceSerializer.
 */
export type LocalEvent = {
    readonly id: number;
    date_time?: string | null;
    action_url?: string | null;
    action_text: string;
};
