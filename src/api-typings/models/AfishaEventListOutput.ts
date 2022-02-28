/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BlankEnum } from './BlankEnum';
import type { Event_Type_objects } from './Event_Type_objects';
import type { TypeA7fEnum } from './TypeA7fEnum';

/**
 * Afisha event Output serializer.
 */
export type AfishaEventListOutput = {
    readonly id: number;
    type?: (TypeA7fEnum | BlankEnum);
    /**
     * The response is different based on event type.
     */
    readonly event_body: Event_Type_objects;
    date_time: string;
    paid?: boolean;
    url: string;
    place: string;
}