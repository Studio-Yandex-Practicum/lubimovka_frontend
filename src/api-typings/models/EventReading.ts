/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Role } from './Role';

/**
 * Reading serializer for afisha page.
 */
export type EventReading = {
    readonly id: number;
    name: string;
    description: string;
    team: Array<Role>;
    readonly project_title: string;
}