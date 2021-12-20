/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NewsItemList } from './NewsItemList';

/**
 * Returns title and items for `news` block on main page.
 *
 * items: returns 6 last published `BlogItem` objects.
 */
export type MainNews = {
    title: string;
    items: Array<NewsItemList>;
}
