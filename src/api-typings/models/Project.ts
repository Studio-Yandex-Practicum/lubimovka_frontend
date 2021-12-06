/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseContent } from './BaseContent';

/**
 * Adds "contents" field to any serializer.
 */
export type Project = {
    readonly id: number;
    title: string;
    description: string;
    image: string;
    readonly contents: Array<BaseContent>;
    readonly created: string;
    readonly modified: string;
}
