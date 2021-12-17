/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EventTypeEnum } from './EventTypeEnum';
import { event_body } from 'components/main-page/events';

export type Event = {
    readonly id: number;
    type: EventTypeEnum;
    event_body: event_body;
    date_time: string;
    paid?: boolean;
    url: string;
    place: string;
}