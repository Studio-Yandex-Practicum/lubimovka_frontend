/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Role } from './Role';

/**
 * Base event info for afisha and content blocks.
 */
export type BaseEvent = {
    readonly id: number;
    readonly title: string;
    readonly type: string;
    readonly description: string;
    readonly image: string;
    date_time?: string | null;
    location?: string | null;
    readonly performance_id: number | null;
    team: Array<Role>;
};
