/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseContent } from './BaseContent';

/**
 * Adds "contents" field to any serializer.
 */
export type NewsItem = {
    readonly id: number;
    title: string;
    description: string;
    image?: string | null;
    pub_date?: string;
    readonly contents: Array<BaseContent>;
    readonly created: string;
    readonly modified: string;
}