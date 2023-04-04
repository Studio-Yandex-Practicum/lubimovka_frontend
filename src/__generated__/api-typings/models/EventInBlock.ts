/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Event } from './Event';
import type { event_type } from './event_type';

/**
 * Returns Performance in EventsBlock.
 */
export type EventInBlock = {
    readonly id: number;
    /**
     * Выберите тип события
     */
    type: event_type;
    event_body: Event;
    date_time?: string | null;
    action_url?: string | null;
    action_text: string;
};
