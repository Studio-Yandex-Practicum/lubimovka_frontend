/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Role } from './Role';

/**
 * Event content serializer for afisha page.
 */
export type Event = {
    id: number;
    name: string;
    description: string;
    team: Array<Role>;
    image?: string | null;
    readonly project_title: string;
};
