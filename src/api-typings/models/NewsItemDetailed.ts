/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseContent } from './BaseContent';
import type { NewsItemList } from './NewsItemList';

/**
 * Add `contents` field to any serializer.
 */
export type NewsItemDetailed = {
    readonly id: number;
    title: string;
    description: string;
    image?: string;
    pub_date: string;
    readonly contents: Array<BaseContent>;
    readonly other_news: Array<NewsItemList>;
};
