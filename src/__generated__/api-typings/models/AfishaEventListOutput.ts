/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Role } from './Role';

/**
 * Afisha event Output serializer.
 */
export type AfishaEventListOutput = {
    readonly id: number;
    readonly title: string;
    readonly type: string;
    readonly description: string;
    readonly image: string;
    date_time: string;
    location?: string | null;
    readonly action_url: string | null;
    readonly action_text: string | null;
    opening_date_time: string;
    readonly performance_id: number | null;
    team: Array<Role>;
};