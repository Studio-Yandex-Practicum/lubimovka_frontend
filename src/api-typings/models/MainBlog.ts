/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BlogItemList } from './BlogItemList';

/**
 * Returns title and items for `blog` block on main page.
 *
 * items: returns 6 last published `NewsItem` objects.
 */
export type MainBlog = {
    title: string;
    items: Array<BlogItemList>;
}
