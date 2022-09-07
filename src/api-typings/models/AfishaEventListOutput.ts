/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { event_type } from './event_type';
import type { Event_Type_objects } from './Event_Type_objects';

/**
 * Afisha event Output serializer.
 */
export type AfishaEventListOutput = {
    readonly id: number;
    /**
     * Выберите тип события
     */
    type: event_type;
    /**
     * The response is different based on event type.
     */
    readonly event_body: Event_Type_objects;
    date_time: string;
    paid?: boolean;
    url: string;
};
