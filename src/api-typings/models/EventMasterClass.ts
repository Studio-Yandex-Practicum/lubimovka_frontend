/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Role } from './Role';

/**
 * Master-class serializer for afisha page.
 */
export type EventMasterClass = {
    readonly id: number;
    name: string;
    description: string;
    team: Array<Role>;
    readonly project_title: string;
};
