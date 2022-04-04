/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Role } from './Role';

/**
 * Performance serializer for afisha page.
 */
export type EventPerformance = {
    readonly id: number;
    name: string;
    description: string;
    team: Array<Role>;
    image: string;
    readonly project_title: string;
};