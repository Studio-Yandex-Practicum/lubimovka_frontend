/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EventPerformance } from './EventPerformance';
import type { TypeA7fEnum } from './TypeA7fEnum';

/**
 * Returns Performance in EventsBlock.
 */
export type EventInBlock = {
    readonly id: number;
    type: TypeA7fEnum;
    event_body: EventPerformance;
    date_time: string;
    paid?: boolean;
    url: string;
}