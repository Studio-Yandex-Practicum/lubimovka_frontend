/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BlankEnum } from './BlankEnum';
import type { EventTypeEnum } from './EventTypeEnum';

export type Event = {
    readonly id: number;
    type?: (EventTypeEnum | BlankEnum);
    readonly event_body: string;
    date_time: string;
    paid?: boolean;
    url: string;
    place: string;
}
