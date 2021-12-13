/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseContent } from './BaseContent';
import type { BlogItemBase } from './BlogItemBase';
import type { Role } from './Role';

/**
 * Adds "contents" field to any serializer.
 */
export type BlogItemDetailed = {
    readonly id: number;
    title: string;
    description: string;
    image?: string;
    author_url: string;
    author_url_title: string;
    pub_date?: string;
    readonly contents: Array<BaseContent>;
    readonly team: Array<Role>;
    readonly other_blogs: Array<BlogItemBase>;
}
