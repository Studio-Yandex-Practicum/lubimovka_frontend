/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseContent } from './BaseContent';
import type { BlogItemList } from './BlogItemList';
import type { BlogItemRole } from './BlogItemRole';

/**
 * Adds "contents" field to any serializer.
 */
export type BlogItemDetailOutput = {
    readonly id: number;
    title: string;
    description: string;
    image: string;
    author_url: string;
    author_url_title: string;
    pub_date: string;
    readonly contents: Array<BaseContent>;
    team: Array<BlogItemRole>;
    other_blogs: Array<BlogItemList>;
}