/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseContent } from './BaseContent';

/**
 * Adds "contents" field to any serializer.
 */
export type BlogItem = {
    readonly id: number;
    title: string;
    description: string;
    image?: string;
    author_url: string;
    author_url_title: string;
    readonly contents: Array<BaseContent>;
    readonly created: string;
    readonly modified: string;
}
