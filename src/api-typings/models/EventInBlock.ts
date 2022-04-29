/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { event_type } from './event_type';
import type { EventPerformance } from './EventPerformance';

/**
 * Returns Performance in EventsBlock.
 */
export type EventInBlock = {
    readonly id: number;
    /**
     * Выберите тип события
     */
    type: event_type;
    event_body: EventPerformance;
    date_time: string;
    paid?: boolean;
    url: string;
};
