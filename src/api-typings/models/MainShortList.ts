/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Play } from './Play';

/**
 * Returns title and items for `short_list` block on main page.
 *
 * items: returns 4 last `Play` objects that have program="short_list" from
 * the last festival.
 */
export type MainShortList = {
    title: string;
    items: Array<Play>;
}